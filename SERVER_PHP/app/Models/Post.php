<?php

namespace App\Models;

use App\Helpers\SupportString;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Config;

class Post extends Model
{
    protected $table = 'post';

    protected $fillable = ['id', 'topic_id', 'rating_id', 'title', 'slug', 'excerpt', 
    'content', 'background', 'thumbnail', 'public', 'site_name', 
    'image_seo', 'keyword_seo', 'description_seo', 'type', 'stylesheet', 'javascript'];

    public function getType(){

        if( $this->type && $this->type == Config::get('constant.TYPE-POST.POST') ){
            return 'POST';
        }
        return 'PAGE';
    }

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

    // public static function boot(){
        
    //     parent::boot();

    //     static::updating(function ($instance) {
    //         // update cache content
    //         $keys = [ static::class , $instance->slug ];
    //         Cache::put(implode(".", $keys ),$instance);
    //     });

    //     static::deleting(function ($instance) {
    //         // delete post cache
    //         $keys = [ static::class , $instance->slug ];
    //         Cache::forget(implode(".", $keys ));
    //     });
    // }

    /**
     * là mối quan hệ dạng nhiều nhiều ví dụ : 
     * product -> activity -> style thì thứ tự sẽ là như dưới
     */
    public function tags(){

        return $this->belongsToMany(
            Tag::class, 'post_tag_active', 'post_id', 'tag_id');
    }

    public function rateAuthor(){

        return $this->belongsTo(
            Rating::class, 'rating_id');
    }

    /**
     * là mối quan hệ dạng nhiều tới 1 ví dụ : 
     */
    public function topic(){

        return $this->belongsTo( Topic::class, 'topic_id');
    }
}
