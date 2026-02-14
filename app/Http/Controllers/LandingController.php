<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LandingController extends Controller
{
    public function index()
    {
        $isAuthenticated = Auth::check();
        return view('landing', compact('isAuthenticated'));
    }
}
