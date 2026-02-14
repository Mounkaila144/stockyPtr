<?php

namespace App\Models;

class EmailMessage extends BaseModel
{
    protected $table = 'email_messages';

    protected $fillable = [
        'subject','body'
    ];

}
