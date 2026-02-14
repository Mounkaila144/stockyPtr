<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Plan;
use App\Models\Tenant;
use App\Services\TenantService;
use Illuminate\Support\Str;

class TenantRegistrationController extends Controller
{
    public function showForm($planSlug = null)
    {
        $plans = Plan::where('is_active', true)->get();
        $selectedPlan = $planSlug ? Plan::where('slug', $planSlug)->first() : null;

        return view('register-tenant', compact('plans', 'selectedPlan'));
    }

    public function register(Request $request)
    {
        $request->validate([
            'company_name' => 'required|string|max:255',
            'slug' => 'required|string|max:63|regex:/^[a-z0-9][a-z0-9-]*[a-z0-9]$/|unique:App\Models\Tenant,slug',
            'admin_name' => 'required|string|max:255',
            'admin_email' => 'required|email|max:255',
            'password' => 'required|string|min:8|confirmed',
            'plan_id' => 'required|exists:App\Models\Plan,id',
        ], [
            'slug.regex' => 'Le sous-domaine ne peut contenir que des lettres minuscules, chiffres et tirets.',
            'slug.unique' => 'Ce sous-domaine est deja pris.',
            'password.confirmed' => 'Les mots de passe ne correspondent pas.',
        ]);

        $service = new TenantService();

        try {
            $tenant = $service->createTenant([
                'name' => $request->company_name,
                'slug' => $request->slug,
                'admin_email' => $request->admin_email,
                'admin_name' => $request->admin_name,
                'plan_id' => $request->plan_id,
                'admin_password' => $request->password,
            ]);

            $tenantUrl = 'https://' . $tenant->slug . '.' . config('app.base_domain') . '/login';

            return redirect()->back()->with('success', 'Votre compte a ete cree avec succes ! Connectez-vous sur: ' . $tenantUrl)
                ->with('tenant_url', $tenantUrl);

        } catch (\Exception $e) {
            return redirect()->back()
                ->withInput()
                ->withErrors(['error' => 'Erreur lors de la creation du compte: ' . $e->getMessage()]);
        }
    }
}
