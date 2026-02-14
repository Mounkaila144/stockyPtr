<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class EmployeeAccount extends BaseModel
{
    use HasFactory;

    protected $dates = ['deleted_at'];

    protected $fillable = [
        'employee_id','bank_name','bank_branch','account_no','note'

    ];

    protected $casts = [
        'employee_id'     => 'integer',
    ];


    public function employee()
    {
        return $this->hasOne('App\Models\Employee', 'id', 'employee_id');
    }

}
