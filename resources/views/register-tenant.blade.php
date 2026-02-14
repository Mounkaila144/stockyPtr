<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscription | StockyPTR</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
            --primary: #2563eb;
            --primary-dark: #1d4ed8;
            --indigo: #4f46e5;
            --gray-50: #f9fafb;
            --gray-100: #f3f4f6;
            --gray-200: #e5e7eb;
            --gray-300: #d1d5db;
            --gray-500: #6b7280;
            --gray-600: #4b5563;
            --gray-700: #374151;
            --gray-800: #1f2937;
            --gray-900: #111827;
            --white: #ffffff;
            --green-500: #10b981;
            --red-500: #ef4444;
            --red-50: #fef2f2;
        }
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            color: var(--gray-800);
            line-height: 1.6;
            background: linear-gradient(135deg, #eff6ff 0%, #eef2ff 50%, #f5f3ff 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 40px 20px;
        }
        a { text-decoration: none; color: inherit; }
        .register-container {
            width: 100%;
            max-width: 560px;
        }
        .logo {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            font-weight: 800;
            font-size: 1.4rem;
            color: var(--primary);
            margin-bottom: 32px;
        }
        .logo-icon {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, var(--primary), var(--indigo));
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .logo-icon svg { width: 24px; height: 24px; }
        .card {
            background: var(--white);
            border-radius: 20px;
            border: 1px solid var(--gray-200);
            padding: 40px;
            box-shadow: 0 4px 24px rgba(0,0,0,0.06);
        }
        .card h1 {
            font-size: 1.5rem;
            font-weight: 800;
            color: var(--gray-900);
            margin-bottom: 8px;
            text-align: center;
        }
        .card .subtitle {
            text-align: center;
            color: var(--gray-500);
            font-size: 0.95rem;
            margin-bottom: 32px;
        }
        .form-group {
            margin-bottom: 20px;
        }
        .form-group label {
            display: block;
            font-size: 0.875rem;
            font-weight: 600;
            color: var(--gray-700);
            margin-bottom: 6px;
        }
        .form-group input, .form-group select {
            width: 100%;
            padding: 10px 14px;
            border: 1px solid var(--gray-300);
            border-radius: 8px;
            font-size: 0.95rem;
            font-family: inherit;
            color: var(--gray-800);
            transition: border-color 0.2s, box-shadow 0.2s;
            background: var(--white);
        }
        .form-group input:focus, .form-group select:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }
        .slug-preview {
            font-size: 0.8rem;
            color: var(--gray-500);
            margin-top: 4px;
        }
        .slug-preview span {
            color: var(--primary);
            font-weight: 600;
        }
        .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
        }
        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding: 12px 24px;
            border-radius: 10px;
            font-weight: 600;
            font-size: 1rem;
            border: none;
            cursor: pointer;
            transition: all 0.2s;
            font-family: inherit;
            background: linear-gradient(135deg, var(--primary), var(--indigo));
            color: var(--white);
            box-shadow: 0 2px 8px rgba(37, 99, 235, 0.3);
            margin-top: 8px;
        }
        .btn:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 16px rgba(37, 99, 235, 0.4);
        }
        .alert {
            padding: 12px 16px;
            border-radius: 10px;
            margin-bottom: 20px;
            font-size: 0.9rem;
        }
        .alert-success {
            background: #ecfdf5;
            border: 1px solid #a7f3d0;
            color: #065f46;
        }
        .alert-success a {
            color: var(--primary);
            font-weight: 600;
            text-decoration: underline;
        }
        .alert-error {
            background: var(--red-50);
            border: 1px solid #fca5a5;
            color: #991b1b;
        }
        .plan-badge {
            display: inline-flex;
            padding: 4px 12px;
            background: linear-gradient(135deg, var(--primary), var(--indigo));
            color: var(--white);
            border-radius: 100px;
            font-size: 0.8rem;
            font-weight: 600;
        }
        .back-link {
            display: block;
            text-align: center;
            margin-top: 20px;
            color: var(--gray-500);
            font-size: 0.9rem;
        }
        .back-link:hover { color: var(--primary); }
        @media (max-width: 480px) {
            .form-row { grid-template-columns: 1fr; }
            .card { padding: 24px; }
        }
    </style>
</head>
<body>
    <div class="register-container">
        <a href="/" class="logo">
            <div class="logo-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
            </div>
            StockyPTR
        </a>

        <div class="card">
            <h1>Creer votre compte</h1>
            <p class="subtitle">Commencez avec 14 jours d'essai gratuit</p>

            @if(session('success'))
                <div class="alert alert-success">
                    {{ session('success') }}
                    @if(session('tenant_url'))
                        <br><br><a href="{{ session('tenant_url') }}">Cliquez ici pour vous connecter</a>
                    @endif
                </div>
            @endif

            @if($errors->any())
                <div class="alert alert-error">
                    @foreach($errors->all() as $error)
                        <div>{{ $error }}</div>
                    @endforeach
                </div>
            @endif

            <form method="POST" action="/register">
                @csrf

                <div class="form-group">
                    <label for="company_name">Nom de l'entreprise</label>
                    <input type="text" id="company_name" name="company_name" value="{{ old('company_name') }}" required placeholder="Ex: Ma Boutique">
                </div>

                <div class="form-group">
                    <label for="slug">Sous-domaine</label>
                    <input type="text" id="slug" name="slug" value="{{ old('slug') }}" required placeholder="ex: ma-boutique" pattern="[a-z0-9][a-z0-9-]*[a-z0-9]" oninput="this.value = this.value.toLowerCase().replace(/[^a-z0-9-]/g, '')">
                    <div class="slug-preview">Votre URL : <span id="slugPreview">votre-entreprise</span>.{{ config('app.base_domain') }}</div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label for="admin_name">Nom complet</label>
                        <input type="text" id="admin_name" name="admin_name" value="{{ old('admin_name') }}" required placeholder="Votre nom">
                    </div>
                    <div class="form-group">
                        <label for="admin_email">Email</label>
                        <input type="email" id="admin_email" name="admin_email" value="{{ old('admin_email') }}" required placeholder="votre@email.com">
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label for="password">Mot de passe</label>
                        <input type="password" id="password" name="password" required minlength="8" placeholder="Min. 8 caracteres">
                    </div>
                    <div class="form-group">
                        <label for="password_confirmation">Confirmer</label>
                        <input type="password" id="password_confirmation" name="password_confirmation" required placeholder="Confirmer le mot de passe">
                    </div>
                </div>

                <div class="form-group">
                    <label for="plan_id">Formule</label>
                    <select id="plan_id" name="plan_id" required>
                        @foreach($plans as $plan)
                            <option value="{{ $plan->id }}" {{ ($selectedPlan && $selectedPlan->id == $plan->id) ? 'selected' : '' }}>
                                {{ $plan->name }} - {{ number_format($plan->price, 0, ',', ' ') }} FCFA/mois
                            </option>
                        @endforeach
                    </select>
                </div>

                <button type="submit" class="btn">Creer mon compte</button>
            </form>
        </div>

        <a href="/" class="back-link">Retour a l'accueil</a>
    </div>

    <script>
        var slugInput = document.getElementById('slug');
        var slugPreview = document.getElementById('slugPreview');
        slugInput.addEventListener('input', function() {
            slugPreview.textContent = this.value || 'votre-entreprise';
        });
    </script>
</body>
</html>
