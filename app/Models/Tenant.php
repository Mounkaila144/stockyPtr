<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tenant extends Model
{
    protected $connection = 'central';

    protected $fillable = [
        'name', 'slug', 'database', 'plan_id', 'status',
        'trial_ends_at', 'admin_email', 'admin_name', 'admin_phone', 'domain',
        'features',
    ];

    protected $casts = [
        'plan_id' => 'integer',
        'trial_ends_at' => 'datetime',
        'features' => 'array',
    ];

    public function plan()
    {
        return $this->belongsTo(Plan::class);
    }

    public function isActive()
    {
        return $this->status === 'active' || ($this->status === 'trial' && $this->trial_ends_at && $this->trial_ends_at->isFuture());
    }

    public function hasFeature($key)
    {
        $features = $this->features ?? [];
        return !empty($features[$key]);
    }
}
