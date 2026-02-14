<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="StockyPTR - Solution de gestion commerciale complète : POS, inventaire, comptabilité, RH et plus encore.">
    <title>StockyPTR | Gestion Commerciale Intelligente</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
            --primary: #2563eb;
            --primary-dark: #1d4ed8;
            --indigo: #4f46e5;
            --indigo-dark: #4338ca;
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
            --green-50: #ecfdf5;
            --amber-500: #f59e0b;
            --amber-50: #fffbeb;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            color: var(--gray-800);
            line-height: 1.6;
            background: var(--white);
            -webkit-font-smoothing: antialiased;
        }

        a { text-decoration: none; color: inherit; }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
        }

        /* ========== HEADER ========== */
        .header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 100;
            background: rgba(255,255,255,0.95);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid var(--gray-200);
            transition: box-shadow 0.3s;
        }

        .header-inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 72px;
        }

        .logo {
            display: flex;
            align-items: center;
            gap: 12px;
            font-weight: 800;
            font-size: 1.4rem;
            color: var(--primary);
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

        .nav-links {
            display: flex;
            align-items: center;
            gap: 32px;
            list-style: none;
        }

        .nav-links a {
            font-size: 0.95rem;
            font-weight: 500;
            color: var(--gray-600);
            transition: color 0.2s;
        }

        .nav-links a:hover { color: var(--primary); }

        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 10px 24px;
            border-radius: 8px;
            font-weight: 600;
            font-size: 0.95rem;
            border: none;
            cursor: pointer;
            transition: all 0.2s;
            font-family: inherit;
        }

        .btn-primary {
            background: linear-gradient(135deg, var(--primary), var(--indigo));
            color: var(--white);
            box-shadow: 0 2px 8px rgba(37, 99, 235, 0.3);
        }

        .btn-primary:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 16px rgba(37, 99, 235, 0.4);
        }

        .btn-outline {
            background: transparent;
            color: var(--primary);
            border: 2px solid var(--primary);
        }

        .btn-outline:hover {
            background: var(--primary);
            color: var(--white);
        }

        .btn-large {
            padding: 14px 36px;
            font-size: 1.05rem;
            border-radius: 10px;
        }

        .btn-white {
            background: var(--white);
            color: var(--primary);
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .btn-white:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 16px rgba(0,0,0,0.15);
        }

        /* ========== HERO ========== */
        .hero {
            padding: 140px 0 80px;
            background: linear-gradient(135deg, #eff6ff 0%, #eef2ff 50%, #f5f3ff 100%);
            position: relative;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -20%;
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%);
            border-radius: 50%;
        }

        .hero::after {
            content: '';
            position: absolute;
            bottom: -30%;
            left: -10%;
            width: 500px;
            height: 500px;
            background: radial-gradient(circle, rgba(79,70,229,0.06) 0%, transparent 70%);
            border-radius: 50%;
        }

        .hero-content {
            position: relative;
            z-index: 1;
            text-align: center;
            max-width: 800px;
            margin: 0 auto;
        }

        .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 6px 16px;
            background: var(--white);
            border: 1px solid var(--gray-200);
            border-radius: 100px;
            font-size: 0.85rem;
            font-weight: 500;
            color: var(--gray-600);
            margin-bottom: 24px;
        }

        .hero-badge-dot {
            width: 8px;
            height: 8px;
            background: var(--green-500);
            border-radius: 50%;
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }

        .hero h1 {
            font-size: 3.2rem;
            font-weight: 800;
            line-height: 1.15;
            color: var(--gray-900);
            margin-bottom: 20px;
            letter-spacing: -0.02em;
        }

        .hero h1 span {
            background: linear-gradient(135deg, var(--primary), var(--indigo));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .hero p {
            font-size: 1.2rem;
            color: var(--gray-600);
            max-width: 600px;
            margin: 0 auto 36px;
            line-height: 1.7;
        }

        .hero-buttons {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 16px;
            flex-wrap: wrap;
        }

        /* ========== FEATURES ========== */
        .features {
            padding: 100px 0;
            background: var(--white);
        }

        .section-header {
            text-align: center;
            max-width: 600px;
            margin: 0 auto 64px;
        }

        .section-label {
            display: inline-block;
            font-size: 0.85rem;
            font-weight: 600;
            color: var(--primary);
            text-transform: uppercase;
            letter-spacing: 0.08em;
            margin-bottom: 12px;
        }

        .section-header h2 {
            font-size: 2.2rem;
            font-weight: 800;
            color: var(--gray-900);
            margin-bottom: 16px;
            letter-spacing: -0.02em;
        }

        .section-header p {
            font-size: 1.05rem;
            color: var(--gray-500);
            line-height: 1.7;
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
        }

        .feature-card {
            padding: 32px;
            border-radius: 16px;
            border: 1px solid var(--gray-200);
            background: var(--white);
            transition: all 0.3s;
        }

        .feature-card:hover {
            border-color: var(--primary);
            box-shadow: 0 8px 30px rgba(37, 99, 235, 0.08);
            transform: translateY(-4px);
        }

        .feature-icon {
            width: 52px;
            height: 52px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
        }

        .feature-icon svg { width: 26px; height: 26px; }

        .feature-icon-blue { background: #eff6ff; color: var(--primary); }
        .feature-icon-indigo { background: #eef2ff; color: var(--indigo); }
        .feature-icon-green { background: var(--green-50); color: var(--green-500); }
        .feature-icon-amber { background: var(--amber-50); color: var(--amber-500); }
        .feature-icon-purple { background: #f5f3ff; color: #7c3aed; }
        .feature-icon-rose { background: #fff1f2; color: #e11d48; }

        .feature-card h3 {
            font-size: 1.15rem;
            font-weight: 700;
            color: var(--gray-900);
            margin-bottom: 10px;
        }

        .feature-card p {
            font-size: 0.95rem;
            color: var(--gray-500);
            line-height: 1.6;
        }

        /* ========== PRICING ========== */
        .pricing {
            padding: 100px 0;
            background: linear-gradient(180deg, var(--gray-50) 0%, var(--white) 100%);
        }

        .pricing-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
            align-items: start;
        }

        .pricing-card {
            background: var(--white);
            border-radius: 20px;
            border: 1px solid var(--gray-200);
            padding: 40px 32px;
            position: relative;
            transition: all 0.3s;
        }

        .pricing-card:hover {
            box-shadow: 0 12px 40px rgba(0,0,0,0.08);
            transform: translateY(-4px);
        }

        .pricing-card.featured {
            border: 2px solid var(--primary);
            box-shadow: 0 12px 40px rgba(37, 99, 235, 0.12);
        }

        .pricing-badge {
            position: absolute;
            top: -14px;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, var(--primary), var(--indigo));
            color: var(--white);
            padding: 4px 20px;
            border-radius: 100px;
            font-size: 0.8rem;
            font-weight: 600;
            white-space: nowrap;
        }

        .pricing-card h3 {
            font-size: 1.3rem;
            font-weight: 700;
            color: var(--gray-900);
            margin-bottom: 8px;
        }

        .pricing-card .price {
            font-size: 2.4rem;
            font-weight: 800;
            color: var(--gray-900);
            margin-bottom: 4px;
        }

        .pricing-card .price-suffix {
            font-size: 1rem;
            font-weight: 500;
            color: var(--gray-500);
        }

        .pricing-card .price-period {
            font-size: 0.9rem;
            color: var(--gray-500);
            margin-bottom: 28px;
        }

        .pricing-divider {
            height: 1px;
            background: var(--gray-200);
            margin: 24px 0;
        }

        .pricing-features {
            list-style: none;
            margin-bottom: 32px;
        }

        .pricing-features li {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            padding: 8px 0;
            font-size: 0.92rem;
            color: var(--gray-700);
        }

        .pricing-features li svg {
            width: 20px;
            height: 20px;
            flex-shrink: 0;
            margin-top: 1px;
            color: var(--green-500);
        }

        .pricing-card .btn { width: 100%; }

        /* ========== CTA ========== */
        .cta {
            padding: 100px 0;
            background: linear-gradient(135deg, var(--gray-900), #1e1b4b);
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .cta::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 30% 50%, rgba(37,99,235,0.15) 0%, transparent 50%),
                        radial-gradient(circle at 70% 50%, rgba(79,70,229,0.1) 0%, transparent 50%);
        }

        .cta-content {
            position: relative;
            z-index: 1;
        }

        .cta h2 {
            font-size: 2.4rem;
            font-weight: 800;
            color: var(--white);
            margin-bottom: 16px;
        }

        .cta p {
            font-size: 1.15rem;
            color: var(--gray-300);
            max-width: 500px;
            margin: 0 auto 36px;
        }

        /* ========== FOOTER ========== */
        .footer {
            padding: 40px 0;
            background: var(--gray-900);
            border-top: 1px solid rgba(255,255,255,0.05);
        }

        .footer-inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 16px;
        }

        .footer-text {
            font-size: 0.9rem;
            color: var(--gray-500);
        }

        .footer-links {
            display: flex;
            gap: 24px;
            list-style: none;
        }

        .footer-links a {
            font-size: 0.9rem;
            color: var(--gray-500);
            transition: color 0.2s;
        }

        .footer-links a:hover { color: var(--white); }

        /* ========== MOBILE MENU ========== */
        .mobile-toggle {
            display: none;
            background: none;
            border: none;
            cursor: pointer;
            padding: 8px;
        }

        .mobile-toggle svg { width: 28px; height: 28px; color: var(--gray-700); }

        /* ========== RESPONSIVE ========== */
        @media (max-width: 1024px) {
            .features-grid,
            .pricing-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 768px) {
            .nav-links { display: none; }
            .mobile-toggle { display: block; }

            .nav-links.open {
                display: flex;
                flex-direction: column;
                position: absolute;
                top: 72px;
                left: 0;
                right: 0;
                background: var(--white);
                padding: 24px;
                border-bottom: 1px solid var(--gray-200);
                box-shadow: 0 8px 20px rgba(0,0,0,0.08);
            }

            .hero { padding: 120px 0 60px; }

            .hero h1 { font-size: 2.2rem; }

            .hero p { font-size: 1.05rem; }

            .features-grid,
            .pricing-grid {
                grid-template-columns: 1fr;
            }

            .section-header h2 { font-size: 1.8rem; }

            .pricing-card.featured { order: -1; }

            .cta h2 { font-size: 1.8rem; }

            .footer-inner {
                flex-direction: column;
                text-align: center;
            }
        }

        @media (max-width: 480px) {
            .hero h1 { font-size: 1.8rem; }
            .hero-buttons { flex-direction: column; width: 100%; }
            .hero-buttons .btn { width: 100%; }
            .pricing-card .price { font-size: 2rem; }
        }
    </style>
</head>
<body>

<!-- ========== HEADER ========== -->
<header class="header">
    <div class="container header-inner">
        <a href="/" class="logo">
            <div class="logo-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
            </div>
            StockyPTR
        </a>

        <nav>
            <ul class="nav-links" id="navLinks">
                <li><a href="#fonctionnalites">Fonctionnalites</a></li>
                <li><a href="#abonnements">Abonnements</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="/register" class="btn btn-primary">Essai gratuit</a></li>
            </ul>
        </nav>

        <button class="mobile-toggle" onclick="document.getElementById('navLinks').classList.toggle('open')" aria-label="Menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
        </button>
    </div>
</header>

<!-- ========== HERO ========== -->
<section class="hero">
    <div class="container hero-content">
        <div class="hero-badge">
            <span class="hero-badge-dot"></span>
            Solution de gestion commerciale #1 au Niger
        </div>
        <h1>Gerez votre entreprise avec <span>intelligence et simplicite</span></h1>
        <p>StockyPTR est une solution tout-en-un pour la gestion commerciale : point de vente, inventaire, comptabilite, ressources humaines et bien plus encore.</p>
        <div class="hero-buttons">
            <a href="/register" class="btn btn-primary btn-large">Commencer gratuitement</a>
            <a href="#abonnements" class="btn btn-outline btn-large">Voir les tarifs</a>
        </div>
    </div>
</section>

<!-- ========== FEATURES ========== -->
<section class="features" id="fonctionnalites">
    <div class="container">
        <div class="section-header">
            <span class="section-label">Fonctionnalites</span>
            <h2>Tout ce dont vous avez besoin pour gerer votre activite</h2>
            <p>Une plateforme complete qui couvre tous les aspects de votre gestion commerciale.</p>
        </div>

        <div class="features-grid">
            <!-- POS -->
            <div class="feature-card">
                <div class="feature-icon feature-icon-blue">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                        <line x1="8" y1="21" x2="16" y2="21"/>
                        <line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>
                </div>
                <h3>Point de Vente (POS)</h3>
                <p>Interface de caisse intuitive et rapide. Gerez vos ventes au comptoir, appliquez des remises et generez des recus instantanement.</p>
            </div>

            <!-- Inventaire -->
            <div class="feature-card">
                <div class="feature-icon feature-icon-indigo">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                        <line x1="12" y1="22.08" x2="12" y2="12"/>
                    </svg>
                </div>
                <h3>Gestion d'Inventaire</h3>
                <p>Suivez vos stocks en temps reel, gerez les transferts entre entrepots et recevez des alertes de stock bas automatiquement.</p>
            </div>

            <!-- Comptabilite -->
            <div class="feature-card">
                <div class="feature-icon feature-icon-green">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="12" y1="1" x2="12" y2="23"/>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    </svg>
                </div>
                <h3>Comptabilite</h3>
                <p>Gerez depenses, depots, transferts d'argent et suivez vos finances en detail avec des rapports comptables complets.</p>
            </div>

            <!-- RH -->
            <div class="feature-card">
                <div class="feature-icon feature-icon-amber">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                </div>
                <h3>Ressources Humaines</h3>
                <p>Gerez employes, presences, conges, paie et departements. Un module RH complet integre a votre gestion commerciale.</p>
            </div>

            <!-- Rapports -->
            <div class="feature-card">
                <div class="feature-icon feature-icon-purple">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="20" x2="18" y2="10"/>
                        <line x1="12" y1="20" x2="12" y2="4"/>
                        <line x1="6" y1="20" x2="6" y2="14"/>
                    </svg>
                </div>
                <h3>Rapports et Analyses</h3>
                <p>Tableaux de bord dynamiques, rapports de ventes, achats, benefices et performances. Prenez des decisions eclairees.</p>
            </div>

            <!-- Multi-entrepots -->
            <div class="feature-card">
                <div class="feature-icon feature-icon-rose">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                        <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                </div>
                <h3>Multi-Entrepots</h3>
                <p>Gerez plusieurs points de vente et entrepots depuis une seule interface. Transferts de stock et rapports par emplacement.</p>
            </div>
        </div>
    </div>
</section>

<!-- ========== PRICING ========== -->
<section class="pricing" id="abonnements">
    <div class="container">
        <div class="section-header">
            <span class="section-label">Abonnements</span>
            <h2>Choisissez la formule adaptee a vos besoins</h2>
            <p>Des offres flexibles pour accompagner la croissance de votre entreprise.</p>
        </div>

        <div class="pricing-grid">
            <!-- BASIC -->
            <div class="pricing-card">
                <h3>Basic</h3>
                <div class="price">30 000 <span class="price-suffix">FCFA</span></div>
                <div class="price-period">par mois</div>

                <div class="pricing-divider"></div>

                <ul class="pricing-features">
                    <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        Jusqu'a 3 entrepots
                    </li>
                    <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        1 commercial par entrepot
                    </li>
                    <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        Gestion produits et categories
                    </li>
                    <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        POS basique
                    </li>
                    <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        Ventes et achats
                    </li>
                    <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        Rapports de base
                    </li>
                    <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        5 utilisateurs maximum
                    </li>
                </ul>

                <a href="/register/basic" class="btn btn-outline">Commencer</a>
            </div>

            <!-- MEDIUM -->
            <div class="pricing-card featured">
                <div class="pricing-badge">Le plus populaire</div>
                <h3>Medium</h3>
                <div class="price">70 000 <span class="price-suffix">FCFA</span></div>
                <div class="price-period">par mois</div>

                <div class="pricing-divider"></div>

                <ul class="pricing-features">
                    <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        Jusqu'a 10 entrepots
                    </li>
                    <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        Comptabilite complete
                    </li>
                    <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        Devis et quotations
                    </li>
                    <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        Retours ventes et achats
                    </li>
                    <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        Notifications SMS et Email
                    </li>
                    <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        Impression codes-barres
                    </li>
                    <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        15 utilisateurs maximum
                    </li>
                    <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        Multi-devises
                    </li>
                </ul>

                <a href="/register/medium" class="btn btn-primary">Commencer</a>
            </div>

            <!-- PREMIUM -->
            <div class="pricing-card">
                <h3>Premium</h3>
                <div class="price">200 000 <span class="price-suffix">FCFA</span></div>
                <div class="price-period">par mois</div>

                <div class="pricing-divider"></div>

                <ul class="pricing-features">
                    <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        Entrepots illimites
                    </li>
                    <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        Module RH complet
                    </li>
                    <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        Gestion projets et taches
                    </li>
                    <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        Abonnements recurrents
                    </li>
                    <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        Integration Stripe et WhatsApp
                    </li>
                    <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        Rapports avances
                    </li>
                    <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        Utilisateurs illimites
                    </li>
                    <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        Sauvegardes automatiques
                    </li>
                    <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        Support prioritaire
                    </li>
                </ul>

                <a href="/register/premium" class="btn btn-outline">Commencer</a>
            </div>
        </div>
    </div>
</section>

<!-- ========== CTA ========== -->
<section class="cta" id="contact">
    <div class="container cta-content">
        <h2>Pret a transformer votre gestion commerciale ?</h2>
        <p>Rejoignez les entreprises nigeriennes qui font confiance a StockyPTR pour leur croissance.</p>
        <a href="/register" class="btn btn-white btn-large">Commencer gratuitement - 14 jours d'essai</a>
    </div>
</section>

<!-- ========== FOOTER ========== -->
<footer class="footer">
    <div class="container footer-inner">
        <div class="footer-text">&copy; {{ date('Y') }} StockyPTR. Tous droits reserves. PTR Niger.</div>
        <ul class="footer-links">
            <li><a href="#fonctionnalites">Fonctionnalites</a></li>
            <li><a href="#abonnements">Abonnements</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </div>
</footer>

<script>
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Close mobile menu if open
                document.getElementById('navLinks').classList.remove('open');
            }
        });
    });
</script>

</body>
</html>
