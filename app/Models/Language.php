<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class Language extends BaseModel
{
    use HasFactory;

    protected $dates = ['deleted_at'];

    protected $fillable = [
        'name','locale','flag','is_default','is_active'
    ];

    protected $casts = [
        'is_default'  => 'integer',
        'is_active'  => 'integer',
    ];

}
