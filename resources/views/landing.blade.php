<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Wuroobiz par PTR Niger - Plateforme de gestion commerciale complete pour les entreprises africaines : POS, inventaire, comptabilite, RH, Agent IA WhatsApp. Essai gratuit 7 jours.">
    <meta name="keywords" content="gestion commerciale, POS, point de vente, inventaire, comptabilite, Niger, Afrique, PTR Niger, Wuroobiz, logiciel, SaaS">
    <meta name="author" content="PTR Niger">
    <meta property="og:title" content="Wuroobiz - Plateforme de Gestion Commerciale par PTR Niger">
    <meta property="og:description" content="Solution tout-en-un pour gerer votre entreprise : POS, inventaire, comptabilite, RH et agent IA WhatsApp. Essai gratuit 7 jours.">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="fr_FR">
    <title>Wuroobiz | Plateforme de Gestion Commerciale par PTR Niger</title>
    <link rel="icon" type="image/jpeg" href="/icone.jpeg">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <style>
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
            --primary: #2596be;
            --primary-dark: #1e7a9e;
            --primary-light: #e8f6fc;
            --red: #e63946;
            --red-dark: #c5303c;
            --red-light: #fef2f2;
            --gray-50: #f9fafb;
            --gray-100: #f3f4f6;
            --gray-200: #e5e7eb;
            --gray-300: #d1d5db;
            --gray-400: #9ca3af;
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
            --whatsapp: #25D366;
            --whatsapp-dark: #1da851;
            --purple-500: #8b5cf6;
            --purple-50: #f5f3ff;
            --teal-500: #14b8a6;
            --teal-50: #f0fdfa;
            --cyan-500: #06b6d4;
            --cyan-50: #ecfeff;
            --blue-600: #2563eb;
            --blue-50: #eff6ff;
        }

        html { scroll-behavior: smooth; }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            color: var(--gray-800);
            line-height: 1.6;
            background: var(--white);
            -webkit-font-smoothing: antialiased;
            overflow-x: hidden;
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
            background: rgba(255,255,255,0.97);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border-bottom: 1px solid var(--gray-200);
            transition: box-shadow 0.3s;
        }

        .header.scrolled { box-shadow: 0 2px 20px rgba(0,0,0,0.08); }

        .header-inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 72px;
        }

        .logo { display: flex; align-items: center; gap: 10px; }
        .logo img { height: 44px; width: auto; }

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
            transition: all 0.25s ease;
            font-family: inherit;
            white-space: nowrap;
        }

        .btn-primary { background: var(--primary); color: var(--white); box-shadow: 0 2px 8px rgba(37,150,190,0.3); }
        .btn-primary:hover { background: var(--primary-dark); transform: translateY(-2px); box-shadow: 0 6px 20px rgba(37,150,190,0.35); }
        .btn-red { background: var(--red); color: var(--white); box-shadow: 0 2px 8px rgba(230,57,70,0.3); }
        .btn-red:hover { background: var(--red-dark); transform: translateY(-2px); box-shadow: 0 6px 20px rgba(230,57,70,0.35); }
        .btn-outline { background: transparent; color: var(--primary); border: 2px solid var(--primary); }
        .btn-outline:hover { background: var(--primary); color: var(--white); }
        .btn-outline-white { background: transparent; color: var(--white); border: 2px solid rgba(255,255,255,0.4); }
        .btn-outline-white:hover { background: var(--white); color: var(--gray-900); border-color: var(--white); }
        .btn-large { padding: 14px 36px; font-size: 1.05rem; border-radius: 10px; }
        .btn-white { background: var(--white); color: var(--primary); box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
        .btn-white:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.15); }
        .btn-whatsapp { background: var(--whatsapp); color: var(--white); box-shadow: 0 2px 8px rgba(37,211,102,0.3); }
        .btn-whatsapp:hover { background: var(--whatsapp-dark); transform: translateY(-2px); box-shadow: 0 6px 20px rgba(37,211,102,0.35); }
        .btn-ghost { background: rgba(255,255,255,0.1); color: var(--white); border: 1px solid rgba(255,255,255,0.2); }
        .btn-ghost:hover { background: rgba(255,255,255,0.2); }

        /* ========== HERO ========== */
        .hero {
            padding: 140px 0 100px;
            background: linear-gradient(135deg, #e8f6fc 0%, #f0f9ff 40%, #fef2f2 100%);
            position: relative;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -20%;
            width: 700px;
            height: 700px;
            background: radial-gradient(circle, rgba(37,150,190,0.1) 0%, transparent 70%);
            border-radius: 50%;
        }

        .hero::after {
            content: '';
            position: absolute;
            bottom: -30%;
            left: -10%;
            width: 500px;
            height: 500px;
            background: radial-gradient(circle, rgba(230,57,70,0.06) 0%, transparent 70%);
            border-radius: 50%;
        }

        .hero-content {
            position: relative;
            z-index: 1;
            text-align: center;
            max-width: 850px;
            margin: 0 auto;
        }

        .hero-logo { margin-bottom: 28px; }
        .hero-logo img { height: 80px; width: auto; border-radius: 16px; box-shadow: 0 8px 30px rgba(0,0,0,0.1); }

        .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 6px 18px;
            background: var(--white);
            border: 1px solid var(--gray-200);
            border-radius: 100px;
            font-size: 0.85rem;
            font-weight: 500;
            color: var(--gray-600);
            margin-bottom: 28px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }

        .hero-badge-dot {
            width: 8px; height: 8px;
            background: var(--green-500);
            border-radius: 50%;
            animation: pulse 2s infinite;
        }

        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }

        .hero h1 {
            font-size: 3.4rem;
            font-weight: 900;
            line-height: 1.12;
            color: var(--gray-900);
            margin-bottom: 24px;
            letter-spacing: -0.03em;
        }

        .hero h1 .text-blue { color: var(--primary); }
        .hero h1 .text-red { color: var(--red); }

        .hero p {
            font-size: 1.2rem;
            color: var(--gray-600);
            max-width: 620px;
            margin: 0 auto 40px;
            line-height: 1.75;
        }

        .hero-buttons {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 16px;
            flex-wrap: wrap;
            margin-bottom: 48px;
        }

        .hero-trust {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 24px;
            flex-wrap: wrap;
            font-size: 0.88rem;
            color: var(--gray-500);
        }

        .hero-trust-item {
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .hero-trust-item svg { width: 18px; height: 18px; color: var(--green-500); }

        /* ========== STATS BAR ========== */
        .stats {
            padding: 60px 0;
            background: var(--gray-900);
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 32px;
            text-align: center;
        }

        .stat-item h3 {
            font-size: 2.6rem;
            font-weight: 900;
            color: var(--primary);
            margin-bottom: 4px;
            letter-spacing: -0.02em;
        }

        .stat-item p {
            font-size: 0.92rem;
            color: var(--gray-400);
            font-weight: 500;
        }

        /* ========== SECTIONS COMMON ========== */
        .section-header {
            text-align: center;
            max-width: 680px;
            margin: 0 auto 64px;
        }

        .section-label {
            display: inline-block;
            font-size: 0.82rem;
            font-weight: 700;
            color: var(--primary);
            text-transform: uppercase;
            letter-spacing: 0.1em;
            margin-bottom: 14px;
        }

        .section-header h2 {
            font-size: 2.3rem;
            font-weight: 800;
            color: var(--gray-900);
            margin-bottom: 16px;
            letter-spacing: -0.02em;
            line-height: 1.2;
        }

        .section-header p {
            font-size: 1.05rem;
            color: var(--gray-500);
            line-height: 1.75;
        }

        /* ========== HOW IT WORKS ========== */
        .how-it-works {
            padding: 100px 0;
            background: var(--white);
        }

        .steps-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 32px;
            position: relative;
        }

        .steps-grid::before {
            content: '';
            position: absolute;
            top: 44px;
            left: 12%;
            right: 12%;
            height: 2px;
            background: linear-gradient(90deg, var(--primary), var(--red));
            opacity: 0.2;
        }

        .step-card {
            text-align: center;
            position: relative;
        }

        .step-number {
            width: 56px;
            height: 56px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.3rem;
            font-weight: 800;
            margin: 0 auto 20px;
            position: relative;
            z-index: 1;
        }

        .step-number.blue { background: var(--primary-light); color: var(--primary); }
        .step-number.red { background: var(--red-light); color: var(--red); }
        .step-number.green { background: var(--green-50); color: var(--green-500); }
        .step-number.amber { background: var(--amber-50); color: var(--amber-500); }

        .step-card h3 { font-size: 1.05rem; font-weight: 700; color: var(--gray-900); margin-bottom: 8px; }
        .step-card p { font-size: 0.92rem; color: var(--gray-500); line-height: 1.65; }

        /* ========== FEATURES ========== */
        .features {
            padding: 100px 0;
            background: var(--gray-50);
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 28px;
        }

        .feature-card {
            padding: 32px;
            border-radius: 16px;
            border: 1px solid var(--gray-200);
            background: var(--white);
            transition: all 0.3s ease;
        }

        .feature-card:hover {
            border-color: var(--primary);
            box-shadow: 0 12px 40px rgba(37,150,190,0.1);
            transform: translateY(-6px);
        }

        .feature-icon {
            width: 52px; height: 52px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
        }

        .feature-icon svg { width: 26px; height: 26px; }
        .fi-blue { background: var(--primary-light); color: var(--primary); }
        .fi-red { background: var(--red-light); color: var(--red); }
        .fi-green { background: var(--green-50); color: var(--green-500); }
        .fi-amber { background: var(--amber-50); color: var(--amber-500); }
        .fi-teal { background: var(--teal-50); color: var(--teal-500); }
        .fi-cyan { background: var(--cyan-50); color: var(--cyan-500); }
        .fi-purple { background: var(--purple-50); color: var(--purple-500); }
        .fi-whatsapp { background: #dcfce7; color: var(--whatsapp); }

        .feature-card h3 { font-size: 1.1rem; font-weight: 700; color: var(--gray-900); margin-bottom: 10px; }
        .feature-card p { font-size: 0.93rem; color: var(--gray-500); line-height: 1.65; margin: 0; }

        .feature-badge {
            display: inline-block;
            background: linear-gradient(135deg, var(--purple-500), #a78bfa);
            color: var(--white);
            font-size: 0.7rem;
            font-weight: 700;
            padding: 3px 12px;
            border-radius: 100px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 12px;
        }

        /* ========== WHY CHOOSE US ========== */
        .why-us {
            padding: 100px 0;
            background: var(--white);
        }

        .why-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
        }

        .why-card {
            text-align: center;
            padding: 40px 28px;
            border-radius: 20px;
            background: linear-gradient(180deg, var(--gray-50) 0%, var(--white) 100%);
            border: 1px solid var(--gray-200);
            transition: all 0.3s ease;
        }

        .why-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 40px rgba(0,0,0,0.06);
        }

        .why-icon {
            width: 72px; height: 72px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
            font-size: 2rem;
        }

        .why-icon svg { width: 32px; height: 32px; }
        .why-icon.blue { background: var(--primary-light); color: var(--primary); }
        .why-icon.green { background: var(--green-50); color: var(--green-500); }
        .why-icon.amber { background: var(--amber-50); color: var(--amber-500); }

        .why-card h3 { font-size: 1.15rem; font-weight: 700; color: var(--gray-900); margin-bottom: 10px; }
        .why-card p { font-size: 0.93rem; color: var(--gray-500); line-height: 1.65; }

        /* ========== ABOUT ========== */
        .about {
            padding: 100px 0;
            background: linear-gradient(180deg, var(--gray-50) 0%, var(--white) 100%);
        }

        .about-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 64px;
            align-items: start;
        }

        .about-content h2 {
            font-size: 2rem;
            font-weight: 800;
            color: var(--gray-900);
            margin-bottom: 20px;
            letter-spacing: -0.02em;
        }

        .about-content p {
            font-size: 1rem;
            color: var(--gray-600);
            line-height: 1.8;
            margin-bottom: 16px;
        }

        .about-services {
            list-style: none;
            margin: 24px 0 32px;
        }

        .about-services li {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 10px 0;
            font-size: 0.95rem;
            font-weight: 500;
            color: var(--gray-700);
        }

        .about-services li svg {
            width: 20px; height: 20px;
            color: var(--primary);
            flex-shrink: 0;
        }

        .about-stats-row {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
            margin-top: 32px;
        }

        .about-stat {
            text-align: center;
            padding: 20px 12px;
            background: var(--white);
            border: 1px solid var(--gray-200);
            border-radius: 12px;
        }

        .about-stat h4 {
            font-size: 1.6rem;
            font-weight: 800;
            color: var(--primary);
            margin-bottom: 2px;
        }

        .about-stat p {
            font-size: 0.82rem;
            color: var(--gray-500);
            margin: 0;
            line-height: 1.4;
        }

        .about-visual {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .about-card {
            padding: 28px;
            border-radius: 16px;
            border: 1px solid var(--gray-200);
            background: var(--white);
            display: flex;
            align-items: flex-start;
            gap: 16px;
            transition: all 0.3s;
        }

        .about-card:hover {
            box-shadow: 0 8px 24px rgba(0,0,0,0.06);
            transform: translateY(-2px);
        }

        .about-card-icon {
            width: 48px; height: 48px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }

        .about-card-icon svg { width: 24px; height: 24px; }
        .about-card h4 { font-size: 1rem; font-weight: 700; color: var(--gray-900); margin-bottom: 6px; }
        .about-card p { font-size: 0.9rem; color: var(--gray-500); line-height: 1.6; margin: 0; }

        /* ========== PRICING ========== */
        .pricing {
            padding: 100px 0;
            background: linear-gradient(180deg, var(--white) 0%, var(--gray-50) 100%);
        }

        .pricing-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 28px;
            align-items: start;
        }

        .pricing-card {
            background: var(--white);
            border-radius: 20px;
            border: 1px solid var(--gray-200);
            padding: 40px 32px;
            position: relative;
            transition: all 0.3s ease;
        }

        .pricing-card:hover { box-shadow: 0 16px 48px rgba(0,0,0,0.08); transform: translateY(-6px); }
        .pricing-card.featured { border: 2px solid var(--red); box-shadow: 0 16px 48px rgba(230,57,70,0.12); }

        .pricing-badge {
            position: absolute;
            top: -14px;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, var(--red), #ff6b6b);
            color: var(--white);
            padding: 5px 24px;
            border-radius: 100px;
            font-size: 0.8rem;
            font-weight: 700;
            white-space: nowrap;
            box-shadow: 0 4px 12px rgba(230,57,70,0.3);
        }

        .pricing-card h3 { font-size: 1.3rem; font-weight: 700; color: var(--gray-900); margin-bottom: 8px; }
        .pricing-card .price { font-size: 2.5rem; font-weight: 900; color: var(--gray-900); margin-bottom: 4px; letter-spacing: -0.02em; }
        .pricing-card .price-suffix { font-size: 1rem; font-weight: 500; color: var(--gray-500); }
        .pricing-card .price-period { font-size: 0.9rem; color: var(--gray-500); margin-bottom: 28px; }
        .pricing-divider { height: 1px; background: var(--gray-200); margin: 24px 0; }

        .pricing-features { list-style: none; margin-bottom: 32px; }

        .pricing-features li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            padding: 7px 0;
            font-size: 0.91rem;
            color: var(--gray-700);
        }

        .pricing-features li svg { width: 20px; height: 20px; flex-shrink: 0; margin-top: 1px; color: var(--primary); }
        .pricing-features li.highlight { font-weight: 600; color: var(--gray-900); }
        .pricing-features li.highlight svg { color: var(--purple-500); }

        .pricing-card .btn { width: 100%; }

        .pricing-new-badge {
            display: inline-block;
            background: linear-gradient(135deg, var(--purple-500), #a78bfa);
            color: var(--white);
            font-size: 0.62rem;
            font-weight: 700;
            padding: 2px 8px;
            border-radius: 4px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-left: 4px;
            vertical-align: middle;
        }

        .pricing-trial {
            text-align: center;
            margin-top: 40px;
            padding: 24px;
            background: var(--green-50);
            border-radius: 12px;
            border: 1px solid rgba(16,185,129,0.2);
        }

        .pricing-trial p {
            font-size: 0.95rem;
            color: var(--gray-700);
        }

        .pricing-trial strong { color: var(--green-500); }

        /* ========== TESTIMONIALS ========== */
        .testimonials {
            padding: 100px 0;
            background: var(--gray-900);
            position: relative;
            overflow: hidden;
        }

        .testimonials::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: radial-gradient(circle at 20% 50%, rgba(37,150,190,0.1) 0%, transparent 50%);
        }

        .testimonials .section-label { color: rgba(37,150,190,0.8); }
        .testimonials .section-header h2 { color: var(--white); }
        .testimonials .section-header p { color: var(--gray-400); }

        .testimonials-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            position: relative;
            z-index: 1;
        }

        .testimonial-card {
            background: rgba(255,255,255,0.06);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 16px;
            padding: 32px;
            transition: all 0.3s;
        }

        .testimonial-card:hover {
            background: rgba(255,255,255,0.1);
            transform: translateY(-4px);
        }

        .testimonial-stars {
            display: flex;
            gap: 3px;
            margin-bottom: 16px;
        }

        .testimonial-stars svg { width: 18px; height: 18px; color: var(--amber-500); fill: var(--amber-500); }

        .testimonial-card blockquote {
            font-size: 0.95rem;
            color: var(--gray-300);
            line-height: 1.7;
            margin-bottom: 20px;
            font-style: italic;
        }

        .testimonial-author {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .testimonial-avatar {
            width: 44px; height: 44px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--primary), var(--teal-500));
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
            font-weight: 700;
            color: var(--white);
        }

        .testimonial-author-info h4 { font-size: 0.92rem; font-weight: 600; color: var(--white); }
        .testimonial-author-info p { font-size: 0.82rem; color: var(--gray-400); margin: 0; }

        /* ========== FAQ ========== */
        .faq {
            padding: 100px 0;
            background: var(--white);
        }

        .faq-list {
            max-width: 750px;
            margin: 0 auto;
        }

        .faq-item {
            border: 1px solid var(--gray-200);
            border-radius: 12px;
            margin-bottom: 12px;
            overflow: hidden;
            transition: all 0.3s;
        }

        .faq-item:hover { border-color: var(--primary); }

        .faq-question {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px 24px;
            cursor: pointer;
            background: var(--white);
            border: none;
            width: 100%;
            text-align: left;
            font-family: inherit;
            font-size: 1rem;
            font-weight: 600;
            color: var(--gray-900);
            transition: background 0.2s;
        }

        .faq-question:hover { background: var(--gray-50); }

        .faq-question svg {
            width: 22px; height: 22px;
            color: var(--gray-400);
            flex-shrink: 0;
            transition: transform 0.3s;
        }

        .faq-item.open .faq-question svg { transform: rotate(180deg); color: var(--primary); }

        .faq-answer {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease, padding 0.3s ease;
        }

        .faq-item.open .faq-answer {
            max-height: 300px;
        }

        .faq-answer-inner {
            padding: 0 24px 20px;
            font-size: 0.95rem;
            color: var(--gray-600);
            line-height: 1.75;
        }

        /* ========== CONTACT ========== */
        .contact {
            padding: 100px 0;
            background: var(--gray-50);
        }

        .contact-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
        }

        .contact-card {
            text-align: center;
            padding: 36px 20px;
            border-radius: 16px;
            border: 1px solid var(--gray-200);
            background: var(--white);
            transition: all 0.3s ease;
        }

        .contact-card:hover {
            border-color: var(--primary);
            box-shadow: 0 12px 40px rgba(37,150,190,0.1);
            transform: translateY(-6px);
        }

        .contact-card.whatsapp-card:hover { border-color: var(--whatsapp); box-shadow: 0 12px 40px rgba(37,211,102,0.15); }

        .contact-icon {
            width: 56px; height: 56px;
            border-radius: 50%;
            background: var(--primary-light);
            color: var(--primary);
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 16px;
        }

        .contact-icon svg { width: 26px; height: 26px; }
        .contact-icon.whatsapp-icon { background: #dcfce7; color: var(--whatsapp); }

        .contact-card h3 { font-size: 1rem; font-weight: 700; color: var(--gray-900); margin-bottom: 8px; }
        .contact-card p { font-size: 0.93rem; color: var(--gray-600); margin-bottom: 12px; line-height: 1.5; }
        .contact-card a:not(.btn) { color: var(--primary); font-weight: 600; transition: color 0.2s; }
        .contact-card a:not(.btn):hover { color: var(--primary-dark); }
        .contact-card .btn { margin-top: 8px; padding: 8px 20px; font-size: 0.85rem; }

        /* ========== CTA ========== */
        .cta {
            padding: 100px 0;
            background: linear-gradient(135deg, #0d3b4d 0%, var(--gray-900) 60%, #1a0a2e 100%);
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .cta::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: radial-gradient(circle at 30% 50%, rgba(37,150,190,0.15) 0%, transparent 50%),
                        radial-gradient(circle at 70% 50%, rgba(230,57,70,0.08) 0%, transparent 50%);
        }

        .cta-content { position: relative; z-index: 1; }
        .cta h2 { font-size: 2.5rem; font-weight: 900; color: var(--white); margin-bottom: 16px; letter-spacing: -0.02em; }
        .cta p { font-size: 1.15rem; color: var(--gray-300); max-width: 520px; margin: 0 auto 40px; line-height: 1.7; }

        .cta-buttons {
            display: flex;
            gap: 16px;
            justify-content: center;
            flex-wrap: wrap;
        }

        /* ========== FOOTER ========== */
        .footer {
            padding: 64px 0 40px;
            background: var(--gray-900);
            border-top: 1px solid rgba(255,255,255,0.05);
        }

        .footer-grid {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr;
            gap: 48px;
            margin-bottom: 48px;
        }

        .footer-about p {
            font-size: 0.9rem;
            color: var(--gray-500);
            line-height: 1.75;
            margin-top: 16px;
        }

        .footer-about img {
            height: 36px;
            width: auto;
            filter: brightness(0) invert(1);
            opacity: 0.8;
        }

        .footer-col h4 {
            font-size: 0.82rem;
            font-weight: 700;
            color: var(--gray-300);
            text-transform: uppercase;
            letter-spacing: 0.08em;
            margin-bottom: 20px;
        }

        .footer-col ul { list-style: none; }
        .footer-col ul li { margin-bottom: 12px; }

        .footer-col ul li a {
            font-size: 0.9rem;
            color: var(--gray-500);
            transition: color 0.2s;
        }

        .footer-col ul li a:hover { color: var(--white); }

        .footer-social {
            display: flex;
            gap: 10px;
            margin-top: 20px;
        }

        .footer-social a {
            width: 38px; height: 38px;
            border-radius: 10px;
            background: rgba(255,255,255,0.08);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s;
        }

        .footer-social a:hover { background: var(--primary); transform: translateY(-2px); }
        .footer-social a svg { width: 18px; height: 18px; color: var(--gray-400); }
        .footer-social a:hover svg { color: var(--white); }

        .footer-bottom {
            border-top: 1px solid rgba(255,255,255,0.08);
            padding-top: 24px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 12px;
        }

        .footer-bottom p {
            font-size: 0.85rem;
            color: var(--gray-500);
        }

        .footer-bottom a { color: var(--gray-400); text-decoration: underline; }
        .footer-bottom a:hover { color: var(--white); }

        /* ========== FLOATING WHATSAPP ========== */
        .whatsapp-float {
            position: fixed;
            bottom: 24px;
            right: 24px;
            z-index: 99;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: var(--whatsapp);
            color: var(--white);
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 20px rgba(37,211,102,0.4);
            transition: all 0.3s;
            animation: float-bounce 3s ease-in-out infinite;
        }

        .whatsapp-float:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 28px rgba(37,211,102,0.5);
            animation: none;
        }

        .whatsapp-float svg { width: 32px; height: 32px; }

        @keyframes float-bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
        }

        /* ========== MOBILE NAV ========== */
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
            .features-grid { grid-template-columns: repeat(2, 1fr); }
            .pricing-grid { grid-template-columns: repeat(2, 1fr); }
            .contact-grid { grid-template-columns: repeat(2, 1fr); }
            .about-grid { grid-template-columns: 1fr; gap: 40px; }
            .stats-grid { grid-template-columns: repeat(2, 1fr); }
            .footer-grid { grid-template-columns: 1fr 1fr; }
            .steps-grid { grid-template-columns: repeat(2, 1fr); gap: 40px; }
            .steps-grid::before { display: none; }
            .why-grid { grid-template-columns: repeat(2, 1fr); }
            .testimonials-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
            .nav-links { display: none; }
            .mobile-toggle { display: block; }

            .nav-links.open {
                display: flex;
                flex-direction: column;
                position: absolute;
                top: 72px;
                left: 0; right: 0;
                background: var(--white);
                padding: 24px;
                border-bottom: 1px solid var(--gray-200);
                box-shadow: 0 8px 20px rgba(0,0,0,0.08);
                gap: 16px;
            }

            .hero { padding: 120px 0 60px; }
            .hero h1 { font-size: 2.2rem; }
            .hero p { font-size: 1.05rem; }
            .hero-trust { flex-direction: column; gap: 8px; }
            .features-grid, .pricing-grid, .contact-grid, .why-grid, .testimonials-grid { grid-template-columns: 1fr; }
            .steps-grid { grid-template-columns: 1fr 1fr; }
            .section-header h2 { font-size: 1.8rem; }
            .pricing-card.featured { order: -1; }
            .cta h2 { font-size: 1.8rem; }
            .footer-grid { grid-template-columns: 1fr; gap: 32px; }
            .footer-bottom { flex-direction: column; text-align: center; }
            .about-stats-row { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 480px) {
            .hero { padding: 110px 0 50px; }
            .hero h1 { font-size: 1.8rem; }
            .hero-logo img { height: 64px; }
            .hero-buttons { flex-direction: column; width: 100%; }
            .hero-buttons .btn { width: 100%; }
            .pricing-card .price { font-size: 2rem; }
            .stats-grid { grid-template-columns: 1fr 1fr; gap: 20px; }
            .stat-item h3 { font-size: 1.8rem; }
            .steps-grid { grid-template-columns: 1fr; }
            .about-stats-row { grid-template-columns: 1fr; }
            .section-header h2 { font-size: 1.6rem; }
            .container { padding: 0 16px; }
        }
    </style>
