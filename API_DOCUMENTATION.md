# StockyPTR - Documentation API Complète

> Documentation de tous les endpoints API pour le développement de l'application mobile.
> **Architecture :** Multi-tenant SaaS (base de données par tenant)
> **Base URL :** `https://{tenant}.wuroobiz.ptrniger.com/api`
> **Site central :** `https://wuroobiz.ptrniger.com`
> **Authentification :** OAuth2 via Laravel Passport (Bearer Token)

---

## Table des matières

### Architecture SaaS Multi-Tenant
0. [Architecture SaaS Multi-Tenant](#0-architecture-saas-multi-tenant)
   - [Concept](#concept)
   - [Résolution de tenant](#résolution-de-tenant)
   - [Inscription tenant](#inscription-tenant)
   - [Plans d'abonnement](#plans-dabonnement)
   - [Super Admin Panel](#super-admin-panel)
   - [Commandes Artisan](#commandes-artisan)

### API Tenant (endpoints métier)
1. [Authentification](#1-authentification)
2. [Mot de passe oublié](#2-mot-de-passe-oublié)
3. [Utilisateurs](#3-utilisateurs)
4. [Dashboard](#4-dashboard)
5. [Produits](#5-produits)
6. [Catégories](#6-catégories)
7. [Marques (Brands)](#7-marques-brands)
8. [Unités](#8-unités)
9. [Devises (Currencies)](#9-devises-currencies)
10. [Entrepôts (Warehouses)](#10-entrepôts-warehouses)
11. [Clients](#11-clients)
12. [Fournisseurs (Providers)](#12-fournisseurs-providers)
13. [Ventes (Sales)](#13-ventes-sales)
14. [Achats (Purchases)](#14-achats-purchases)
15. [Devis (Quotations)](#15-devis-quotations)
16. [Retours de ventes](#16-retours-de-ventes)
17. [Retours d'achats](#17-retours-dachats)
18. [Paiements ventes](#18-paiements-ventes)
19. [Paiements achats](#19-paiements-achats)
20. [Paiements retours ventes](#20-paiements-retours-ventes)
21. [Paiements retours achats](#21-paiements-retours-achats)
22. [Point de Vente (POS)](#22-point-de-vente-pos)
23. [Brouillons POS (Drafts)](#23-brouillons-pos-drafts)
24. [Transferts de stock](#24-transferts-de-stock)
25. [Ajustements de stock](#25-ajustements-de-stock)
26. [Dépenses (Expenses)](#26-dépenses-expenses)
27. [Catégories de dépenses](#27-catégories-de-dépenses)
28. [Comptes (Accounts)](#28-comptes-accounts)
29. [Transferts d'argent](#29-transferts-dargent)
30. [Dépôts (Deposits)](#30-dépôts-deposits)
31. [Catégories de dépôts](#31-catégories-de-dépôts)
32. [Méthodes de paiement](#32-méthodes-de-paiement)
33. [Expéditions (Shipments)](#33-expéditions-shipments)
34. [Rapports](#34-rapports)
35. [Abonnements (Subscriptions)](#35-abonnements-subscriptions)
36. [Rôles et Permissions](#36-rôles-et-permissions)
37. [Paramètres (Settings)](#37-paramètres-settings)
38. [Paramètres POS](#38-paramètres-pos)
39. [Paramètres d'apparence](#39-paramètres-dapparence)
40. [Paramètres email](#40-paramètres-email)
41. [Paramètres SMS](#41-paramètres-sms)
42. [Templates de notifications](#42-templates-de-notifications)
43. [Passerelle de paiement (Stripe)](#43-passerelle-de-paiement-stripe)
44. [Stripe - Gestion cartes client](#44-stripe---gestion-cartes-client)
45. [Sauvegardes (Backups)](#45-sauvegardes-backups)
46. [Modules](#46-modules)
47. [Langues et traductions](#47-langues-et-traductions)
48. [Logs d'erreurs](#48-logs-derreurs)
49. [Clients E-commerce](#49-clients-e-commerce)
50. [Projets](#50-projets)
51. [Tâches](#51-tâches)
52. [RH - Entreprises (Companies)](#52-rh---entreprises-companies)
53. [RH - Départements](#53-rh---départements)
54. [RH - Désignations](#54-rh---désignations)
55. [RH - Employés](#55-rh---employés)
56. [RH - Expériences employé](#56-rh---expériences-employé)
57. [RH - Comptes bancaires employé](#57-rh---comptes-bancaires-employé)
58. [RH - Shifts bureau](#58-rh---shifts-bureau)
59. [RH - Présences (Attendances)](#59-rh---présences-attendances)
60. [RH - Congés (Leaves)](#60-rh---congés-leaves)
61. [RH - Types de congés](#61-rh---types-de-congés)
62. [RH - Jours fériés (Holidays)](#62-rh---jours-fériés-holidays)
63. [RH - Paie (Payroll)](#63-rh---paie-payroll)
64. [RH - Core (Helpers)](#64-rh---core-helpers)
65. [Comptage de stock](#65-comptage-de-stock)
66. [PDF et Impressions](#66-pdf-et-impressions)
67. [Mise à jour système](#67-mise-à-jour-système)

---

## 0. Architecture SaaS Multi-Tenant

### Concept

StockyPTR utilise une architecture **multi-tenant avec base de données par tenant**. Chaque entreprise inscrite dispose de :
- Un **sous-domaine dédié** : `{slug}.wuroobiz.ptrniger.com`
- Une **base de données isolée** : `stocky_tenant_{slug}`
- Des **données complètement séparées** des autres tenants

La plateforme centrale (`wuroobiz.ptrniger.com`) gère l'inscription, les plans d'abonnement et l'administration.

### Résolution de tenant

Le middleware `IdentifyTenant` intercepte chaque requête et :

1. **Domaine principal** (`wuroobiz.ptrniger.com`) → site central (landing, inscription, super admin)
2. **Sous-domaine** (`entreprise.wuroobiz.ptrniger.com`) → résout le tenant, configure la base de données dynamiquement

**Codes d'erreur liés au tenant :**

| Code | Cas | Description |
|------|-----|-------------|
| 200 | Tenant valide | Requête traitée normalement sur la DB du tenant |
| 404 | Sous-domaine inconnu | `Tenant introuvable.` |
| 403 | Tenant inactif/essai expiré | `Ce compte est inactif ou la période d'essai est terminée.` |

### Base URLs

| Contexte | Base URL |
|----------|----------|
| Site central (landing, inscription) | `https://wuroobiz.ptrniger.com` |
| API d'un tenant | `https://{slug}.wuroobiz.ptrniger.com/api` |
| SPA d'un tenant | `https://{slug}.wuroobiz.ptrniger.com/login` |
| Super Admin | `https://wuroobiz.ptrniger.com/admin` |

> **Important :** Toutes les requêtes API documentées ci-dessous (sections 1 à 67) s'exécutent sur le sous-domaine du tenant : `https://{slug}.wuroobiz.ptrniger.com/api/...`

---

### Plans d'abonnement

Les plans sont stockés dans la base de données centrale et définissent les limites de chaque tenant.

#### Structure d'un Plan

| Champ | Type | Description |
|-------|------|-------------|
| `id` | integer | Identifiant unique |
| `name` | string | Nom du plan (ex: "Basic", "Medium", "Premium") |
| `slug` | string | Identifiant URL (ex: "basic", "medium", "premium") |
| `price` | integer | Prix en FCFA (ex: 30000) |
| `billing_cycle` | string | Cycle de facturation (`monthly`) |
| `max_users` | integer | Nombre max d'utilisateurs (0 = illimité) |
| `max_warehouses` | integer | Nombre max d'entrepôts (0 = illimité) |
| `max_products` | integer | Nombre max de produits (0 = illimité) |
| `features` | JSON | Tableau de clés de modules activés (ex: `["products", "sales", "pos"]`) |
| `is_active` | boolean | Plan disponible à l'inscription |

#### Format des features

Les features sont un tableau JSON de clés de modules définis dans `config/plan_modules.php`. Chaque clé correspond à un ensemble de permissions qui seront autorisées pour les utilisateurs du tenant.

**Modules disponibles (14) :** `products`, `stock_adjustment`, `stock_transfer`, `purchases`, `sales`, `pos`, `quotations`, `sales_return`, `purchase_return`, `accounting`, `people`, `hrm`, `reports`, `settings`

#### Plans disponibles

| Plan | Prix/mois | Utilisateurs | Entrepôts | Produits | Modules |
|------|-----------|-------------|-----------|----------|---------|
| **Basic** | 30 000 FCFA | 5 | 3 | 500 | products, sales, purchases, pos, people, settings |
| **Medium** | 70 000 FCFA | 15 | 10 | Illimité | Basic + stock_adjustment, stock_transfer, quotations, sales_return, purchase_return, accounting, reports |
| **Premium** | 200 000 FCFA | Illimité | Illimité | Illimité | Tous les modules (14) |

---

### Inscription tenant

#### GET `/register/{plan?}` **Public**

Affiche le formulaire d'inscription. Le paramètre optionnel `plan` pré-sélectionne un plan.

**Exemples :**
- `https://wuroobiz.ptrniger.com/register` → formulaire sans plan pré-sélectionné
- `https://wuroobiz.ptrniger.com/register/basic` → plan Basic pré-sélectionné
- `https://wuroobiz.ptrniger.com/register/premium` → plan Premium pré-sélectionné

#### POST `/register` **Public**

Crée un nouveau tenant avec sa base de données complète.

**Body (form-data) :**

| Champ | Type | Requis | Validation | Description |
|-------|------|--------|------------|-------------|
| `company_name` | string | oui | max:255 | Nom de l'entreprise |
| `slug` | string | oui | max:63, regex:`^[a-z0-9][a-z0-9-]*[a-z0-9]$`, unique | Sous-domaine souhaité |
| `admin_name` | string | oui | max:255 | Nom complet de l'administrateur |
| `admin_email` | string | oui | email, max:255 | Email de l'administrateur |
| `password` | string | oui | min:8 | Mot de passe |
| `password_confirmation` | string | oui | | Confirmation du mot de passe |
| `plan_id` | integer | oui | exists:plans,id | ID du plan choisi |

**Processus de provisionnement :**

1. Création de l'enregistrement `Tenant` dans la base centrale
2. Création de la base de données MySQL `stocky_tenant_{slug}`
3. Exécution de toutes les migrations (81 tables)
4. Seeding des données initiales :
   - Client par défaut ("Walk-in Customer")
   - Devise par défaut (XOF - Franc CFA)
   - Serveur mail (vide)
   - Entrepôt principal ("Entrepôt Principal", Niamey, Niger)
   - Paramètres système (langue: fr, développé par: PTR Niger)
   - 115 permissions complètes
   - Rôle "Owner" avec toutes les permissions
   - Utilisateur administrateur avec le rôle Owner
   - Association user-rôle
5. Installation de Laravel Passport (2 OAuth clients)

**Réponse succès :**
Redirection avec message flash :
```
Votre compte a été créé avec succès ! Connectez-vous sur: https://{slug}.wuroobiz.ptrniger.com/login
```

**Erreurs de validation (422) :**
```json
{
  "errors": {
    "slug": ["Ce sous-domaine est déjà pris."],
    "password": ["Les mots de passe ne correspondent pas."]
  }
}
```

**Erreur serveur :**
```
Erreur lors de la création du compte: {message technique}
```

**Règles du sous-domaine (`slug`) :**
- Lettres minuscules (`a-z`), chiffres (`0-9`) et tirets (`-`) uniquement
- Doit commencer et finir par une lettre ou un chiffre
- Maximum 63 caractères
- Doit être unique parmi tous les tenants

---

### Structure du Tenant

| Champ | Type | Description |
|-------|------|-------------|
| `id` | integer | Identifiant unique |
| `name` | string | Nom de l'entreprise |
| `slug` | string | Sous-domaine (unique) |
| `database` | string | Nom de la base de données (`stocky_tenant_{slug}`) |
| `plan_id` | integer | FK vers le plan d'abonnement |
| `status` | string | `active`, `inactive`, ou `trial` |
| `trial_ends_at` | datetime | Date d'expiration de l'essai (14 jours après création) |
| `admin_email` | string | Email de l'administrateur principal |
| `admin_name` | string | Nom de l'administrateur principal |
| `domain` | string | Domaine personnalisé (optionnel, usage futur) |
| `created_at` | datetime | Date de création |
| `updated_at` | datetime | Date de dernière modification |

**Statuts du tenant :**

| Statut | Description | Accès |
|--------|-------------|-------|
| `trial` | Période d'essai (14 jours) | Accès complet tant que `trial_ends_at` est dans le futur |
| `active` | Abonnement actif | Accès complet |
| `inactive` | Désactivé par l'admin | Erreur 403 sur toutes les requêtes |

---

### Super Admin Panel

Le panel Super Admin est accessible uniquement sur le domaine principal. L'authentification se fait par mot de passe unique (défini dans `.env` via `SUPER_ADMIN_PASSWORD`).

#### GET `/admin/login` **Public**

Affiche le formulaire de connexion super admin.

#### POST `/admin/login` **Public**

Authentifie le super admin.

**Body :**

| Champ | Type | Requis | Description |
|-------|------|--------|-------------|
| `password` | string | oui | Mot de passe super admin |

**Succès :** Redirection vers `/admin` (dashboard)
**Erreur :** `Mot de passe incorrect.`

#### POST `/admin/logout`

Déconnecte le super admin et détruit la session.

**Succès :** Redirection vers `/admin/login`

#### GET `/admin` (Dashboard)

Tableau de bord avec :
- **Statistiques** : total tenants, actifs, en essai, inactifs
- **Liste des tenants** : nom, sous-domaine, plan, email, statut, date de création
- **Actions rapides** : activer, désactiver, voir détails

#### GET `/admin/tenant/{id}` (Détail tenant)

Affiche les informations complètes d'un tenant :
- Nom, sous-domaine, base de données, plan
- Statut, dates de création et d'expiration d'essai
- Email et nom de l'administrateur
- Actions : activer / désactiver

#### POST `/admin/tenant/{id}/activate`

Active un tenant (passe le statut à `active`).

**Succès :** Redirection avec message `Tenant '{name}' activé avec succès.`

#### POST `/admin/tenant/{id}/deactivate`

Désactive un tenant (passe le statut à `inactive`).

**Succès :** Redirection avec message `Tenant '{name}' désactivé.`

#### DELETE `/admin/tenant/{id}`

Supprime un tenant (soft delete - le désactive seulement, la base de données est conservée).

**Succès :** Redirection vers le dashboard avec message `Tenant '{name}' supprimé.`

#### GET `/admin/plans` (Gestion des plans)

Liste tous les plans avec le nombre de tenants, les modules activés et un bouton "Configurer modules".

#### GET `/admin/plans/{id}/features` (Configurer les modules)

Affiche une grille de checkboxes pour activer/désactiver les modules d'un plan. Chaque module affiche son label, sa description et le nombre de permissions associées. Les modules sont définis dans `config/plan_modules.php`.

#### POST `/admin/plans/{id}/features` (Sauvegarder les modules)

Sauvegarde les modules activés pour un plan.

**Body :**

| Champ | Type | Requis | Description |
|-------|------|--------|-------------|
| `modules[]` | array | non | Tableau de clés de modules à activer |

**Succès :** Redirection avec message `Modules du plan '{name}' mis à jour avec succès.`

---

### Commandes Artisan

#### `php artisan tenant:create`

Crée un nouveau tenant via la ligne de commande.

```bash
php artisan tenant:create {name} {slug} {email} {plan_slug} {--password=password}
```

**Arguments :**

| Argument | Description |
|----------|-------------|
| `name` | Nom de l'entreprise |
| `slug` | Sous-domaine (sera slugifié) |
| `email` | Email de l'administrateur |
| `plan_slug` | Slug du plan (basic, medium, premium) |
| `--password` | Mot de passe admin (défaut: "password") |

**Exemple :**
```bash
php artisan tenant:create "Ma Boutique" ma-boutique admin@maboutique.com basic --password=MonMotDePasse123
```

#### `php artisan tenant:migrate`

Exécute les migrations sur toutes les bases de données tenant.

```bash
php artisan tenant:migrate {--seed} {--tenant=}
```

**Options :**

| Option | Description |
|--------|-------------|
| `--seed` | Exécuter aussi les seeders |
| `--tenant=slug` | Cibler un seul tenant par son slug |

**Exemples :**
```bash
# Migrer tous les tenants
php artisan tenant:migrate

# Migrer un seul tenant
php artisan tenant:migrate --tenant=ma-boutique

# Migrer et seeder
php artisan tenant:migrate --seed
```

---

### Flux d'inscription complet (diagramme)

```
Utilisateur                    Site Central                  Base Centrale       Base Tenant
    |                              |                              |                  |
    |-- GET /register/basic ------>|                              |                  |
    |<-- Formulaire + plans -------|                              |                  |
    |                              |                              |                  |
    |-- POST /register ----------->|                              |                  |
    |                              |-- INSERT tenant ------------>|                  |
    |                              |-- CREATE DATABASE ---------->|                  |
    |                              |                              |-- CREATE DB ---->|
    |                              |-- MIGRATE ------------------>|                  |
    |                              |                              |-- 81 tables ---->|
    |                              |-- SEED DATA ---------------->|                  |
    |                              |                              |-- données ------>|
    |                              |-- PASSPORT:INSTALL --------->|                  |
    |                              |                              |-- OAuth -------->|
    |<-- Redirect + URL tenant ----|                              |                  |
    |                              |                              |                  |
    |== Accès tenant : https://{slug}.wuroobiz.ptrniger.com/login =====================|
    |                              |                              |                  |
    |-- POST /api/getAccessToken ->|-- IdentifyTenant middleware--|                  |
    |                              |   (résout slug -> DB) ------>|                  |
    |                              |                              |-- auth query --->|
    |<-- Bearer Token -------------|                              |                  |
```

---

### Connexion base de données

| Connexion | Base de données | Usage |
|-----------|----------------|-------|
| `central` | `stocky_ptr` | Tables `plans`, `tenants` (partagées) |
| `tenant` | `stocky_tenant_{slug}` | Toutes les tables métier (81 tables, dynamique par requête) |
| `mysql` | `stocky_ptr` | Connexion Laravel par défaut (fallback) |

### Fichiers clés de l'architecture SaaS

| Fichier | Rôle |
|---------|------|
| `app/Http/Middleware/IdentifyTenant.php` | Résolution du tenant par sous-domaine |
| `app/Models/BaseModel.php` | Modèle abstrait (`$connection = 'tenant'`) |
| `app/Models/Plan.php` | Modèle Plan (`$connection = 'central'`) |
| `app/Models/Tenant.php` | Modèle Tenant (`$connection = 'central'`) |
| `app/Services/TenantService.php` | Création et provisionnement des tenants |
| `app/Http/Controllers/TenantRegistrationController.php` | Inscription des tenants |
| `app/Http/Controllers/SuperAdminController.php` | Panel d'administration (tenants + plans) |
| `app/Http/Middleware/SuperAdmin.php` | Protection des routes super admin |
| `config/plan_modules.php` | Mapping modules → permissions (source unique de vérité) |
| `app/Console/Commands/CreateTenant.php` | Commande CLI de création tenant |
| `app/Console/Commands/MigrateTenants.php` | Commande CLI de migration tenant |
| `config/database.php` | Définition des connexions central/tenant |
| `database/migrations/central/` | Migrations de la base centrale (plans, tenants) |
| `database/migrations/` | Migrations des bases tenant (81 tables) |

---

## Conventions communes

### Authentification
Tous les endpoints (sauf ceux marqués **Public**) nécessitent un header :
```
Authorization: Bearer {access_token}
```

### Pagination standard
La plupart des endpoints `index` acceptent ces paramètres de query :

| Paramètre   | Type   | Description                                  |
|-------------|--------|----------------------------------------------|
| `limit`     | int    | Nombre d'éléments par page (`-1` pour tous)  |
| `page`      | int    | Numéro de page (défaut: 1)                   |
| `SortField` | string | Champ de tri                                 |
| `SortType`  | string | Direction du tri (`asc` ou `desc`)           |
| `search`    | string | Recherche textuelle multi-champs             |

### Réponses standard

**Succès :**
```json
{ "success": true }
```

**Erreur de validation (422) :**
```json
{
  "status": 422,
  "msg": "error",
  "errors": { "field": ["message"] }
}
```

**Erreur serveur (500) :**
```json
{ "message": "error description" }
```

---

## 1. Authentification

### POST `/api/getAccessToken` **Public**

Connexion et obtention du token d'accès.

**Body :**
| Champ      | Type   | Requis | Description        |
|-----------|--------|--------|--------------------|
| `email`    | string | oui    | Email utilisateur  |
| `password` | string | oui    | Mot de passe       |

**Réponse succès (200) :**
```json
{
  "Stocky_token": "eyJ0eXAiOi...",
  "username": "admin",
  "status": true
}
```

**Réponse erreur - mauvais identifiants :**
```json
{
  "message": "Incorrect Login",
  "status": false
}
```

**Réponse erreur - utilisateur inactif :**
```json
{
  "message": "This user not active",
  "status": "NotActive"
}
```

### POST `/api/logout`

Déconnecte l'utilisateur et révoque le token.

**Headers :** `Authorization: Bearer {token}`

**Réponse (200) :** `"success"`

### GET `/api/user`

Récupère l'utilisateur authentifié.

**Réponse (200) :** Objet User complet.

### GET `/api/get-logo-setting` **Public**

Récupère le logo de l'application (utile pour l'écran de démarrage mobile).

**Réponse :**
```json
{
  "logo": "logo.png"
}
```
> URL complète de l'image : `https://wuroobiz.ptrniger.com/images/{logo}`

---

## 2. Mot de passe oublié

### POST `/api/password/create` **Public**

Envoie un email de réinitialisation de mot de passe.

**Body :**
| Champ   | Type   | Requis | Description       |
|---------|--------|--------|-------------------|
| `email` | string | oui    | Email utilisateur |

**Réponse succès (200) :**
```json
{
  "status": true,
  "message": "We have e-mailed your password reset link!"
}
```

### GET `/password/find/{token}` **Public (Web)**

Vérifie la validité du token et affiche le formulaire de reset. Token valide 60 minutes.

### POST `/api/password/reset` **Public**

Réinitialise le mot de passe.

**Body :**
| Champ                   | Type   | Requis | Description                   |
|------------------------|--------|--------|-------------------------------|
| `email`                | string | oui    | Email utilisateur             |
| `password`             | string | oui    | Nouveau mot de passe          |
| `password_confirmation`| string | oui    | Confirmation mot de passe     |
| `token`                | string | oui    | Token reçu par email          |

**Réponses :**
| Code | status | Description                           |
|------|--------|---------------------------------------|
| 1    | true   | Mot de passe changé avec succès       |
| 2    | false  | Utilisateur introuvable               |
| 3    | false  | Token invalide                        |

---

## 3. Utilisateurs

### GET `/api/get_user_auth`

Récupère les informations de l'utilisateur connecté avec ses permissions et paramètres.

**Filtrage par plan :** Sur un sous-domaine tenant, les permissions retournées sont filtrées selon les modules activés dans le plan du tenant (`config/plan_modules.php`). Seules les permissions correspondant aux modules du plan sont renvoyées. Le sidebar Vue.js masque automatiquement les menus non autorisés via `currentUserPermissions.includes()`. Sur le domaine central (sans sous-domaine), toutes les permissions du rôle sont retournées sans filtre.

### GET `/api/Get_user_profile`

Récupère le profil détaillé de l'utilisateur connecté.

### PUT `/api/update_user_profile/{id}`

Met à jour le profil de l'utilisateur connecté.

**Body :**
| Champ       | Type   | Requis | Description          |
|------------|--------|--------|----------------------|
| `firstname` | string | oui    | Prénom               |
| `lastname`  | string | oui    | Nom                  |
| `username`  | string | oui    | Nom d'utilisateur    |
| `email`     | string | oui    | Email (unique)       |
| `password`  | string | non    | Nouveau mot de passe |
| `phone`     | string | non    | Téléphone            |
| `avatar`    | file   | non    | Photo de profil      |

### GET `/api/users`

Liste tous les utilisateurs (paginé).

**Paramètres de query :** Pagination standard + `search` (cherche dans username, email, statut).

**Réponse :**
```json
{
  "users": [...],
  "totalRows": 50
}
```

### POST `/api/users`

Crée un nouvel utilisateur.

**Body :**
| Champ          | Type    | Requis | Description                      |
|---------------|---------|--------|----------------------------------|
| `firstname`    | string  | oui    | Prénom                           |
| `lastname`     | string  | oui    | Nom                              |
| `username`     | string  | oui    | Nom d'utilisateur (unique)       |
| `email`        | string  | oui    | Email (unique)                   |
| `password`     | string  | oui    | Mot de passe (min: 6)            |
| `phone`        | string  | non    | Téléphone                        |
| `role_id`      | int     | oui    | ID du rôle                       |
| `is_all_warehouses` | bool | non | Accès à tous les entrepôts     |
| `assigned_warehouses` | array | non | IDs des entrepôts assignés  |
| `avatar`       | file    | non    | Photo de profil                  |

### PUT `/api/users/{id}`

Met à jour un utilisateur.

**Body :** Mêmes champs que la création (password optionnel).

### PUT `/api/users_switch_activated/{id}`

Active/désactive un utilisateur.

**Body :**
| Champ    | Type | Description                  |
|---------|------|------------------------------|
| `statut` | int  | 1 = actif, 0 = inactif      |

### DELETE `/api/users/{id}`

Supprime un utilisateur (soft delete).

---

## 4. Dashboard

### GET `/api/dashboard_data`

Récupère toutes les données du tableau de bord.

**Paramètres de query :**
| Champ          | Type   | Description                                     |
|---------------|--------|-------------------------------------------------|
| `warehouse_id` | int    | Filtrer par entrepôt (0 = tous)                 |
| `from`         | string | Date début (YYYY-MM-DD)                         |
| `to`           | string | Date fin (YYYY-MM-DD)                           |

**Réponse :**
```json
{
  "warehouses": [{"id": 1, "name": "Principal"}],
  "sales": {"data": [1500, 2300, ...], "days": ["2024-01-01", ...]},
  "purchases": {"data": [...], "days": [...]},
  "payments": {
    "payment_sent": [...],
    "payment_received": [...],
    "days": [...]
  },
  "customers": [{"name": "Client A", "value": 15}],
  "product_report": [{"name": "Produit X", "value": 42}],
  "report_dashboard": {
    "products": [...],
    "stock_alert": [...],
    "report": {
      "today_sales": "1,500.00",
      "return_sales": "200.00",
      "today_purchases": "800.00",
      "return_purchases": "100.00"
    },
    "last_sales": [...]
  }
}
```

---

## 5. Produits

### GET `/api/products`

Liste les produits (paginé).

**Paramètres de query :** Pagination standard + filtres :
| Champ          | Type   | Description                     |
|---------------|--------|---------------------------------|
| `search`       | string | Recherche nom, code, catégorie, marque |
| `name`         | string | Filtre par nom (like)           |
| `category_id`  | int    | Filtre par catégorie            |
| `brand_id`     | int    | Filtre par marque               |
| `code`         | string | Filtre par code (like)          |

**Réponse :**
```json
{
  "warehouses": [...],
  "categories": [...],
  "brands": [...],
  "products": [...],
  "totalRows": 100
}
```

### POST `/api/products`

Crée un nouveau produit.

**Body (multipart/form-data) :**
| Champ           | Type     | Requis      | Description                               |
|----------------|----------|-------------|-------------------------------------------|
| `code`          | string   | oui         | Code unique du produit                    |
| `name`          | string   | oui         | Nom du produit                            |
| `Type_barcode`  | string   | oui         | Type de code-barres                       |
| `category_id`   | int      | oui         | ID catégorie                              |
| `type`          | string   | oui         | `is_single`, `is_variant`, `is_service`, `is_combo` |
| `tax_method`    | string   | oui         | `1` (exclusif) ou `2` (inclusif)          |
| `unit_id`       | int      | si non service | ID unité                              |
| `cost`          | decimal  | si single/combo | Prix d'achat                          |
| `price`         | decimal  | si non variant | Prix de vente                          |
| `brand_id`      | int      | non         | ID marque                                 |
| `TaxNet`        | decimal  | non         | Montant taxe nette                        |
| `tax_percent`   | decimal  | non         | Pourcentage de taxe                       |
| `note`          | string   | non         | Notes                                     |
| `stock_alert`   | int      | non         | Seuil d'alerte stock                      |
| `image`         | file     | non         | Image du produit (200x200px)              |
| `is_variant`    | bool     | non         | Produit avec variantes                    |
| `variants`      | array    | si variant  | Tableau de variantes `[{name, code, cost, price}]` |
| `is_imei`       | bool     | non         | Gestion IMEI/Série                        |
| `not_selling`   | bool     | non         | Produit non vendable                      |
| `manage_stock`  | bool     | non         | Gérer le stock (défaut: true)             |

### GET `/api/products/{id}`

Affiche un produit spécifique avec ses détails.

### PUT `/api/products/{id}`

Met à jour un produit. Mêmes champs que la création.

### DELETE `/api/products/{id}`

Supprime un produit (soft delete).

### POST `/api/products/delete/by_selection`

Supprime plusieurs produits.

**Body :**
```json
{ "selectedIds": [1, 2, 3] }
```

### POST `/api/products/import/csv`

Importe des produits depuis un fichier CSV.

**Body (multipart/form-data) :**
| Champ    | Type | Requis | Description      |
|---------|------|--------|------------------|
| `products` | file | oui | Fichier CSV      |

### GET `/api/get_Products_by_warehouse/{id}`

Récupère les produits d'un entrepôt spécifique.

### GET `/api/get_product_detail/{id}`

Récupère les détails complets d'un produit (avec stocks par entrepôt).

### GET `/api/get_products_stock_alerts`

Récupère tous les produits en alerte de stock.

### GET `/api/barcode_create_page`

Récupère les données nécessaires pour la page de génération de codes-barres.

### GET `/api/show_product_data/{id}/{variant_id}`

Récupère les données d'un produit/variante spécifique.

### GET `/api/get_products_materiels`

Récupère les produits matériels (non-services).

### GET `/api/get_import_stock`

Récupère les données pour l'import de stock initial.

### POST `/api/opening_stock_import`

Importe le stock initial.

---

## 6. Catégories

### GET `/api/categories`

Liste les catégories (paginé).

**Recherche :** `search` cherche dans `name`, `code`.

**Réponse :**
```json
{
  "categories": [...],
  "totalRows": 10
}
```

### POST `/api/categories`

Crée une catégorie.

**Body :**
| Champ  | Type   | Requis | Description     |
|--------|--------|--------|-----------------|
| `name` | string | oui    | Nom catégorie   |
| `code` | string | oui    | Code catégorie  |

### PUT `/api/categories/{id}`

Met à jour une catégorie. Mêmes champs.

### DELETE `/api/categories/{id}`

Supprime une catégorie (soft delete).

### POST `/api/categories/delete/by_selection`

**Body :** `{ "selectedIds": [1, 2, 3] }`

---

## 7. Marques (Brands)

### GET `/api/brands`

Liste les marques (paginé).

**Recherche :** `search` cherche dans `name`, `description`.

### POST `/api/brands`

Crée une marque.

**Body (multipart/form-data) :**
| Champ         | Type   | Requis | Description       |
|--------------|--------|--------|-------------------|
| `name`        | string | oui    | Nom de la marque  |
| `description` | string | non    | Description       |
| `image`       | file   | non    | Logo (200x200px)  |

### PUT `/api/brands/{id}`

Met à jour une marque. Mêmes champs.

### DELETE `/api/brands/{id}`

Supprime une marque (soft delete).

### POST `/api/brands/delete/by_selection`

**Body :** `{ "selectedIds": [1, 2, 3] }`

---

## 8. Unités

### GET `/api/units`

Liste les unités (paginé).

**Recherche :** `search` cherche dans `name`, `ShortName`.

### POST `/api/units`

Crée une unité.

**Body :**
| Champ            | Type   | Requis | Description                     |
|-----------------|--------|--------|---------------------------------|
| `name`           | string | oui    | Nom de l'unité                  |
| `ShortName`      | string | oui    | Abréviation (ex: kg, pcs)       |
| `base_unit`      | int    | non    | ID unité de base                |
| `operator`       | string | non    | Opérateur (`*` ou `/`)          |
| `operator_value` | decimal| non    | Valeur de conversion            |

### GET `/api/get_sub_units_by_base`

Récupère les sous-unités d'une unité de base.

### GET `/api/get_units`

Récupère les unités de vente.

### PUT `/api/units/{id}`

Met à jour une unité. Mêmes champs.

### DELETE `/api/units/{id}`

Supprime une unité (soft delete).

---

## 9. Devises (Currencies)

### GET `/api/currencies`

Liste les devises (paginé).

**Recherche :** `search` cherche dans `name`, `code`.

### POST `/api/currencies`

Crée une devise.

**Body :**
| Champ    | Type   | Requis | Description                |
|---------|--------|--------|----------------------------|
| `code`   | string | oui    | Code devise (ex: XOF)     |
| `name`   | string | oui    | Nom (ex: Franc CFA)       |
| `symbol` | string | oui    | Symbole (ex: FCFA)        |

### PUT `/api/currencies/{id}`

Met à jour une devise. Mêmes champs.

### DELETE `/api/currencies/{id}`

Supprime une devise (soft delete).

### POST `/api/currencies/delete/by_selection`

**Body :** `{ "selectedIds": [1, 2, 3] }`

---

## 10. Entrepôts (Warehouses)

### GET `/api/warehouses`

Liste les entrepôts (paginé).

**Recherche :** `search` cherche dans `name`, `mobile`, `city`, `email`.

**Réponse :**
```json
{
  "warehouses": [...],
  "totalRows": 5
}
```

### POST `/api/warehouses`

Crée un entrepôt.

**Body :**
| Champ    | Type   | Requis | Description        |
|---------|--------|--------|--------------------|
| `name`   | string | oui    | Nom entrepôt       |
| `mobile` | string | non    | Téléphone          |
| `city`   | string | non    | Ville              |
| `zip`    | string | non    | Code postal        |
| `email`  | string | non    | Email              |
| `country`| string | non    | Pays               |

### PUT `/api/warehouses/{id}`

Met à jour un entrepôt. Mêmes champs.

### DELETE `/api/warehouses/{id}`

Supprime un entrepôt (soft delete).

### POST `/api/warehouses/delete/by_selection`

**Body :** `{ "selectedIds": [1, 2, 3] }`

---

## 11. Clients

### GET `/api/clients`

Liste les clients (paginé).

**Recherche :** `search` cherche dans `name`, `code`, `phone`, `email`.

**Réponse :**
```json
{
  "clients": [...],
  "totalRows": 50
}
```

### POST `/api/clients`

Crée un client.

**Body :**
| Champ    | Type   | Requis | Description             |
|---------|--------|--------|-------------------------|
| `name`   | string | oui    | Nom du client           |
| `email`  | string | oui    | Email (unique)          |
| `phone`  | string | oui    | Téléphone (unique)      |
| `country`| string | non    | Pays                    |
| `city`   | string | non    | Ville                   |
| `adresse`| string | non    | Adresse                 |
| `tax_number` | string | non | Numéro fiscal         |

### PUT `/api/clients/{id}`

Met à jour un client. Mêmes champs.

### DELETE `/api/clients/{id}`

Supprime un client (soft delete).

### GET `/api/get_clients_without_paginate`

Récupère tous les clients sans pagination (pour les sélecteurs).

### POST `/api/clients/import/csv`

Importe des clients depuis un CSV.

### POST `/api/clients/delete/by_selection`

**Body :** `{ "selectedIds": [1, 2, 3] }`

### POST `/api/clients_pay_due`

Paye le solde dû d'un client.

**Body :**
| Champ               | Type    | Requis | Description               |
|--------------------|---------|--------|---------------------------|
| `client_id`         | int     | oui    | ID du client              |
| `amount`            | decimal | oui    | Montant à payer           |
| `payment_method_id` | int     | oui    | ID méthode de paiement    |
| `account_id`        | int     | non    | ID du compte              |

### POST `/api/clients_pay_return_due`

Paye le solde dû de retour d'un client. Mêmes paramètres.

### GET `/api/get_client_store_data/{id}`

Récupère les données client pour le magasin en ligne.

---

## 12. Fournisseurs (Providers)

### GET `/api/providers`

Liste les fournisseurs (paginé).

**Recherche :** `search` cherche dans `name`, `code`, `phone`, `email`.

### POST `/api/providers`

Crée un fournisseur.

**Body :**
| Champ    | Type   | Requis | Description               |
|---------|--------|--------|---------------------------|
| `name`   | string | oui    | Nom du fournisseur        |
| `email`  | string | oui    | Email (unique)            |
| `phone`  | string | oui    | Téléphone (unique)        |
| `country`| string | non    | Pays                      |
| `city`   | string | non    | Ville                     |
| `adresse`| string | non    | Adresse                   |
| `tax_number` | string | non | Numéro fiscal           |

### PUT `/api/providers/{id}`

Met à jour un fournisseur. Mêmes champs.

### DELETE `/api/providers/{id}`

Supprime un fournisseur (soft delete).

### POST `/api/providers/import/csv`

Importe des fournisseurs depuis un CSV.

### POST `/api/providers/delete/by_selection`

**Body :** `{ "selectedIds": [1, 2, 3] }`

### POST `/api/pay_supplier_due`

Paye le solde dû d'un fournisseur.

### POST `/api/pay_purchase_return_due`

Paye le solde dû de retour d'un fournisseur.

---

## 13. Ventes (Sales)

### GET `/api/sales`

Liste les ventes (paginé).

**Recherche :** `search` cherche dans `Ref`, `statut`, `payment_statut`, client, entrepôt.

**Réponse :**
```json
{
  "sales": [...],
  "totalRows": 100,
  "warehouses": [...],
  "clients": [...]
}
```

### POST `/api/sales`

Crée une vente.

**Body :**
| Champ          | Type    | Requis | Description                           |
|---------------|---------|--------|---------------------------------------|
| `date`         | string  | oui    | Date de la vente (YYYY-MM-DD)         |
| `client_id`    | int     | oui    | ID du client                          |
| `warehouse_id` | int     | oui    | ID de l'entrepôt                      |
| `statut`       | string  | oui    | `completed`, `pending`, `ordered`     |
| `GrandTotal`   | decimal | oui    | Montant total                         |
| `tax_rate`     | decimal | non    | Taux de taxe                          |
| `TaxNet`       | decimal | non    | Montant taxe nette                    |
| `discount`     | decimal | non    | Remise                                |
| `shipping`     | decimal | non    | Frais de livraison                    |
| `notes`        | string  | non    | Notes                                 |
| `details`      | array   | oui    | Lignes de la vente (voir ci-dessous)  |

**Structure `details[]` :**
| Champ              | Type    | Description                      |
|-------------------|---------|----------------------------------|
| `product_id`       | int     | ID du produit                    |
| `product_variant_id`| int    | ID variante (optionnel)          |
| `quantity`         | decimal | Quantité                         |
| `Unit_price`       | decimal | Prix unitaire                    |
| `sale_unit_id`     | int     | ID unité de vente                |
| `tax_percent`      | decimal | % taxe sur la ligne              |
| `tax_method`       | string  | Méthode taxe (1=excl, 2=incl)   |
| `discount`         | decimal | Remise sur la ligne              |
| `discount_Method`  | string  | Méthode remise (1=fixe, 2=%)    |
| `subtotal`         | decimal | Sous-total de la ligne           |
| `imei_number`      | string  | Numéro IMEI/série (optionnel)    |

### GET `/api/sales/{id}`

Affiche une vente spécifique avec détails.

### PUT `/api/sales/{id}`

Met à jour une vente. Mêmes champs que la création.

### DELETE `/api/sales/{id}`

Supprime une vente (soft delete).

### POST `/api/sales_delete_by_selection`

**Body :** `{ "selectedIds": [1, 2, 3] }`

### GET `/api/get_payments_by_sale/{id}`

Récupère les paiements associés à une vente.

### GET `/api/get_Products_by_sale/{id}`

Récupère les produits d'une vente.

### GET `/api/convert_to_sale_data/{id}`

Récupère les données d'un devis pour le convertir en vente.

### POST `/api/sales_send_email`

Envoie une vente par email.

**Body :**
| Champ | Type | Requis | Description     |
|------|------|--------|-----------------|
| `id`  | int  | oui    | ID de la vente  |

### POST `/api/sales_send_sms`

Envoie une vente par SMS.

### POST `/api/sales_send_whatsapp`

Envoie une vente par WhatsApp.

### GET `/api/get_today_sales`

Récupère les ventes du jour.

---

## 14. Achats (Purchases)

### GET `/api/purchases`

Liste les achats (paginé).

**Recherche :** `search` cherche dans `Ref`, `statut`, `payment_statut`, fournisseur, entrepôt.

### POST `/api/purchases`

Crée un achat.

**Body :**
| Champ          | Type    | Requis | Description                          |
|---------------|---------|--------|--------------------------------------|
| `date`         | string  | oui    | Date de l'achat                      |
| `supplier_id`  | int     | oui    | ID du fournisseur                    |
| `warehouse_id` | int     | oui    | ID de l'entrepôt                     |
| `statut`       | string  | oui    | `received`, `pending`, `ordered`     |
| `GrandTotal`   | decimal | oui    | Montant total                        |
| `tax_rate`     | decimal | non    | Taux de taxe                         |
| `TaxNet`       | decimal | non    | Montant taxe nette                   |
| `discount`     | decimal | non    | Remise                               |
| `shipping`     | decimal | non    | Frais de livraison                   |
| `notes`        | string  | non    | Notes                                |
| `details`      | array   | oui    | Lignes d'achat (voir ventes)         |

**Structure `details[]` :** Similaire aux ventes, avec `cost` au lieu de `Unit_price` et `purchase_unit_id` au lieu de `sale_unit_id`.

### GET `/api/purchases/{id}`

Affiche un achat spécifique.

### PUT `/api/purchases/{id}`

Met à jour un achat.

### DELETE `/api/purchases/{id}`

Supprime un achat (soft delete).

### POST `/api/purchases_delete_by_selection`

**Body :** `{ "selectedIds": [1, 2, 3] }`

### GET `/api/get_payments_by_purchase/{id}`

Récupère les paiements d'un achat.

### GET `/api/get_Products_by_purchase/{id}`

Récupère les produits d'un achat.

### POST `/api/purchase_send_email`

Envoie un achat par email.

### POST `/api/purchase_send_sms`

Envoie un achat par SMS.

### POST `/api/purchase_send_whatsapp`

Envoie un achat par WhatsApp.

### GET `/api/get_import_purchases`

Récupère les données pour l'import d'achats.

### POST `/api/store_import_purchases`

Importe des achats.

---

## 15. Devis (Quotations)

### GET `/api/quotations`

Liste les devis (paginé).

### POST `/api/quotations`

Crée un devis.

**Body :** Même structure que les ventes (avec `statut` : `sent`, `pending`, `accepted`, etc.).

### GET `/api/quotations/{id}`

Affiche un devis.

### PUT `/api/quotations/{id}`

Met à jour un devis.

### DELETE `/api/quotations/{id}`

Supprime un devis (soft delete).

### POST `/api/quotations_delete_by_selection`

**Body :** `{ "selectedIds": [1, 2, 3] }`

### POST `/api/quotations_send_email`

Envoie un devis par email.

### POST `/api/quotations_send_sms`

Envoie un devis par SMS.

### POST `/api/quotation_send_whatsapp`

Envoie un devis par WhatsApp.

---

## 16. Retours de ventes

### GET `/api/returns/sale`

Liste les retours de ventes (paginé).

### POST `/api/returns/sale`

Crée un retour de vente.

**Body :**
| Champ          | Type    | Requis | Description                                |
|---------------|---------|--------|--------------------------------------------|
| `date`         | string  | oui    | Date du retour                             |
| `client_id`    | int     | oui    | ID du client                               |
| `warehouse_id` | int     | oui    | ID de l'entrepôt                           |
| `sale_id`      | int     | non    | ID de la vente originale                   |
| `statut`       | string  | oui    | `received`, `pending`                      |
| `GrandTotal`   | decimal | oui    | Montant total                              |
| `tax_rate`     | decimal | non    | Taux de taxe                               |
| `TaxNet`       | decimal | non    | Montant taxe                               |
| `discount`     | decimal | non    | Remise                                     |
| `shipping`     | decimal | non    | Frais de livraison                         |
| `notes`        | string  | non    | Notes                                      |
| `details`      | array   | oui    | Lignes de retour (même struct que ventes)  |

### PUT `/api/returns/sale/{id}`

Met à jour un retour de vente.

### DELETE `/api/returns/sale/{id}`

Supprime un retour de vente (soft delete).

### GET `/api/returns/sale/payment/{id}`

Récupère les paiements d'un retour de vente.

### GET `/api/returns/sale/create_sell_return/{id}`

Prépare les données pour créer un retour depuis une vente existante.

**Paramètre URL :** `id` = ID de la vente.

### GET `/api/returns/sale/edit_sell_return/{id}/{sale_id}`

Prépare les données pour éditer un retour lié à une vente.

### POST `/api/returns/sale/send/email`

Envoie un retour par email.

### POST `/api/returns/sale/send/sms`

Envoie un retour par SMS.

### POST `/api/returns/sale/delete/by_selection`

**Body :** `{ "selectedIds": [1, 2, 3] }`

---

## 17. Retours d'achats

### GET `/api/returns/purchase`

Liste les retours d'achats (paginé).

### POST `/api/returns/purchase`

Crée un retour d'achat.

**Body :** Similaire aux retours de ventes, avec `supplier_id` au lieu de `client_id` et `purchase_id` au lieu de `sale_id`. Statut : `completed`, `pending`.

### PUT `/api/returns/purchase/{id}`

Met à jour un retour d'achat.

### DELETE `/api/returns/purchase/{id}`

Supprime un retour d'achat (soft delete).

### GET `/api/returns/purchase/payment/{id}`

Récupère les paiements d'un retour d'achat.

### GET `/api/returns/purchase/create_purchase_return/{id}`

Prépare les données pour créer un retour depuis un achat existant.

### GET `/api/returns/purchase/edit_purchase_return/{id}/{purchase_id}`

Prépare les données pour éditer un retour d'achat.

### POST `/api/returns/purchase/send/email`

Envoie un retour d'achat par email.

### POST `/api/returns/purchase/send/sms`

Envoie un retour d'achat par SMS.

### POST `/api/returns/purchase/delete/by_selection`

**Body :** `{ "selectedIds": [1, 2, 3] }`

---

## 18. Paiements ventes

### GET `/api/payment_sale`

Liste les paiements de ventes (paginé).

### POST `/api/payment_sale`

Crée un paiement de vente.

**Body :**
| Champ               | Type    | Requis | Description                          |
|--------------------|---------|--------|--------------------------------------|
| `sale_id`           | int     | oui    | ID de la vente                       |
| `montant`           | decimal | oui    | Montant du paiement (>0)             |
| `payment_method_id` | int     | oui    | ID méthode de paiement               |
| `date`              | string  | oui    | Date du paiement                     |
| `account_id`        | int     | non    | ID du compte (optionnel)             |
| `change`            | decimal | non    | Montant rendu                        |
| `notes`             | string  | non    | Notes                                |
| `token`             | string  | non    | Token Stripe (si paiement carte)     |
| `card_id`           | string  | non    | ID carte Stripe                      |
| `is_new_credit_card`| bool    | non    | Nouvelle carte Stripe                |

### PUT `/api/payment_sale/{id}`

Met à jour un paiement de vente.

### DELETE `/api/payment_sale/{id}`

Supprime un paiement de vente.

### GET `/api/payment_sale_get_number`

Génère un nouveau numéro de référence pour un paiement.

**Réponse :** `"INV/SL_1112"`

### POST `/api/payment_sale_send_email`

Envoie un paiement par email.

### POST `/api/payment_sale_send_sms`

Envoie un paiement par SMS.

---

## 19. Paiements achats

### GET `/api/payment_purchase`

Liste les paiements d'achats (paginé).

### POST `/api/payment_purchase`

Crée un paiement d'achat.

**Body :** Même structure que les paiements de ventes, avec `purchase_id` au lieu de `sale_id`.

### PUT `/api/payment_purchase/{id}`

Met à jour un paiement d'achat.

### DELETE `/api/payment_purchase/{id}`

Supprime un paiement d'achat.

### GET `/api/payment_purchase_get_number`

Génère un numéro de référence. Format : `INV/PR_XXXX`

### POST `/api/payment_purchase_send_email`

Envoie un paiement d'achat par email.

### POST `/api/payment_purchase_send_sms`

Envoie un paiement d'achat par SMS.

---

## 20. Paiements retours ventes

### GET `/api/payment/returns_sale`

Liste les paiements de retours de ventes.

### POST `/api/payment/returns_sale`

Crée un paiement de retour de vente.

**Body :**
| Champ               | Type    | Requis | Description                       |
|--------------------|---------|--------|-----------------------------------|
| `sale_return_id`    | int     | oui    | ID du retour de vente             |
| `montant`           | decimal | oui    | Montant (>0)                      |
| `payment_method_id` | int     | oui    | ID méthode de paiement            |
| `date`              | string  | oui    | Date du paiement                  |
| `account_id`        | int     | non    | ID du compte                      |
| `change`            | decimal | non    | Montant rendu                     |
| `notes`             | string  | non    | Notes                             |

### PUT `/api/payment/returns_sale/{id}`

Met à jour un paiement de retour de vente.

### DELETE `/api/payment/returns_sale/{id}`

Supprime un paiement.

### GET `/api/payment/returns_sale/Number/order`

Génère un numéro de référence. Format : `INV/RT_XXXX`

### POST `/api/payment/returns_sale/send/email`

Envoie par email.

### POST `/api/payment/returns_sale/send/sms`

Envoie par SMS.

---

## 21. Paiements retours achats

### GET `/api/payment/returns_purchase`

Liste les paiements de retours d'achats.

### POST `/api/payment/returns_purchase`

Crée un paiement de retour d'achat. Même structure que paiements retours ventes, avec `purchase_return_id`.

### PUT `/api/payment/returns_purchase/{id}`

Met à jour un paiement.

### DELETE `/api/payment/returns_purchase/{id}`

Supprime un paiement.

### GET `/api/payment/returns_purchase/Number/Order`

Génère un numéro de référence.

### POST `/api/payment/returns_purchase/send/email`

Envoie par email.

### POST `/api/payment/returns_purchase/send/sms`

Envoie par SMS.

---

## 22. Point de Vente (POS)

### GET `/api/pos/data_create_pos`

Récupère toutes les données nécessaires pour l'interface POS.

**Réponse :**
```json
{
  "clients": [...],
  "warehouses": [...],
  "categories": [...],
  "brands": [...],
  "products": [...],
  "settings": {...},
  "payment_methods": [...]
}
```

### GET `/api/pos/get_products_pos`

Recherche des produits pour le POS.

**Paramètres de query :**
| Champ          | Type   | Requis | Description                     |
|---------------|--------|--------|---------------------------------|
| `warehouse_id` | int    | oui    | ID de l'entrepôt                |
| `search`       | string | non    | Recherche par nom/code          |
| `category_id`  | int    | non    | Filtrer par catégorie           |
| `brand_id`     | int    | non    | Filtrer par marque              |

### POST `/api/pos/create_pos`

Crée une vente POS.

**Body :**
| Champ               | Type    | Requis | Description                    |
|--------------------|---------|--------|--------------------------------|
| `client_id`         | int     | oui    | ID du client                   |
| `warehouse_id`      | int     | oui    | ID de l'entrepôt               |
| `date`              | string  | oui    | Date                           |
| `GrandTotal`        | decimal | oui    | Montant total                  |
| `payment`           | object  | oui    | Infos de paiement              |
| `details`           | array   | oui    | Lignes de vente                |
| `tax_rate`          | decimal | non    | Taux de taxe                   |
| `discount`          | decimal | non    | Remise                         |
| `shipping`          | decimal | non    | Frais de livraison             |
| `notes`             | string  | non    | Notes                          |

---

## 23. Brouillons POS (Drafts)

### POST `/api/pos/create_draft`

Sauvegarde un brouillon POS.

### GET `/api/get_draft_sales`

Liste les brouillons POS.

### DELETE `/api/remove_draft_sale/{id}`

Supprime un brouillon.

### GET `/api/pos/data_draft_convert_sale/{id}`

Récupère les données d'un brouillon pour le convertir en vente.

### POST `/api/pos/submit_sale_from_draft`

Convertit un brouillon en vente.

---

## 24. Transferts de stock

### GET `/api/transfers`

Liste les transferts de stock (paginé).

### POST `/api/transfers`

Crée un transfert de stock.

**Body :**
| Champ              | Type    | Requis | Description                        |
|-------------------|---------|--------|------------------------------------|
| `date`             | string  | oui    | Date du transfert                  |
| `from_warehouse_id`| int    | oui    | Entrepôt source                    |
| `to_warehouse_id`  | int     | oui    | Entrepôt destination               |
| `statut`           | string  | oui    | `completed`, `pending`, `sent`     |
| `GrandTotal`       | decimal | oui    | Montant total                      |
| `tax_rate`         | decimal | non    | Taux de taxe                       |
| `TaxNet`           | decimal | non    | Montant taxe nette                 |
| `discount`         | decimal | non    | Remise                             |
| `shipping`         | decimal | non    | Frais                              |
| `notes`            | string  | non    | Notes                              |
| `details`          | array   | oui    | Lignes de transfert                |

### GET `/api/transfers/{id}`

Affiche un transfert.

### PUT `/api/transfers/{id}`

Met à jour un transfert.

### DELETE `/api/transfers/{id}`

Supprime un transfert (soft delete).

### POST `/api/transfers/delete/by_selection`

**Body :** `{ "selectedIds": [1, 2, 3] }`

---

## 25. Ajustements de stock

### GET `/api/adjustments`

Liste les ajustements (paginé).

### POST `/api/adjustments`

Crée un ajustement de stock.

**Body :**
| Champ          | Type   | Requis | Description                             |
|---------------|--------|--------|-----------------------------------------|
| `date`         | string | oui    | Date                                    |
| `warehouse_id` | int    | oui    | ID entrepôt                             |
| `notes`        | string | non    | Notes                                   |
| `details`      | array  | oui    | Lignes d'ajustement                     |

**Structure `details[]` :**
| Champ              | Type   | Description                               |
|-------------------|--------|-------------------------------------------|
| `product_id`       | int    | ID du produit                             |
| `product_variant_id`| int   | ID variante (optionnel)                   |
| `quantity`         | decimal| Quantité à ajuster                        |
| `type`             | string | `add` (ajouter) ou `sub` (soustraire)     |

### GET `/api/adjustments/{id}`

Affiche un ajustement.

### GET `/api/adjustments/detail/{id}`

Affiche les détails d'un ajustement.

### PUT `/api/adjustments/{id}`

Met à jour un ajustement.

### DELETE `/api/adjustments/{id}`

Supprime un ajustement (soft delete).

### POST `/api/adjustments/delete/by_selection`

**Body :** `{ "selectedIds": [1, 2, 3] }`

---

## 26. Dépenses (Expenses)

### GET `/api/expenses`

Liste les dépenses (paginé).

### POST `/api/expenses`

Crée une dépense.

**Body :**
| Champ               | Type    | Requis | Description                 |
|--------------------|---------|--------|-----------------------------|
| `date`              | string  | oui    | Date                        |
| `warehouse_id`      | int     | oui    | ID entrepôt                 |
| `expense_category_id`| int    | oui    | ID catégorie de dépense     |
| `amount`            | decimal | oui    | Montant                     |
| `payment_method_id` | int     | oui    | ID méthode de paiement      |
| `account_id`        | int     | non    | ID du compte                |
| `details`           | string  | non    | Détails/Notes               |

### GET `/api/expenses/{id}`

Affiche une dépense.

### PUT `/api/expenses/{id}`

Met à jour une dépense.

### DELETE `/api/expenses/{id}`

Supprime une dépense (soft delete).

### POST `/api/expenses_delete_by_selection`

**Body :** `{ "selectedIds": [1, 2, 3] }`

---

## 27. Catégories de dépenses

### GET `/api/expenses_category`

Liste les catégories de dépenses (paginé).

### POST `/api/expenses_category`

Crée une catégorie de dépense.

**Body :**
| Champ         | Type   | Requis | Description     |
|--------------|--------|--------|-----------------|
| `name`        | string | oui    | Nom             |
| `description` | string | non    | Description     |

### PUT `/api/expenses_category/{id}`

Met à jour une catégorie.

### DELETE `/api/expenses_category/{id}`

Supprime une catégorie (soft delete).

### POST `/api/expenses_category_delete_by_selection`

**Body :** `{ "selectedIds": [1, 2, 3] }`

---

## 28. Comptes (Accounts)

### GET `/api/accounts`

Liste les comptes financiers (paginé).

### POST `/api/accounts`

Crée un compte.

**Body :**
| Champ            | Type    | Requis | Description                    |
|-----------------|---------|--------|--------------------------------|
| `account_name`   | string  | oui    | Nom du compte                  |
| `account_num`    | string  | oui    | Numéro du compte (unique)      |
| `initial_balance`| decimal | oui    | Solde initial                  |
| `note`           | string  | non    | Notes                          |

### PUT `/api/accounts/{id}`

Met à jour un compte.

### DELETE `/api/accounts/{id}`

Supprime un compte (soft delete).

### POST `/api/accounts_delete_by_selection`

**Body :** `{ "selectedIds": [1, 2, 3] }`

---

## 29. Transferts d'argent

### GET `/api/transfer_money`

Liste les transferts d'argent (paginé).

### POST `/api/transfer_money`

Crée un transfert d'argent entre comptes.

**Body :**
| Champ             | Type    | Requis | Description                  |
|------------------|---------|--------|------------------------------|
| `from_account_id` | int     | oui    | Compte source                |
| `to_account_id`   | int     | oui    | Compte destination           |
| `amount`          | decimal | oui    | Montant                      |
| `date`            | string  | oui    | Date                         |

### PUT `/api/transfer_money/{id}`

Met à jour un transfert.

### DELETE `/api/transfer_money/{id}`

Supprime un transfert.

---

## 30. Dépôts (Deposits)

### GET `/api/deposits`

Liste les dépôts (paginé).

### POST `/api/deposits`

Crée un dépôt.

**Body :**
| Champ                | Type    | Requis | Description                |
|---------------------|---------|--------|----------------------------|
| `date`               | string  | oui    | Date                       |
| `deposit_category_id`| int     | oui    | ID catégorie de dépôt      |
| `amount`             | decimal | oui    | Montant                    |
| `payment_method_id`  | int     | oui    | ID méthode de paiement     |
| `account_id`         | int     | non    | ID du compte               |
| `deposit_ref`        | string  | non    | Référence                  |
| `description`        | string  | non    | Description                |

### PUT `/api/deposits/{id}`

Met à jour un dépôt.

### DELETE `/api/deposits/{id}`

Supprime un dépôt (soft delete).

### POST `/api/deposits_delete_by_selection`

**Body :** `{ "selectedIds": [1, 2, 3] }`

---

## 31. Catégories de dépôts

### GET `/api/deposits_category`

Liste les catégories de dépôts (paginé).

### POST `/api/deposits_category`

Crée une catégorie de dépôt.

**Body :**
| Champ   | Type   | Requis | Description  |
|--------|--------|--------|--------------|
| `title` | string | oui    | Titre        |

### PUT `/api/deposits_category/{id}`

Met à jour une catégorie.

### DELETE `/api/deposits_category/{id}`

Supprime une catégorie (soft delete).

### POST `/api/deposits_category_delete_by_selection`

**Body :** `{ "selectedIds": [1, 2, 3] }`

---

## 32. Méthodes de paiement

### GET `/api/payment_methods`

Liste les méthodes de paiement (paginé).

**Recherche :** `search` cherche dans `name`.

### POST `/api/payment_methods`

Crée une méthode de paiement.

**Body :**
| Champ  | Type   | Requis | Description              |
|--------|--------|--------|--------------------------|
| `name` | string | oui    | Nom de la méthode        |

### PUT `/api/payment_methods/{id}`

Met à jour une méthode.

### DELETE `/api/payment_methods/{id}`

Supprime une méthode (soft delete).

---

## 33. Expéditions (Shipments)

### GET `/api/shipments`

Liste les expéditions (paginé).

### POST `/api/shipments`

Crée une expédition.

**Body :**
| Champ             | Type   | Requis | Description                      |
|------------------|--------|--------|----------------------------------|
| `sale_id`         | int    | oui    | ID de la vente                   |
| `date`            | string | oui    | Date d'expédition                |
| `status`          | string | oui    | Statut (`ordered`, `shipped`, `delivered`) |
| `delivered_to`    | string | non    | Destinataire                     |
| `shipping_address`| string | non    | Adresse de livraison             |
| `shipping_details`| string | non    | Détails                          |

### GET `/api/shipments/{id}`

Affiche une expédition.

### PUT `/api/shipments/{id}`

Met à jour une expédition.

### DELETE `/api/shipments/{id}`

Supprime une expédition.

---

## 34. Rapports

Tous les endpoints de rapports utilisent la méthode GET et acceptent des paramètres de filtre communs.

**Paramètres de filtre communs :**
| Champ          | Type   | Description                       |
|---------------|--------|-----------------------------------|
| `warehouse_id` | int    | Filtrer par entrepôt              |
| `from`         | string | Date début (YYYY-MM-DD)          |
| `to`           | string | Date fin (YYYY-MM-DD)            |

### Rapports clients

| Endpoint | Description |
|----------|-------------|
| `GET /api/report/client` | Rapport global des clients |
| `GET /api/report/client/{id}` | Rapport détaillé d'un client |
| `GET /api/report/client_sales` | Ventes par client |
| `GET /api/report/client_payments` | Paiements par client |
| `GET /api/report/client_quotations` | Devis par client |
| `GET /api/report/client_returns` | Retours par client |
| `GET /api/report/client_pdf/{id}` | Télécharger PDF rapport client |

### Rapports fournisseurs

| Endpoint | Description |
|----------|-------------|
| `GET /api/report/provider` | Rapport global des fournisseurs |
| `GET /api/report/provider/{id}` | Rapport détaillé d'un fournisseur |
| `GET /api/report/provider_purchases` | Achats par fournisseur |
| `GET /api/report/provider_payments` | Paiements par fournisseur |
| `GET /api/report/provider_returns` | Retours par fournisseur |
| `GET /api/report/provider_pdf/{id}` | Télécharger PDF rapport fournisseur |

### Rapports ventes & achats

| Endpoint | Description |
|----------|-------------|
| `GET /api/report/sales` | Rapport des ventes |
| `GET /api/report/purchases` | Rapport des achats |
| `GET /api/report/get_last_sales` | Dernières ventes |
| `GET /api/report/report_today` | Rapport du jour |
| `GET /api/report/profit_and_loss` | Profits et pertes |
| `GET /api/report/report_dashboard` | Rapport tableau de bord |

### Rapports stock

| Endpoint | Description |
|----------|-------------|
| `GET /api/report/stock_alert` | Alertes de stock |
| `GET /api/report/count_quantity_alert` | Compter les alertes quantité |
| `GET /api/report/stock` | Rapport de stock |
| `GET /api/report/inventory_valuation_summary` | Valorisation inventaire |

### Rapports entrepôts

| Endpoint | Description |
|----------|-------------|
| `GET /api/report/warehouse_report` | Rapport par entrepôt |
| `GET /api/report/sales_warehouse` | Ventes par entrepôt |
| `GET /api/report/quotations_warehouse` | Devis par entrepôt |
| `GET /api/report/returns_sale_warehouse` | Retours ventes par entrepôt |
| `GET /api/report/returns_purchase_warehouse` | Retours achats par entrepôt |
| `GET /api/report/expenses_warehouse` | Dépenses par entrepôt |
| `GET /api/report/warhouse_count_stock` | Stock par entrepôt |

### Rapports paiements & finances

| Endpoint | Description |
|----------|-------------|
| `GET /api/report/payment_chart` | Graphique des paiements |
| `GET /api/report/expenses_report` | Rapport des dépenses |
| `GET /api/report/deposits_report` | Rapport des dépôts |
| `GET /api/report/report_transactions` | Rapport des transactions |

### Rapports utilisateurs

| Endpoint | Description |
|----------|-------------|
| `GET /api/report/users` | Rapport par utilisateur |
| `GET /api/report/get_sales_by_user` | Ventes par utilisateur |
| `GET /api/report/get_quotations_by_user` | Devis par utilisateur |
| `GET /api/report/get_sales_return_by_user` | Retours ventes par utilisateur |
| `GET /api/report/get_purchases_by_user` | Achats par utilisateur |
| `GET /api/report/get_purchase_return_by_user` | Retours achats par utilisateur |
| `GET /api/report/get_transfer_by_user` | Transferts par utilisateur |
| `GET /api/report/get_adjustment_by_user` | Ajustements par utilisateur |

### Rapports produits

| Endpoint | Description |
|----------|-------------|
| `GET /api/report/top_products` | Produits les plus vendus |
| `GET /api/report/top_customers` | Meilleurs clients |
| `GET /api/report/product_report` | Rapport par produit |
| `GET /api/report/sale_products_details` | Détails ventes produits |
| `GET /api/report/product_sales_report` | Rapport ventes par produit |
| `GET /api/report/product_purchases_report` | Rapport achats par produit |
| `GET /api/report/get_sales_by_product` | Ventes par produit |
| `GET /api/report/get_quotations_by_product` | Devis par produit |
| `GET /api/report/get_sales_return_by_product` | Retours ventes par produit |
| `GET /api/report/get_purchases_by_product` | Achats par produit |
| `GET /api/report/get_purchase_return_by_product` | Retours achats par produit |
| `GET /api/report/get_transfer_by_product` | Transferts par produit |
| `GET /api/report/get_adjustment_by_product` | Ajustements par produit |
| `GET /api/report/sales_by_category_report` | Ventes par catégorie |
| `GET /api/report/sales_by_brand_report` | Ventes par marque |

---

## 35. Abonnements (Subscriptions)

### GET `/api/subscriptions`

Liste les abonnements (paginé).

### POST `/api/subscriptions`

Crée un abonnement.

### GET `/api/subscriptions/{id}`

Affiche un abonnement.

### PUT `/api/subscriptions/{id}`

Met à jour un abonnement.

### DELETE `/api/subscriptions/{id}`

Supprime un abonnement.

### PUT `/api/subscriptions/{id}/status`

Change le statut d'un abonnement.

---

## 36. Rôles et Permissions

### GET `/api/roles`

Liste les rôles (paginé).

### POST `/api/roles`

Crée un rôle avec permissions.

**Body :**
| Champ          | Type   | Requis | Description                                |
|---------------|--------|--------|--------------------------------------------|
| `name`         | string | oui    | Nom du rôle                                |
| `description`  | string | non    | Description                                |
| `permissions`  | object | oui    | Objet avec les permissions (clé: bool)     |

### GET `/api/roles/{id}`

Affiche un rôle avec ses permissions.

### PUT `/api/roles/{id}`

Met à jour un rôle.

### DELETE `/api/roles/{id}`

Supprime un rôle.

### POST `/api/roles/delete/by_selection`

**Body :** `{ "selectedIds": [1, 2, 3] }`

---

## 37. Paramètres (Settings)

### GET `/api/get_Settings_data`

Récupère tous les paramètres de l'application.

**Réponse :**
```json
{
  "settings": {
    "currency_id": 1,
    "client_id": 1,
    "warehouse_id": 1,
    "email": "...",
    "CompanyName": "...",
    "CompanyPhone": "...",
    "CompanyAdress": "...",
    "footer": "...",
    "developed_by": "...",
    "logo": "logo.png",
    "default_language": "fr",
    "timezone": "Africa/Niamey"
  },
  "currencies": [...],
  "clients": [...],
  "warehouses": [...],
  "languages": [...]
}
```

### PUT `/api/settings/{id}`

Met à jour les paramètres.

**Body (multipart/form-data) :**
| Champ              | Type   | Requis | Description                    |
|-------------------|--------|--------|--------------------------------|
| `currency`         | int    | non    | ID devise par défaut           |
| `client_id`        | int    | non    | Client par défaut              |
| `warehouse_id`     | int    | non    | Entrepôt par défaut            |
| `email`            | string | non    | Email entreprise               |
| `CompanyName`      | string | non    | Nom entreprise                 |
| `CompanyPhone`     | string | non    | Téléphone entreprise           |
| `CompanyAdress`    | string | non    | Adresse entreprise             |
| `footer`           | string | non    | Texte pied de page             |
| `developed_by`     | string | non    | Développé par                  |
| `default_language` | string | non    | Langue par défaut              |
| `timezone`         | string | non    | Fuseau horaire                 |
| `logo`             | file   | non    | Logo (80x80px)                 |

---

## 38. Paramètres POS

### GET `/api/get_pos_Settings`

Récupère les paramètres du POS.

**Réponse :**
```json
{
  "pos_settings": {
    "note_customer": "...",
    "show_note": true,
    "show_barcode": true,
    "show_discount": true,
    "show_customer": true,
    "show_email": true,
    "show_phone": true,
    "show_address": true,
    "products_per_page": 20,
    "is_printable": true,
    "show_Warehouse": true
  }
}
```

### PUT `/api/pos_settings/{id}`

Met à jour les paramètres POS.

**Body :**
| Champ              | Type   | Requis | Description                      |
|-------------------|--------|--------|----------------------------------|
| `note_customer`    | string | oui    | Note client                      |
| `show_note`        | bool   | non    | Afficher note                    |
| `show_barcode`     | bool   | non    | Afficher code-barres             |
| `show_discount`    | bool   | non    | Afficher remise                  |
| `show_customer`    | bool   | non    | Afficher client                  |
| `show_email`       | bool   | non    | Afficher email                   |
| `show_phone`       | bool   | non    | Afficher téléphone               |
| `show_address`     | bool   | non    | Afficher adresse                 |
| `products_per_page`| int    | non    | Produits par page                |
| `is_printable`     | bool   | non    | Impression automatique           |
| `show_Warehouse`   | bool   | non    | Afficher entrepôt                |

---

## 39. Paramètres d'apparence

### GET `/api/get_appearance_settings`

Récupère les paramètres d'apparence.

**Réponse :**
```json
{
  "settings": {
    "id": 1,
    "favicon": "favicon.ico",
    "app_name": "StockyPTR",
    "page_title_suffix": "Gestion Commerciale",
    "logo": "logo.png",
    "footer": "...",
    "developed_by": "PTR Niger"
  }
}
```

### PUT `/api/update_appearance_settings/{id}`

Met à jour les paramètres d'apparence.

**Body (multipart/form-data) :**
| Champ               | Type   | Requis | Description           |
|--------------------|--------|--------|-----------------------|
| `app_name`          | string | non    | Nom de l'application  |
| `page_title_suffix` | string | non    | Suffixe titre page    |
| `footer`            | string | non    | Texte pied de page    |
| `developed_by`      | string | non    | Développé par         |
| `logo`              | file   | non    | Logo (80x80px)        |
| `favicon`           | file   | non    | Favicon               |

---

## 40. Paramètres email

### GET `/api/get_config_mail`

Récupère la configuration email.

**Réponse :**
```json
{
  "server": {
    "mail_mailer": "smtp",
    "host": "smtp.gmail.com",
    "port": 587,
    "sender_name": "StockyPTR",
    "username": "...",
    "password": "***",
    "encryption": "tls"
  }
}
```

### PUT `/api/update_config_mail/{id}`

Met à jour la configuration email.

**Body :**
| Champ          | Type   | Requis | Description              |
|---------------|--------|--------|--------------------------|
| `mail_mailer`  | string | oui    | Type de mailer (smtp)    |
| `host`         | string | oui    | Hôte SMTP               |
| `port`         | int    | oui    | Port SMTP               |
| `sender_name`  | string | oui    | Nom expéditeur          |
| `username`     | string | oui    | Nom d'utilisateur SMTP  |
| `password`     | string | oui    | Mot de passe SMTP       |
| `encryption`   | string | oui    | Type encryption (tls/ssl)|

---

## 41. Paramètres SMS

### GET `/api/get_sms_config`

Récupère la configuration SMS (Twilio, Termii, Infobip).

**Réponse :**
```json
{
  "twilio": { "TWILIO_SID": "...", "TWILIO_FROM": "...", "TWILIO_TOKEN": "" },
  "termi": { "TERMI_KEY": "...", "TERMI_SECRET": "...", "TERMI_SENDER": "..." },
  "infobip": { "base_url": "...", "api_key": "...", "sender_from": "..." },
  "sms_gateway": [...],
  "default_sms_gateway": 1
}
```

### POST `/api/update_twilio_config`

Met à jour la config Twilio.

**Body :** `TWILIO_SID`, `TWILIO_TOKEN`, `TWILIO_FROM`

### POST `/api/update_nexmo_config`

Met à jour la config Nexmo.

### POST `/api/update_infobip_config`

Met à jour la config Infobip.

**Body :** `base_url`, `api_key`, `sender_from`

### POST `/api/update_termi_config`

Met à jour la config Termii.

**Body :** `TERMI_KEY`, `TERMI_SECRET`, `TERMI_SENDER`

### PUT `/api/update_Default_SMS`

Change la passerelle SMS par défaut.

---

## 42. Templates de notifications

### GET `/api/get_sms_template`

Récupère les templates SMS.

**Réponse :**
```json
{
  "sms_body_sale": "...",
  "sms_body_quotation": "...",
  "sms_body_payment_received": "...",
  "sms_body_purchase": "...",
  "sms_body_payment_sent": "...",
  "sms_body_subscription_reminder": "..."
}
```

### PUT `/api/update_sms_body`

Met à jour un template SMS.

**Body :**
| Champ           | Type   | Requis | Description              |
|----------------|--------|--------|--------------------------|
| `sms_body_type` | string | oui    | Nom du template          |
| `sms_body`      | string | oui    | Contenu du SMS           |

### GET `/api/get_emails_template`

Récupère les templates d'email.

### PUT `/api/update_custom_email`

Met à jour un template d'email.

---

## 43. Passerelle de paiement (Stripe)

### GET `/api/get_payment_gateway`

Récupère la configuration Stripe.

**Réponse :**
```json
{
  "gateway": {
    "stripe_key": "pk_...",
    "stripe_secret": "",
    "deleted": false
  }
}
```

### POST `/api/payment_gateway`

Met à jour la configuration Stripe.

**Body :**
| Champ           | Type   | Description                |
|----------------|--------|----------------------------|
| `stripe_key`    | string | Clé publique Stripe        |
| `stripe_secret` | string | Clé secrète Stripe         |
| `deleted`       | string | `"true"` pour désactiver   |

---

## 44. Stripe - Gestion cartes client

### GET `/api/retrieve-customer`

Récupère les cartes d'un client Stripe.

**Paramètres de query :**
| Champ        | Type   | Description           |
|-------------|--------|-----------------------|
| `customerId` | string | ID client Stripe      |

**Réponse :**
```json
{
  "data": [
    {
      "card_id": "card_...",
      "last4": "4242",
      "type": "Visa",
      "exp": "12/2025"
    }
  ],
  "customer_default_source": "card_..."
}
```

### POST `/api/update-customer-stripe`

Met à jour la carte par défaut d'un client Stripe.

**Body :**
| Champ         | Type   | Requis | Description          |
|--------------|--------|--------|----------------------|
| `customer_id` | string | oui    | ID client Stripe     |
| `card_id`     | string | oui    | ID de la carte       |

---

## 45. Sauvegardes (Backups)

### GET `/api/get_backup`

Liste les fichiers de sauvegarde disponibles.

### GET `/api/generate_new_backup`

Génère une nouvelle sauvegarde de la base de données.

### DELETE `/api/delete_backup/{name}`

Supprime un fichier de sauvegarde.

**Paramètre URL :** `name` = nom du fichier de sauvegarde.

---

## 46. Modules

### GET `/api/get_modules_info`

Récupère les informations sur les modules installés.

**Réponse :**
```json
[
  {
    "module_name": "Store",
    "current_version": "1.0",
    "status": true,
    "description": "Module boutique en ligne"
  }
]
```

### POST `/api/update_status_module`

Active/désactive un module.

**Body :**
| Champ    | Type   | Requis | Description                   |
|---------|--------|--------|-------------------------------|
| `name`   | string | oui    | Nom du module                 |
| `status` | bool   | oui    | `true` = actif, `false` = inactif |

### POST `/api/upload_module`

Upload et installe un nouveau module.

---

## 47. Langues et traductions

### GET `/api/languages` **Public**

Récupère les langues actives (pour l'écran de connexion).

**Réponse :**
```json
[
  { "name": "Français", "locale": "fr", "flag": "fr.png" },
  { "name": "English", "locale": "en", "flag": "en.png" }
]
```

### GET `/api/translations/{locale}` **Public**

Récupère les traductions pour une locale donnée.

**Réponse :** Objet clé-valeur `{ "key": "traduction", ... }`

### GET `/api/languages_setting`

Liste toutes les langues (admin).

### POST `/api/languages_setting`

Crée une langue.

**Body (multipart/form-data) :**
| Champ    | Type   | Requis | Description                  |
|---------|--------|--------|------------------------------|
| `name`   | string | oui    | Nom de la langue             |
| `locale` | string | oui    | Code locale (unique, max 10) |
| `flag`   | file   | non    | Image drapeau                |

### PUT `/api/languages_setting/{language}`

Met à jour une langue.

### DELETE `/api/languages_setting/{language}`

Supprime une langue.

### POST `/api/languages_setting/{id}/set-default`

Définit une langue comme défaut.

### POST `/api/languages_setting/{id}/set-active`

Active/désactive une langue.

### POST `/api/languages_setting/set-default/{locale}`

Définit une langue par défaut par locale.

### GET `/api/translations_setting/{locale}`

Récupère les traductions avec pagination (admin).

**Paramètres de query :**
| Champ      | Type   | Description               |
|-----------|--------|---------------------------|
| `per_page` | int    | Éléments par page (100)   |
| `page`     | int    | Numéro de page            |
| `search`   | string | Recherche clé ou valeur   |

### PUT `/api/translations_setting/{locale}`

Met à jour/crée une traduction.

### DELETE `/api/translations_setting/{locale}/{key}`

Supprime une traduction.

---

## 48. Logs d'erreurs

### GET `/api/error-logs`

Récupère les logs d'erreurs (paginé).

**Paramètres de query :**
| Champ      | Type | Description                  |
|-----------|------|------------------------------|
| `per_page` | int  | Éléments par page (défaut: 10) |

**Réponse :**
```json
{
  "logs": [...],
  "total": 25
}
```

---

## 49. Clients E-commerce

### GET `/api/clients_without_ecommerce`

Liste les clients e-commerce.

### POST `/api/clients_without_ecommerce`

Crée un compte e-commerce pour un client.

**Body :**
| Champ       | Type   | Requis | Description                       |
|------------|--------|--------|-----------------------------------|
| `client_id` | int    | oui    | ID du client existant             |
| `email`     | string | oui    | Email (unique dans ecommerce)     |
| `password`  | string | oui    | Mot de passe (min: 6 caractères)  |

### PUT `/api/clients_without_ecommerce/{id}`

Met à jour un compte e-commerce.

**Body :**
| Champ          | Type   | Requis | Description                    |
|---------------|--------|--------|--------------------------------|
| `email`        | string | oui    | Email                          |
| `NewPassword`  | string | non    | Nouveau mot de passe           |

### DELETE `/api/clients_without_ecommerce/{id}`

Supprime un compte e-commerce.

---

## 50. Projets

### GET `/api/projects`

Liste les projets (paginé).

**Paramètres de filtre supplémentaires :**
| Champ        | Type   | Description                              |
|-------------|--------|------------------------------------------|
| `status`     | string | `not_started`, `progress`, `cancelled`, `completed` |
| `client_id`  | int    | Filtrer par client                       |
| `start_date` | string | Date début                               |
| `end_date`   | string | Date fin                                 |
| `company_id` | int    | Filtrer par entreprise                   |

**Réponse :**
```json
{
  "totalRows": 10,
  "projects": [...],
  "companies": [...],
  "clients": [...],
  "count_not_started": 2,
  "count_in_progress": 5,
  "count_cancelled": 1,
  "count_completed": 2
}
```

### POST `/api/projects`

Crée un projet.

**Body :**
| Champ         | Type   | Requis | Description                   |
|--------------|--------|--------|-------------------------------|
| `title`       | string | oui    | Titre (max: 255)              |
| `client`      | int    | oui    | ID du client                  |
| `company_id`  | int    | oui    | ID de l'entreprise            |
| `assigned_to` | array  | oui    | IDs des employés assignés     |
| `start_date`  | string | oui    | Date de début                 |
| `end_date`    | string | oui    | Date de fin                   |
| `status`      | string | oui    | Statut                        |
| `description` | string | non    | Description                   |

### PUT `/api/projects/{id}`

Met à jour un projet. Mêmes champs.

### DELETE `/api/projects/{id}`

Supprime un projet (soft delete).

### POST `/api/projects/delete/by_selection`

**Body :** `{ "selectedIds": [1, 2, 3] }`

### POST `/api/project_discussions`

Crée une discussion de projet.

### DELETE `/api/project_discussions/{id}`

Supprime une discussion de projet.

### POST `/api/project_issues`

Crée un problème de projet.

### PUT `/api/project_issues/{id}`

Met à jour un problème.

### DELETE `/api/project_issues/{id}`

Supprime un problème.

### POST `/api/project_documents`

Upload un document de projet.

### DELETE `/api/project_documents/{id}`

Supprime un document de projet.

---

## 51. Tâches

### GET `/api/tasks`

Liste les tâches (paginé).

**Paramètres de filtre supplémentaires :**
| Champ        | Type   | Description                                       |
|-------------|--------|---------------------------------------------------|
| `status`     | string | `not_started`, `progress`, `cancelled`, `completed`|
| `project_id` | int    | Filtrer par projet                                |
| `start_date` | string | Date début                                        |
| `end_date`   | string | Date fin                                          |
| `company_id` | int    | Filtrer par entreprise                            |

**Réponse :**
```json
{
  "tasks": [...],
  "companies": [...],
  "projects": [...],
  "count_not_started": 3,
  "count_in_progress": 5,
  "count_cancelled": 0,
  "count_completed": 7,
  "totalRows": 15
}
```

### POST `/api/tasks`

Crée une tâche.

**Body :**
| Champ         | Type   | Requis | Description                   |
|--------------|--------|--------|-------------------------------|
| `title`       | string | oui    | Titre (max: 255)              |
| `project_id`  | int    | oui    | ID du projet                  |
| `company_id`  | int    | oui    | ID de l'entreprise            |
| `start_date`  | string | oui    | Date de début                 |
| `end_date`    | string | oui    | Date de fin                   |
| `status`      | string | oui    | Statut                        |
| `assigned_to` | array  | non    | IDs des employés assignés     |
| `description` | string | non    | Description                   |

### PUT `/api/tasks/{id}`

Met à jour une tâche. Mêmes champs.

### PUT `/api/update_task_status/{id}`

Met à jour uniquement le statut d'une tâche.

### DELETE `/api/tasks/{id}`

Supprime une tâche (soft delete).

### POST `/api/tasks/delete/by_selection`

**Body :** `{ "selectedIds": [1, 2, 3] }`

### GET `/api/tasks_kanban`

Récupère les tâches en format Kanban (groupées par statut).

### POST `/api/task_change_status`

Change le statut d'une tâche (drag & drop Kanban).

### POST `/api/task_discussions`

Crée une discussion de tâche.

### DELETE `/api/task_discussions/{id}`

Supprime une discussion.

### POST `/api/task_documents`

Upload un document de tâche.

### DELETE `/api/task_documents/{id}`

Supprime un document.

---

## 52. RH - Entreprises (Companies)

### GET `/api/company`

Liste les entreprises (paginé).

**Recherche :** `search` cherche dans `name`, `phone`, `country`, `email`.

### POST `/api/company`

Crée une entreprise.

**Body :**
| Champ    | Type   | Requis | Description        |
|---------|--------|--------|--------------------|
| `name`   | string | oui    | Nom entreprise     |
| `email`  | string | non    | Email              |
| `phone`  | string | non    | Téléphone          |
| `country`| string | non    | Pays               |

### PUT `/api/company/{id}`

Met à jour une entreprise. Mêmes champs.

### DELETE `/api/company/{id}`

Supprime une entreprise (soft delete).

### GET `/api/get_all_company`

Récupère toutes les entreprises (sans pagination).

### POST `/api/company/delete/by_selection`

**Body :** `{ "selectedIds": [1, 2, 3] }`

---

## 53. RH - Départements

### GET `/api/departments`

Liste les départements (paginé).

**Recherche :** `search` cherche dans `department`.

### POST `/api/departments`

Crée un département.

**Body :**
| Champ             | Type   | Requis | Description              |
|------------------|--------|--------|--------------------------|
| `department`      | string | oui    | Nom du département       |
| `company_id`      | int    | oui    | ID de l'entreprise       |
| `department_head` | int    | non    | ID du chef de département|

### PUT `/api/departments/{id}`

Met à jour un département.

### DELETE `/api/departments/{id}`

Supprime un département (soft delete).

### GET `/api/get_all_departments`

Récupère tous les départements.

### GET `/api/get_departments_by_company`

Récupère les départements d'une entreprise.

**Paramètre query :** `id` = ID entreprise.

### POST `/api/departments/delete/by_selection`

**Body :** `{ "selectedIds": [1, 2, 3] }`

---

## 54. RH - Désignations

### GET `/api/designations`

Liste les désignations (paginé).

**Recherche :** `search` cherche dans `designation`.

### POST `/api/designations`

Crée une désignation.

**Body :**
| Champ          | Type   | Requis | Description               |
|---------------|--------|--------|---------------------------|
| `designation`  | string | oui    | Nom de la désignation     |
| `company_id`   | int    | oui    | ID de l'entreprise        |
| `department`   | int    | oui    | ID du département         |

### PUT `/api/designations/{id}`

Met à jour une désignation.

### DELETE `/api/designations/{id}`

Supprime une désignation (soft delete).

### GET `/api/get_designations_by_department`

Récupère les désignations d'un département.

**Paramètre query :** `id` = ID département.

### POST `/api/designations/delete/by_selection`

**Body :** `{ "selectedIds": [1, 2, 3] }`

---

## 55. RH - Employés

### GET `/api/employees`

Liste les employés (paginé).

**Recherche :** `search` cherche dans `firstname`, `lastname`, `username`.

**Filtres supplémentaires :**
| Champ             | Type   | Description                |
|------------------|--------|----------------------------|
| `employment_type` | string | Filtre par type d'emploi   |
| `company_id`      | int    | Filtre par entreprise      |

### POST `/api/employees`

Crée un employé.

**Body :**
| Champ             | Type    | Requis | Description                     |
|------------------|---------|--------|---------------------------------|
| `firstname`       | string  | oui    | Prénom                          |
| `lastname`        | string  | oui    | Nom                             |
| `gender`          | string  | oui    | Genre                           |
| `company_id`      | int     | oui    | ID entreprise                   |
| `department_id`   | int     | oui    | ID département                  |
| `designation_id`  | int     | oui    | ID désignation                  |
| `office_shift_id` | int     | oui    | ID shift bureau                 |
| `country`         | string  | non    | Pays                            |
| `email`           | string  | non    | Email                           |
| `phone`           | string  | non    | Téléphone                       |
| `birth_date`      | string  | non    | Date de naissance               |
| `joining_date`    | string  | non    | Date d'embauche                 |
| `leaving_date`    | string  | non    | Date de départ                  |
| `marital_status`  | string  | non    | Statut matrimonial              |
| `employment_type` | string  | non    | Type d'emploi                   |
| `city`            | string  | non    | Ville                           |
| `province`        | string  | non    | Province                        |
| `zipcode`         | string  | non    | Code postal                     |
| `address`         | string  | non    | Adresse                         |
| `basic_salary`    | decimal | non    | Salaire de base                 |
| `hourly_rate`     | decimal | non    | Taux horaire                    |
| `role_users_id`   | int     | non    | ID rôle utilisateur             |

### PUT `/api/employees/{id}`

Met à jour un employé. Champs supplémentaires requis : `country`, `phone`, `total_leave`.

### DELETE `/api/employees/{id}`

Supprime un employé (soft delete).

### POST `/api/employees/import/csv`

Importe des employés depuis un CSV.

### POST `/api/employees/delete/by_selection`

**Body :** `{ "selectedIds": [1, 2, 3] }`

### GET `/api/get_employees_by_department`

**Paramètre query :** `id` = ID département.

### PUT `/api/update_social_profile/{id}`

Met à jour les profils sociaux d'un employé.

### GET `/api/get_experiences_by_employee`

Récupère les expériences d'un employé.

### GET `/api/get_accounts_by_employee`

Récupère les comptes bancaires d'un employé.

### GET `/api/Get_employees_by_company`

**Paramètre query :** `id` = ID entreprise.

---

## 56. RH - Expériences employé

### GET `/api/work_experience`

Liste les expériences professionnelles.

### POST `/api/work_experience`

Crée une expérience.

**Body :**
| Champ            | Type   | Requis | Description               |
|-----------------|--------|--------|---------------------------|
| `title`          | string | oui    | Titre du poste            |
| `company_name`   | string | oui    | Nom de l'entreprise       |
| `start_date`     | string | oui    | Date début                |
| `end_date`       | string | oui    | Date fin                  |
| `employment_type`| string | oui    | Type d'emploi             |
| `employee_id`    | int    | non    | ID de l'employé           |
| `location`       | string | non    | Lieu                      |
| `description`    | string | non    | Description               |

### PUT `/api/work_experience/{id}`

Met à jour une expérience.

### DELETE `/api/work_experience/{id}`

Supprime une expérience.

---

## 57. RH - Comptes bancaires employé

### GET `/api/employee_account`

Liste les comptes bancaires des employés.

### POST `/api/employee_account`

Crée un compte bancaire.

**Body :**
| Champ         | Type   | Requis | Description         |
|--------------|--------|--------|---------------------|
| `bank_name`   | string | oui    | Nom de la banque    |
| `bank_branch` | string | oui    | Agence              |
| `account_no`  | string | oui    | Numéro de compte    |
| `employee_id` | int    | non    | ID employé          |

### PUT `/api/employee_account/{id}`

Met à jour un compte bancaire.

### DELETE `/api/employee_account/{id}`

Supprime un compte bancaire.

---

## 58. RH - Shifts bureau

### GET `/api/office_shift`

Liste les shifts (paginé).

**Recherche :** `search` cherche dans `name`.

### POST `/api/office_shift`

Crée un shift bureau.

**Body :**
| Champ          | Type   | Requis | Description               |
|---------------|--------|--------|---------------------------|
| `name`         | string | oui    | Nom du shift              |
| `company_id`   | int    | oui    | ID entreprise             |
| `monday_in`    | string | non    | Heure arrivée lundi       |
| `monday_out`   | string | non    | Heure départ lundi        |
| `tuesday_in`   | string | non    | Heure arrivée mardi       |
| `tuesday_out`  | string | non    | Heure départ mardi        |
| `wednesday_in` | string | non    | Heure arrivée mercredi    |
| `wednesday_out`| string | non    | Heure départ mercredi     |
| `thursday_in`  | string | non    | Heure arrivée jeudi       |
| `thursday_out` | string | non    | Heure départ jeudi        |
| `friday_in`    | string | non    | Heure arrivée vendredi    |
| `friday_out`   | string | non    | Heure départ vendredi     |
| `saturday_in`  | string | non    | Heure arrivée samedi      |
| `saturday_out` | string | non    | Heure départ samedi       |
| `sunday_in`    | string | non    | Heure arrivée dimanche    |
| `sunday_out`   | string | non    | Heure départ dimanche     |

> Format horaire : `HH:mmAM/PM` (ex: `08:00AM`, `05:00PM`)

### PUT `/api/office_shift/{id}`

Met à jour un shift.

### DELETE `/api/office_shift/{id}`

Supprime un shift (soft delete).

### POST `/api/office_shift/delete/by_selection`

**Body :** `{ "selectedIds": [1, 2, 3] }`

---

## 59. RH - Présences (Attendances)

### GET `/api/attendances`

Liste les présences (paginé).

**Recherche :** `search` cherche dans `date`, `employee.username`, `company.name`.

### POST `/api/attendances`

Enregistre une présence.

**Body :**
| Champ         | Type   | Requis | Description                |
|--------------|--------|--------|----------------------------|
| `company_id`  | int    | oui    | ID entreprise              |
| `employee_id` | int    | oui    | ID employé                 |
| `date`        | string | oui    | Date (YYYY-MM-DD)          |
| `clock_in`    | string | oui    | Heure d'arrivée (HH:mm)   |
| `clock_out`   | string | oui    | Heure de départ (HH:mm)   |

> Les champs `late_time`, `depart_early`, `overtime`, `total_work` sont calculés automatiquement.

### PUT `/api/attendances/{id}`

Met à jour une présence.

### DELETE `/api/attendances/{id}`

Supprime une présence (soft delete).

### GET `/api/daily_attendance`

Récupère les présences du jour.

### POST `/api/attendance_by_employee/{id}`

Enregistre une présence par employé.

### POST `/api/attendances/delete/by_selection`

**Body :** `{ "selectedIds": [1, 2, 3] }`

---

## 60. RH - Congés (Leaves)

### GET `/api/leave`

Liste les congés (paginé).

**Recherche :** `search` cherche dans `employees.username`, `leave_types.title`, `companies.name`, `departments.department`.

### POST `/api/leave`

Crée une demande de congé.

**Body :**
| Champ           | Type   | Requis | Description                                     |
|----------------|--------|--------|-------------------------------------------------|
| `employee_id`   | int    | oui    | ID employé                                      |
| `company_id`    | int    | oui    | ID entreprise                                   |
| `department_id` | int    | oui    | ID département                                  |
| `leave_type_id` | int    | oui    | ID type de congé                                |
| `start_date`    | string | oui    | Date début                                      |
| `end_date`      | string | oui    | Date fin (>= start_date)                        |
| `status`        | string | oui    | `pending`, `approved`, `rejected`               |
| `reason`        | string | non    | Motif du congé                                  |
| `half_day`      | bool   | non    | Demi-journée                                    |
| `attachment`    | file   | non    | Justificatif (jpeg,png,jpg,bmp,gif,svg max:2MB) |

> Le nombre de jours (`days`) est calculé automatiquement. Le solde de congés est mis à jour si `status = approved`.

### PUT `/api/leave/{id}`

Met à jour un congé.

### DELETE `/api/leave/{id}`

Supprime un congé (soft delete).

### POST `/api/leave/delete/by_selection`

**Body :** `{ "selectedIds": [1, 2, 3] }`

---

## 61. RH - Types de congés

### GET `/api/leave_type`

Liste les types de congés (paginé).

**Recherche :** `search` cherche dans `title`.

### POST `/api/leave_type`

Crée un type de congé.

**Body :**
| Champ   | Type   | Requis | Description            |
|--------|--------|--------|------------------------|
| `title` | string | oui    | Titre du type de congé |

### PUT `/api/leave_type/{id}`

Met à jour un type.

### DELETE `/api/leave_type/{id}`

Supprime un type (soft delete).

### POST `/api/leave_type/delete/by_selection`

**Body :** `{ "selectedIds": [1, 2, 3] }`

---

## 62. RH - Jours fériés (Holidays)

### GET `/api/holiday`

Liste les jours fériés (paginé).

**Recherche :** `search` cherche dans `title`.

### POST `/api/holiday`

Crée un jour férié.

**Body :**
| Champ         | Type   | Requis | Description        |
|--------------|--------|--------|--------------------|
| `title`       | string | oui    | Titre              |
| `start_date`  | string | oui    | Date début         |
| `end_date`    | string | oui    | Date fin           |
| `company_id`  | int    | oui    | ID entreprise      |
| `description` | string | non    | Description        |

### PUT `/api/holiday/{id}`

Met à jour un jour férié.

### DELETE `/api/holiday/{id}`

Supprime un jour férié (soft delete).

### POST `/api/holiday/delete/by_selection`

**Body :** `{ "selectedIds": [1, 2, 3] }`

---

## 63. RH - Paie (Payroll)

### GET `/api/payroll`

Liste les fiches de paie (paginé).

**Recherche :** `search` cherche dans `Ref`, `account.account_name`, `employee.username`.

**Réponse :**
```json
{
  "payrolls": [...],
  "totalRows": 10,
  "accounts": [...],
  "employees": [...],
  "payment_methods": [...]
}
```

### POST `/api/payroll`

Crée une fiche de paie.

**Body :**
| Champ               | Type    | Requis | Description                   |
|--------------------|---------|--------|-------------------------------|
| `date`              | string  | oui    | Date                          |
| `employee_id`       | int     | oui    | ID employé                    |
| `amount`            | decimal | oui    | Montant                       |
| `payment_method_id` | int     | oui    | ID méthode de paiement        |
| `account_id`        | int     | non    | ID du compte (solde déduit)   |

> La référence `Ref` est auto-générée au format `PS_XXXX`.

### PUT `/api/payroll/{id}`

Met à jour une fiche de paie.

### DELETE `/api/payroll/{id}`

Supprime une fiche de paie (soft delete).

---

## 64. RH - Core (Helpers)

Endpoints utilitaires pour les sélecteurs dynamiques dans les formulaires RH.

### GET `/api/core/get_departments_by_company`

**Paramètre query :** `id` = ID entreprise.

**Réponse :** Liste des départements de l'entreprise.

### GET `/api/core/get_designations_by_department`

**Paramètre query :** `id` = ID département.

**Réponse :** Liste des désignations du département.

### GET `/api/core/get_office_shift_by_company`

**Paramètre query :** `id` = ID entreprise.

**Réponse :** Liste des shifts `[{id, name}]`.

### GET `/api/core/get_employees_by_company`

**Paramètre query :** `id` = ID entreprise.

**Réponse :** Liste des employés `[{id, username}]`.

---

## 65. Comptage de stock

### GET `/api/count_stock`

Liste les comptages de stock (paginé).

### POST `/api/store_count_stock`

Crée un comptage de stock.

**Body :**
| Champ          | Type   | Requis | Description              |
|---------------|--------|--------|--------------------------|
| `date`         | string | oui    | Date du comptage         |
| `warehouse_id` | int    | oui    | ID entrepôt              |
| `category_id`  | int    | non    | Filtrer par catégorie    |

---

## 66. PDF et Impressions

Ces endpoints génèrent des PDF et ne nécessitent pas forcément l'authentification API (accessibles via web).

| Endpoint | Description |
|----------|-------------|
| `GET /api/sale_pdf/{id}` | PDF d'une vente |
| `GET /api/quote_pdf/{id}` | PDF d'un devis |
| `GET /api/purchase_pdf/{id}` | PDF d'un achat |
| `GET /api/return_sale_pdf/{id}` | PDF d'un retour de vente |
| `GET /api/return_purchase_pdf/{id}` | PDF d'un retour d'achat |
| `GET /api/payment_purchase_pdf/{id}` | PDF paiement achat |
| `GET /api/payment_return_sale_pdf/{id}` | PDF paiement retour vente |
| `GET /api/payment_return_purchase_pdf/{id}` | PDF paiement retour achat |
| `GET /api/payment_sale_pdf/{id}` | PDF paiement vente |
| `GET /api/sales_print_invoice/{id}` | Impression ticket POS |
| `GET /api/transfer_pdf/{id}` | PDF transfert |
| `GET /api/adjustment_pdf/{id}` | PDF ajustement |

---

## 67. Mise à jour système

### GET `/api/get_version_info`

Récupère les informations de version de l'application.

---

## Notes pour le développement mobile

### Flux d'authentification recommandé (SaaS)

1. **Demander le sous-domaine** à l'utilisateur (ex: `ma-boutique`)
2. Construire la base URL : `https://{sous-domaine}.wuroobiz.ptrniger.com/api`
3. Appeler `POST /api/getAccessToken` avec email/password sur cette URL
4. Stocker le `Stocky_token` **et le sous-domaine** de manière sécurisée (Keychain iOS / EncryptedSharedPreferences Android)
5. Inclure `Authorization: Bearer {Stocky_token}` dans toutes les requêtes suivantes
6. Gérer les réponses :
   - **401** → token invalide/expiré → rediriger vers la connexion
   - **403** → tenant inactif/essai expiré → afficher un message approprié
   - **404** → sous-domaine inconnu → vérifier le sous-domaine

**Exemple de configuration dynamique :**
```javascript
// Stockage des paramètres de connexion
const tenantSlug = 'ma-boutique';
const baseURL = `https://${tenantSlug}.wuroobiz.ptrniger.com/api`;

// Configuration Axios
axios.defaults.baseURL = baseURL;
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
```

### Gestion des images

- Les images produits sont stockées dans `/images/products/`
- Les logos dans `/images/`
- Les drapeaux dans `/flags/`
- URL complète : `https://{slug}.wuroobiz.ptrniger.com/images/products/{filename}`

> **Important :** Les images sont spécifiques à chaque tenant. Utilisez toujours le sous-domaine du tenant dans les URLs d'images.

### Pagination

- Utiliser `limit` et `page` pour la pagination
- `limit=-1` retourne tous les résultats (attention aux performances)
- La réponse inclut toujours `totalRows` pour calculer le nombre de pages

### Gestion hors ligne

Pour le POS mobile, il est recommandé de :
1. Mettre en cache les produits, clients, catégories via `GET /api/pos/data_create_pos`
2. Stocker les ventes en local si pas de connexion
3. Synchroniser avec `POST /api/pos/create_pos` quand la connexion est rétablie

### Codes de statut HTTP

| Code | Signification |
|------|--------------|
| 200  | Succès |
| 401  | Non authentifié (token invalide/expiré) |
| 403  | Non autorisé (permissions insuffisantes) **OU** tenant inactif/essai expiré |
| 404  | Ressource non trouvée **OU** sous-domaine (tenant) inconnu |
| 422  | Erreur de validation |
| 500  | Erreur serveur |

### Isolation des données

Chaque tenant dispose de sa propre base de données. Les données sont **complètement isolées** :
- Un token obtenu sur `tenant-a.wuroobiz.ptrniger.com` ne fonctionne **pas** sur `tenant-b.wuroobiz.ptrniger.com`
- Les IDs de produits, ventes, utilisateurs, etc. sont indépendants entre tenants
- Les images et fichiers uploadés sont propres à chaque tenant
