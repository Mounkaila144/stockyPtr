<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Politique de protection des donnees de Wuroobiz - Comment nous protegeons vos informations.">
    <title>Protection des donnees | Wuroobiz</title>
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
            --green-500: #10b981;
            --green-50: #ecfdf5;
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
            background: linear-gradient(135deg, #ecfdf5 0%, #f0fdf4 100%);
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

        .shield-icon {
            width: 56px;
            height: 56px;
            border-radius: 50%;
            background: var(--green-50);
            color: var(--green-500);
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
        }

        .shield-icon svg { width: 28px; height: 28px; }

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

        .highlight-box {
            background: var(--green-50);
            border-left: 4px solid var(--green-500);
            border-radius: 0 12px 12px 0;
            padding: 20px 24px;
            margin: 24px 0;
        }

        .highlight-box p {
            color: var(--gray-800);
            margin-bottom: 0;
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
    <div class="shield-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
    </div>
    <h1>Protection des donnees</h1>
    <p>Derniere mise a jour : {{ date('d/m/Y') }}</p>
</section>

<div class="content">

    <div class="highlight-box">
        <p><strong>Votre confiance est notre priorite.</strong> Chez PTR Niger, nous nous engageons a proteger vos donnees personnelles et commerciales avec le plus haut niveau de securite.</p>
    </div>

    <h2>1. Responsable du traitement</h2>
    <p>Le responsable du traitement de vos donnees est :</p>
    <ul>
        <li><strong>Societe :</strong> PTR Niger</li>
        <li><strong>Adresse :</strong> Koubia, Niamey, Niger</li>
        <li><strong>Email :</strong> <a href="mailto:mail@ptrniger.com">mail@ptrniger.com</a></li>
        <li><strong>Telephone :</strong> <a href="tel:+22770212112">+227 70 21 21 12</a></li>
    </ul>

    <h2>2. Donnees collectees</h2>
    <p>Dans le cadre de l'utilisation de la plateforme Wuroobiz, nous collectons les categories de donnees suivantes :</p>
    <ul>
        <li><strong>Donnees d'identification :</strong> nom, prenom, adresse email, numero de telephone</li>
        <li><strong>Donnees de compte :</strong> identifiants de connexion, role et permissions</li>
        <li><strong>Donnees commerciales :</strong> informations sur vos produits, ventes, achats, clients et fournisseurs</li>
        <li><strong>Donnees financieres :</strong> transactions, depenses, depots (aucune donnee bancaire n'est stockee sur nos serveurs)</li>
        <li><strong>Donnees techniques :</strong> adresse IP, type de navigateur, pages consultees</li>
    </ul>

    <h2>3. Finalites du traitement</h2>
    <p>Vos donnees sont collectees et traitees pour les finalites suivantes :</p>
    <ul>
        <li>Fournir et maintenir le Service de gestion commerciale</li>
        <li>Gerer votre compte et votre abonnement</li>
        <li>Ameliorer et personnaliser votre experience utilisateur</li>
        <li>Assurer la securite et prevenir les fraudes</li>
        <li>Communiquer avec vous concernant votre compte (notifications, mises a jour)</li>
        <li>Respecter nos obligations legales</li>
    </ul>

    <h2>4. Isolation des donnees (Multi-tenant)</h2>
    <div class="highlight-box">
        <p>Chaque entreprise utilisant Wuroobiz dispose de sa <strong>propre base de donnees isolee</strong>. Vos donnees commerciales sont completement separees de celles des autres utilisateurs. Aucun autre client ne peut acceder a vos informations.</p>
    </div>

    <h2>5. Securite des donnees</h2>
    <p>Nous mettons en oeuvre des mesures techniques et organisationnelles pour proteger vos donnees :</p>
    <ul>
        <li><strong>Chiffrement SSL/TLS :</strong> toutes les communications entre votre navigateur et nos serveurs sont chiffrees</li>
        <li><strong>Mots de passe haches :</strong> vos mots de passe sont stockes sous forme de hash securise (bcrypt), jamais en clair</li>
        <li><strong>Authentification OAuth2 :</strong> protocole securise pour l'acces a l'API</li>
        <li><strong>Bases de donnees isolees :</strong> separation stricte des donnees entre les clients</li>
        <li><strong>Sauvegardes regulieres :</strong> vos donnees sont sauvegardees pour prevenir toute perte</li>
    </ul>

    <h2>6. Partage des donnees</h2>
    <p>Vos donnees ne sont <strong>jamais vendues</strong> a des tiers. Elles peuvent etre partagees uniquement dans les cas suivants :</p>
    <ul>
        <li>Avec votre consentement explicite</li>
        <li>Pour repondre a une obligation legale (requisition judiciaire)</li>
        <li>Avec nos prestataires techniques (hebergement), sous contrat de confidentialite</li>
    </ul>

    <h2>7. Conservation des donnees</h2>
    <p>Vos donnees sont conservees pendant toute la duree de votre abonnement et pendant une periode de <strong>6 mois</strong> apres la resiliation de votre compte, afin de vous permettre de recuperer vos informations si necessaire. Passe ce delai, vos donnees sont definitivement supprimees.</p>

    <h2>8. Vos droits</h2>
    <p>Conformement a la reglementation applicable, vous disposez des droits suivants sur vos donnees personnelles :</p>
    <ul>
        <li><strong>Droit d'acces :</strong> obtenir une copie de vos donnees personnelles</li>
        <li><strong>Droit de rectification :</strong> corriger des donnees inexactes ou incompletes</li>
        <li><strong>Droit de suppression :</strong> demander l'effacement de vos donnees</li>
        <li><strong>Droit a la portabilite :</strong> recevoir vos donnees dans un format structure et lisible</li>
        <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos donnees dans certains cas</li>
    </ul>
    <p>Pour exercer ces droits, contactez-nous a <a href="mailto:mail@ptrniger.com">mail@ptrniger.com</a>. Nous repondrons dans un delai de 30 jours.</p>

    <h2>9. Cookies</h2>
    <p>La plateforme Wuroobiz utilise des cookies strictement necessaires au fonctionnement du Service :</p>
    <ul>
        <li><strong>Cookies de session :</strong> pour maintenir votre connexion</li>
        <li><strong>Cookies de preferences :</strong> pour sauvegarder vos choix de langue et d'affichage</li>
    </ul>
    <p>Nous n'utilisons pas de cookies publicitaires ni de traceurs marketing.</p>

    <h2>10. Modification de cette politique</h2>
    <p>PTR Niger se reserve le droit de modifier cette politique de protection des donnees a tout moment. En cas de modification substantielle, nous vous en informerons par email ou via la plateforme. La date de derniere mise a jour est indiquee en haut de cette page.</p>

    <h2>11. Contact</h2>
    <p>Pour toute question relative a la protection de vos donnees, vous pouvez nous contacter :</p>
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
