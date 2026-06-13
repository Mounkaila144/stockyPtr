<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Periode d'essai terminee | Wuroobiz</title>
    <link rel="icon" type="image/jpeg" href="/icone.jpeg">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
            --primary: #2596be;
            --primary-dark: #1e7a9e;
            --primary-light: #e8f6fc;
            --gray-50: #f9fafb;
            --gray-100: #f3f4f6;
            --gray-400: #9ca3af;
            --gray-500: #6b7280;
            --gray-600: #4b5563;
            --gray-700: #374151;
            --gray-800: #1f2937;
            --white: #ffffff;
            --amber-500: #f59e0b;
            --amber-50: #fffbeb;
            --green-500: #10b981;
        }

        html { scroll-behavior: smooth; }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            color: var(--gray-800);
            line-height: 1.6;
            background: linear-gradient(135deg, var(--primary-light) 0%, var(--gray-50) 50%, var(--amber-50) 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            -webkit-font-smoothing: antialiased;
        }

        .container {
            max-width: 580px;
            width: 100%;
        }

        .card {
            background: var(--white);
            border-radius: 20px;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05), 0 20px 50px -12px rgba(0,0,0,0.12);
            padding: 48px 40px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, var(--primary), var(--amber-500));
        }

        .icon-wrapper {
            width: 80px;
            height: 80px;
            background: var(--amber-50);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 24px;
        }

        .icon-wrapper svg {
            width: 40px;
            height: 40px;
            color: var(--amber-500);
        }

        .logo {
            max-height: 40px;
            margin-bottom: 32px;
        }

        h1 {
            font-size: 24px;
            font-weight: 800;
            color: var(--gray-800);
            margin-bottom: 8px;
        }

        .tenant-name {
            font-size: 15px;
            color: var(--primary);
            font-weight: 600;
            margin-bottom: 20px;
        }

        .message {
            font-size: 15px;
            color: var(--gray-600);
            line-height: 1.7;
            margin-bottom: 32px;
        }

        .info-box {
            background: var(--gray-50);
            border: 1px solid var(--gray-100);
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 32px;
            text-align: left;
        }

        .info-box h3 {
            font-size: 13px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: var(--gray-500);
            margin-bottom: 12px;
        }

        .info-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px 0;
        }

        .info-row:not(:last-child) {
            border-bottom: 1px solid var(--gray-100);
        }

        .info-label {
            font-size: 14px;
            color: var(--gray-500);
        }

        .info-value {
            font-size: 14px;
            font-weight: 600;
            color: var(--gray-800);
        }

        .status-badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 3px 10px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            background: #fef2f2;
            color: #dc2626;
        }

        .status-badge::before {
            content: '';
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: currentColor;
        }

        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 14px 32px;
            border-radius: 12px;
            font-size: 15px;
            font-weight: 600;
            font-family: inherit;
            border: none;
            cursor: pointer;
            transition: all 0.2s ease;
            text-decoration: none;
            width: 100%;
        }

        .btn-primary {
            background: var(--primary);
            color: var(--white);
        }

        .btn-primary:hover {
            background: var(--primary-dark);
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(37, 150, 190, 0.35);
        }

        .btn-outline {
            background: transparent;
            color: var(--gray-600);
            border: 1px solid var(--gray-200);
            margin-top: 12px;
        }

        .btn-outline:hover {
            background: var(--gray-50);
            color: var(--gray-800);
            border-color: var(--gray-300);
        }

        .btn svg {
            width: 18px;
            height: 18px;
        }

        .footer {
            text-align: center;
            margin-top: 24px;
            font-size: 13px;
            color: var(--gray-400);
        }

        .footer a {
            color: var(--primary);
            text-decoration: none;
            font-weight: 500;
        }

        .footer a:hover {
            text-decoration: underline;
        }

        @media (max-width: 480px) {
            .card { padding: 36px 24px; }
            h1 { font-size: 20px; }
            .btn { padding: 12px 24px; font-size: 14px; }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="card">
            <img src="/logow.png" alt="Wuroobiz" class="logo" onerror="this.style.display='none'">

            <div class="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </div>

            <h1>Periode d'essai terminee</h1>
            <p class="tenant-name">{{ $tenant->name }}</p>

            <p class="message">
                Votre periode d'essai gratuite est arrivee a son terme.
                Vos donnees sont en securite et toujours accessibles.
                Pour continuer a utiliser Wuroobiz, veuillez souscrire a un abonnement.
            </p>

            <div class="info-box">
                <h3>Details du compte</h3>
                <div class="info-row">
                    <span class="info-label">Entreprise</span>
                    <span class="info-value">{{ $tenant->name }}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Fin de l'essai</span>
                    <span class="info-value">{{ $tenant->trial_ends_at->format('d/m/Y H:i') }}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Statut</span>
                    <span class="status-badge">Expire</span>
                </div>
            </div>

            <a href="https://wuroobiz.ptrniger.com/#pricing" class="btn btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                </svg>
                Voir les offres d'abonnement
            </a>

            <a href="https://wa.me/22780406060?text=Bonjour%2C%20je%20souhaite%20renouveler%20mon%20abonnement%20Wuroobiz%20pour%20{{ urlencode($tenant->name) }}" class="btn btn-outline">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
                Nous contacter sur WhatsApp
            </a>
        </div>

        <p class="footer">
            &copy; {{ date('Y') }} <a href="https://wuroobiz.ptrniger.com">Wuroobiz</a> par PTR Niger
        </p>
    </div>
</body>
</html>
