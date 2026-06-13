<?php

namespace App\utils;

use Illuminate\Support\Facades\File;

class TenantStorage
{
    /**
     * Get the current tenant slug, or null if central/no tenant.
     */
    protected static function tenantSlug(): ?string
    {
        $tenant = app()->bound('tenant') ? app('tenant') : null;
        return $tenant?->slug;
    }

    /**
     * Relative base path for images (for URLs).
     * Tenant: /images/tenants/{slug}
     * Central: /images
     */
    public static function imageBasePath(): string
    {
        $slug = static::tenantSlug();
        return $slug ? '/images/tenants/' . $slug : '/images';
    }

    /**
     * Relative base path for flags (for URLs).
     * Flags are always shared (country flags), never tenant-specific.
     */
    public static function flagBasePath(): string
    {
        return '/flags';
    }

    /**
     * Absolute save path for a given image type (products, avatar, brands, etc.).
     * Returns the directory path where files should be saved.
     *
     * @param string $type Subdirectory type (e.g. 'products', 'avatar', 'brands', '' for root)
     */
    public static function savePath(string $type = ''): string
    {
        $base = public_path(static::imageBasePath());
        $path = $type ? $base . '/' . $type : $base;

        if (!File::isDirectory($path)) {
            File::makeDirectory($path, 0775, true, true);
        }

        return $path;
    }

    /**
     * Absolute save path for flags (always shared directory).
     */
    public static function flagSavePath(): string
    {
        $path = public_path('/flags');

        if (!File::isDirectory($path)) {
            File::makeDirectory($path, 0775, true, true);
        }

        return $path;
    }

    /**
     * Resolve the absolute file path for a given image.
     * Checks tenant directory first, then falls back to shared/central directory.
     *
     * @param string $type Subdirectory type (e.g. 'products', 'avatar', 'brands', '' for root)
     * @param string $filename The image filename
     */
    public static function resolveFilePath(string $type, string $filename): string
    {
        // Tenant-specific path
        $slug = static::tenantSlug();
        if ($slug) {
            $tenantPath = $type
                ? public_path('/images/tenants/' . $slug . '/' . $type . '/' . $filename)
                : public_path('/images/tenants/' . $slug . '/' . $filename);

            if (file_exists($tenantPath)) {
                return $tenantPath;
            }
        }

        // Fallback to shared/central directory
        return $type
            ? public_path('/images/' . $type . '/' . $filename)
            : public_path('/images/' . $filename);
    }

    /**
     * Generate a safe filename from an uploaded file.
     * Keeps only alphanumeric chars, dashes and underscores.
     */
    public static function safeFilename(\Illuminate\Http\UploadedFile $file): string
    {
        $ext = $file->getClientOriginalExtension() ?: 'png';
        return rand(11111111, 99999999) . '_' . time() . '.' . $ext;
    }

    /**
     * Check if a filename is a default/shared image that should never be deleted.
     */
    public static function isDefaultImage(string $filename): bool
    {
        return in_array($filename, [
            'no-image.png',
            'no_avatar.png',
            'logo-default.png',
            'favicon.ico',
        ]);
    }

    /**
     * Create all required subdirectories for a tenant.
     *
     * @param string $tenantSlug
     */
    public static function ensureDirectories(string $tenantSlug): void
    {
        $subdirs = ['products', 'avatar', 'brands', 'leaves', 'count_stock'];

        $imageBase = public_path('/images/tenants/' . $tenantSlug);
        foreach ($subdirs as $dir) {
            $path = $imageBase . '/' . $dir;
            if (!File::isDirectory($path)) {
                File::makeDirectory($path, 0775, true, true);
            }
        }

        // Flags are shared, no tenant-specific flag directories needed
    }

    /**
     * Ensure directories exist for the current tenant.
     */
    public static function ensureCurrentDirectories(): void
    {
        $slug = static::tenantSlug();
        if ($slug) {
            static::ensureDirectories($slug);
        }
    }
}
