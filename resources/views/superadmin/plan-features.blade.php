<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modules du plan {{ $plan->name }} | StockyPTR</title>
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
        .container { max-width: 1000px; margin: 0 auto; padding: 32px 24px; }

        .breadcrumb { font-size: 0.85rem; color: var(--gray-500); margin-bottom: 24px; }
        .breadcrumb a { color: var(--primary); text-decoration: none; }
        .breadcrumb a:hover { text-decoration: underline; }

        .page-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; }
        .page-header h2 { font-size: 1.3rem; font-weight: 700; color: var(--gray-900); }

        .alert {
            padding: 12px 16px; border-radius: 10px; margin-bottom: 20px;
            font-size: 0.9rem; background: var(--green-50); border: 1px solid #a7f3d0; color: #065f46;
        }

        .modules-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 16px; }

        .module-card {
            background: var(--white); border-radius: 12px; padding: 20px;
            border: 2px solid var(--gray-200); cursor: pointer; transition: all 0.15s;
            position: relative;
        }
        .module-card:hover { border-color: var(--gray-300); }
        .module-card.checked { border-color: var(--primary); background: #f0f7ff; }

        .module-card input[type="checkbox"] {
            position: absolute; top: 20px; right: 20px;
            width: 20px; height: 20px; accent-color: var(--primary); cursor: pointer;
        }

        .module-card .module-label { font-size: 1rem; font-weight: 600; color: var(--gray-900); margin-bottom: 4px; padding-right: 30px; }
        .module-card .module-desc { font-size: 0.8rem; color: var(--gray-500); margin-bottom: 10px; }
        .module-card .module-perms { font-size: 0.7rem; color: var(--gray-500); }
        .module-card .module-perms strong { color: var(--gray-700); }

        .form-actions {
            margin-top: 32px; display: flex; gap: 12px; align-items: center;
        }

        .btn {
            padding: 10px 24px; border-radius: 8px; font-size: 0.9rem; font-weight: 600;
            border: none; cursor: pointer; font-family: inherit; text-decoration: none;
            display: inline-flex; align-items: center;
        }
        .btn-primary { background: var(--primary); color: var(--white); }
        .btn-primary:hover { background: #1d4ed8; }
        .btn-secondary { background: var(--white); color: var(--gray-700); border: 1px solid var(--gray-300); }
        .btn-secondary:hover { background: var(--gray-50); }

        .select-actions { display: flex; gap: 8px; margin-bottom: 16px; }
        .select-actions button {
            padding: 6px 12px; border-radius: 6px; font-size: 0.8rem; font-weight: 500;
            border: 1px solid var(--gray-300); background: var(--white); cursor: pointer;
            font-family: inherit; color: var(--gray-700);
        }
        .select-actions button:hover { background: var(--gray-50); }
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
        <div class="breadcrumb">
            <a href="{{ route('superadmin.plans') }}">Plans</a> / {{ $plan->name }}
        </div>

        @if(session('success'))
            <div class="alert">{{ session('success') }}</div>
        @endif

        <div class="page-header">
            <h2>Configurer les modules - {{ $plan->name }}</h2>
        </div>

        <form method="POST" action="{{ route('superadmin.plans.features.update', $plan->id) }}">
            @csrf

            <div class="select-actions">
                <button type="button" onclick="selectAll()">Tout cocher</button>
                <button type="button" onclick="deselectAll()">Tout decocher</button>
            </div>

            <div class="modules-grid">
                @foreach($modules as $key => $module)
                <label class="module-card {{ in_array($key, $enabledModules) ? 'checked' : '' }}" id="card-{{ $key }}">
                    <input type="checkbox" name="modules[]" value="{{ $key }}"
                        {{ in_array($key, $enabledModules) ? 'checked' : '' }}
                        onchange="toggleCard(this, '{{ $key }}')">
                    <div class="module-label">{{ $module['label'] }}</div>
                    <div class="module-desc">{{ $module['description'] }}</div>
                    <div class="module-perms">
                        <strong>{{ count($module['permissions']) }}</strong> permissions
                    </div>
                </label>
                @endforeach
            </div>

            <div class="form-actions">
                <button type="submit" class="btn btn-primary">Sauvegarder</button>
                <a href="{{ route('superadmin.plans') }}" class="btn btn-secondary">Annuler</a>
            </div>
        </form>
    </div>

    <script>
        function toggleCard(checkbox, key) {
            const card = document.getElementById('card-' + key);
            if (checkbox.checked) {
                card.classList.add('checked');
            } else {
                card.classList.remove('checked');
            }
        }

        function selectAll() {
            document.querySelectorAll('.module-card input[type="checkbox"]').forEach(cb => {
                cb.checked = true;
                cb.dispatchEvent(new Event('change'));
            });
        }

        function deselectAll() {
            document.querySelectorAll('.module-card input[type="checkbox"]').forEach(cb => {
                cb.checked = false;
                cb.dispatchEvent(new Event('change'));
            });
        }
    </script>
</body>
</html>
