<?php 

namespace App\Factory;

interface FactoryModelInterface
{
    
    public function createPostModel();
    public function createUserModel();
    public function createRatingModel();
    public function createDBModel();
    public function createTopicModel();
}