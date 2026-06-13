<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\Tenant;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Config;

class IdentifyTenant
{
    public function handle($request, Closure $next)
    {
        $host = $request->getHost();
        $baseDomain = config('app.base_domain', 'wuroobiz.ptrniger.com');

        // Extraire le sous-domaine
        $subdomain = null;
        if ($host !== $baseDomain && str_ends_with($host, '.' . $baseDomain)) {
            $subdomain = str_replace('.' . $baseDomain, '', $host);
        }

        // Si pas de sous-domaine, c'est le site central
        // Configurer la connexion tenant pour pointer vers la DB principale
        // car tous les modeles utilisent $connection = 'tenant' via BaseModel
        if (!$subdomain) {
            Config::set('database.connections.tenant.database', env('DB_DATABASE', 'stocky_ptr'));
            DB::purge('tenant');
            DB::reconnect('tenant');
            Config::set('database.default', 'tenant');
            return $next($request);
        }

        // Chercher le tenant via le sous-domaine
        $tenant = Tenant::with('plan')->where('slug', $subdomain)->first();

        if (!$tenant) {
            abort(404, 'Tenant introuvable.');
        }

        if (!$tenant->isActive()) {
            // API requests: return JSON error
            if ($request->expectsJson() || $request->is('api/*')) {
                return response()->json([
                    'message' => 'Votre periode d\'essai est terminee. Veuillez souscrire a un abonnement.',
                    'error' => 'trial_expired',
                    'tenant' => $tenant->name,
                    'trial_ends_at' => $tenant->trial_ends_at?->toIso8601String(),
                ], 403);
            }

            // Web requests: show friendly page
            return response()->view('tenant-expired', ['tenant' => $tenant], 403);
        }

        // Configurer dynamiquement la connexion tenant
        Config::set('database.connections.tenant.database', $tenant->database);

        // Purger et reconnecter
        DB::purge('tenant');
        DB::reconnect('tenant');

        // Stocker le tenant dans le container pour y acceder partout
        app()->instance('tenant', $tenant);

        // Configurer Passport pour utiliser la connexion tenant
        Config::set('database.default', 'tenant');

        return $next($request);
    }
}
