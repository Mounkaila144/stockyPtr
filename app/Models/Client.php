<?php

namespace App\Models;

class Client extends BaseModel
{

    protected $dates = ['deleted_at'];

    protected $fillable = [
        'name', 'code', 'adresse', 'email', 'phone', 'country', 'city','tax_number', 'client_type'

    ];

    protected $casts = [
        'code' => 'integer',
    ];
}
