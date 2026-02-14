<?php

namespace App\Models;

class PasswordReset extends BaseModel
{

    protected $fillable = [
        'email', 'token','created_at','updated_at'
    ];

}
