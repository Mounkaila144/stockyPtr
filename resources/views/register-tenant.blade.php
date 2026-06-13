<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscription | Wuroobiz</title>
    <link rel="icon" type="image/jpeg" href="/icone.jpeg">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
            --primary: #2596be;
            --primary-dark: #1e7a9e;
            --red: #e63946;
            --red-dark: #c5303c;
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
            background: linear-gradient(135deg, #e8f6fc 0%, #f0f9ff 50%, #fef2f2 100%);
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
            margin-bottom: 32px;
        }
        .logo img {
            height: 52px;
            width: auto;
        }
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
        .card .subtitle strong {
            color: var(--primary);
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
            box-shadow: 0 0 0 3px rgba(37, 150, 190, 0.12);
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
            background: var(--red);
            color: var(--white);
            box-shadow: 0 2px 8px rgba(230, 57, 70, 0.3);
            margin-top: 8px;
        }
        .btn:hover {
            background: var(--red-dark);
            transform: translateY(-1px);
            box-shadow: 0 4px 16px rgba(230, 57, 70, 0.4);
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

        /* ========== PLAN CARDS ========== */
        .plans-label {
            display: block;
            font-size: 0.875rem;
            font-weight: 600;
            color: var(--gray-700);
            margin-bottom: 10px;
        }
        .plans-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
            margin-bottom: 20px;
        }
        .plan-card {
            position: relative;
            border: 2px solid var(--gray-200);
            border-radius: 12px;
            padding: 16px 12px;
            text-align: center;
            cursor: pointer;
            transition: all 0.2s;
            background: var(--white);
        }
        .plan-card:hover {
            border-color: var(--primary);
        }
        .plan-card.selected {
            border-color: var(--primary);
            background: #e8f6fc;
            box-shadow: 0 0 0 3px rgba(37, 150, 190, 0.12);
        }
        .plan-card .plan-name {
            font-size: 0.85rem;
            font-weight: 700;
            color: var(--gray-900);
            margin-bottom: 4px;
        }
        .plan-card .plan-price {
            font-size: 0.95rem;
            font-weight: 800;
            color: var(--primary);
        }
        .plan-card .plan-price small {
            font-size: 0.7rem;
            font-weight: 500;
            color: var(--gray-500);
        }
        .plan-card .plan-popular {
            position: absolute;
            top: -10px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--red);
            color: var(--white);
            padding: 2px 10px;
            border-radius: 100px;
            font-size: 0.65rem;
            font-weight: 600;
            white-space: nowrap;
        }
        .plan-card input[type="radio"] {
            display: none;
        }

        .back-link {
            display: block;
            text-align: center;
            margin-top: 20px;
            color: var(--gray-500);
            font-size: 0.9rem;
            transition: color 0.2s;
        }
        .back-link:hover { color: var(--primary); }

        .divider {
            height: 1px;
            background: var(--gray-200);
            margin: 24px 0;
        }

        @media (max-width: 480px) {
            .form-row { grid-template-columns: 1fr; }
            .plans-grid { grid-template-columns: 1fr; }
            .card { padding: 24px; }
        }
    </style>
</head>
<body>
    <div class="register-container">
        <a href="/" class="logo">
            <img src="/logow.png" alt="Wuroobiz">
        </a>

        <div class="card">
            <h1>Creer votre compte</h1>
            <p class="subtitle">Commencez avec <strong>1 semaine d'essai gratuit</strong></p>

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

                <div class="divider"></div>

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

                <div class="form-group">
                    <label for="phone">Telephone</label>
                    <input type="tel" id="phone" name="phone" value="{{ old('phone') }}" required placeholder="Ex: +227 90 00 00 00">
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label for="password">Mot de passe</label>
                        <input type="password" id="password" name="password" required minlength="8" placeholder="Min. 8 caracteres">
                    </div>
                    <div class="form-group">
                        <label for="password_confirmation">Confirmer</label>
                        <input type="password" id="password_confirmation" name="password_confirmation" required placeholder="Confirmer">
                    </div>
                </div>

                <div class="divider"></div>

                <label class="plans-label">Choisissez votre formule</label>
                <div class="plans-grid">
                    @foreach($plans as $index => $plan)
                        <label class="plan-card {{ ($selectedPlan && $selectedPlan->id == $plan->id) ? 'selected' : ($index == 1 && !$selectedPlan ? 'selected' : '') }}" data-plan-id="{{ $plan->id }}">
                            @if($index == 1)
                                <div class="plan-popular">Populaire</div>
                            @endif
                            <input type="radio" name="plan_id" value="{{ $plan->id }}" {{ ($selectedPlan && $selectedPlan->id == $plan->id) ? 'checked' : ($index == 1 && !$selectedPlan ? 'checked' : '') }} required>
                            <div class="plan-name">{{ $plan->name }}</div>
                            <div class="plan-price">{{ number_format($plan->price, 0, ',', ' ') }} <small>FCFA/mois</small></div>
                        </label>
                    @endforeach
                </div>

                <button type="submit" class="btn">Creer mon compte</button>
            </form>
        </div>

        <a href="/" class="back-link">← Retour a l'accueil</a>
    </div>

    <script>
        // Slug preview
        var slugInput = document.getElementById('slug');
        var slugPreview = document.getElementById('slugPreview');
        slugInput.addEventListener('input', function() {
            slugPreview.textContent = this.value || 'votre-entreprise';
        });

        // Plan card selection
        document.querySelectorAll('.plan-card').forEach(function(card) {
            card.addEventListener('click', function() {
                document.querySelectorAll('.plan-card').forEach(function(c) { c.classList.remove('selected'); });
                this.classList.add('selected');
                this.querySelector('input[type="radio"]').checked = true;
            });
        });
    </script>
</body>
</html>
