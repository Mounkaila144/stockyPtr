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
        'is_active' => 'boolean',
    ];

    public function getFeaturesAttribute($value)
    {
        $decoded = is_string($value) ? json_decode($value, true) : $value;

        // Handle double-encoded JSON
        if (is_string($decoded)) {
            $decoded = json_decode($decoded, true);
        }

        return is_array($decoded) ? $decoded : [];
    }

    public function setFeaturesAttribute($value)
    {
        $this->attributes['features'] = is_string($value) ? $value : json_encode($value);
    }

    public function tenants()
    {
        return $this->hasMany(Tenant::class);
    }
}
