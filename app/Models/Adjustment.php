<?php

namespace App\Models;

class Adjustment extends BaseModel
{
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'date', 'Ref', 'user_id', 'warehouse_id','time',
        'items', 'notes', 'created_at', 'updated_at', 'deleted_at',
    ];

    protected $casts = [
        'user_id' => 'integer',
        'warehouse_id' => 'integer',
    ];

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    public function details()
    {
        return $this->hasMany('App\Models\AdjustmentDetail');
    }

    public function warehouse()
    {
        return $this->belongsTo('App\Models\Warehouse');
    }

}
