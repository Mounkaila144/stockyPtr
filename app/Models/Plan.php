<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Plan extends Model
{
    protected $connection = 'central';

    protected $fillable = [
        'name', 'slug', 'price', 'billing_cycle', 'max_users',
        'max_warehouses', 'max_products', 'features', 'is_active',
    ];

    protected $casts = [
        'price' => 'integer',
        'max_users' => 'integer',
        'max_warehouses' => 'integer',
        'max_products' => 'integer',
        'features' => 'array',
        'is_active' => 'boolean',
    ];

    public function tenants()
    {
        return $this->hasMany(Tenant::class);
    }
}
