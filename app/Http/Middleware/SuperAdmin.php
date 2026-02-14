<?php

namespace App\Http\Middleware;

use Closure;

class SuperAdmin
{
    public function handle($request, Closure $next)
    {
        // Verifier que la requete vient du domaine principal (pas de sous-domaine)
        $host = $request->getHost();
        $baseDomain = config('app.base_domain', 'wuroobiz.ptrniger.com');

        if ($host !== $baseDomain) {
            abort(403, 'Acces refuse.');
        }

        // Verifier la session super admin
        if (!session('is_super_admin')) {
            return redirect()->route('superadmin.login');
        }

        return $next($request);
    }
}
