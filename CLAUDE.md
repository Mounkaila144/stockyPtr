# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Stocky is a Laravel 10+ inventory management system with POS capabilities. The backend is a pure REST API consumed by a decoupled Vue.js 2.6 SPA frontend. It covers inventory, sales, purchasing, accounting, HR, and reporting.

## Development Commands

```bash
# Backend
composer install
php artisan migrate
php artisan db:seed
php artisan passport:install

# Run all tests (uses SQLite in-memory)
./vendor/bin/phpunit

# Run a single test file
./vendor/bin/phpunit tests/Feature/ExampleTest.php

# Run a single test method
./vendor/bin/phpunit --filter test_method_name

# Clear caches (often needed after config/route changes)
php artisan config:clear && php artisan cache:clear && php artisan route:clear

# Frontend
npm install
npm run dev          # development build
npm run watch        # dev build with file watching
npm run production   # production build (minified, hashed chunks)
```

## Architecture

### API-First Design
- Backend serves only JSON via REST API (`routes/api.php`, 600+ lines)
- Frontend is a Vue.js SPA that consumes the API
- Web routes (`routes/web.php`) serve: setup wizard at `/setup`, landing page at `/`, and a catch-all `/{vue}` route for the SPA

### Authentication & Authorization
- **Laravel Passport** (OAuth2) for API auth — tokens via `auth:api` middleware
- **`Is_Active` middleware** (`app/Http/Middleware/Is_Active.php`) — checks `user.statut` field; applied to all protected routes alongside `auth:api`
- **Policy-based authorization** — every controller action calls `$this->authorizeForUser($request->user('api'), 'action', Model::class)`
- Policies check permissions via `Permission` model + `Role` many-to-many. Permission names follow pattern: `{resource}_{action}` (e.g., `products_view`, `sales_add`)
- User role system: `User` → many-to-many → `Role` → many-to-many → `Permission`

### Controller Patterns
All controllers extend `BaseController` (`app/Http/Controllers/BaseController.php`):
- `sendResponse($result, $msg)` → `{ success: true, message, data }` (200)
- `sendError($error_msg, $error)` → `{ success: false, message, errors }` (400)
- `Set_config_mail()` — dynamically sets mail config from `servers` table
- `get_Module_Info()` — retrieves installed/enabled `nwidart/laravel-modules`

Common controller patterns:
- Authorization check at start of every method
- `helpers` class (`app/utils/helpers.php`) for filtering (`filter()`) and role-based record visibility (`Show_Records()`)
- Pagination with configurable `perPage` (supports `-1` for all results)
- Eager loading to prevent N+1 queries
- Bulk delete via `delete_by_selection` methods
- Notifications via Twilio/Nexmo/Infobip (SMS), email, WhatsApp
- PDF generation via `barryvdh/laravel-dompdf` with Arabic support (`ArPHP`)

### Model Patterns
- All models use **soft deletes** (`deleted_at`)
- Explicit `$fillable` arrays for mass assignment protection
- Type casting via `$casts` (doubles for financial fields, booleans for flags)
- Product types: `is_single`, `is_combo`, `is_variant`
- Stock tracked via `product_warehouse` pivot table

### Frontend (Vue.js SPA)
- **Entry points**: `resources/src/main.js` (app) and `resources/src/login.js` (login page)
- **Build output**: `public/js/main.min.js`, `public/js/login.min.js`, chunks in `public/js/bundle/`
- **Router**: `resources/src/router.js` — history mode, all routes lazy-loaded via dynamic imports with named chunks
- **Store**: Vuex at `resources/src/store/` — modules: `auth` (permissions, user, notifications), `language` (persisted to localStorage + backend sync), `largeSidebar`, `compactSidebar`, `config`
- **Axios**: base URL `/api/`, credentials enabled. Interceptors redirect on 401→`/login`, 403→`/not_authorize`, 404→`/NotFound`
- **Global event bus**: `window.Fire = new Vue()`
- **i18n**: Translations loaded from `/api/translations/{locale}` at boot, stored in database `translations` table

### Route Organization (API)
- Unauthenticated: password reset, login (`getAccessToken`), logo/settings, translations, languages
- Authenticated (`auth:api` + `Is_Active`): everything else
- Heavy use of `Route::resource()` for CRUD
- Prefixes: `report/*` (40+ report routes), `hrm/*`, `returns/sale/*`, `returns/purchase/*`, `payment/*`
- PDF routes are public (outside auth): `sale_pdf/{id}`, `purchase_pdf/{id}`, `quote_pdf/{id}`, etc.

### Database
- MySQL with 200+ migrations in `database/migrations/`
- Seeder order matters (in `DatabaseSeeder.php`): Clients → Currencies → Settings → Server → Permissions → Roles → Users → UserRoles → PermissionRoles → Warehouse
- Translations seeded from `database/seeders/translations/`

### Module System
- Configured via `nwidart/laravel-modules` with autoloading in `Modules/` directory
- Module status tracked in `modules_statuses.json`
- Currently no modules installed

## Key Files Reference

| Purpose | Path |
|---------|------|
| API routes | `routes/api.php` |
| Web routes | `routes/web.php` |
| Base controller | `app/Http/Controllers/BaseController.php` |
| Helpers (filter/permissions) | `app/utils/helpers.php` |
| Active user middleware | `app/Http/Middleware/Is_Active.php` |
| HTTP Kernel (middleware config) | `app/Http/Kernel.php` |
| Vue app entry | `resources/src/main.js` |
| Vue router | `resources/src/router.js` |
| Vuex store | `resources/src/store/index.js` |
| Webpack/Mix config | `webpack.mix.js` |
| Setup wizard | `app/Http/Controllers/SetupController.php` |
| SaaS migration plan | `PLAN.md` |
