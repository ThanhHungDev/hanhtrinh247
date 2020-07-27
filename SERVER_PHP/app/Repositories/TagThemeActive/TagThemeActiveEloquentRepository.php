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

    public function removeByThemeId( $id ){
        if( !$id ){
            return false;
        }
        return $this->_model->where('theme_id', $id)->delete();
    }
    
    public function getByTheme( $postId = 0 ){

        return $this->_model->where('theme_id', $postId)->pluck('tag_theme_id');
    }

}