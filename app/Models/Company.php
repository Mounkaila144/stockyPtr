<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class Company extends BaseModel
{
    use HasFactory;

    protected $dates = ['deleted_at'];

    protected $fillable = [
        "name",'email','phone','country'
    ];



}
