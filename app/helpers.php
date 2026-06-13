<?php

use App\utils\TenantStorage;

if (!function_exists('tenant_image_url')) {
    /**
     * Get the tenant-aware relative image URL for use in Blade templates.
     *
     * @param string $type Subdirectory type (e.g. 'products', 'avatar', 'brands', '' for root)
     * @param string $filename The image filename
     * @return string Relative URL path
     */
    function tenant_image_url(string $type, ?string $filename): string
    {
        if ($filename === null || $filename === '') {
            return 'images/logo-default.png';
        }
        $base = TenantStorage::imageBasePath();
        return $type ? $base . '/' . $type . '/' . $filename : $base . '/' . $filename;
    }
}