</head>
<body>

<!-- ========== HEADER ========== -->
<header class="header" id="top">
    <div class="container header-inner">
        <a href="/" class="logo">
            <img src="/logow.png" alt="Wuroobiz">
        </a>

        <nav>
            <ul class="nav-links" id="navLinks">
                <li><a href="#fonctionnalites">Fonctionnalites</a></li>
                <li><a href="#abonnements">Abonnements</a></li>
                <li><a href="#a-propos">A propos</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="/register" class="btn btn-red">Essai gratuit</a></li>
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
        <div class="hero-logo">
            <img src="/icone.jpeg" alt="Wuroobiz">
        </div>
        <div class="hero-badge">
            <span class="hero-badge-dot"></span>
            Plateforme de Gestion Commerciale #1 au Niger
        </div>
        <h1>Gerez votre entreprise avec <span class="text-blue">intelligence</span> et <span class="text-red">simplicite</span></h1>
        <p>Wuroobiz est la solution tout-en-un developpee par PTR Niger pour la gestion commerciale : point de vente, inventaire, comptabilite, RH et agent IA WhatsApp.</p>
        <div class="hero-buttons">
            <a href="/register" class="btn btn-red btn-large">Commencer gratuitement</a>
            <a href="#abonnements" class="btn btn-outline btn-large">Voir les tarifs</a>
        </div>
        <div class="hero-trust">
            <span class="hero-trust-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                7 jours d'essai gratuit
            </span>
            <span class="hero-trust-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                Aucune carte bancaire requise
            </span>
            <span class="hero-trust-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                Support en francais
            </span>
        </div>
    </div>
