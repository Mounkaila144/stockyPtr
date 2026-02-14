<?php

namespace App\Models;

class Currency extends BaseModel
{
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'code', 'name', 'symbol',
    ];

}
