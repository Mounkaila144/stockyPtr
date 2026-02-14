# Plan : Conversion SaaS Multi-Base de Données

## Architecture

```
wuroobiz.ptrniger.com          → Landing page + inscription + super admin
company1.wuroobiz.ptrniger.com → Instance tenant "company1" (sa propre DB)
company2.wuroobiz.ptrniger.com → Instance tenant "company2" (sa propre DB)
```

- **DB centrale** (`stocky_ptr`) : tables `tenants`, `plans` uniquement
- **DB par tenant** (`stocky_tenant_{slug}`) : copie complète du schéma actuel (produits, ventes, users, etc.)
- **Résolution** : middleware identifie le tenant via le sous-domaine et switch la connexion DB

---

## Phase 1 : Tables centrales & modèles (tenants + plans)

### Fichiers à créer :
1. **`database/migrations/2026_02_14_000001_create_plans_table.php`**
   - `id`, `name`, `price` (integer, en FCFA), `billing_cycle` (monthly), `max_users`, `max_warehouses`, `max_products`, `features` (JSON), `is_active`, `timestamps`
   - Seed : Basic (30000), Medium (70000), Premium (200000)

2. **`database/migrations/2026_02_14_000002_create_tenants_table.php`**
   - `id`, `name`, `slug` (unique, pour le sous-domaine), `database` (nom de la DB), `plan_id` (FK → plans), `status` (active/inactive/trial), `trial_ends_at`, `admin_email`, `admin_name`, `domain` (nullable, custom domain), `timestamps`

3. **`app/Models/Tenant.php`** — connexion `central`, relation `belongsTo Plan`
4. **`app/Models/Plan.php`** — connexion `central`, relation `hasMany Tenant`
5. **`database/seeders/PlanSeeder.php`** — seed les 3 plans

### Fichiers à modifier :
6. **`config/database.php`** — ajouter connexion `tenant` (identique à `mysql` mais DB dynamique)

---

## Phase 2 : Middleware d'identification du tenant

