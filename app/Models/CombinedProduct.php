<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class CombinedProduct extends BaseModel
{
    use HasFactory;

    protected $fillable = [
        'product_id',
        'quantity',
    ];

    protected $casts = [
        'product_id' => 'integer',
        'quantity' => 'double',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class, 'combined_product_id');
    }
}
