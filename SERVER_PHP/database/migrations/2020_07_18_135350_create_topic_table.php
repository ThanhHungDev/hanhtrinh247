<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTopicTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('topic')) {
            Schema::create('topic', function (Blueprint $table) {
                $table->increments('id');
                $table->string('name')->nullable();
                $table->string('slug')->nullable();
                $table->string('excerpt')->nullable();
                $table->text('content')->nullable();
                $table->text('catalogue')->nullable();
                $table->integer('view')->default(1);
                $table->string('background')->nullable();
                $table->string('thumbnail')->nullable();
                $table->string('site_name')->nullable();
                $table->string('image_seo')->nullable();
                $table->string('keyword_seo')->nullable();
                $table->string('description_seo')->nullable();
                $table->timestamps();
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('topic');
    }
}
