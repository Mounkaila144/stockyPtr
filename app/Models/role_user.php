<?php

namespace App\Models;

class role_user extends BaseModel
{

    protected $table = 'role_user';
    protected $fillable = [
        'user_id', 'role_id',
    ];

    protected $casts = [
        'user_id' => 'integer',
        'role_id' => 'integer',
    ];

}
