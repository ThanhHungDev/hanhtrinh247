<?php
namespace App\Repositories\Post;

use App\Models\Post;
use App\Repositories\EloquentRepository;

class PostEloquentRepository extends EloquentRepository implements PostRepositoryInterface
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return Post::class;
    }

    /**
     * Get object post have properti null
     * @return mixed
     */
    public function getPostNull(){
        
        return new Post();
    }
    
}