### Fichiers à créer :
7. **`app/Http/Middleware/IdentifyTenant.php`**
   - Extraire le sous-domaine de la requête (ex: `company1` de `company1.wuroobiz.ptrniger.com`)
   - Si pas de sous-domaine → laisser passer (c'est le site central)
   - Chercher le tenant dans la table `tenants` (via la connexion `central`)
   - Vérifier que le tenant est actif
   - Configurer dynamiquement `config('database.connections.tenant.database')` avec le nom de la DB du tenant
   - Purger et reconnecter la connexion `tenant`
   - Stocker le tenant dans `app()->instance('tenant', $tenant)`

### Fichiers à modifier :
8. **`app/Http/Kernel.php`** — ajouter `IdentifyTenant` dans les middleware globaux (avant tout)

---

## Phase 3 : Adapter les modèles existants

### Fichiers à modifier :
9. **Créer `app/Models/BaseModel.php`** — classe abstraite qui utilise la connexion `tenant`
   ```php
   abstract class BaseModel extends Model {
       protected $connection = 'tenant';
   }
   ```
10. **Modifier TOUS les modèles existants** (~80 modèles) pour étendre `BaseModel` au lieu de `Model`
    - Product, Sale, Purchase, Client, Provider, User, Warehouse, Setting, Role, Permission, etc.
    - Cela garantit que toutes les requêtes vont vers la bonne DB

11. **`app/Models/User.php`** — ajouter `protected $connection = 'tenant';` et adapter le guard Passport

---

## Phase 4 : Service de provisionnement des tenants

### Fichiers à créer :
12. **`app/Services/TenantService.php`**
    - `createTenant($data)` : crée l'entrée tenant dans la DB centrale
    - `provisionDatabase($tenant)` :
      1. Crée la DB MySQL (`CREATE DATABASE stocky_tenant_{slug}`)
      2. Configure la connexion vers cette DB
      3. Lance `Artisan::call('migrate', ['--database' => 'tenant', '--path' => '...'])`
      4. Lance les seeders (roles, permissions, settings, payment_methods, default user)
    - `deleteTenant($tenant)` : désactive et supprime la DB (soft)

13. **`app/Console/Commands/CreateTenant.php`**
    - Commande artisan : `php artisan tenant:create {name} {email} {plan}`
    - Pour créer des tenants manuellement

14. **`app/Console/Commands/MigrateTenants.php`**
    - Commande : `php artisan tenant:migrate`
    - Lance les migrations sur TOUTES les DBs tenants (pour les mises à jour)

---

## Phase 5 : Inscription des tenants (Registration Flow)

### Fichiers à créer :
15. **`app/Http/Controllers/TenantRegistrationController.php`**
    - `showForm($plan)` : affiche le formulaire d'inscription avec le plan pré-sélectionné
    - `register(Request)` : valide, crée le tenant, provisionne la DB, redirige vers le sous-domaine

16. **`resources/views/register-tenant.blade.php`**
    - Formulaire : nom entreprise, slug (sous-domaine), nom admin, email, mot de passe, plan sélectionné
    - Design cohérent avec la landing page

### Fichiers à modifier :
17. **`routes/web.php`** — ajouter les routes d'inscription :
    ```
    GET  /register/{plan?}  → TenantRegistrationController@showForm
    POST /register           → TenantRegistrationController@register
    ```

18. **`resources/views/landing.blade.php`** — changer les liens des pricing cards vers `/register/basic`, `/register/medium`, `/register/premium`

---

## Phase 6 : Adapter l'authentification

### Fichiers à modifier :
19. **`app/Http/Controllers/AuthController.php`** — le login fonctionne déjà car le middleware aura déjà switché la DB avant que le controller s'exécute. Vérifier que Passport utilise bien la connexion `tenant`.

20. **`config/auth.php`** — vérifier que les guards utilisent la bonne connexion

21. **`app/Providers/AuthServiceProvider.php`** — s'assurer que Passport fonctionne en multi-tenant (les tokens OAuth sont dans la DB du tenant)

---

## Phase 7 : Super Admin Panel

### Fichiers à créer :
22. **`app/Http/Controllers/SuperAdminController.php`**
    - `index()` : liste tous les tenants avec statut, plan, date création
    - `show($id)` : détails d'un tenant
    - `activate($id)` / `deactivate($id)` : activer/désactiver un tenant
    - `destroy($id)` : supprimer un tenant

23. **`app/Http/Middleware/SuperAdmin.php`**
    - Vérifie que la requête vient du domaine principal (pas de sous-domaine)
    - Vérifie un mot de passe admin ou une session super-admin

24. **`resources/views/superadmin/`** — vues pour le dashboard super admin :
    - `login.blade.php` — login super admin
    - `dashboard.blade.php` — liste des tenants
    - `tenant-detail.blade.php` — détail d'un tenant

### Fichiers à modifier :
25. **`routes/web.php`** — routes super admin :
    ```
    GET  /admin          → SuperAdminController@index
    GET  /admin/tenant/{id}  → SuperAdminController@show
    POST /admin/tenant/{id}/activate → ...
    POST /admin/tenant/{id}/deactivate → ...
    ```

---

## Phase 8 : Configuration serveur

### Fichiers à modifier :
26. **`/etc/apache2/sites-enabled/wuroobiz.ptrniger.com.conf`**
    - Ajouter `ServerAlias *.wuroobiz.ptrniger.com` au vhost HTTPS
    - Ajouter le wildcard aussi au vhost HTTP redirect

27. **DNS** — ajouter un enregistrement wildcard :
    - `*.wuroobiz.ptrniger.com` → même IP que `wuroobiz.ptrniger.com`

28. **SSL** — obtenir un certificat wildcard Let's Encrypt :
    - `certbot certonly --manual --preferred-challenges=dns -d "*.wuroobiz.ptrniger.com" -d "wuroobiz.ptrniger.com"`

---

## Phase 9 : Migrer les données existantes

29. **Script de migration** : Les données actuelles dans `stocky_ptr` deviennent le premier tenant
    - Créer `stocky_tenant_ptrniger` (ou garder les données dans la DB actuelle)
    - Ajouter l'entrée dans la table `tenants`
    - L'admin actuel devient l'admin du premier tenant

---

## Résumé des fichiers

| Action | Fichier | Description |
|--------|---------|-------------|
| Créer | `database/migrations/..._create_plans_table.php` | Table des plans SaaS |
| Créer | `database/migrations/..._create_tenants_table.php` | Table des tenants |
| Créer | `database/seeders/PlanSeeder.php` | Seed 3 plans |
| Créer | `app/Models/Tenant.php` | Modèle Tenant |
| Créer | `app/Models/Plan.php` | Modèle Plan |
| Créer | `app/Models/BaseModel.php` | Classe de base avec connexion tenant |
| Créer | `app/Http/Middleware/IdentifyTenant.php` | Résolution tenant par sous-domaine |
| Créer | `app/Services/TenantService.php` | Provisionnement DB |
| Créer | `app/Console/Commands/CreateTenant.php` | Commande artisan |
| Créer | `app/Console/Commands/MigrateTenants.php` | Migrations multi-tenant |
| Créer | `app/Http/Controllers/TenantRegistrationController.php` | Inscription tenant |
| Créer | `app/Http/Controllers/SuperAdminController.php` | Gestion super admin |
| Créer | `app/Http/Middleware/SuperAdmin.php` | Protection super admin |
| Créer | `resources/views/register-tenant.blade.php` | Page d'inscription |
| Créer | `resources/views/superadmin/*.blade.php` | Vues super admin |
| Modifier | `config/database.php` | Ajouter connexion tenant |
| Modifier | `app/Http/Kernel.php` | Enregistrer middleware |
| Modifier | ~80 modèles | Étendre BaseModel |
| Modifier | `routes/web.php` | Nouvelles routes |
| Modifier | `resources/views/landing.blade.php` | Liens inscription |
| Modifier | `/etc/apache2/sites-enabled/...` | Wildcard vhost |

## Ordre d'exécution
1. Phase 1 (DB + modèles centraux)
2. Phase 2 (middleware)
3. Phase 3 (adapter modèles)
4. Phase 4 (provisionnement)
5. Phase 5 (inscription)
6. Phase 6 (auth)
7. Phase 7 (super admin)
8. Phase 8 (serveur)
9. Phase 9 (migration données)
