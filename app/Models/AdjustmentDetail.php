<?php

namespace App\Models;

class AdjustmentDetail extends BaseModel
{

    protected $fillable = [
        'id', 'product_id', 'adjustment_id', 'quantity', 'type', 'product_variant_id',
    ];

    protected $casts = [
        'adjustment_id' => 'integer',
        'product_id' => 'integer',
        'quantity' => 'double',
        'product_variant_id' => 'integer',
    ];

    public function adjustment()
    {
        return $this->belongsTo('App\Models\Adjustment');
    }

    public function product()
    {
        return $this->belongsTo('App\Models\Product');
    }

}
