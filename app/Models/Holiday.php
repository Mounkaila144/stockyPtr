<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class Holiday extends BaseModel
{
    use HasFactory;

    protected $dates = ['deleted_at'];
    
    protected $fillable = [
        'title','company_id','start_date','end_date','description'
    ];

    protected $casts = [
        'company_id'  => 'integer',
    ];

    public function company()
    {
        return $this->hasOne('App\Models\Company', 'id', 'company_id');
    }
}
