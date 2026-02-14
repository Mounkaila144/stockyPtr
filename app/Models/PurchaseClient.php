<?php

namespace App\Models;


class PurchaseClient extends BaseModel
{
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'date','client_id','Ref','statut','created_at','GrandTotal','updated_at', 'deleted_at'
    ];

    protected $casts = [
        'client_id' => 'integer',
        'GrandTotal' => 'double',
    ];

    public function details()
    {
        return $this->hasMany('Modules\Store\Models\PurchaseClientDetail');
    }

    public function client()
    {
        return $this->belongsTo('App\Models\Client');
    }

}
