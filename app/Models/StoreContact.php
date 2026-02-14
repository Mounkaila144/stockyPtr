<?php

namespace App\Models;

class StoreContact extends BaseModel
{
    protected $table = 'store_contact';

    protected $dates = ['deleted_at'];

    protected $fillable = [
        'company_name','company_adress','company_email','company_phone','company_description'
    ];

}
