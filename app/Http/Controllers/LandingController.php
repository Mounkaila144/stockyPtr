<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Plan;

class LandingController extends Controller
{
    public function index()
    {
        // Sur un sous-domaine tenant, afficher la SPA (pas la landing page)
        $host = request()->getHost();
        $baseDomain = config('app.base_domain', 'wuroobiz.ptrniger.com');

        if ($host !== $baseDomain && str_ends_with($host, '.' . $baseDomain)) {
            $installed = \Storage::disk('public')->exists('installed');
            $ModulesData = BaseController::get_Module_Info();

            if ($installed === false) {
                return redirect('/setup');
            }

            return view('layouts.master', [
                'ModulesInstalled' => $ModulesData['ModulesInstalled'],
                'ModulesEnabled' => $ModulesData['ModulesEnabled'],
                'image_base' => \App\utils\TenantStorage::imageBasePath(),
                'flag_base' => \App\utils\TenantStorage::flagBasePath(),
            ]);
        }

        // Domaine principal -> landing page
        $plans = Plan::where('is_active', true)->get();
        return view('landing', compact('plans'));
    }
}