</section>

<!-- ========== STATS BAR ========== -->
<section class="stats">
    <div class="container">
        <div class="stats-grid">
            <div class="stat-item">
                <h3>3 000+</h3>
                <p>Personnes formees par PTR Niger</p>
            </div>
            <div class="stat-item">
                <h3>25+</h3>
                <p>Promotions certifiees</p>
            </div>
            <div class="stat-item">
                <h3>100%</h3>
                <p>Approche pratique et professionnelle</p>
            </div>
            <div class="stat-item">
                <h3>24/7</h3>
                <p>Plateforme accessible en continu</p>
            </div>
        </div>
    </div>
</section>

<!-- ========== HOW IT WORKS ========== -->
<section class="how-it-works">
    <div class="container">
        <div class="section-header">
            <span class="section-label">Comment ca marche</span>
            <h2>Lancez-vous en 4 etapes simples</h2>
            <p>De l'inscription a la gestion complete de votre entreprise, tout se fait en quelques minutes.</p>
        </div>

        <div class="steps-grid">
            <div class="step-card">
                <div class="step-number blue">1</div>
                <h3>Creez votre compte</h3>
                <p>Inscrivez-vous gratuitement en moins de 2 minutes. Aucune carte bancaire requise pour l'essai.</p>
            </div>
            <div class="step-card">
                <div class="step-number red">2</div>
                <h3>Configurez votre espace</h3>
                <p>Ajoutez vos entrepots, produits, categories et parametrez votre point de vente selon vos besoins.</p>
            </div>
            <div class="step-card">
                <div class="step-number green">3</div>
                <h3>Gerez vos operations</h3>
                <p>Commencez a enregistrer ventes, achats, depenses et a suivre votre inventaire en temps reel.</p>
            </div>
            <div class="step-card">
                <div class="step-number amber">4</div>
                <h3>Analysez et grandissez</h3>
                <p>Consultez vos rapports detailles et prenez des decisions eclairees pour faire grandir votre activite.</p>
            </div>
        </div>
    </div>
