<?php
namespace App\Repositories\Topic;

use App\Repositories\EloquentRepository;

class TopicEloquentRepository extends EloquentRepository 
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return \App\Models\Topic::class;
    }

    
    
}