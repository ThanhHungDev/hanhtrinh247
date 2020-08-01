<?php
namespace App\Repositories\Option;

use App\Repositories\EloquentRepository;

class OptionEloquentRepository extends EloquentRepository
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return \App\Models\Option::class;
    }
    
}