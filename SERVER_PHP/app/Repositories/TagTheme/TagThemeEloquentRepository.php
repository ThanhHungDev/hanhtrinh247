<?php
namespace App\Repositories\TagTheme;

use App\Repositories\EloquentRepository;

class TagThemeEloquentRepository extends EloquentRepository
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return \App\Models\TagTheme::class;
    }
    
}