<?php

namespace App\Models;

class OauthRefreshToken extends BaseModel
{

    public function oauthAccessToken()
    {
        return $this->belongsTo('\App\Models\OauthAccessToken');
    }

}
