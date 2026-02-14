<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTenantsTable extends Migration
{
    public function up()
    {
        Schema::connection('central')->create('tenants', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique(); // sous-domaine
            $table->string('database')->unique(); // nom de la DB
            $table->unsignedBigInteger('plan_id');
            $table->enum('status', ['active', 'inactive', 'trial'])->default('trial');
            $table->timestamp('trial_ends_at')->nullable();
            $table->string('admin_email');
            $table->string('admin_name');
            $table->string('domain')->nullable(); // custom domain
            $table->timestamps();

            $table->foreign('plan_id')->references('id')->on('plans')->onDelete('restrict');
        });
    }

    public function down()
    {
        Schema::connection('central')->dropIfExists('tenants');
    }
}
