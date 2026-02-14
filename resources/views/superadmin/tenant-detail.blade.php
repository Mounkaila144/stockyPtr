<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $tenant->name }} | Super Admin</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
            --primary: #2563eb; --indigo: #4f46e5; --gray-50: #f9fafb;
            --gray-100: #f3f4f6; --gray-200: #e5e7eb; --gray-300: #d1d5db;
            --gray-500: #6b7280; --gray-700: #374151; --gray-800: #1f2937;
            --gray-900: #111827; --white: #fff; --green-500: #10b981;
            --green-50: #ecfdf5; --red-500: #ef4444; --red-50: #fef2f2;
            --amber-500: #f59e0b; --amber-50: #fffbeb;
        }
        body { font-family: 'Inter', sans-serif; background: var(--gray-50); color: var(--gray-800); }
        .topbar {
            background: var(--gray-900); color: var(--white); padding: 16px 32px;
            display: flex; align-items: center; justify-content: space-between;
        }
        .topbar h1 { font-size: 1.2rem; font-weight: 700; }
        .topbar a { color: var(--gray-300); font-size: 0.9rem; text-decoration: none; }
        .topbar a:hover { color: var(--white); }
        .container { max-width: 800px; margin: 0 auto; padding: 32px 24px; }
        .card { background: var(--white); border-radius: 16px; border: 1px solid var(--gray-200); padding: 32px; margin-bottom: 24px; }
        .card h2 { font-size: 1.3rem; font-weight: 700; margin-bottom: 24px; color: var(--gray-900); }
        .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .info-item .label { font-size: 0.8rem; font-weight: 600; color: var(--gray-500); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }
        .info-item .value { font-size: 1rem; font-weight: 500; color: var(--gray-900); }
        .badge { display: inline-flex; padding: 3px 10px; border-radius: 100px; font-size: 0.75rem; font-weight: 600; }
        .badge-active { background: var(--green-50); color: #065f46; }
        .badge-trial { background: var(--amber-50); color: #92400e; }
        .badge-inactive { background: var(--red-50); color: #991b1b; }
        .actions { display: flex; gap: 12px; margin-top: 24px; }
        .btn {
            padding: 10px 20px; border-radius: 8px; font-size: 0.9rem; font-weight: 600;
            border: none; cursor: pointer; font-family: inherit; text-decoration: none; display: inline-flex;
        }
        .btn-activate { background: var(--green-50); color: #065f46; border: 1px solid #a7f3d0; }
        .btn-deactivate { background: var(--red-50); color: #991b1b; border: 1px solid #fca5a5; }
        .btn-back { background: var(--gray-100); color: var(--gray-700); border: 1px solid var(--gray-300); }
        .btn:hover { opacity: 0.8; }
        .alert { padding: 12px 16px; border-radius: 10px; margin-bottom: 20px; font-size: 0.9rem; background: var(--green-50); border: 1px solid #a7f3d0; color: #065f46; }
    </style>
</head>
<body>
    <div class="topbar">
        <h1>Detail du tenant</h1>
        <a href="{{ route('superadmin.dashboard') }}">Retour au dashboard</a>
    </div>

    <div class="container">
        @if(session('success'))
            <div class="alert">{{ session('success') }}</div>
        @endif

        <div class="card">
            <h2>{{ $tenant->name }}</h2>
            <div class="info-grid">
                <div class="info-item">
                    <div class="label">Sous-domaine</div>
                    <div class="value">
                        <a href="https://{{ $tenant->slug }}.{{ config('app.base_domain') }}" target="_blank" style="color: var(--primary);">
                            {{ $tenant->slug }}.{{ config('app.base_domain') }}
                        </a>
                    </div>
                </div>
                <div class="info-item">
                    <div class="label">Base de donnees</div>
                    <div class="value">{{ $tenant->database }}</div>
                </div>
                <div class="info-item">
                    <div class="label">Plan</div>
                    <div class="value">{{ $tenant->plan->name ?? '-' }} ({{ number_format($tenant->plan->price ?? 0, 0, ',', ' ') }} FCFA/mois)</div>
                </div>
                <div class="info-item">
                    <div class="label">Statut</div>
                    <div class="value">
                        @if($tenant->status === 'active')
                            <span class="badge badge-active">Actif</span>
                        @elseif($tenant->status === 'trial')
                            <span class="badge badge-trial">Essai</span>
                        @else
                            <span class="badge badge-inactive">Inactif</span>
                        @endif
                    </div>
                </div>
                <div class="info-item">
                    <div class="label">Admin</div>
                    <div class="value">{{ $tenant->admin_name }}</div>
                </div>
                <div class="info-item">
                    <div class="label">Email</div>
                    <div class="value">{{ $tenant->admin_email }}</div>
                </div>
                <div class="info-item">
                    <div class="label">Cree le</div>
                    <div class="value">{{ $tenant->created_at->format('d/m/Y H:i') }}</div>
                </div>
                <div class="info-item">
                    <div class="label">Fin d'essai</div>
                    <div class="value">{{ $tenant->trial_ends_at ? $tenant->trial_ends_at->format('d/m/Y') : '-' }}</div>
                </div>
            </div>

            <div class="actions">
                <a href="{{ route('superadmin.dashboard') }}" class="btn btn-back">Retour</a>
                @if($tenant->status !== 'active')
                    <form method="POST" action="{{ route('superadmin.tenant.activate', $tenant->id) }}">
                        @csrf
                        <button type="submit" class="btn btn-activate">Activer</button>
                    </form>
                @else
                    <form method="POST" action="{{ route('superadmin.tenant.deactivate', $tenant->id) }}">
                        @csrf
                        <button type="submit" class="btn btn-deactivate">Desactiver</button>
                    </form>
                @endif
            </div>
        </div>
    </div>
</body>
</html>
