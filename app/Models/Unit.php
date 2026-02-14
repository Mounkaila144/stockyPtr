<?php

namespace App\Models;

class Unit extends BaseModel
{
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'name', 'ShortName', 'base_unit', 'operator', 'operator_value', 'is_active',
    ];

    protected $casts = [
        'base_unit' => 'integer',
        'operator_value' => 'float',
        'is_active' => 'integer',

    ];

}
