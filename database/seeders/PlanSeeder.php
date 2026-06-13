<?php

use Illuminate\Database\Seeder;
use App\Models\Plan;

// Note: pas de namespace car le projet utilise l'ancien format de seeders

class PlanSeeder extends Seeder
{
    public function run()
    {
        Plan::create([
            'name' => 'Basic',
            'slug' => 'basic',
            'price' => 30000,
            'billing_cycle' => 'monthly',
            'max_users' => 5,
            'max_warehouses' => 3,
            'max_products' => 500,
            'features' => [
                'products', 'sales', 'purchases', 'pos', 'people', 'settings',
            ],
            'is_active' => true,
        ]);

        Plan::create([
            'name' => 'Medium',
            'slug' => 'medium',
            'price' => 70000,
            'billing_cycle' => 'monthly',
            'max_users' => 15,
            'max_warehouses' => 10,
            'max_products' => 0, // illimite
            'features' => [
                'products', 'stock_adjustment', 'stock_transfer',
                'sales', 'purchases', 'pos', 'quotations',
                'sales_return', 'purchase_return',
                'accounting', 'people', 'reports', 'settings',
            ],
            'is_active' => true,
        ]);

        Plan::create([
            'name' => 'Premium',
            'slug' => 'premium',
            'price' => 200000,
            'billing_cycle' => 'monthly',
            'max_users' => 0, // illimite
            'max_warehouses' => 0, // illimite
            'max_products' => 0, // illimite
            'features' => [
                'products', 'stock_adjustment', 'stock_transfer',
                'sales', 'purchases', 'pos', 'quotations',
                'sales_return', 'purchase_return',
                'accounting', 'people', 'hrm', 'reports', 'settings',
            ],
            'is_active' => true,
        ]);
    }
}
