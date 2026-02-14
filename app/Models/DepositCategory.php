<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class DepositCategory extends BaseModel
{
    use HasFactory;


    protected $dates = ['deleted_at'];

    protected $fillable = [
        'title','created_at', 'updated_at', 'deleted_at'
    ];

}
