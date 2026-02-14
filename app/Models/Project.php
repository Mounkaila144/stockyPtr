<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class Project extends BaseModel
{
    use HasFactory;

    protected $dates = ['deleted_at'];

    protected $fillable = [
        'title','client_id','company_id','summary','start_date','end_date','status',
        'description'

    ];

    protected $casts = [
        'client_id'  => 'integer',
        'company_id'  => 'integer',
    ];

    public function client()
    {
        return $this->hasOne('App\Models\Client', 'id', 'client_id');
    }

    public function company()
    {
        return $this->hasOne('App\Models\Company', 'id', 'company_id');
    }

    public function assignedEmployees()
    {
        return $this->belongsToMany('App\Models\Employee');
    }
}
