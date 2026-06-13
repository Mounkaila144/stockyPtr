<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestion des Plans | StockyPTR</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
            --primary: #2563eb; --indigo: #4f46e5; --gray-50: #f9fafb;
            --gray-100: #f3f4f6; --gray-200: #e5e7eb; --gray-300: #d1d5db;
            --gray-500: #6b7280; --gray-600: #4b5563; --gray-700: #374151;
            --gray-800: #1f2937; --gray-900: #111827; --white: #fff;
            --green-500: #10b981; --green-50: #ecfdf5; --red-500: #ef4444;
            --red-50: #fef2f2; --amber-500: #f59e0b; --amber-50: #fffbeb;
        }
        body { font-family: 'Inter', sans-serif; background: var(--gray-50); color: var(--gray-800); }
        .topbar {
            background: var(--gray-900); color: var(--white); padding: 16px 32px;
            display: flex; align-items: center; justify-content: space-between;
        }
        .topbar h1 { font-size: 1.2rem; font-weight: 700; }
        .topbar .actions { display: flex; gap: 16px; align-items: center; }
        .topbar a, .topbar button {
            color: var(--gray-300); font-size: 0.9rem; background: none; border: none;
            cursor: pointer; font-family: inherit; text-decoration: none;
        }
        .topbar a:hover, .topbar button:hover { color: var(--white); }
        .topbar a.active { color: var(--white); font-weight: 600; }
        .container { max-width: 1200px; margin: 0 auto; padding: 32px 24px; }

        .section-title { font-size: 1.2rem; font-weight: 700; margin-bottom: 16px; color: var(--gray-900); }
        .table-card {
            background: var(--white); border-radius: 12px;
            border: 1px solid var(--gray-200); overflow: hidden;
        }
        table { width: 100%; border-collapse: collapse; }
        th { background: var(--gray-50); padding: 12px 16px; text-align: left; font-size: 0.8rem; font-weight: 600; color: var(--gray-500); text-transform: uppercase; letter-spacing: 0.05em; }
        td { padding: 14px 16px; border-top: 1px solid var(--gray-100); font-size: 0.9rem; }
        tr:hover td { background: var(--gray-50); }

        .badge {
            display: inline-flex; padding: 3px 10px; border-radius: 100px;
            font-size: 0.75rem; font-weight: 600;
        }
        .badge-active { background: var(--green-50); color: #065f46; }
        .badge-inactive { background: var(--red-50); color: #991b1b; }

        .action-btn {
            padding: 6px 12px; border-radius: 6px; font-size: 0.8rem; font-weight: 500;
            border: 1px solid var(--gray-300); background: var(--white); cursor: pointer;
            font-family: inherit; margin-right: 4px; text-decoration: none; color: var(--gray-700);
            display: inline-flex; align-items: center;
        }
        .action-btn:hover { background: var(--gray-50); }
        .action-btn.primary { border-color: var(--primary); color: var(--primary); }
        .action-btn.primary:hover { background: #eff6ff; }

        .alert {
            padding: 12px 16px; border-radius: 10px; margin-bottom: 20px;
            font-size: 0.9rem; background: var(--green-50); border: 1px solid #a7f3d0; color: #065f46;
        }

        .module-tags { display: flex; flex-wrap: wrap; gap: 4px; }
        .module-tag {
            display: inline-flex; padding: 2px 8px; border-radius: 4px;
            font-size: 0.7rem; font-weight: 500; background: #eff6ff; color: var(--primary);
        }

        @media (max-width: 768px) {
            .table-card { overflow-x: auto; }
        }
    </style>
</head>
<body>
    <div class="topbar">
        <h1>StockyPTR - Super Admin</h1>
        <div class="actions">
            <a href="{{ route('superadmin.dashboard') }}">Tenants</a>
            <a href="{{ route('superadmin.plans') }}" class="active">Plans</a>
            <a href="/">Voir le site</a>
            <form method="POST" action="{{ route('superadmin.logout') }}" style="display:inline">
                @csrf
                <button type="submit">Deconnexion</button>
            </form>
        </div>
    </div>

    <div class="container">
        @if(session('success'))
            <div class="alert">{{ session('success') }}</div>
        @endif

        <h2 class="section-title">Plans d'abonnement</h2>
        <div class="table-card">
            <table>
                <thead>
                    <tr>
                        <th>Plan</th>
                        <th>Prix</th>
                        <th>Limites</th>
                        <th>Modules actifs</th>
                        <th>Tenants</th>
                        <th>Statut</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse($plans as $plan)
                    @php
                        $features = $plan->features ?? [];
                        if (is_string($features)) {
                            $features = json_decode($features, true) ?? [];
                        }
                        if (!empty($features) && is_array($features) && !array_is_list($features)) {
                            $features = array_keys(array_filter($features));
                        }
                    @endphp
                    <tr>
                        <td><strong>{{ $plan->name }}</strong></td>
                        <td>{{ number_format($plan->price, 0, ',', ' ') }} FCFA/{{ $plan->billing_cycle === 'monthly' ? 'mois' : 'an' }}</td>
                        <td style="font-size: 0.8rem; color: var(--gray-600);">
                            {{ $plan->max_users ?: 'Illimite' }} utilisateurs<br>
                            {{ $plan->max_warehouses ?: 'Illimite' }} entrepots<br>
                            {{ $plan->max_products ?: 'Illimite' }} produits
                        </td>
                        <td>
                            <div class="module-tags">
                                @foreach($features as $mod)
                                    <span class="module-tag">{{ $mod }}</span>
                                @endforeach
                            </div>
                        </td>
                        <td>{{ $plan->tenants_count }}</td>
                        <td>
                            @if($plan->is_active)
                                <span class="badge badge-active">Actif</span>
                            @else
                                <span class="badge badge-inactive">Inactif</span>
                            @endif
                        </td>
                        <td>
                            <a href="{{ route('superadmin.plans.features', $plan->id) }}" class="action-btn primary">Configurer modules</a>
                        </td>
                    </tr>
                    @empty
                    <tr>
                        <td colspan="7" style="text-align:center; color: var(--gray-500); padding: 40px;">
                            Aucun plan configure.
                        </td>
                    </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
    </div>
</body>
</html>
