<?php

namespace App\Models;

use App\Helpers\SupportString;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class Post extends Model
{
    protected $table = 'post';

    protected $fillable = ['id', 'topic_id', 'rating_id', 'title', 'slug', 'excerpt', 
    'content', 'background', 'thumbnail', 'public', 'site_name', 
    'image_seo', 'keyword_seo', 'description_seo'];

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

    public static function boot()
    {
        parent::boot();

        static::updating(function ($instance) {
            // update cache content
            Cache::put('posts.'.$instance->slug,$instance);
        });

        static::deleting(function ($instance) {
            // delete post cache
            Cache::forget('posts.'.$instance->slug);
        });
        // $post = Cache::rememberForever('posts.'.$slug, function($slug) use($slug) {
        //     return Post::where('slug',$slug)->first();
        // });

        // return view('frontend.posts.post-details',['post'=>$post]);
    }
}
