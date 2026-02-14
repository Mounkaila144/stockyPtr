<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Services\TenantService;
use App\Models\Plan;

class CreateTenant extends Command
{
    protected $signature = 'tenant:create {name} {slug} {email} {plan_slug} {--password=password}';
    protected $description = 'Creer un nouveau tenant manuellement';

    public function handle()
    {
        $plan = Plan::where('slug', $this->argument('plan_slug'))->first();

        if (!$plan) {
            $this->error("Plan '{$this->argument('plan_slug')}' introuvable.");
            return 1;
        }

        $service = new TenantService();

        $this->info('Creation du tenant...');

        try {
            $tenant = $service->createTenant([
                'name' => $this->argument('name'),
                'slug' => $this->argument('slug'),
                'admin_email' => $this->argument('email'),
                'admin_name' => $this->argument('name'),
                'plan_id' => $plan->id,
                'admin_password' => $this->option('password'),
            ]);

            $this->info("Tenant cree avec succes !");
            $this->info("  Nom: {$tenant->name}");
            $this->info("  Slug: {$tenant->slug}");
            $this->info("  Database: {$tenant->database}");
            $this->info("  URL: https://{$tenant->slug}." . config('app.base_domain'));

            return 0;
        } catch (\Exception $e) {
            $this->error("Erreur: " . $e->getMessage());
            return 1;
        }
    }
}
