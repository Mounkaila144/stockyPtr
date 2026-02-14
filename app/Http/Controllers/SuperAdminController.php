<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tenant;
use App\Models\Plan;
use App\Services\TenantService;
use Illuminate\Support\Facades\Hash;

class SuperAdminController extends Controller
{
    public function loginForm()
    {
        if (session('is_super_admin')) {
            return redirect()->route('superadmin.dashboard');
        }
        return view('superadmin.login');
    }

    public function login(Request $request)
    {
        $request->validate([
            'password' => 'required',
        ]);

        $superAdminPassword = env('SUPER_ADMIN_PASSWORD', 'superadmin123');

        if ($request->password === $superAdminPassword) {
            session(['is_super_admin' => true]);
            return redirect()->route('superadmin.dashboard');
        }

        return back()->withErrors(['password' => 'Mot de passe incorrect.']);
    }

    public function logout()
    {
        session()->forget('is_super_admin');
        return redirect()->route('superadmin.login');
    }

    public function index()
    {
        $tenants = Tenant::with('plan')->orderBy('created_at', 'desc')->get();
        $plans = Plan::withCount('tenants')->get();
        $stats = [
            'total_tenants' => $tenants->count(),
            'active_tenants' => $tenants->where('status', 'active')->count(),
            'trial_tenants' => $tenants->where('status', 'trial')->count(),
            'inactive_tenants' => $tenants->where('status', 'inactive')->count(),
        ];

        return view('superadmin.dashboard', compact('tenants', 'plans', 'stats'));
    }

    public function show($id)
    {
        $tenant = Tenant::with('plan')->findOrFail($id);
        return view('superadmin.tenant-detail', compact('tenant'));
    }

    public function activate($id)
    {
        $tenant = Tenant::findOrFail($id);
        $service = new TenantService();
        $service->activateTenant($tenant);

        return back()->with('success', "Tenant '{$tenant->name}' active avec succes.");
    }

    public function deactivate($id)
    {
        $tenant = Tenant::findOrFail($id);
        $service = new TenantService();
        $service->deactivateTenant($tenant);

        return back()->with('success', "Tenant '{$tenant->name}' desactive.");
    }

    public function destroy($id)
    {
        $tenant = Tenant::findOrFail($id);
        $service = new TenantService();
        $service->deleteTenant($tenant);

        return redirect()->route('superadmin.dashboard')->with('success', "Tenant '{$tenant->name}' supprime.");
    }
}
