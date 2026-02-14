<?php

namespace App\Services;

use App\Models\Tenant;
use App\Models\Plan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

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
        ]);

        $this->provisionDatabase($tenant, $data['admin_password'] ?? 'password');

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

        // 3. Lancer les migrations
        Artisan::call('migrate', [
            '--database' => 'tenant',
            '--path' => 'database/migrations',
            '--force' => true,
        ]);

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

        // Permissions
        $permissions = [
            'products_view', 'products_add', 'products_edit', 'products_delete',
            'sales_view', 'sales_add', 'sales_edit', 'sales_delete',
            'purchases_view', 'purchases_add', 'purchases_edit', 'purchases_delete',
            'quotations_view', 'quotations_add', 'quotations_edit', 'quotations_delete',
            'sale_returns_view', 'sale_returns_add', 'sale_returns_edit', 'sale_returns_delete',
            'purchase_returns_view', 'purchase_returns_add', 'purchase_returns_edit', 'purchase_returns_delete',
            'transfers_view', 'transfers_add', 'transfers_edit', 'transfers_delete',
            'adjustments_view', 'adjustments_add', 'adjustments_edit', 'adjustments_delete',
            'clients_view', 'clients_add', 'clients_edit', 'clients_delete',
            'suppliers_view', 'suppliers_add', 'suppliers_edit', 'suppliers_delete',
            'users_view', 'users_add', 'users_edit', 'users_delete',
            'settings_edit', 'reports_view', 'payment_sales_view', 'payment_sales_add',
            'payment_sales_edit', 'payment_sales_delete',
            'payment_purchases_view', 'payment_purchases_add', 'payment_purchases_edit', 'payment_purchases_delete',
            'payment_returns_view', 'payment_returns_add', 'payment_returns_edit', 'payment_returns_delete',
            'warehouses_view', 'warehouses_add', 'warehouses_edit', 'warehouses_delete',
            'categories_view', 'categories_add', 'categories_edit', 'categories_delete',
            'brands_view', 'brands_add', 'brands_edit', 'brands_delete',
            'units_view', 'units_add', 'units_edit', 'units_delete',
            'currencies_view', 'currencies_add', 'currencies_edit', 'currencies_delete',
            'roles_view', 'roles_add', 'roles_edit', 'roles_delete',
            'pos_view', 'expenses_view', 'expenses_add', 'expenses_edit', 'expenses_delete',
            'expense_categories_view', 'expense_categories_add', 'expense_categories_edit', 'expense_categories_delete',
            'payment_methods_view', 'payment_methods_add', 'payment_methods_edit', 'payment_methods_delete',
            'shipment_view', 'shipment_add', 'shipment_edit', 'shipment_delete',
            'accounts_view', 'accounts_add', 'accounts_edit', 'accounts_delete',
            'deposits_view', 'deposits_add', 'deposits_edit', 'deposits_delete',
            'deposit_categories_view', 'deposit_categories_add', 'deposit_categories_edit', 'deposit_categories_delete',
            'transfer_money_view', 'transfer_money_add', 'transfer_money_edit', 'transfer_money_delete',
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
            'phone' => '',
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
            // Log l'erreur mais ne pas bloquer le provisionnement
            \Log::warning('Passport install failed for tenant: ' . $e->getMessage());
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
