<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TagThemeActive extends Model
{
    protected $table = 'tag_theme_active';

    protected $fillable = ['id', 'theme_id', 'tag_theme_id' ];
}
