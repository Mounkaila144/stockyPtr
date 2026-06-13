<?php

namespace App\Services;

use App\Models\Tenant;
use App\Models\Plan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\utils\TenantStorage;

class TenantService
{
    /**
     * Creer un nouveau tenant et provisionner sa base de donnees.
     */
    public function createTenant(array $data): Tenant
    {
        $tenant = Tenant::create([
            'name' => $data['name'],
            'slug' => Str::slug($data['slug']),
            'database' => 'stocky_tenant_' . Str::slug($data['slug'], '_'),
            'plan_id' => $data['plan_id'],
            'status' => 'trial',
            'trial_ends_at' => now()->addDays(14),
            'admin_email' => $data['admin_email'],
            'admin_name' => $data['admin_name'],
            'admin_phone' => $data['admin_phone'] ?? '',
        ]);

        $this->provisionDatabase($tenant, $data['admin_password'] ?? 'password');

        // Create tenant-specific image directories
        TenantStorage::ensureDirectories($tenant->slug);

        return $tenant;
    }

    /**
     * Provisionner la base de donnees d'un tenant.
     */
    public function provisionDatabase(Tenant $tenant, string $adminPassword = 'password'): void
    {
        // 1. Creer la base de donnees
        DB::connection('central')->statement("CREATE DATABASE IF NOT EXISTS `{$tenant->database}` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");

        // 2. Configurer la connexion tenant
        $this->configureTenantConnection($tenant);

        // 3. Importer le schema SQL (rapide, ~1s au lieu de ~46s avec les migrations)
        $schemaPath = database_path('tenant_schema.sql');
        $dbConfig = Config::get('database.connections.tenant');
        $command = sprintf(
            'mysql -u %s -p%s -h %s -P %s %s < %s 2>&1',
            escapeshellarg($dbConfig['username']),
            escapeshellarg($dbConfig['password']),
            escapeshellarg($dbConfig['host']),
            escapeshellarg($dbConfig['port'] ?? '3306'),
            escapeshellarg($tenant->database),
            escapeshellarg($schemaPath)
        );
        $output = shell_exec($command);
        if ($output) {
            \Log::warning('Schema import output: ' . $output);
        }

        // 4. Seeder les donnees de base
        $this->seedTenantData($tenant, $adminPassword);

        // 5. Installer Passport pour ce tenant
        $this->installPassport();
    }

    /**
     * Configurer la connexion vers la DB du tenant.
     */
    public function configureTenantConnection(Tenant $tenant): void
    {
        Config::set('database.connections.tenant.database', $tenant->database);
        DB::purge('tenant');
        DB::reconnect('tenant');
        Config::set('database.default', 'tenant');
    }

