<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class LeaveType extends BaseModel
{
    use HasFactory;

    protected $dates = ['deleted_at'];

    protected $fillable = [
        'title'
    ];
}
