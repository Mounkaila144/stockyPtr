<?php

namespace App\Models;

class OauthAccessToken extends BaseModel
{

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    public function oauthRefreshToken()
    {
        return $this->hasMany('\App\Models\OauthRefreshToken', 'access_token_id');
    }

}
