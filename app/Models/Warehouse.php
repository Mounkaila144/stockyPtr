<?php

namespace App\Models;

class Warehouse extends BaseModel
{
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'name', 'mobile', 'country', 'city', 'email', 'zip',
    ];

    public function assignedUsers()
    {
        return $this->belongsToMany('App\Models\User');
    }

}
