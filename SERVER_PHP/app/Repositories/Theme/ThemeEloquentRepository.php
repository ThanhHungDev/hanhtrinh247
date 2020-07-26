<?php
namespace App\Repositories\Theme;

use App\Repositories\EloquentRepository;

class ThemeEloquentRepository extends EloquentRepository
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return \App\Models\Theme::class;
    }

    public function getThemeBySlug( $slug ){
        
        return $this->_model->where('slug', $slug )->first();
    }
    
}