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
                'pos' => true,
                'sales' => true,
                'purchases' => true,
                'basic_reports' => true,
                'accounting' => false,
                'hrm' => false,
                'sms_notifications' => false,
                'quotations' => false,
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
                'pos' => true,
                'sales' => true,
                'purchases' => true,
                'basic_reports' => true,
                'accounting' => true,
                'hrm' => false,
                'sms_notifications' => true,
                'quotations' => true,
                'returns' => true,
                'multi_currency' => true,
                'barcode_printing' => true,
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
                'pos' => true,
                'sales' => true,
                'purchases' => true,
                'basic_reports' => true,
                'advanced_reports' => true,
                'accounting' => true,
                'hrm' => true,
                'sms_notifications' => true,
                'quotations' => true,
                'returns' => true,
                'multi_currency' => true,
                'barcode_printing' => true,
                'projects' => true,
                'subscriptions' => true,
                'auto_backups' => true,
                'priority_support' => true,
            ],
            'is_active' => true,
        ]);
    }
}
