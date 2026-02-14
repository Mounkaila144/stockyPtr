<?php

namespace App\Models;

class SocialMediaUrl extends BaseModel
{
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'facebook_url','twitter_url','instagram_url','google_url','youtube_url'
    ];

}
