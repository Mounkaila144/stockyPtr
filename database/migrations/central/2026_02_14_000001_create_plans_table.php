<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePlansTable extends Migration
{
    public function up()
    {
        Schema::connection('central')->create('plans', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->integer('price')->default(0); // en FCFA
            $table->string('billing_cycle')->default('monthly');
            $table->integer('max_users')->default(5);
            $table->integer('max_warehouses')->default(3);
            $table->integer('max_products')->default(0); // 0 = illimite
            $table->json('features')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::connection('central')->dropIfExists('plans');
    }
}
