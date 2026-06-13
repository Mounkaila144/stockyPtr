<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Conditions d'utilisation de Wuroobiz - Plateforme de gestion commerciale.">
    <title>Conditions d'utilisation | Wuroobiz</title>
    <link rel="icon" type="image/jpeg" href="/icone.jpeg">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
            --primary: #2596be;
            --primary-dark: #1e7a9e;
            --gray-50: #f9fafb;
            --gray-100: #f3f4f6;
            --gray-200: #e5e7eb;
            --gray-500: #6b7280;
            --gray-600: #4b5563;
            --gray-700: #374151;
            --gray-800: #1f2937;
            --gray-900: #111827;
            --white: #ffffff;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            color: var(--gray-800);
            line-height: 1.6;
            background: var(--white);
            -webkit-font-smoothing: antialiased;
        }

        a { color: var(--primary); text-decoration: none; }
        a:hover { color: var(--primary-dark); text-decoration: underline; }

        .header {
            background: var(--gray-900);
            padding: 20px 0;
        }

        .header-inner {
            max-width: 900px;
            margin: 0 auto;
            padding: 0 24px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .header a.logo {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--white);
            font-weight: 700;
            font-size: 1.1rem;
        }

        .header a.logo img {
            height: 36px;
            width: auto;
            filter: brightness(0) invert(1);
            opacity: 0.9;
        }

        .header a.back {
            color: var(--gray-500);
            font-size: 0.9rem;
            font-weight: 500;
            transition: color 0.2s;
        }

        .header a.back:hover { color: var(--white); text-decoration: none; }

        .page-hero {
            background: linear-gradient(135deg, #e8f6fc 0%, #f0f9ff 100%);
            padding: 60px 0;
            text-align: center;
        }

        .page-hero h1 {
            font-size: 2.2rem;
            font-weight: 800;
            color: var(--gray-900);
            margin-bottom: 12px;
            letter-spacing: -0.02em;
        }

        .page-hero p {
            font-size: 1rem;
            color: var(--gray-500);
        }

        .content {
            max-width: 900px;
            margin: 0 auto;
            padding: 60px 24px 80px;
        }

        .content h2 {
            font-size: 1.4rem;
            font-weight: 700;
            color: var(--gray-900);
            margin: 48px 0 16px;
            padding-bottom: 8px;
            border-bottom: 2px solid var(--gray-100);
        }

        .content h2:first-child { margin-top: 0; }

        .content p {
            font-size: 0.98rem;
            color: var(--gray-700);
            margin-bottom: 16px;
            line-height: 1.75;
        }

        .content ul {
            margin: 0 0 16px 24px;
            color: var(--gray-700);
        }

        .content ul li {
            font-size: 0.98rem;
            line-height: 1.75;
            margin-bottom: 6px;
        }

        .content strong {
            color: var(--gray-900);
        }

        .footer {
            background: var(--gray-900);
            padding: 32px 0;
            text-align: center;
        }

        .footer p {
            font-size: 0.9rem;
            color: var(--gray-500);
        }

        .footer a {
            color: var(--gray-500);
            text-decoration: underline;
        }

        .footer a:hover { color: var(--white); }

        @media (max-width: 768px) {
            .page-hero h1 { font-size: 1.7rem; }
            .content h2 { font-size: 1.2rem; }
        }
    </style>
</head>
<body>

<header class="header">
    <div class="header-inner">
        <a href="/" class="logo">
            <img src="/logow.png" alt="Wuroobiz">
            <span>Wuroobiz</span>
        </a>
        <a href="/" class="back">&larr; Retour a l'accueil</a>
    </div>
</header>

<section class="page-hero">
    <h1>Conditions d'utilisation</h1>
    <p>Derniere mise a jour : {{ date('d/m/Y') }}</p>
</section>

<div class="content">

    <h2>1. Acceptation des conditions</h2>
    <p>En accedant et en utilisant la plateforme Wuroobiz (ci-apres "le Service"), exploitee par <strong>PTR Niger</strong>, vous acceptez d'etre lie par les presentes conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser le Service.</p>

    <h2>2. Description du Service</h2>
    <p>Wuroobiz est une plateforme de gestion commerciale en ligne (SaaS) qui offre les fonctionnalites suivantes :</p>
    <ul>
        <li>Point de vente (POS)</li>
        <li>Gestion d'inventaire et de stock</li>
        <li>Gestion des ventes, achats et devis</li>
        <li>Comptabilite (depenses, depots, transferts)</li>
        <li>Gestion des ressources humaines</li>
        <li>Rapports et analyses</li>
        <li>Gestion multi-entrepots</li>
    </ul>

    <h2>3. Inscription et compte</h2>
    <p>Pour utiliser le Service, vous devez creer un compte en fournissant des informations exactes et completes. Vous etes responsable de la confidentialite de vos identifiants de connexion et de toutes les activites effectuees sous votre compte.</p>
    <p>Vous vous engagez a :</p>
    <ul>
        <li>Fournir des informations veridiques lors de l'inscription</li>
        <li>Maintenir la securite de votre mot de passe</li>
        <li>Notifier immediatement PTR Niger en cas d'utilisation non autorisee de votre compte</li>
    </ul>

    <h2>4. Abonnements et paiements</h2>
    <p>Le Service est propose sous forme d'abonnements mensuels. Chaque nouveau compte beneficie d'une <strong>periode d'essai gratuite d'une semaine</strong>. A l'issue de cette periode, un abonnement actif est necessaire pour continuer a utiliser le Service.</p>
    <p>Les tarifs sont indiques en Francs CFA (FCFA) et peuvent etre modifies avec un preavis de 30 jours. Les paiements effectues ne sont pas remboursables, sauf disposition contraire prevue par la loi.</p>

    <h2>5. Utilisation acceptable</h2>
    <p>Vous vous engagez a utiliser le Service de maniere licite et conforme aux presentes conditions. Il est interdit de :</p>
    <ul>
        <li>Utiliser le Service a des fins illegales ou frauduleuses</li>
        <li>Tenter d'acceder aux comptes d'autres utilisateurs</li>
        <li>Perturber ou surcharger les serveurs ou reseaux du Service</li>
        <li>Reproduire, copier ou revendre le Service sans autorisation</li>
        <li>Introduire des virus ou tout code malveillant</li>
    </ul>

    <h2>6. Propriete intellectuelle</h2>
    <p>Le Service, y compris son code source, son design, ses logos et son contenu, est la propriete exclusive de <strong>PTR Niger</strong>. Aucune licence ou droit de propriete intellectuelle ne vous est transfere par l'utilisation du Service.</p>

    <h2>7. Disponibilite du Service</h2>
    <p>PTR Niger s'efforce de maintenir le Service disponible 24h/24, 7j/7. Toutefois, des interruptions temporaires peuvent survenir pour des raisons de maintenance, de mise a jour ou de force majeure. PTR Niger ne saurait etre tenu responsable des dommages resultant d'une indisponibilite temporaire du Service.</p>

    <h2>8. Limitation de responsabilite</h2>
    <p>Le Service est fourni "en l'etat". PTR Niger ne garantit pas que le Service sera exempt d'erreurs ou d'interruptions. Dans toute la mesure permise par la loi, PTR Niger ne pourra etre tenu responsable des dommages indirects, accessoires ou consecutifs lies a l'utilisation du Service.</p>

    <h2>9. Resiliation</h2>
    <p>Vous pouvez resilier votre compte a tout moment en contactant notre equipe. PTR Niger se reserve le droit de suspendre ou de resilier votre acces au Service en cas de violation des presentes conditions, sans preavis ni indemnite.</p>

    <h2>10. Modification des conditions</h2>
    <p>PTR Niger se reserve le droit de modifier les presentes conditions a tout moment. Les utilisateurs seront informes des modifications par email ou via la plateforme. La poursuite de l'utilisation du Service apres modification vaut acceptation des nouvelles conditions.</p>

    <h2>11. Contact</h2>
    <p>Pour toute question relative aux presentes conditions, vous pouvez nous contacter :</p>
    <ul>
        <li><strong>Telephone :</strong> <a href="tel:+22770212112">+227 70 21 21 12</a></li>
        <li><strong>Email :</strong> <a href="mailto:mail@ptrniger.com">mail@ptrniger.com</a></li>
        <li><strong>Adresse :</strong> Koubia, Niamey, Niger</li>
    </ul>

</div>

<footer class="footer">
    <p>&copy; {{ date('Y') }} Wuroobiz. Tous droits r&eacute;serv&eacute;s. Faites par <a href="https://ptrniger.com" target="_blank" rel="noopener">PTR Niger</a>.</p>
</footer>

</body>
</html>
