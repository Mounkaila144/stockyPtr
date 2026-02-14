<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class Department extends BaseModel
{
    use HasFactory;

    protected $dates = ['deleted_at'];

    protected $fillable = [
        "department","department_head",'company_id'
    ];

    protected $casts = [
        'department_head' => 'integer',
        'company_id' => 'integer',
    ];


    public function employee()
    {
        return $this->hasOne('App\Models\Employee', 'id', 'department_head');
    }

    public function company()
    {
        return $this->hasOne('App\Models\Company', 'id', 'company_id');
    }

}
