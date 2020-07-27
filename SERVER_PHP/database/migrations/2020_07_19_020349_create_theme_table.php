<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateThemeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('theme', function (Blueprint $table) {
            $table->id();
            $table->string('title', 150)->nullable();
            $table->string('slug', 150)->nullable();
            $table->string('excerpt')->nullable();
            $table->text('description')->nullable();
            $table->text('content')->nullable();
            $table->text('catalogue')->nullable();
            $table->string('background', 510)->nullable();
            $table->string('image_laptop', 510)->nullable();
            $table->string('image_tablet', 510)->nullable();
            $table->string('image_mobile', 510)->nullable();
            $table->string('site_name', 510)->nullable();
            $table->string('image_seo')->nullable();
            $table->string('keyword_seo', 510)->nullable();
            $table->string('description_seo', 510)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('theme');
    }
}
