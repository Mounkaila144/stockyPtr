<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFeaturesToTenantsTable extends Migration
{
    public function up()
    {
        Schema::connection('central')->table('tenants', function (Blueprint $table) {
            $table->json('features')->nullable()->after('domain');
        });
    }

    public function down()
    {
        Schema::connection('central')->table('tenants', function (Blueprint $table) {
            $table->dropColumn('features');
        });
    }
}