</section>

<!-- ========== FEATURES ========== -->
<section class="features" id="fonctionnalites">
    <div class="container">
        <div class="section-header">
            <span class="section-label">Fonctionnalites</span>
            <h2>Tout ce dont vous avez besoin pour gerer votre activite</h2>
            <p>Une plateforme complete qui couvre tous les aspects de votre gestion commerciale, du point de vente a l'intelligence artificielle.</p>
        </div>

        <div class="features-grid">
            <!-- POS -->
            <div class="feature-card">
                <div class="feature-icon fi-blue">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                        <line x1="8" y1="21" x2="16" y2="21"/>
                        <line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>
                </div>
                <h3>Point de Vente (POS)</h3>
                <p>Interface de caisse intuitive et rapide. Gerez vos ventes au comptoir, appliquez des remises, acceptez plusieurs modes de paiement et generez des recus instantanement.</p>
            </div>

            <!-- Inventaire -->
            <div class="feature-card">
                <div class="feature-icon fi-red">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                        <line x1="12" y1="22.08" x2="12" y2="12"/>
                    </svg>
                </div>
                <h3>Gestion d'Inventaire</h3>
                <p>Suivez vos stocks en temps reel, gerez les transferts entre entrepots, recevez des alertes de stock bas et effectuez des ajustements d'inventaire.</p>
            </div>

            <!-- Comptabilite -->
            <div class="feature-card">
                <div class="feature-icon fi-green">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="12" y1="1" x2="12" y2="23"/>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    </svg>
                </div>
                <h3>Comptabilite</h3>
                <p>Gerez depenses, depots, transferts d'argent et suivez vos finances en detail avec des rapports de profits et pertes complets.</p>
            </div>

            <!-- Ventes & Achats -->
            <div class="feature-card">
                <div class="feature-icon fi-teal">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                    </svg>
                </div>
                <h3>Ventes et Achats</h3>
                <p>Gerez l'ensemble de votre cycle commercial : bons de commande, factures, retours, devis et paiements avec suivi complet des transactions.</p>
            </div>

            <!-- RH -->
            <div class="feature-card">
                <div class="feature-icon fi-amber">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                </div>
                <h3>Ressources Humaines</h3>
                <p>Gerez employes, presences, conges, paie, departements et plannings. Un module RH complet integre a votre gestion commerciale.</p>
            </div>

            <!-- Rapports -->
            <div class="feature-card">
                <div class="feature-icon fi-cyan">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="20" x2="18" y2="10"/>
                        <line x1="12" y1="20" x2="12" y2="4"/>
                        <line x1="6" y1="20" x2="6" y2="14"/>
                    </svg>
                </div>
                <h3>Rapports et Analyses</h3>
                <p>Tableaux de bord dynamiques avec 40+ rapports : ventes par produit, client, marque, categorie, benefices, stocks et performances globales.</p>
            </div>

            <!-- Multi-entrepots -->
            <div class="feature-card">
                <div class="feature-icon fi-blue">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                        <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                </div>
                <h3>Multi-Entrepots</h3>
                <p>Gerez plusieurs points de vente et entrepots depuis une seule interface. Transferts de stock et rapports detailles par emplacement.</p>
            </div>

            <!-- Notifications -->
            <div class="feature-card">
                <div class="feature-icon fi-whatsapp">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                </div>
                <h3>Notifications Multi-canal</h3>
                <p>Envoyez des notifications par SMS, Email et WhatsApp. Tenez vos clients informes de leurs commandes et factures en temps reel.</p>
            </div>

            <!-- Agent IA -->
            <div class="feature-card" style="border-color: var(--purple-500); border-width: 2px;">
                <span class="feature-badge">Nouveau</span>
                <div class="feature-icon fi-purple">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2a4 4 0 0 1 4 4v1a2 2 0 0 1 2 2v3a8 8 0 0 1-16 0V9a2 2 0 0 1 2-2V6a4 4 0 0 1 4-4z"/>
                        <circle cx="9" cy="13" r="1"/>
                        <circle cx="15" cy="13" r="1"/>
                        <path d="M9 17h6"/>
                    </svg>
                </div>
                <h3>Agent IA WhatsApp</h3>
                <p>Un assistant intelligent qui repond automatiquement aux messages WhatsApp de vos clients : disponibilite produits, prix, commandes et plus encore.</p>
            </div>
        </div>
    </div>
