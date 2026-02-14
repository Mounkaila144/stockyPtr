<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class ErrorLog extends BaseModel
{
    use HasFactory;

    protected $fillable = [
        'context','message','details'
    ];
}
