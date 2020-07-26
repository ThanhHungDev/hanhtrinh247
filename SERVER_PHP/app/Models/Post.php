<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $table = 'post';

    protected $fillable = ['id', 'topic_id', 'title', 'slug', 'excerpt', 
    'content', 'background', 'thumbnail', 'public', 'site_name', 
    'image_seo', 'keyword_seo', 'description_seo'];

}
