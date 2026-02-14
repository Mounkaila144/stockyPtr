<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Tenant;
use App\Services\TenantService;
use Illuminate\Support\Facades\Artisan;

class MigrateTenants extends Command
{
    protected $signature = 'tenant:migrate {--seed : Lancer aussi les seeders} {--tenant= : Slug d\'un tenant specifique}';
    protected $description = 'Lancer les migrations sur toutes les bases de donnees tenants';

    public function handle()
    {
        $service = new TenantService();

        $query = Tenant::query();

        if ($slug = $this->option('tenant')) {
            $query->where('slug', $slug);
        }

        $tenants = $query->get();

        if ($tenants->isEmpty()) {
            $this->warn('Aucun tenant trouve.');
            return 0;
        }

        $this->info("Migration de {$tenants->count()} tenant(s)...");

        foreach ($tenants as $tenant) {
            $this->info("  -> {$tenant->name} ({$tenant->database})...");

            try {
                $service->configureTenantConnection($tenant);

                Artisan::call('migrate', [
                    '--database' => 'tenant',
                    '--path' => 'database/migrations',
                    '--force' => true,
                ]);

                $this->info("     OK");
            } catch (\Exception $e) {
                $this->error("     ERREUR: " . $e->getMessage());
            }
        }

        $this->info('Migrations terminees.');
        return 0;
    }
}
