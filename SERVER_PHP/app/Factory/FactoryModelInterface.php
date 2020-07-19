<?php 

namespace App\FactoryModel;

interface FactoryModelInterface
{
    
    public function createPostModel();
    public function createUserModel();
    public function createRatingModel();
    public function createDBModel();
}