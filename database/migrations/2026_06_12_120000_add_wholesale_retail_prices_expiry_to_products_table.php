<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('products', function (Blueprint $table) {
            if (!Schema::hasColumn('products', 'price_wholesale')) {
                $table->float('price_wholesale', 10, 0)->nullable()->after('price');
            }
            if (!Schema::hasColumn('products', 'price_retail')) {
                $table->float('price_retail', 10, 0)->nullable()->after('price_wholesale');
            }
            if (!Schema::hasColumn('products', 'expiry_date')) {
                $table->date('expiry_date')->nullable()->after('price_retail');
            }
        });
    }

    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            if (Schema::hasColumn('products', 'price_wholesale')) {
                $table->dropColumn('price_wholesale');
            }
            if (Schema::hasColumn('products', 'price_retail')) {
                $table->dropColumn('price_retail');
            }
            if (Schema::hasColumn('products', 'expiry_date')) {
                $table->dropColumn('expiry_date');
            }
        });
    }
};
