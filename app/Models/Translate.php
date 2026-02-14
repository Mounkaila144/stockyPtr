<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class Translate extends BaseModel
{
    protected $table ="translations";

    use HasFactory;

    protected $dates = ['deleted_at'];

    protected $fillable = [
        'locale','key','value'
    ];


}
