<?php

namespace App\Models;

class Banner extends BaseModel
{
    protected $table = 'banners';

    protected $dates = ['deleted_at'];

    protected $fillable = [
        'banner1_path','banner2_path'
    ];

}
