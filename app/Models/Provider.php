<?php

namespace App\Models;

class Provider extends BaseModel
{
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'name', 'code', 'adresse', 'phone', 'country', 'email', 'city','tax_number'
    ];

    protected $casts = [
        'code' => 'integer',
    ];

}
