<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('post', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('topic_id')->unsigned();
            $table->string('title', 150)->nullable();
            $table->string('slug', 150)->nullable();
            $table->string('excerpt')->nullable();
            $table->text('catalogue')->nullable();
            $table->text('content')->nullable();
            $table->string('background', 510)->nullable();
            $table->string('thumbnail', 510)->nullable();
            $table->integer('like')->default(1);
            $table->integer('view')->default(1);
            $table->float('rate_value')->default(3.5);
            $table->integer('public')->default(1);
            $table->string('site_name', 150)->nullable();
            $table->string('image_seo', 510)->nullable();
            $table->string('keyword_seo', 255)->nullable();
            $table->string('description_seo', 255)->nullable();
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
        Schema::dropIfExists('post');
    }
}
