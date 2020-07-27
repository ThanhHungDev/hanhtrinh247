<?php
namespace App\Repositories\TagThemeActive;

use App\Repositories\EloquentRepository;

class TagThemeActiveEloquentRepository extends EloquentRepository
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return \App\Models\TagThemeActive::class;
    }

    
}