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

    public function getPostBySlug( $slug ){
        
        return $this->_model->where('slug', $slug )->first();
    }

    
}