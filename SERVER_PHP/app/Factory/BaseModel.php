<?php

namespace App\Factory;

use App\FactoryModel\FactoryModelInterface;
use App\Repositories\Post\PostEloquentRepository;

class BaseModel implements FactoryModelInterface{

    public static $PostModel;
    public static $DBModel;


    public function createPostModel(){
        
        if(!self::$PostModel){
            self::$PostModel = new PostEloquentRepository();
        }
        return self::$PostModel;
    }
    public function createUserModel(){
        
        if(!self::$PostModel){
            self::$PostModel = new PostEloquentRepository();
        }
        return self::$PostModel;
    }
    public function createRatingModel(){
        
        if(!self::$PostModel){
            self::$PostModel = new PostEloquentRepository();
        }
        return self::$PostModel;
    }

    public function createDBModel(){

        if(!self::$DBModel){
            self::$DBModel = DB::class;
        }
        
        return self::$DBModel;
    }
    
}