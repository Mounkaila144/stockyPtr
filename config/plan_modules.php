<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Plan Modules → Permissions Mapping
    |--------------------------------------------------------------------------
    |
    | Each module key maps to an array of permission names.
    | Includes both central DB naming (Sales_view) and tenant DB naming
    | (sales_view) conventions to support all tenant databases.
    |
    */

    'modules' => [

        'products' => [
            'label' => 'Produits',
            'description' => 'Gestion des produits, codes-barres, marques, unites, categories, inventaire',
            'permissions' => [
                'products_add', 'products_view', 'products_edit', 'products_delete',
                'product_import', 'opening_stock_import',
                'barcode_view', 'brand', 'unit', 'count_stock', 'category',
                // Tenant DB variants
                'categories_view', 'categories_add', 'categories_edit', 'categories_delete',
                'brands_view', 'brands_add', 'brands_edit', 'brands_delete',
                'units_view', 'units_add', 'units_edit', 'units_delete',
            ],
        ],

        'stock_adjustment' => [
            'label' => 'Ajustement de stock',
            'description' => 'Ajustements d\'inventaire',
            'permissions' => [
                'adjustment_view', 'adjustment_add', 'adjustment_edit', 'adjustment_delete',
                // Tenant DB variants
                'adjustments_view', 'adjustments_add', 'adjustments_edit', 'adjustments_delete',
            ],
        ],

        'stock_transfer' => [
            'label' => 'Transfert de stock',
            'description' => 'Transferts entre entrepots',
            'permissions' => [
                'transfer_view', 'transfer_add', 'transfer_edit', 'transfer_delete',
                // Tenant DB variants
                'transfers_view', 'transfers_add', 'transfers_edit', 'transfers_delete',
            ],
        ],

        'purchases' => [
            'label' => 'Achats',
            'description' => 'Gestion des achats et paiements fournisseurs',
            'permissions' => [
                'Purchases_view', 'Purchases_add', 'Purchases_edit', 'Purchases_delete',
                'payment_purchases_view', 'payment_purchases_add', 'payment_purchases_edit', 'payment_purchases_delete',
                'edit_product_purchase', 'edit_tax_discount_shipping_purchase',
                'pay_supplier_due',
                // Tenant DB variants
                'purchases_view', 'purchases_add', 'purchases_edit', 'purchases_delete',
            ],
        ],

        'sales' => [
            'label' => 'Ventes',
            'description' => 'Gestion des ventes, paiements clients et expeditions',
            'permissions' => [
                'Sales_view', 'Sales_add', 'Sales_edit', 'Sales_delete',
                'payment_sales_view', 'payment_sales_add', 'payment_sales_edit', 'payment_sales_delete',
                'edit_product_sale', 'edit_tax_discount_shipping_sale',
                'shipment', 'pay_due',
                // Tenant DB variants
                'sales_view', 'sales_add', 'sales_edit', 'sales_delete',
                'shipment_view', 'shipment_add', 'shipment_edit', 'shipment_delete',
            ],
        ],

        'pos' => [
            'label' => 'Point de Vente (POS)',
            'description' => 'Interface de caisse',
            'permissions' => [
                'Pos_view',
                // Tenant DB variants
                'pos_view',
            ],
        ],

        'quotations' => [
            'label' => 'Devis',
            'description' => 'Gestion des devis',
            'permissions' => [
                'Quotations_view', 'Quotations_add', 'Quotations_edit', 'Quotations_delete',
                'edit_product_quotation', 'edit_tax_discount_shipping_quotation',
                // Tenant DB variants
                'quotations_view', 'quotations_add', 'quotations_edit', 'quotations_delete',
            ],
        ],

        'sales_return' => [
            'label' => 'Retours de vente',
            'description' => 'Gestion des retours clients et remboursements',
            'permissions' => [
                'Sale_Returns_view', 'Sale_Returns_add', 'Sale_Returns_edit', 'Sale_Returns_delete',
                'payment_returns_view', 'payment_returns_add', 'payment_returns_edit', 'payment_returns_delete',
                'pay_sale_return_due',
                // Tenant DB variants
                'sale_returns_view', 'sale_returns_add', 'sale_returns_edit', 'sale_returns_delete',
            ],
        ],

        'purchase_return' => [
            'label' => 'Retours d\'achat',
            'description' => 'Gestion des retours fournisseurs',
            'permissions' => [
                'Purchase_Returns_view', 'Purchase_Returns_add', 'Purchase_Returns_edit', 'Purchase_Returns_delete',
                'pay_purchase_return_due',
                // Tenant DB variants
                'purchase_returns_view', 'purchase_returns_add', 'purchase_returns_edit', 'purchase_returns_delete',
            ],
        ],

        'accounting' => [
            'label' => 'Comptabilite',
            'description' => 'Depenses, depots, comptes, virements',
            'permissions' => [
                'expense_add', 'expense_delete', 'expense_edit', 'expense_view',
                'deposit_add', 'deposit_delete', 'deposit_edit', 'deposit_view',
                'account', 'transfer_money',
                // Tenant DB variants
                'expenses_view', 'expenses_add', 'expenses_edit', 'expenses_delete',
                'expense_categories_view', 'expense_categories_add', 'expense_categories_edit', 'expense_categories_delete',
                'deposits_view', 'deposits_add', 'deposits_edit', 'deposits_delete',
                'deposit_categories_view', 'deposit_categories_add', 'deposit_categories_edit', 'deposit_categories_delete',
                'accounts_view', 'accounts_add', 'accounts_edit', 'accounts_delete',
                'transfer_money_view', 'transfer_money_add', 'transfer_money_edit', 'transfer_money_delete',
            ],
        ],

        'people' => [
            'label' => 'Personnes',
            'description' => 'Clients, fournisseurs, utilisateurs',
            'permissions' => [
                'Customers_view', 'Customers_add', 'Customers_edit', 'Customers_delete', 'customers_import',
                'Suppliers_view', 'Suppliers_add', 'Suppliers_edit', 'Suppliers_delete', 'Suppliers_import',
                'users_view', 'users_add', 'users_edit', 'users_delete',
                // Tenant DB variants
                'clients_view', 'clients_add', 'clients_edit', 'clients_delete',
                'suppliers_view', 'suppliers_add', 'suppliers_edit', 'suppliers_delete',
            ],
        ],

        'hrm' => [
            'label' => 'Ressources Humaines',
            'description' => 'Employes, presences, conges, paie',
            'permissions' => [
                'company', 'department', 'designation', 'office_shift',
                'view_employee', 'add_employee', 'edit_employee', 'delete_employee',
                'attendance', 'leave', 'holiday', 'payroll',
            ],
        ],

        'reports' => [
            'label' => 'Rapports',
            'description' => 'Tous les rapports et analyses',
            'permissions' => [
                'Warehouse_report', 'Reports_quantity_alerts', 'Reports_profit',
                'Reports_suppliers', 'Reports_customers',
                'Reports_purchase', 'Reports_sales',
                'Reports_payments_purchase_Return', 'Reports_payments_Sale_Returns',
                'Reports_payments_Purchases', 'Reports_payments_Sales',
                'Top_products', 'Top_customers',
                'users_report', 'stock_report', 'product_report',
                'product_sales_report', 'product_purchases_report',
                'inventory_valuation', 'expenses_report', 'deposits_report',
                'report_error_logs', 'report_transactions',
                'report_sales_by_category', 'report_sales_by_brand',
                // Tenant DB variants
                'reports_view',
            ],
        ],

        'settings' => [
            'label' => 'Parametres',
            'description' => 'Configuration systeme, SMS, POS, entrepots, devises, permissions, etc.',
            'permissions' => [
                'setting_system', 'sms_settings', 'pos_settings',
                'warehouse', 'backup', 'currency',
                'permissions_view', 'permissions_add', 'permissions_edit', 'permissions_delete',
                'payment_gateway', 'mail_settings', 'module_settings',
                'notification_template', 'appearance_settings', 'translations_settings',
                'payment_methods',
                // Tenant DB variants
                'settings_edit',
                'roles_view', 'roles_add', 'roles_edit', 'roles_delete',
                'warehouses_view', 'warehouses_add', 'warehouses_edit', 'warehouses_delete',
                'currencies_view', 'currencies_add', 'currencies_edit', 'currencies_delete',
                'payment_methods_view', 'payment_methods_add', 'payment_methods_edit', 'payment_methods_delete',
            ],
        ],

    ],

    /*
    |--------------------------------------------------------------------------
    | Always Allowed Permissions
    |--------------------------------------------------------------------------
    |
    | These permissions are never filtered, regardless of the plan.
    |
    */

    'always_allowed' => [
        'dashboard', 'record_view',
        'projects', 'tasks', 'subscription_product',
    ],

];
