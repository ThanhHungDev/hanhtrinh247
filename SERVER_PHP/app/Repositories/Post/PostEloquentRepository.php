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
        if( $this->_model ){
            return $this->_model;
        }
        return Post::class;
    }

    /**
     * Get object post have properti null
     * @return mixed
     */
    public function getPostNull(){
        
        return new Post();
    }

    public function getPostBySlug( $slug ){
        
        return $this->_model->where('slug', $slug )->first();
    }
    
}