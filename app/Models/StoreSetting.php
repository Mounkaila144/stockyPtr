<?php

namespace App\Models;

class StoreSetting extends BaseModel
{
    protected $table = 'store_settings';

    protected $dates = ['deleted_at'];

    protected $fillable = [
        'logo'
    ];

}
