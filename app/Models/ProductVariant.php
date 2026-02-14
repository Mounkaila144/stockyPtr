<?php

namespace App\Models;

class ProductVariant extends BaseModel
{
    protected $table = 'product_variants';

    protected $fillable = [
        'product_id', 'name', 'qty','cost','price','code','image'
    ];

    protected $casts = [
        'product_id' => 'integer',
        'qty' => 'double',
        'cost' => 'double',
        'price' => 'double',
    ];

}
