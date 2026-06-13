<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Tenant Feature Flags
    |--------------------------------------------------------------------------
    |
    | Per-tenant feature flags managed from the Super Admin panel.
    | Each key is stored in the `tenants.features` JSON column as a boolean.
    | Read via $tenant->hasFeature('key') on the backend, or exposed via
    | the /api/tenant/features endpoint to the Vue SPA.
    |
    */

    'flags' => [

        'prices_optional' => [
            'label' => 'Prix optionnels lors de la creation de produits',
            'description' => "Si active, le prix d'achat et le prix de vente ne sont plus obligatoires lors de la creation ou de l'edition d'un produit.",
        ],

    ],

];
