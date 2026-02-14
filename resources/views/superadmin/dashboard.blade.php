<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard Super Admin | StockyPTR</title>
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
        .container { max-width: 1200px; margin: 0 auto; padding: 32px 24px; }

        .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 32px; }
        .stat-card {
            background: var(--white); border-radius: 12px; padding: 24px;
            border: 1px solid var(--gray-200);
        }
        .stat-card .label { font-size: 0.85rem; color: var(--gray-500); font-weight: 500; margin-bottom: 4px; }
        .stat-card .value { font-size: 2rem; font-weight: 800; color: var(--gray-900); }
        .stat-card.green .value { color: var(--green-500); }
        .stat-card.amber .value { color: var(--amber-500); }
        .stat-card.red .value { color: var(--red-500); }

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
        .badge-trial { background: var(--amber-50); color: #92400e; }
        .badge-inactive { background: var(--red-50); color: #991b1b; }

        .action-btn {
            padding: 6px 12px; border-radius: 6px; font-size: 0.8rem; font-weight: 500;
            border: 1px solid var(--gray-300); background: var(--white); cursor: pointer;
            font-family: inherit; margin-right: 4px; text-decoration: none; color: var(--gray-700);
            display: inline-flex; align-items: center;
        }
        .action-btn:hover { background: var(--gray-50); }
        .action-btn.activate { border-color: #a7f3d0; color: #065f46; }
        .action-btn.deactivate { border-color: #fca5a5; color: #991b1b; }

        .alert {
            padding: 12px 16px; border-radius: 10px; margin-bottom: 20px;
            font-size: 0.9rem; background: var(--green-50); border: 1px solid #a7f3d0; color: #065f46;
        }

        @media (max-width: 768px) {
            .stats-grid { grid-template-columns: repeat(2, 1fr); }
            .table-card { overflow-x: auto; }
        }
    </style>
</head>
<body>
    <div class="topbar">
        <h1>StockyPTR - Super Admin</h1>
        <div class="actions">
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

        <div class="stats-grid">
            <div class="stat-card">
                <div class="label">Total Tenants</div>
                <div class="value">{{ $stats['total_tenants'] }}</div>
            </div>
            <div class="stat-card green">
                <div class="label">Actifs</div>
                <div class="value">{{ $stats['active_tenants'] }}</div>
            </div>
            <div class="stat-card amber">
                <div class="label">En essai</div>
                <div class="value">{{ $stats['trial_tenants'] }}</div>
            </div>
            <div class="stat-card red">
                <div class="label">Inactifs</div>
                <div class="value">{{ $stats['inactive_tenants'] }}</div>
            </div>
        </div>

        <h2 class="section-title">Tenants</h2>
        <div class="table-card">
            <table>
                <thead>
                    <tr>
                        <th>Entreprise</th>
                        <th>Sous-domaine</th>
                        <th>Plan</th>
                        <th>Email admin</th>
                        <th>Statut</th>
                        <th>Cree le</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse($tenants as $tenant)
                    <tr>
                        <td><strong>{{ $tenant->name }}</strong></td>
                        <td>
                            <a href="https://{{ $tenant->slug }}.{{ config('app.base_domain') }}" target="_blank" style="color: var(--primary);">
                                {{ $tenant->slug }}.{{ config('app.base_domain') }}
                            </a>
                        </td>
                        <td>{{ $tenant->plan->name ?? '-' }}</td>
                        <td>{{ $tenant->admin_email }}</td>
                        <td>
                            @if($tenant->status === 'active')
                                <span class="badge badge-active">Actif</span>
                            @elseif($tenant->status === 'trial')
                                <span class="badge badge-trial">Essai</span>
                            @else
                                <span class="badge badge-inactive">Inactif</span>
                            @endif
                        </td>
                        <td>{{ $tenant->created_at->format('d/m/Y') }}</td>
                        <td>
                            <a href="{{ route('superadmin.tenant.show', $tenant->id) }}" class="action-btn">Detail</a>
                            @if($tenant->status !== 'active')
                                <form method="POST" action="{{ route('superadmin.tenant.activate', $tenant->id) }}" style="display:inline">
                                    @csrf
                                    <button type="submit" class="action-btn activate">Activer</button>
                                </form>
                            @else
                                <form method="POST" action="{{ route('superadmin.tenant.deactivate', $tenant->id) }}" style="display:inline">
                                    @csrf
                                    <button type="submit" class="action-btn deactivate">Desactiver</button>
                                </form>
                            @endif
                        </td>
                    </tr>
                    @empty
                    <tr>
                        <td colspan="7" style="text-align:center; color: var(--gray-500); padding: 40px;">
                            Aucun tenant enregistre pour le moment.
                        </td>
                    </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
    </div>
</body>
</html>
