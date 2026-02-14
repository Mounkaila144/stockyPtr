<?php

namespace App\Models;

class SMSMessage extends BaseModel
{
    protected $table = 'sms_messages';

    protected $fillable = [
        'text','name'
    ];

}
