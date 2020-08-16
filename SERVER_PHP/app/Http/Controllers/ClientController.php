<?php

namespace App\Http\Controllers;

use App\Http\Requests\CLIENT_VALIDATE_CONTACT;
use App\Mail\MailContact;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Mail;

class ClientController extends Controller
{
    /**
     * CLIENT HOME PAGE
     */
    public function index(){

        $themes   = $this->model->createThemeModel()->getThemes();

        return view('client.home', compact('themes'));
    }

    public function contact( $slug_theme = null ){
        
        return view('client.contact', compact('slug_theme'));
    }

    public function mailContact(CLIENT_VALIDATE_CONTACT $request){

        $input = $request->only('name', 'email', 'mobile', 'message');

        Mail::to(trim($input['email']))->send(new MailContact($input));

        try{
            if (Mail::failures()) {
                throw new Exception('連絡できませんでした');
            }
            
            $request->session()->flash(Config::get('constant.SAVE_SUCCESS'), true);
            return redirect()->route('CONTACT_PAGE');

        }catch (\Exception $e){
            return redirect()->back()
            ->with(Config::get('constant.SAVE_ERROR'), 'エラーが発生しました： '.$e->getMessage())
            ->withInput($request->all());
        }
    }
    public function mailSelectThemeContact(CLIENT_VALIDATE_CONTACT $request){

        $input = $request->only('slug', 'name', 'email', 'mobile', 'message');
        $input['theme'] = $this->model->createThemeModel()->getThemeBySlug(trim($input['slug']));

        Mail::to(trim($input['email']))->send(new MailContact($input));

        try{
            if (Mail::failures()) {
                throw new Exception('連絡できませんでした');
            }
            
            return redirect()->back()
            ->with(Config::get('constant.SAVE_SUCCESS'), true);

        }catch (\Exception $e){
            return redirect()->back()
            ->with(Config::get('constant.SAVE_ERROR'), 'エラーが発生しました： '.$e->getMessage())
            ->withInput($request->all());
        }
    }

    public function tagThemeDetail( $slug ){

        $tags = $this->model->createTagThemeModel()->getAll();
        $tag  = $this->model->createTagThemeModel()->getBySlug($slug);

        $themes_in_tag_obj = $tag->themes();
        $themes_in_tag     = $themes_in_tag_obj->paginate(10);
        $theme_ids         = $themes_in_tag_obj->pluck('id')->toArray();
        $themes_relation   = $this->model->createThemeModel()
                            ->getThemeRelationThemeId( $theme_ids )->take(3)->get();
        // $tag_theme_ids = $this->model->createTagThemeActiveModel()
        //                     ->getTagThemeByThemeIds($theme_ids)->pluck('tag_theme_id')->toArray();
        // $themes_relation = $this->model->createThemeModel()
        //                     ->getThemeByTagIds( $tag_theme_ids, $theme_ids )->take(3)->get();
        // 
        if( !$tag ){
            return abort(404);
        }
        return view('client.tag-theme', compact('tag', 'tags', 'themes_in_tag', 'themes_relation'));
    }

    public function tagDetail( Request $request, $slug ){

        $DF_COOKIE_NAME  = Config::get('constant.VIEW_COOKIE_TAG').$slug;
        $cookieViewTag = $request->cookie($DF_COOKIE_NAME);

        
        $tag = $this->model->createTagModel()->getBySlug($slug);
        if( !$tag ){
            return abort(404);
        }

        $posts_in_tag_obj = $tag->posts();
        $posts_in_tag     = $posts_in_tag_obj->paginate(10);
        $post_ids         = $posts_in_tag_obj->pluck('id')->toArray();
        $posts_relation   = $this->model->createPostModel()
                            ->getPostRelationPostId( $post_ids )->take(3)->get();
        $conditionTags = [
            'ignore' => [ $tag->id ],
            'orderby' => [ 'field' => 'view', 'type' => 'DESC' ]
        ];
        $tags = $this->model->createTagModel()
        ->getTagByCondition($conditionTags)->take( 4 )->get();

        if(!$cookieViewTag){
            Cookie::queue($DF_COOKIE_NAME, true, 10);
            $tag->view += 1;
            $tag->save();
        }
        return view('client.tag', compact('tag', 'tags', 'posts_in_tag', 'posts_relation'));
    }

    public function topicDetail( Request $request, $slug ){

        $DF_COOKIE_NAME  = Config::get('constant.VIEW_COOKIE_TOPIC').$slug;
        $cookieViewTopic = $request->cookie($DF_COOKIE_NAME);

        $topic = $this->model->createTopicModel()->getBySlug($slug);
        if( !$topic ){
            return abort(404);
        }
        $conditionTopic = [
            'ignore' => [ $topic->id ],
            'orderby' => [ 'field' => 'view', 'type' => 'DESC' ]
        ];
        $topics = $this->model->createTopicModel()
        ->getTopicByCondition($conditionTopic)->take( 4 )->get(); 

        $posts_in_topic_obj = $topic->posts();
        $posts_in_topic     = $posts_in_topic_obj->paginate(10);
        $post_ids         = $posts_in_topic_obj->pluck('id')->toArray();
        $posts_relation   = $this->model->createPostModel()
                            ->getPostRelationPostId( $post_ids )->take(3)->get();
        if(!$cookieViewTopic){
            Cookie::queue($DF_COOKIE_NAME, true, 10);
            $topic->view += 1;
            $topic->save();
        }
        return view('client.topic', compact('topic', 'topics', 'posts_in_topic', 'posts_relation'));
    }

    public function searchTheme( Request $request){

        $limit = 10;
        $query = null;
        if($request->has('q')) {
            $query = $request->query('q');
        }
        $search = $this->model->createDBModel()->searchTheme($query)->paginate($limit);
        $tags = $this->model->createTagThemeModel()
        ->getTagByThemeId($search->pluck('id')->toArray())->take(10)->get();
        return view('client.search-theme', compact('search', 'query', 'tags'));
    }
    
    public function searchPost( Request $request){

        $limit = 10;
        $query = null;
        if($request->has('q')) {
            $query = $request->query('q');
        }
        $search = $this->model->createDBModel()->searchPost($query)->paginate($limit);

        $conditionPost = [
            'ignore' => $search->pluck('id')->toArray(),
            'orderby' => [ 'field' => 'view', 'type' => 'DESC' ]
        ];
        $postMaxView = $this->model->createPostModel()
        ->getPostByCondition($conditionPost)->take( 4 )->get(); 
        
        $tags = $this->model->createTagModel()
        ->getTagByPostId($search->pluck('id')->toArray())->take(10)->get();
        return view('client.search-post', compact('search', 'query', 'tags', 'postMaxView'));
    }

    public function service(Request $request){

        $limit = 10;
        $conditionPost = [
            'orderby' => [ 'field' => 'view', 'type' => 'DESC' ]
        ];
        $posts = $this->model->createPostModel()
        ->getPostByCondition($conditionPost)->paginate( $limit ); 

        $tags = $this->model->createTagModel()
        ->getTagByCondition($conditionPost)->take( 4 )->get(); 

        $conditionTopic = [
            'orderby' => [ 'field' => 'view', 'type' => 'DESC' ]
        ];
        $topics = $this->model->createTopicModel()
        ->getTopicByCondition($conditionTopic)->take( 4 )->get(); 
        
        return view('client.service', compact('posts', 'tags', 'topics'));
    }
}
