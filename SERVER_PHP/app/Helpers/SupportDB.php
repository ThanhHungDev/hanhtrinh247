<?php 
namespace App\Helpers;

use App\Factory\BaseModel;
use Illuminate\Support\Facades\Config;

class SupportDB{

    public static $OPTIONS = null;

    public static function getOption( $key ){

        if( !static::$OPTIONS ){

            $baseModel   = new BaseModel();
            $optionModel = $baseModel->createOptionModel();
            $options     = $optionModel->getAll();

            $DF_OP = [];
            foreach( $options as $option ){

                $DF_OP[] = [ 
                    'key'        => SupportString::createSlug($option->key),
                    'type'       => $option->type,
                    'value_text' => $option->value_text,
                    'value_html' => $option->value_html,
                ];
            }
            static::$OPTIONS = $DF_OP;
        }

        
        if( static::$OPTIONS ){
            for ($index=0; $index < count(static::$OPTIONS); $index++) { 

                $DF_OPTION_ROW = static::$OPTIONS[$index];
                if( 
                    isset($DF_OPTION_ROW['key']) && 
                    $DF_OPTION_ROW['key'] == SupportString::createSlug($key) 
                    ){

                    if( $DF_OPTION_ROW['type'] == Config::get('constant.TYPE_OPTION.SINGLE')){
                        return $DF_OPTION_ROW['value_text'];
                    }
                    return $DF_OPTION_ROW['value_html'];
                }
            } 
        }
        
        return $key;
    }

    public static function getTopicByCondition($condition){

        $baseModel   = new BaseModel();
        $topicModel = $baseModel->createTopicModel();

        return $topicModel->getTopicByCondition($condition);
    }
    public static function getTagByCondition($condition){

        $baseModel   = new BaseModel();
        $tagModel = $baseModel->createTagModel();

        return $tagModel->getTagByCondition($condition);
    }

    public static function getPostByCondition($condition){

        $baseModel   = new BaseModel();
        $postModel = $baseModel->createPostModel();

        return $postModel->getPostByCondition($condition);
    }
    public static function getMenuFullService(){

        $menuFull = [];

        $condition = [
            'orderby' => [ 'field' => 'view', 'type' => 'DESC' ]
        ];
        $topic = static::getTopicByCondition($condition)->first();
        $menuFull[] = (object) [
            'text' => $topic->name,
            'slug' => $topic->slug,
            'route' => 'TOPIC_VIEW'
        ];
        $tag = static::getTagByCondition($condition)->first();
        $menuFull[] = (object) [
            'text' => $tag->name,
            'slug' => $tag->slug,
            'route' => 'TAG_VIEW'
        ];
        $posts = static::getPostByCondition($condition)->take(4)->get();
        foreach ($posts as $post) {
            $menuFull[] = (object) [
                'text' => $post->title,
                'slug' => $post->slug,
                'route' => 'POST_VIEW'
            ];
        }
        
        return $menuFull;
    }

}