</section>

<!-- ========== WHY CHOOSE US ========== -->
<section class="why-us">
    <div class="container">
        <div class="section-header">
            <span class="section-label">Pourquoi Wuroobiz</span>
            <h2>Concu pour les entreprises africaines</h2>
            <p>Nous comprenons les realites du marche local et avons concu une solution adaptee a vos besoins specifiques.</p>
        </div>

        <div class="why-grid">
            <div class="why-card">
                <div class="why-icon blue">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <h3>Securite maximale</h3>
                <p>Chaque entreprise dispose de sa propre base de donnees isolee. Vos donnees sont chiffrees (SSL/TLS) et sauvegardees regulierement.</p>
            </div>
            <div class="why-card">
                <div class="why-icon green">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
                </div>
                <h3>Support local a Niamey</h3>
                <p>Notre equipe est basee a Niamey, Niger. Assistance en francais par telephone, email et WhatsApp. Nous parlons votre langue.</p>
            </div>
            <div class="why-card">
                <div class="why-icon amber">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                </div>
                <h3>Simple et rapide</h3>
                <p>Interface intuitive concue pour etre utilisee sans formation technique. Accessible depuis n'importe quel navigateur web, meme sur mobile.</p>
            </div>
        </div>
    </div>
</section>

<!-- ========== ABOUT PTR NIGER ========== -->
<section class="about" id="a-propos">
    <div class="container">
        <div class="about-grid">
            <div class="about-content">
                <span class="section-label">A propos de PTR Niger</span>
                <h2>Plus qu'un logiciel, un partenaire pour votre croissance</h2>
                <p><strong>PTR Niger</strong> est une entreprise nigerienne specialisee dans les technologies de l'information, la formation professionnelle et le developpement de solutions numeriques. Basee a Niamey, notre equipe accompagne les entreprises et les professionnels dans leur transformation digitale depuis plusieurs annees.</p>
                <p>Avec plus de <strong>3 000 personnes formees</strong>, <strong>25+ promotions certifiees</strong> et <strong>100+ formateurs de haut niveau</strong>, PTR Niger est un acteur majeur de l'ecosysteme numerique au Niger. Wuroobiz est ne de notre experience terrain aupres des commercants et entrepreneurs africains.</p>

                <ul class="about-services">
                    <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        Developpement de logiciels sur mesure
                    </li>
                    <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        Creation de sites web et applications mobiles
                    </li>
                    <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        Reseaux, systemes et maintenance informatique
                    </li>
                    <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        Formation professionnelle et e-learning
                    </li>
                    <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        Design graphique et marketing digital
                    </li>
                    <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        Services d'impression et licences logicielles
                    </li>
                </ul>

                <div class="about-stats-row">
                    <div class="about-stat">
                        <h4>3 000+</h4>
                        <p>Personnes formees</p>
                    </div>
                    <div class="about-stat">
                        <h4>25+</h4>
                        <p>Promotions certifiees</p>
                    </div>
                    <div class="about-stat">
                        <h4>100+</h4>
                        <p>Formateurs experts</p>
                    </div>
                </div>
            </div>

            <div class="about-visual">
                <div class="about-card">
                    <div class="about-card-icon fi-blue">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                    </div>
                    <div>
                        <h4>Plateforme e-learning</h4>
                        <p>Cours en ligne en informatique bureautique, graphic design, marketing digital et bien plus. Formation flexible et accessible a tous.</p>
                    </div>
                </div>
                <div class="about-card">
                    <div class="about-card-icon fi-purple">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                    </div>
                    <div>
                        <h4>Success Publishing</h4>
                        <p>Notre maison d'edition dediee aux livres de developpement personnel et de reussite professionnelle.</p>
                    </div>
                </div>
                <div class="about-card">
                    <div class="about-card-icon fi-red">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
                    </div>
                    <div>
                        <h4>DIGIDEV Academy</h4>
                        <p>Academie dediee au marketing digital et au developpement des competences numeriques pour les professionnels.</p>
                    </div>
                </div>
                <div class="about-card">
                    <div class="about-card-icon fi-green">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <div>
                        <h4>Securite et fiabilite</h4>
                        <p>Serveurs securises, chiffrement SSL, sauvegardes regulieres et bases de donnees isolees par client pour une protection maximale.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ========== PRICING ========== -->
