<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $table = 'post';

    protected $fillable = ['id', 'topic_id', 'title', 'slug', 'excerpt', 
    'content', 'background', 'thumbnail', 'public', 'site_name', 
    'image_seo', 'keyword_seo', 'description_seo'];

    public function getTitle( $limit = 10, $ellipsis = '...' ){

        if( $this->title ){
            return $this->limitText( $this->title, $limit, $ellipsis );
        }
        return null;
    }

    public function getKeywordSeo( $limit = 10, $ellipsis = '...' ){

        if( $this->keyword_seo ){
            return $this->limitText( $this->keyword_seo, $limit, $ellipsis );
        }
        return null;
    }
    public function getDescriptionSeo( $limit = 10, $ellipsis = '...' ){

        if( $this->description_seo ){
            return $this->limitText( $this->description_seo, $limit, $ellipsis );
        }
        return null;
    }

    private function limitText($content = false, $limit = 10, $ellipsis = '...') {
        if(mb_strlen($content,'UTF-8') > $limit){
            $content= str_replace('\n', '', mb_substr(strip_tags($content), 0, $limit,'UTF-8')) . $ellipsis;
        }else{
            $content = str_replace('\n', '', strip_tags($content));
        }
        return $content;
    }
}
