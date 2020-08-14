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
    
    public function getThemes($limit = 10){

        return $this->_model->orderBy('view', 'DESC')->paginate($limit);
    }

    public function getThemeBySlug($slug = ''){
        
        return $this->_model->where('slug', $slug )->first();
    }

    public function getThemeByTagIds( $ids, $ignoreIds ){

        return $this->_model
        ->join('tag_theme_active', 'theme.id', '=', 'tag_theme_active.theme_id')
        ->whereIn('tag_theme_active.tag_theme_id', $ids )
        ->whereNotIn('theme.id', $ignoreIds )
        ->orderBy('view', 'DESC');
    }

    public function getThemeRelationThemeId( $ids ){

        return $this->_model
        ->join('tag_theme_active as tta1', 'theme.id', '=', 'tta1.theme_id')
        ->join('tag_theme_active as tta2', 'tta1.tag_theme_id', '=', 'tta2.tag_theme_id')
        ->whereIn('tta2.theme_id', $ids )
        ->whereNotIn('theme.id', $ids )
        ->groupby('theme.id')
        ->orderBy('theme.view', 'DESC')
        ->select("theme.*");
    }
}