<?php

namespace App\Models;

class ExpenseCategory extends BaseModel
{

    protected $fillable = [
        'user_id', 'description', 'name', 'created_at', 'updated_at', 'deleted_at',
    ];

    protected $casts = [
        'user_id' => 'integer',
    ];

    public function expense()
    {
        return $this->belongsTo('App\Models\Expense');
    }

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

}