    /**
     * Seeder les donnees essentielles du tenant.
     */
    private function seedTenantData(Tenant $tenant, string $adminPassword): void
    {
        $connection = DB::connection('tenant');

        // Clients par defaut
        $connection->table('clients')->insert([
            'name' => 'Walk-in Customer',
            'code' => 'C-0001',
            'phone' => '0000000000',
            'email' => 'walkin@example.com',
            'country' => 'Niger',
            'city' => 'Niamey',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Devise par defaut
        $connection->table('currencies')->insert([
            'code' => 'XOF',
            'name' => 'Franc CFA',
            'symbol' => 'FCFA',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Serveur mail par defaut
        $connection->table('servers')->insert([
            'host' => '',
            'port' => '',
            'username' => '',
            'password' => '',
            'encryption' => '',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Entrepot par defaut (avant settings car FK warehouse_id)
        $connection->table('warehouses')->insert([
            'name' => 'Entrepot Principal',
            'city' => 'Niamey',
            'mobile' => '',
            'zip' => '',
            'email' => $tenant->admin_email,
            'country' => 'Niger',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Settings par defaut (apres clients, currencies, warehouses)
        $connection->table('settings')->insert([
            'currency_id' => 1,
            'email' => $tenant->admin_email,
            'CompanyName' => $tenant->name,
            'CompanyPhone' => '',
            'CompanyAdress' => '',
            'footer' => $tenant->name,
            'developed_by' => 'PTR Niger',
            'client_id' => 1,
            'warehouse_id' => 1,
            'default_language' => 'fr',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // POS Settings par defaut
        $connection->table('pos_settings')->insert([
            'note_customer' => 'Thank You For Shopping With Us . Please Come Again',
            'show_note' => 1,
            'show_barcode' => 1,
            'show_discount' => 1,
            'show_customer' => 1,
            'show_email' => 1,
            'show_phone' => 1,
            'show_address' => 1,
            'products_per_page' => 8,
            'is_printable' => 1,
            'show_Warehouse' => 1,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Methodes de paiement par defaut
        $paymentMethods = [
            'Credit Card', 'Cash', 'Cheque', 'TPE',
            'Western Union', 'bank transfer', 'other',
        ];
        foreach ($paymentMethods as $method) {
            $connection->table('payment_methods')->insert([
                'name' => $method,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        // Permissions - must match PermissionsSeeder names (used by Vue.js sidebar)
        $permissions = [
            // Always allowed
            'dashboard', 'record_view',
            // Users
            'users_view', 'users_add', 'users_edit', 'users_delete',
            // Permissions/Roles
            'permissions_view', 'permissions_add', 'permissions_edit', 'permissions_delete',
            // Products
            'products_view', 'products_add', 'products_edit', 'products_delete',
            'product_import', 'opening_stock_import', 'barcode_view',
            'brand', 'unit', 'count_stock', 'category',
            // Adjustments
            'adjustment_view', 'adjustment_add', 'adjustment_edit', 'adjustment_delete',
            // Transfers
            'transfer_view', 'transfer_add', 'transfer_edit', 'transfer_delete',
            // Sales
            'Sales_view', 'Sales_add', 'Sales_edit', 'Sales_delete',
            'payment_sales_view', 'payment_sales_add', 'payment_sales_edit', 'payment_sales_delete',
            'edit_product_sale', 'edit_tax_discount_shipping_sale',
            'shipment', 'pay_due',
            // Purchases
            'Purchases_view', 'Purchases_add', 'Purchases_edit', 'Purchases_delete',
            'payment_purchases_view', 'payment_purchases_add', 'payment_purchases_edit', 'payment_purchases_delete',
            'edit_product_purchase', 'edit_tax_discount_shipping_purchase',
            'pay_supplier_due',
            // Quotations
            'Quotations_view', 'Quotations_add', 'Quotations_edit', 'Quotations_delete',
            'edit_product_quotation', 'edit_tax_discount_shipping_quotation',
            // Sale Returns
            'Sale_Returns_view', 'Sale_Returns_add', 'Sale_Returns_edit', 'Sale_Returns_delete',
            'payment_returns_view', 'payment_returns_add', 'payment_returns_edit', 'payment_returns_delete',
            'pay_sale_return_due',
            // Purchase Returns
            'Purchase_Returns_view', 'Purchase_Returns_add', 'Purchase_Returns_edit', 'Purchase_Returns_delete',
            'pay_purchase_return_due',
            // POS
            'Pos_view',
            // People
            'Customers_view', 'Customers_add', 'Customers_edit', 'Customers_delete', 'customers_import',
            'Suppliers_view', 'Suppliers_add', 'Suppliers_edit', 'Suppliers_delete', 'Suppliers_import',
            // Accounting
            'expense_view', 'expense_add', 'expense_edit', 'expense_delete',
            'deposit_view', 'deposit_add', 'deposit_edit', 'deposit_delete',
            'account', 'transfer_money',
            // Settings
            'setting_system', 'sms_settings', 'pos_settings',
            'warehouse', 'backup', 'currency',
            'payment_gateway', 'mail_settings', 'module_settings',
            'notification_template', 'appearance_settings', 'translations_settings',
            'payment_methods',
            // Reports
            'Warehouse_report', 'Reports_quantity_alerts', 'Reports_profit',
            'Reports_suppliers', 'Reports_customers', 'Reports_purchase', 'Reports_sales',
            'Reports_payments_purchase_Return', 'Reports_payments_Sale_Returns',
            'Reports_payments_Purchases', 'Reports_payments_Sales',
            'Top_products', 'Top_customers', 'users_report', 'stock_report',
            'product_report', 'product_sales_report', 'product_purchases_report',
            'inventory_valuation', 'expenses_report', 'deposits_report',
            'report_error_logs', 'report_transactions',
            'report_sales_by_category', 'report_sales_by_brand',
            // HRM
            'company', 'department', 'designation', 'office_shift',
            'view_employee', 'add_employee', 'edit_employee', 'delete_employee',
            'attendance', 'leave', 'holiday', 'payroll',
            // Misc
            'projects', 'tasks', 'subscription_product',
        ];

        foreach ($permissions as $perm) {
            $connection->table('permissions')->insert([
                'name' => $perm,
                'label' => ucwords(str_replace('_', ' ', $perm)),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        // Role Owner/Admin
        $roleId = $connection->table('roles')->insertGetId([
            'name' => 'Owner',
            'label' => 'Owner',
            'description' => 'Proprietaire du compte',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Assigner toutes les permissions au role Owner
        $allPermIds = $connection->table('permissions')->pluck('id');
        foreach ($allPermIds as $permId) {
            $connection->table('permission_role')->insert([
                'permission_id' => $permId,
                'role_id' => $roleId,
            ]);
        }

        // Creer l'utilisateur admin
        $userId = $connection->table('users')->insertGetId([
            'firstname' => explode(' ', $tenant->admin_name)[0],
            'lastname' => count(explode(' ', $tenant->admin_name)) > 1 ? explode(' ', $tenant->admin_name, 2)[1] : '',
            'username' => Str::slug($tenant->admin_name, '_'),
            'email' => $tenant->admin_email,
            'password' => Hash::make($adminPassword),
            'phone' => $tenant->admin_phone ?? '',
            'statut' => 1,
            'role_id' => $roleId,
            'is_all_warehouses' => 1,
            'avatar' => 'no_avatar.png',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Associer user au role
        $connection->table('role_user')->insert([
            'user_id' => $userId,
            'role_id' => $roleId,
        ]);

        // Langues par defaut
        $languages = [
            ['name' => 'English',    'locale' => 'en',    'flag' => 'gb.svg', 'is_default' => false],
            ['name' => 'Français',   'locale' => 'fr',    'flag' => 'fr.svg', 'is_default' => true],
            ['name' => 'العربية',    'locale' => 'ar',    'flag' => 'sa.svg', 'is_default' => false],
            ['name' => 'Türkçe',     'locale' => 'tur',   'flag' => 'tr.svg', 'is_default' => false],
            ['name' => 'Deutsch',    'locale' => 'de',    'flag' => 'de.svg', 'is_default' => false],
            ['name' => 'Español',    'locale' => 'es',    'flag' => 'es.svg', 'is_default' => false],
            ['name' => 'Italiano',   'locale' => 'it',    'flag' => 'it.svg', 'is_default' => false],
            ['name' => 'Português',  'locale' => 'br',    'flag' => 'pt.svg', 'is_default' => false],
            ['name' => '简体中文',    'locale' => 'sm_ch', 'flag' => 'cn.svg', 'is_default' => false],
            ['name' => '繁體中文',    'locale' => 'tr_ch', 'flag' => 'cn.svg', 'is_default' => false],
            ['name' => 'ไทย',        'locale' => 'thai',  'flag' => 'th.svg', 'is_default' => false],
            ['name' => 'हिन्दी',     'locale' => 'hn',    'flag' => 'in.svg', 'is_default' => false],
            ['name' => '한국어',      'locale' => 'kr',    'flag' => 'kr.svg', 'is_default' => false],
            ['name' => '日本語',      'locale' => 'ja',    'flag' => 'jp.svg', 'is_default' => false],
            ['name' => 'Tiếng Việt', 'locale' => 'vn',    'flag' => 'vn.svg', 'is_default' => false],
            ['name' => 'Русский',    'locale' => 'ru',    'flag' => 'ru.svg', 'is_default' => false],
            ['name' => 'Dansk',      'locale' => 'da',    'flag' => 'dk.svg', 'is_default' => false],
            ['name' => 'Polski',     'locale' => 'pl',    'flag' => 'pl.svg', 'is_default' => false],
            ['name' => 'বাংলা',      'locale' => 'ba',    'flag' => 'bd.svg', 'is_default' => false],
            ['name' => 'Bahasa',     'locale' => 'Ind',   'flag' => 'id.svg', 'is_default' => false],
            ['name' => 'Kiswahili',  'locale' => 'ke',    'flag' => 'ke.svg', 'is_default' => false],
            ['name' => 'አማርኛ',      'locale' => 'et',    'flag' => 'et.svg', 'is_default' => false],
            ['name' => 'Hausa',      'locale' => 'ha',    'flag' => 'ng.svg', 'is_default' => false],
            ['name' => 'Yorùbá',     'locale' => 'yo',    'flag' => 'ng.svg', 'is_default' => false],
        ];

        foreach ($languages as $lang) {
            $connection->table('languages')->insert([
                'name' => $lang['name'],
                'locale' => $lang['locale'],
                'flag' => $lang['flag'],
                'is_active' => true,
                'is_default' => $lang['is_default'],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        // Traductions par defaut
        $this->seedTenantTranslations($connection);
    }

    /**
     * Seeder les traductions pour un tenant.
     */
    private function seedTenantTranslations($connection): void
    {
        $path = database_path('seeders/translations');
        if (!is_dir($path)) {
            return;
        }

        $files = glob($path . '/*.php');
        foreach ($files as $file) {
            $locale = pathinfo($file, PATHINFO_FILENAME);
            $translations = require $file;

            // Dedupliquer les cles (collation MySQL case-insensitive)
            $seen = [];
            $rows = [];
            foreach ($translations as $key => $value) {
                $lowerKey = strtolower($key);
                if (isset($seen[$lowerKey])) {
                    continue;
                }
                $seen[$lowerKey] = true;
                $rows[] = [
                    'locale' => $locale,
                    'key' => $key,
                    'value' => $value,
                    'is_default' => $locale === 'en' ? 1 : 0,
                    'created_at' => now(),
                    'updated_at' => now(),
                ];
            }

            // insertOrIgnore pour eviter les erreurs de doublons
            foreach (array_chunk($rows, 500) as $chunk) {
                $connection->table('translations')->insertOrIgnore($chunk);
            }
        }
    }

    /**
     * Installer Passport pour le tenant.
     */
    private function installPassport(): void
    {
        try {
            Artisan::call('passport:install', [
                '--force' => true,
            ]);
        } catch (\Exception $e) {
            \Log::warning('Passport install failed, retrying: ' . $e->getMessage());
            // Retry once after purging connection
            try {
                DB::purge('tenant');
                DB::reconnect('tenant');
                Artisan::call('passport:install', [
                    '--force' => true,
                ]);
            } catch (\Exception $e2) {
                \Log::error('Passport install failed after retry: ' . $e2->getMessage());
            }
        }

        // Verifier que l'installation a reussi
        $count = DB::connection('tenant')->table('oauth_clients')->count();
        if ($count === 0) {
            \Log::error('Passport install completed but no oauth_clients were created!');
        }
    }

    /**
     * Desactiver un tenant.
     */
    public function deactivateTenant(Tenant $tenant): void
    {
        $tenant->update(['status' => 'inactive']);
    }

    /**
     * Activer un tenant.
     */
    public function activateTenant(Tenant $tenant): void
    {
        $tenant->update(['status' => 'active']);
    }

    /**
     * Supprimer un tenant (soft - desactive seulement).
     */
    public function deleteTenant(Tenant $tenant): void
    {
        $this->deactivateTenant($tenant);
    }
}
