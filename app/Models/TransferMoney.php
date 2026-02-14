<?php

namespace App\Models;

class TransferMoney extends BaseModel
{
    protected $table = 'transfer_money';
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'date','from_account_id', 'to_account_id','amount','created_at', 'updated_at', 'deleted_at',
    ];

    protected $casts = [
        'from_account_id' => 'integer',
        'to_account_id'   => 'integer',
        'amount'          => 'double',

    ];


    public function from_account()
    {
        return $this->belongsTo('App\Models\Account', 'from_account_id');
    }

    public function to_account()
    {
        return $this->belongsTo('App\Models\Account', 'to_account_id');
    }

}
