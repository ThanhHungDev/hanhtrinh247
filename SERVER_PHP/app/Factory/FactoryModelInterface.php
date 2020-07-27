<?php 

namespace App\Factory;

interface FactoryModelInterface
{
    
    public function createDBModel();

    public function createPostModel();

    public function createPostTagActiveModel();

    public function createRatingModel();

    public function createTagModel();

    public function createThemeModel();

    public function createTopicModel();

    public function createUserModel();

    public function createTagThemeModel();

    public function createTagThemeActiveModel();
}