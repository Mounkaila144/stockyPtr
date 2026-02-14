<?php

namespace App\Models;

class Brand extends BaseModel
{
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'name', 'description', 'image',
    ];

}
