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

    public function getTagByPostId( $ids ){

        return $this->_model
        ->join('post_tag_active', 'tag.id', '=', 'post_tag_active.tag_id')
        ->whereIn('post_tag_active.post_id', $ids)
        ->groupBy('tag.id')
        ->orderByRaw('COUNT(post_tag_active.post_id) DESC')
        ->select("tag.*")
        ;
    }

    public function getTagByCondition( $condition ){

        $filter = $this->_model;
        if( isset($condition['ignore']) ){
            $filter = $filter->whereNotIn('id', $condition['ignore'] );
        }
        if( isset($condition['orderby']) ){

            $filter = $filter->orderBy($condition['orderby']['field'], $condition['orderby']['type']);
        }

        return $filter;
    }

}