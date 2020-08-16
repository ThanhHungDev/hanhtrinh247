<?php
namespace App\Repositories\Post;

use App\Models\Post;
use App\Repositories\EloquentRepository;

class PostEloquentRepository extends EloquentRepository implements PostRepositoryInterface
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return Post::class;
    }

    public function getPostBySlug( $slug ){
        
        return $this->_model->where('slug', $slug )->first();
    }

    public function getPostByCondition( $condition ){

        $filter = $this->_model;
        if( isset($condition['ignore']) ){
            $filter = $filter->whereNotIn('id', $condition['ignore'] );
        }
        if( isset($condition['orderby']) ){

            $filter = $filter->orderBy($condition['orderby']['field'], $condition['orderby']['type']);
        }

        return $filter;
    }


    public function getPostRelationPostId( $ids ){

            return $this->_model
            ->join('post_tag_active as pta1', 'post.id', '=', 'pta1.post_id')
            ->join('post_tag_active as pta2', 'pta1.tag_id', '=', 'pta2.tag_id')
            ->whereIn('pta2.post_id', $ids )
            ->whereNotIn('post.id', $ids )
            ->groupby('post.id')
            ->orderBy('post.view', 'DESC')
            ->select("post.*");
        }
    
}