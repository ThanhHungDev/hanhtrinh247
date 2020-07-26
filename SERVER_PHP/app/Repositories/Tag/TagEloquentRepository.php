<?php
namespace App\Repositories\Tag;

use App\Repositories\EloquentRepository;

class TagEloquentRepository extends EloquentRepository 
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return \App\Models\Tag::class;
    }

    public function getTagBySlug( $slug ){
        
        return $this->_model->where('slug', $slug )->first();
    }

}