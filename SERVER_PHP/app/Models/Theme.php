<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Theme extends Model
{
    protected $table = 'theme';

    protected $fillable = ['id', 'title', 'slug', 'excerpt', 'description',
    'content', 'background', 'image_laptop', 'image_tablet', 'image_mobile', 
    'site_name', 'image_seo', 'keyword_seo', 'description_seo'];
    
}