<section class="pricing" id="abonnements">
    <div class="container">
        <div class="section-header">
            <span class="section-label">Abonnements</span>
            <h2>Des tarifs simples et transparents</h2>
            <p>Choisissez la formule adaptee a la taille de votre entreprise. Tous les plans incluent 7 jours d'essai gratuit.</p>
        </div>

        <div class="pricing-grid">
            <!-- BASIC -->
            <div class="pricing-card">
                <h3>Basic</h3>
                <div class="price">30 000 <span class="price-suffix">FCFA</span></div>
                <div class="price-period">par mois</div>

                <div class="pricing-divider"></div>

                <ul class="pricing-features">
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Jusqu'a 3 entrepots</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> 1 commercial par entrepot</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Gestion produits et categories</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> POS basique</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Ventes et achats</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Rapports de base</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> 5 utilisateurs maximum</li>
                </ul>

                <a href="/register/basic" class="btn btn-outline">Commencer l'essai</a>
            </div>

            <!-- MEDIUM -->
            <div class="pricing-card featured">
                <div class="pricing-badge">Le plus populaire</div>
                <h3>Medium</h3>
                <div class="price">70 000 <span class="price-suffix">FCFA</span></div>
                <div class="price-period">par mois</div>

                <div class="pricing-divider"></div>

                <ul class="pricing-features">
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Jusqu'a 10 entrepots</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Comptabilite complete</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Devis et quotations</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Retours ventes et achats</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Notifications SMS et Email</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Impression codes-barres</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> 15 utilisateurs maximum</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Multi-devises</li>
                    <li class="highlight">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        Agent IA WhatsApp <span class="pricing-new-badge">Nouveau</span>
                    </li>
                </ul>

                <a href="/register/medium" class="btn btn-red">Commencer l'essai</a>
            </div>

            <!-- PREMIUM -->
            <div class="pricing-card">
                <h3>Premium</h3>
                <div class="price">200 000 <span class="price-suffix">FCFA</span></div>
                <div class="price-period">par mois</div>

                <div class="pricing-divider"></div>

                <ul class="pricing-features">
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Entrepots illimites</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Module RH complet</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Gestion projets et taches</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Abonnements recurrents</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Integration Stripe et WhatsApp</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> 40+ rapports avances</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Utilisateurs illimites</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Sauvegardes automatiques</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Support prioritaire</li>
                    <li class="highlight">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        Agent IA WhatsApp avance <span class="pricing-new-badge">Inclus</span>
                    </li>
                </ul>

                <a href="/register/premium" class="btn btn-outline">Commencer l'essai</a>
            </div>
        </div>

        <div class="pricing-trial">
            <p><strong>7 jours d'essai gratuit</strong> sur tous les plans. Aucune carte bancaire requise. Annulez a tout moment.</p>
        </div>
    </div>
