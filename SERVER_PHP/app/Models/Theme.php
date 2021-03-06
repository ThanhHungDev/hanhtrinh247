<?php

namespace App\Models;

use App\Helpers\SupportString;
use Illuminate\Database\Eloquent\Model;

class Theme extends Model
{
    protected $table = 'theme';

    protected $fillable = ['id', 'title', 'slug', 'author', 'url', 'excerpt', 'description',
    'content', 'background', 'image_laptop', 'image_tablet', 'image_mobile', 
    'site_name', 'image_seo', 'keyword_seo', 'description_seo'];

    public function getTitle( $limit = 10, $ellipsis = '...' ){

        if( $this->title ){
            return SupportString::limitText( $this->title, $limit, $ellipsis );
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

    /**
     * là mối quan hệ dạng nhiều nhiều ví dụ : 
     * product -> activity -> style thì thứ tự sẽ là như dưới
     */
    public function tags(){

        return $this->belongsToMany(
            TagTheme::class, 'tag_theme_active', 'theme_id', 'tag_theme_id');
    }
    
}
