<?php

namespace App\Factory;

use App\Factory\FactoryModelInterface;
use App\Repositories\DB\DBEloquentRepository;
use App\Repositories\Option\OptionEloquentRepository;
use App\Repositories\Post\PostEloquentRepository;
use App\Repositories\PostTagActive\PostTagActiveEloquentRepository;
use App\Repositories\Rating\RatingEloquentRepository;
use App\Repositories\Tag\TagEloquentRepository;
use App\Repositories\TagTheme\TagThemeEloquentRepository;
use App\Repositories\TagThemeActive\TagThemeActiveEloquentRepository;
use App\Repositories\Theme\ThemeEloquentRepository;
use App\Repositories\Topic\TopicEloquentRepository;
use App\Repositories\User\UserEloquentRepository;

class BaseModel implements FactoryModelInterface{

    
    public static $DBModel;
    public static $PostModel;
    public static $PostTagActiveModel;
    public static $RatingModel;
    public static $TagModel;
    public static $ThemeModel;
    public static $TopicModel;
    public static $UserModel;
    public static $TagThemeModel;
    public static $TagThemeActiveModel;
    public static $OptionModel;



    public function createDBModel(){

        if(!self::$DBModel){
            self::$DBModel = new DBEloquentRepository();
        }
        
        return self::$DBModel;
    }

    public function createPostModel(){
        
        if(!self::$PostModel){
            self::$PostModel = new PostEloquentRepository();
        }
        return self::$PostModel;
    }

    public function createPostTagActiveModel(){
        
        if(!self::$PostTagActiveModel){
            self::$PostTagActiveModel = new PostTagActiveEloquentRepository();
        }
        return self::$PostTagActiveModel;
    }

    public function createRatingModel(){
        
        if(!self::$RatingModel){
            self::$RatingModel = new RatingEloquentRepository();
        }
        return self::$RatingModel;
    }

    public function createTagModel(){
        
        if(!self::$TagModel){
            self::$TagModel = new TagEloquentRepository();
        }
        return self::$TagModel;
    }

    public function createThemeModel(){
        
        if(!self::$ThemeModel){
            self::$ThemeModel = new ThemeEloquentRepository();
        }
        return self::$ThemeModel;
    }

    public function createTopicModel(){

        if(!self::$TopicModel){
            self::$TopicModel = new TopicEloquentRepository();
        }
        
        return self::$TopicModel;
    }

    public function createUserModel(){
        
        if(!self::$UserModel){
            self::$UserModel = new UserEloquentRepository();
        }
        return self::$UserModel;
    }

    public function createTagThemeModel(){
        
        if(!self::$TagThemeModel){
            self::$TagThemeModel = new TagThemeEloquentRepository();
        }
        return self::$TagThemeModel;
    }
    public function createTagThemeActiveModel(){
        
        if(!self::$TagThemeActiveModel){
            self::$TagThemeActiveModel = new TagThemeActiveEloquentRepository();
        }
        return self::$TagThemeActiveModel;
    }

    public function createOptionModel(){
        
        if(!self::$OptionModel){
            self::$OptionModel = new OptionEloquentRepository();
        }
        return self::$OptionModel;
    }
}