</section>

<!-- ========== TESTIMONIALS ========== -->
<section class="testimonials">
    <div class="container">
        <div class="section-header">
            <span class="section-label">Temoignages</span>
            <h2>Ce que disent nos utilisateurs</h2>
            <p>Decouvrez les retours des professionnels formes et accompagnes par PTR Niger.</p>
        </div>

        <div class="testimonials-grid">
            <div class="testimonial-card">
                <div class="testimonial-stars">
                    <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
                <blockquote>"Le meilleur programme de formation qui n'a jamais existe ! PTR Niger m'a donne les outils pour reussir dans le numerique."</blockquote>
                <div class="testimonial-author">
                    <div class="testimonial-avatar">AJ</div>
                    <div class="testimonial-author-info">
                        <h4>Abdoul Jalil</h4>
                        <p>Diplome IB08, Entrepreneur</p>
                    </div>
                </div>
            </div>

            <div class="testimonial-card">
                <div class="testimonial-stars">
                    <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
                <blockquote>"Les programmes de PTR Niger m'ont appris que les nouvelles technologies sont essentielles pour reussir en tant qu'entrepreneur aujourd'hui."</blockquote>
                <div class="testimonial-author">
                    <div class="testimonial-avatar">AO</div>
                    <div class="testimonial-author-info">
                        <h4>Aichatou I. Oumarou</h4>
                        <p>Etudiante en pharmacie, Entrepreneur</p>
                    </div>
                </div>
            </div>

            <div class="testimonial-card">
                <div class="testimonial-stars">
                    <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
                <blockquote>"La formation en informatique est indispensable de nos jours. PTR Niger offre un cadre d'apprentissage serieux pour ceux qui veulent avancer."</blockquote>
                <div class="testimonial-author">
                    <div class="testimonial-avatar">NY</div>
                    <div class="testimonial-author-info">
                        <h4>Nadia Yattara</h4>
                        <p>Manager et Comptable</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ========== FAQ ========== -->
<section class="faq" id="faq">
    <div class="container">
        <div class="section-header">
            <span class="section-label">Questions frequentes</span>
            <h2>Tout ce que vous devez savoir</h2>
            <p>Les reponses aux questions les plus posees sur Wuroobiz et nos services.</p>
        </div>

        <div class="faq-list">
            <div class="faq-item">
                <button class="faq-question" onclick="this.parentElement.classList.toggle('open')">
                    Qu'est-ce que Wuroobiz ?
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                </button>
                <div class="faq-answer">
                    <div class="faq-answer-inner">Wuroobiz est une plateforme de gestion commerciale en ligne (SaaS) developpee par PTR Niger. Elle offre un point de vente (POS), la gestion d'inventaire, la comptabilite, les ressources humaines, les rapports et un agent IA WhatsApp. Accessible depuis n'importe quel navigateur web.</div>
                </div>
            </div>

            <div class="faq-item">
                <button class="faq-question" onclick="this.parentElement.classList.toggle('open')">
                    L'essai gratuit est-il vraiment gratuit ?
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                </button>
                <div class="faq-answer">
                    <div class="faq-answer-inner">Oui, absolument ! Vous beneficiez de 7 jours d'essai gratuit sans aucun engagement. Aucune carte bancaire n'est requise pour commencer. Vous pouvez explorer toutes les fonctionnalites de votre plan choisi.</div>
                </div>
            </div>

            <div class="faq-item">
                <button class="faq-question" onclick="this.parentElement.classList.toggle('open')">
                    Mes donnees sont-elles en securite ?
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                </button>
                <div class="faq-answer">
                    <div class="faq-answer-inner">Absolument. Chaque entreprise dispose de sa propre base de donnees completement isolee. Toutes les communications sont chiffrees via SSL/TLS, les mots de passe sont haches avec bcrypt, et nous effectuons des sauvegardes regulieres de vos donnees.</div>
                </div>
            </div>

            <div class="faq-item">
                <button class="faq-question" onclick="this.parentElement.classList.toggle('open')">
                    Puis-je changer de plan a tout moment ?
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                </button>
                <div class="faq-answer">
                    <div class="faq-answer-inner">Oui, vous pouvez passer a un plan superieur ou inferieur a tout moment. Contactez notre equipe par telephone, email ou WhatsApp pour effectuer le changement. La transition se fait sans perte de donnees.</div>
                </div>
            </div>

            <div class="faq-item">
                <button class="faq-question" onclick="this.parentElement.classList.toggle('open')">
                    Qu'est-ce que l'Agent IA WhatsApp ?
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                </button>
                <div class="faq-answer">
                    <div class="faq-answer-inner">L'Agent IA WhatsApp est un assistant intelligent qui repond automatiquement aux messages WhatsApp de vos clients. Il peut informer sur la disponibilite des produits, les prix, prendre des commandes et repondre aux questions frequentes, 24h/24 et 7j/7.</div>
                </div>
            </div>

            <div class="faq-item">
                <button class="faq-question" onclick="this.parentElement.classList.toggle('open')">
                    Comment puis-je payer mon abonnement ?
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                </button>
                <div class="faq-answer">
                    <div class="faq-answer-inner">Les paiements s'effectuent en Francs CFA (FCFA) sur une base mensuelle. Contactez notre equipe pour les modalites de paiement disponibles. Nous acceptons differents modes de paiement adaptes au marche local.</div>
                </div>
            </div>

            <div class="faq-item">
                <button class="faq-question" onclick="this.parentElement.classList.toggle('open')">
                    Ai-je besoin d'installer un logiciel ?
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                </button>
                <div class="faq-answer">
                    <div class="faq-answer-inner">Non, aucune installation n'est necessaire. Wuroobiz fonctionne entierement dans votre navigateur web (Chrome, Firefox, Safari, Edge). Vous pouvez y acceder depuis un ordinateur, une tablette ou un telephone portable.</div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ========== CONTACT ========== -->
