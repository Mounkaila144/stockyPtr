<?php

namespace App\Models;

class Category extends BaseModel
{
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'code', 'name',
    ];

}
