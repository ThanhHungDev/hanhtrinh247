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

    public function getTagByThemeId( $ids ){

        return $this->_model
        ->join('tag_theme_active', 'tag_theme.id', '=', 'tag_theme_active.tag_theme_id')
        ->whereIn('tag_theme_active.theme_id', $ids)
        ->groupBy('tag_theme.id')
        ->orderByRaw('COUNT(tag_theme_active.theme_id) DESC')
        ->select("tag_theme.*")
        ;
    }
    
}