<section class="contact" id="contact">
    <div class="container">
        <div class="section-header">
            <span class="section-label">Contact</span>
            <h2>Contactez-nous</h2>
            <p>Une question ? Besoin d'une demonstration ? Notre equipe basee a Niamey est a votre disposition pour vous accompagner.</p>
        </div>

        <div class="contact-grid">
            <div class="contact-card">
                <div class="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                </div>
                <h3>Telephone</h3>
                <p>Appelez-nous directement</p>
                <a href="tel:+22770212112">+227 70 21 21 12</a>
            </div>

            <div class="contact-card">
                <div class="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                    </svg>
                </div>
                <h3>Email</h3>
                <p>Ecrivez-nous par email</p>
                <a href="mailto:mail@ptrniger.com">mail@ptrniger.com</a>
            </div>

            <div class="contact-card">
                <div class="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                    </svg>
                </div>
                <h3>Adresse</h3>
                <p>Venez nous rendre visite</p>
                <span style="color: var(--primary); font-weight: 600;">Koubia, Niamey, Niger</span>
            </div>

            <div class="contact-card whatsapp-card">
                <div class="contact-icon whatsapp-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <h3>WhatsApp</h3>
                <p>Reponse rapide garantie</p>
                <a href="https://wa.me/22770212112?text=Bonjour%20PTR%20Niger%2C%20je%20suis%20int%C3%A9ress%C3%A9(e)%20par%20Wuroobiz." class="btn btn-whatsapp" target="_blank" rel="noopener">Discuter sur WhatsApp</a>
            </div>
        </div>
    </div>
</section>

<!-- ========== CTA ========== -->
<section class="cta">
    <div class="container cta-content">
        <h2>Pret a transformer votre gestion commerciale ?</h2>
        <p>Rejoignez les entreprises nigeriennes qui font confiance a Wuroobiz pour leur croissance. Essai gratuit de 7 jours, sans engagement.</p>
        <div class="cta-buttons">
            <a href="/register" class="btn btn-white btn-large">Commencer gratuitement</a>
            <a href="https://wa.me/22770212112?text=Bonjour%20PTR%20Niger%2C%20je%20voudrais%20en%20savoir%20plus%20sur%20Wuroobiz." class="btn btn-whatsapp btn-large" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="currentColor" style="width:20px;height:20px"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Nous contacter
            </a>
            <a href="tel:+22770212112" class="btn btn-outline-white btn-large">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:20px;height:20px"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                +227 70 21 21 12
            </a>
        </div>
    </div>
</section>

<!-- ========== FOOTER ========== -->
<footer class="footer">
    <div class="container">
        <div class="footer-grid">
            <div class="footer-about">
                <img src="/logow.png" alt="Wuroobiz">
                <p>Wuroobiz est une plateforme de gestion commerciale developpee par PTR Niger, entreprise nigerienne specialisee dans les technologies de l'information et la formation professionnelle. Solution complete pour les entreprises : POS, inventaire, comptabilite, RH et intelligence artificielle.</p>
                <div class="footer-social">
                    <a href="https://facebook.com/PTRNiger" target="_blank" rel="noopener" aria-label="Facebook">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                    <a href="https://instagram.com/ptr_niger" target="_blank" rel="noopener" aria-label="Instagram">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    </a>
                    <a href="https://linkedin.com/company/76802154" target="_blank" rel="noopener" aria-label="LinkedIn">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                </div>
            </div>
            <div class="footer-col">
                <h4>Plateforme</h4>
                <ul>
                    <li><a href="#fonctionnalites">Fonctionnalites</a></li>
                    <li><a href="#abonnements">Abonnements</a></li>
                    <li><a href="/register">Essai gratuit</a></li>
                    <li><a href="#faq">FAQ</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Entreprise</h4>
                <ul>
                    <li><a href="#a-propos">A propos</a></li>
                    <li><a href="https://ptrniger.com" target="_blank" rel="noopener">PTR Niger</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="tel:+22770212112">+227 70 21 21 12</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Legal</h4>
                <ul>
                    <li><a href="/conditions-utilisation">Conditions d'utilisation</a></li>
                    <li><a href="/protection-donnees">Protection des donnees</a></li>
                </ul>
                <h4 style="margin-top: 24px;">Suivez-nous</h4>
                <ul>
                    <li><a href="https://facebook.com/PTRNiger" target="_blank" rel="noopener">Facebook</a></li>
                    <li><a href="https://instagram.com/ptr_niger" target="_blank" rel="noopener">Instagram</a></li>
                    <li><a href="https://linkedin.com/company/76802154" target="_blank" rel="noopener">LinkedIn</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; {{ date('Y') }} Wuroobiz. Tous droits r&eacute;serv&eacute;s. Developpe par <a href="https://ptrniger.com" target="_blank" rel="noopener">PTR Niger</a>.</p>
            <p>Koubia, Niamey, Niger &bull; <a href="tel:+22770212112">+227 70 21 21 12</a> &bull; <a href="mailto:mail@ptrniger.com">mail@ptrniger.com</a></p>
        </div>
    </div>
</footer>

<!-- ========== FLOATING WHATSAPP BUTTON ========== -->
<a href="https://wa.me/22770212112?text=Bonjour%20PTR%20Niger%2C%20je%20suis%20int%C3%A9ress%C3%A9(e)%20par%20Wuroobiz." class="whatsapp-float" target="_blank" rel="noopener" aria-label="Contacter sur WhatsApp">
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
</a>

<script>
    // Header shadow on scroll
    window.addEventListener('scroll', function() {
        var header = document.querySelector('.header');
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                var offset = 80;
                var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: top, behavior: 'smooth' });
                document.getElementById('navLinks').classList.remove('open');
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        var nav = document.getElementById('navLinks');
        var toggle = document.querySelector('.mobile-toggle');
        if (nav.classList.contains('open') && !nav.contains(e.target) && !toggle.contains(e.target)) {
            nav.classList.remove('open');
        }
    });
</script>

</body>
</html>
