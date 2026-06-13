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
        $plans = Plan::where('is_active', true)->get();
        $featureFlags = config('tenant_features.flags', []);
        return view('superadmin.tenant-detail', compact('tenant', 'plans', 'featureFlags'));
    }

    public function updateTenantFeatures(Request $request, $id)
    {
        $tenant = Tenant::findOrFail($id);
        $availableFlags = array_keys(config('tenant_features.flags', []));
        $submitted = $request->input('features', []);

        $features = [];
        foreach ($availableFlags as $key) {
            $features[$key] = !empty($submitted[$key]);
        }

        $tenant->update(['features' => $features]);

        return back()->with('success', "Fonctionnalites du tenant '{$tenant->name}' mises a jour.");
    }

    public function changePlan(Request $request, $id)
    {
        $request->validate([
            'plan_id' => 'required|exists:App\Models\Plan,id',
        ]);

        $tenant = Tenant::findOrFail($id);
        $plan = Plan::findOrFail($request->plan_id);
        $tenant->update(['plan_id' => $plan->id]);

        return back()->with('success', "Plan du tenant '{$tenant->name}' change vers '{$plan->name}'.");
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

    public function plans()
    {
        $plans = Plan::withCount('tenants')->get();
        return view('superadmin.plans', compact('plans'));
    }

    public function editFeatures($id)
    {
        $plan = Plan::findOrFail($id);
        $modules = config('plan_modules.modules', []);
        $enabledModules = $plan->features ?? [];
        if (is_string($enabledModules)) {
            $enabledModules = json_decode($enabledModules, true) ?? [];
        }

        // Handle old format (associative array)
        if (!empty($enabledModules) && is_array($enabledModules) && !array_is_list($enabledModules)) {
            $enabledModules = array_keys(array_filter($enabledModules));
        }

        return view('superadmin.plan-features', compact('plan', 'modules', 'enabledModules'));
    }

    public function updateFeatures(Request $request, $id)
    {
        $plan = Plan::findOrFail($id);
        $allModuleKeys = array_keys(config('plan_modules.modules', []));

        $enabledModules = array_values(array_intersect($request->input('modules', []), $allModuleKeys));

        $plan->update(['features' => $enabledModules]);

        return redirect()->route('superadmin.plans.features', $plan->id)
            ->with('success', "Modules du plan '{$plan->name}' mis a jour avec succes.");
    }
}
