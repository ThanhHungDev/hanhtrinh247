<?php
namespace App\Repositories;

use App\Model\PostModel;
use App\Repositories\EloquentRepository;

class PostRepository extends EloquentRepository
{

    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return PostModel::class;
    }
}