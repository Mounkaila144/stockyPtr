<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class PaymentMethod extends BaseModel
{
    use HasFactory;

    protected $dates = ['deleted_at'];

    protected $fillable = ['name', 'is_active'];
}
