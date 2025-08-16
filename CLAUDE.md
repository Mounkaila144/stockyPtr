# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Stocky is a comprehensive Laravel-based inventory management system with POS (Point of Sale) capabilities. It's built as a modular application using Laravel 10+ with Vue.js frontend and includes extensive features for inventory tracking, sales management, accounting, HR management, and reporting.

## Architecture & Structure

### Core Framework
- **Backend**: Laravel 10+ (PHP 8.1+)
- **Frontend**: Vue.js 2.6+ with Vue Router
- **Authentication**: Laravel Passport (OAuth2)
- **Database**: MySQL with Eloquent ORM
- **Build System**: Laravel Mix with Webpack
- **Module System**: Uses nwidart/laravel-modules for modular architecture

### Key Directory Structure
- `app/Http/Controllers/` - Main application controllers (50+ controllers for different modules)
- `app/Models/` - Eloquent models representing database entities
- `app/Policies/` - Authorization policies for all major resources
- `Modules/` - Modular extensions (currently empty but configured)
- `resources/src/` - Vue.js application source
- `public/js/bundle/` - Compiled Vue.js components and chunks
- `database/migrations/` - Extensive migration history (200+ migrations)
- `database/seeders/` - Database seeders with multilingual support

### Key Models & Business Logic
The application centers around these core entities:
- **Products** - With variants, warehouses, units, brands, and categories
- **Sales & Purchases** - Complete transaction lifecycle with returns
- **Inventory** - Multi-warehouse stock management with transfers and adjustments
- **Clients & Providers** - Customer and supplier management
- **Accounting** - Accounts, deposits, expenses, payment methods
- **HR** - Employees, attendance, payroll, projects, and tasks
- **Reporting** - Comprehensive reporting across all modules

## Development Commands

### Backend (Laravel/PHP)
```bash
# Install PHP dependencies
composer install

# Run database migrations
php artisan migrate

# Seed the database
php artisan db:seed

# Run tests
./vendor/bin/phpunit

# Generate application key
php artisan key:generate

# Install Laravel Passport
php artisan passport:install

# Clear application cache
php artisan config:clear
php artisan cache:clear
php artisan route:clear
```

### Frontend (Vue.js/Node.js)
```bash
# Install Node.js dependencies
npm install

# Development build with watching
npm run dev
npm run watch

# Production build
npm run production

# Hot module replacement
npm run hot
```

### Database Operations
```bash
# Create new migration
php artisan make:migration create_table_name

# Create model with migration
php artisan make:model ModelName -m

# Run specific migration
php artisan migrate --path=/database/migrations/specific_migration.php

# Rollback migrations
php artisan migrate:rollback
```

## Application Setup & Installation

The application includes a setup wizard accessible at `/setup` when not installed. The setup process:
1. Checks server requirements
2. Validates database connection
3. Runs migrations and seeders
4. Creates admin user
5. Sets up basic configuration

Setup-related files:
- `SetupController.php` - Handles installation wizard
- `TestDbController.php` - Database connection testing
- `check_permissions.php` - Server requirements checking

## Key Features & Modules

### Inventory Management
- Multi-warehouse support with stock transfers
- Product variants with different units
- Stock adjustments and count stock
- IMEI/Serial number tracking
- Barcode generation and scanning

### Sales & POS
- Point of Sale interface
- Sales with multiple payment methods
- Quotations and sales returns
- Customer management and credit tracking
- Receipt printing and email/SMS notifications

### Purchasing
- Purchase orders and returns
- Supplier management
- Payment tracking and due management
- Purchase imports via Excel

### Accounting
- Chart of accounts
- Deposits and expenses tracking
- Payment methods management
- Financial reports
- Transfer money between accounts

### HR Management
- Employee management with departments and designations
- Attendance tracking
- Leave management
- Payroll processing
- Project and task management

### Reporting
- Sales, purchase, and inventory reports
- Customer and supplier reports
- Financial reports (profit/loss, expenses, deposits)
- User activity reports
- Export capabilities (PDF, Excel)

## Important Configuration Files

- `config/app.php` - Main Laravel application configuration
- `webpack.mix.js` - Frontend build configuration
- `phpunit.xml` - Testing configuration
- `modules_statuses.json` - Module status tracking (currently empty)

## Security & Authentication

- Uses Laravel Passport for API authentication
- Role-based permissions system with policies
- Middleware for active user verification (`Is_Active`)
- CSRF protection enabled
- Input validation and sanitization

## Multilingual Support

- Dynamic translations stored in database (`translations` table)
- Language management through admin panel
- Support for 20+ languages including RTL languages
- Translation files in `database/seeders/translations/`

## API Structure

- RESTful API endpoints under `/api/` prefix
- OAuth2 authentication required for protected routes
- Consistent response format via `BaseController`
- API routes handle password reset, user authentication, and core business operations

## Development Notes

- The application uses extensive database relationships and foreign keys
- Vue.js components are built as single-file components
- Laravel Mix handles asset compilation and code splitting
- The system supports both web interface and API consumption
- Extensive use of Laravel policies for authorization
- Database uses soft deletes for many models
- Application includes comprehensive error logging and debugging capabilities

## Testing

- PHPUnit configured for Feature and Unit tests
- Test environment uses SQLite in-memory database
- Basic test structure present in `tests/` directory