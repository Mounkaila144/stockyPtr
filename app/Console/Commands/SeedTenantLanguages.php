<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Tenant;
use App\Services\TenantService;
use Illuminate\Support\Facades\DB;

class SeedTenantLanguages extends Command
{
    protected $signature = 'tenant:seed-languages {--tenant= : Slug d\'un tenant specifique (sinon tous)}';
    protected $description = 'Seeder les langues et traductions manquantes pour les tenants existants';

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

        $languages = [
            ['name' => 'English',    'locale' => 'en',    'flag' => 'gb.svg', 'is_default' => false],
            ['name' => 'Français',   'locale' => 'fr',    'flag' => 'fr.svg', 'is_default' => true],
            ['name' => 'العربية',    'locale' => 'ar',    'flag' => 'sa.svg', 'is_default' => false],
            ['name' => 'Türkçe',     'locale' => 'tur',   'flag' => 'tr.svg', 'is_default' => false],
            ['name' => 'Deutsch',    'locale' => 'de',    'flag' => 'de.svg', 'is_default' => false],
            ['name' => 'Español',    'locale' => 'es',    'flag' => 'es.svg', 'is_default' => false],
            ['name' => 'Italiano',   'locale' => 'it',    'flag' => 'it.svg', 'is_default' => false],
            ['name' => 'Português',  'locale' => 'br',    'flag' => 'pt.svg', 'is_default' => false],
            ['name' => '简体中文',    'locale' => 'sm_ch', 'flag' => 'cn.svg', 'is_default' => false],
            ['name' => '繁體中文',    'locale' => 'tr_ch', 'flag' => 'cn.svg', 'is_default' => false],
            ['name' => 'ไทย',        'locale' => 'thai',  'flag' => 'th.svg', 'is_default' => false],
            ['name' => 'हिन्दी',     'locale' => 'hn',    'flag' => 'in.svg', 'is_default' => false],
            ['name' => '한국어',      'locale' => 'kr',    'flag' => 'kr.svg', 'is_default' => false],
            ['name' => '日本語',      'locale' => 'ja',    'flag' => 'jp.svg', 'is_default' => false],
            ['name' => 'Tiếng Việt', 'locale' => 'vn',    'flag' => 'vn.svg', 'is_default' => false],
            ['name' => 'Русский',    'locale' => 'ru',    'flag' => 'ru.svg', 'is_default' => false],
            ['name' => 'Dansk',      'locale' => 'da',    'flag' => 'dk.svg', 'is_default' => false],
            ['name' => 'Polski',     'locale' => 'pl',    'flag' => 'pl.svg', 'is_default' => false],
            ['name' => 'বাংলা',      'locale' => 'ba',    'flag' => 'bd.svg', 'is_default' => false],
            ['name' => 'Bahasa',     'locale' => 'Ind',   'flag' => 'id.svg', 'is_default' => false],
            ['name' => 'Kiswahili',  'locale' => 'ke',    'flag' => 'ke.svg', 'is_default' => false],
            ['name' => 'አማርኛ',      'locale' => 'et',    'flag' => 'et.svg', 'is_default' => false],
            ['name' => 'Hausa',      'locale' => 'ha',    'flag' => 'ng.svg', 'is_default' => false],
            ['name' => 'Yorùbá',     'locale' => 'yo',    'flag' => 'ng.svg', 'is_default' => false],
        ];

        foreach ($tenants as $tenant) {
            $this->info("Tenant: {$tenant->name} ({$tenant->database})");

            try {
                $service->configureTenantConnection($tenant);
                $connection = DB::connection('tenant');

                // Seeder les langues manquantes
                $existingLocales = $connection->table('languages')->pluck('locale')->toArray();
                $added = 0;

                foreach ($languages as $lang) {
                    if (!in_array($lang['locale'], $existingLocales)) {
                        $connection->table('languages')->insert([
                            'name' => $lang['name'],
                            'locale' => $lang['locale'],
                            'flag' => $lang['flag'],
                            'is_active' => true,
                            'is_default' => $lang['is_default'],
                            'created_at' => now(),
                            'updated_at' => now(),
                        ]);
                        $added++;
                    }
                }

                $this->info("  Langues ajoutees: {$added}");

                // Seeder les traductions manquantes
                $translationsPath = database_path('seeders/translations');
                if (is_dir($translationsPath)) {
                    $files = glob($translationsPath . '/*.php');
                    $translationsAdded = 0;

                    foreach ($files as $file) {
                        $locale = pathinfo($file, PATHINFO_FILENAME);
                        $translations = require $file;

                        // Dedupliquer les cles (collation MySQL case-insensitive)
                        $seen = [];
                        $rows = [];
                        foreach ($translations as $key => $value) {
                            $lowerKey = strtolower($key);
                            if (isset($seen[$lowerKey])) {
                                continue;
                            }
                            $seen[$lowerKey] = true;
                            $rows[] = [
                                'locale' => $locale,
                                'key' => $key,
                                'value' => $value,
                                'is_default' => $locale === 'en' ? 1 : 0,
                                'created_at' => now(),
                                'updated_at' => now(),
                            ];
                        }

                        // insertOrIgnore pour eviter les erreurs de doublons
                        foreach (array_chunk($rows, 500) as $chunk) {
                            $connection->table('translations')->insertOrIgnore($chunk);
                        }
                        $translationsAdded += count($rows);
                    }

                    $this->info("  Traductions ajoutees: {$translationsAdded}");
                }

                $this->info("  OK");
            } catch (\Exception $e) {
                $this->error("  ERREUR: " . $e->getMessage());
            }
        }

        $this->info('Termine.');
        return 0;
    }
}
