<?php

namespace App\Models;

use App\Helpers\SupportString;
use Illuminate\Database\Eloquent\Model;

class TagTheme extends Model
{
    protected $table = 'tag_theme';

    protected $fillable = ['id', 'name', 'slug', 'excerpt', 
    'content', 'background', 'thumbnail', 'site_name', 
    'image_seo', 'keyword_seo', 'description_seo'];


    public function getName( $limit = 10, $ellipsis = '...' ){

        if( $this->name ){
            return SupportString::limitText( $this->name, $limit, $ellipsis );
        }
        return null;
    }

    public function getKeywordSeo( $limit = 10, $ellipsis = '...' ){

        if( $this->keyword_seo ){
            return SupportString::limitText( $this->keyword_seo, $limit, $ellipsis );
        }
        return null;
    }
    public function getDescriptionSeo( $limit = 10, $ellipsis = '...' ){

        if( $this->description_seo ){
            return SupportString::limitText( $this->description_seo, $limit, $ellipsis );
        }
        return null;
    }
}
