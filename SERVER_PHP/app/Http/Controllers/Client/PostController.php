<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    public function view( Request $request, $slug ){

        $DF_COOKIE_NAME = Config::get('constant.VIEW_COOKIE_POST').$slug;
        $cookieViewPost  = $request->cookie($DF_COOKIE_NAME);
        
        $postModel = $this->model->createPostModel();
        $post      = $postModel->getPostBySlug($slug);
        if( !$post ){
            return abort(404);
        }
        if($post->public == Config::get('constant.TYPE_SAVE.ADMIN_READ')){
            if (!Auth::check()){

                return abort(403);
            }
        }
        $tags = $post->tags()->take(10)->get();

        if(!$cookieViewPost){
            Cookie::queue($DF_COOKIE_NAME, true, 10);
            $post->view += 1;
            $post->save();
        }
        $rateAuthor = $post->rateAuthor()->first();

        $conditionPost = [
            'ignore' => [ $post->id ],
            'orderby' => [ 'field' => 'view', 'type' => 'DESC' ]
        ];
        $postMaxView = $postModel->getPostByCondition($conditionPost)->take( 6 )->get();
        $topic = $post->topic()->first();

        if( $post->type == Config::get('constant.TYPE-POST.PAGE')){

            return view('client.page-view', compact('post', 'tags', 'topic', 'rateAuthor', 'postMaxView'));
        }

        return view('client.post-view', compact('post', 'tags', 'topic', 'rateAuthor', 'postMaxView'));
    }

    

     /**
     * CLIENT 
     */
    public function load(){

        $tags   = $this->model->createTagThemeModel()->getAll();
        $themes = $this->model->createThemeModel()->getThemes();

        return view('client.themes', compact('themes', 'tags'));
    }
}
