<?php

namespace App\Models;

class Server extends BaseModel
{

    protected $fillable = [
        'mail_mailer','sender_name','host', 'port', 'username', 'password', 'encryption',
    ];

    protected $casts = [
        'port' => 'integer',
    ];

}
