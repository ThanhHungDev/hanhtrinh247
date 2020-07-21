<?php

namespace App\Http\Controllers;

use App\Factory\FactoryModelInterface;
use App\Http\Requests\ADMIN_VALIDATE_LOGIN;
use App\Http\Requests\ADMIN_VALIDATE_SAVE_POST;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\MessageBag;

class AdminController extends Controller
{
    private $model = null;
    
    public function __construct(FactoryModelInterface $_model) 
    {
        $this->model = $_model;
    }

    /**
     * ADMIN_DASHBOARD
     */
    public function index(){

        return view('admin.dashboard');
    }
    
    public function login(){
        if (Auth::check()){

            return redirect()->route('ADMIN_DASHBOARD');
        }
        return view('admin.login');
    }
    public function postLogin(ADMIN_VALIDATE_LOGIN $request){
        
        $dataLogin = array(
            'email' => strtolower($request->input('email')), 
            'password' => $request->input('password') 
        );
        /// luôn ghi nhớ password trong session
        if (Auth::attempt( $dataLogin, true ))
        {
            $request->session()->flash(Config::get('constant.LOGIN_ADMIN_SUCCESS'), true);
            return redirect()->route("ADMIN_DASHBOARD");
        }
        return redirect()->back()->with(Config::get('constant.LOGIN_ERROR'), 'đăng nhập thất bại!!! ');
    }
    public function logout(){
        Auth::logout();
        return redirect()->route('ADMIN_LOGIN');
    }

    public function viewInsertPost(){

        $topicModel = $this->model->createTopicModel();
        $topics     = $topicModel->all();
        return view('admin.post', compact([ 'topics' ]));
    }

    

    public function savePost(ADMIN_VALIDATE_SAVE_POST $request, $id = 0){

        ///setting data insert table post
        $postInput = $request->only('topic_id', 'title', 'slug', 'excerpt', 
        'content', 'background', 'thumbnail', 'like', 'view', 'rate_value', 
        'public', 'site_name', 'image_seo', 'keyword_seo', 'description_seo');
        /// create catalogue
        $postInput['catalogue'] = '324242 catalogue';
        /// set id save post 
        $postInput['id'] = $id;
        
        try{
            /// create instance Post Model 
            $post          = $this->model->createPostModel();
            $postTagActive = $this->model->createPostTagActiveModel();

            $post->save($postInput);

            $postId = $post->id;
            /// save tag of post 
            $postTagActive->removeByPostId($postId);

            $tagsInput      = $request->tag_id;
            $tagsDataInsert = array_map(function( $item ) use ( $postId ) { return [ 'post_id' => $postId, 'tag_id' => $item ]; }, $tagsInput );
            if(!empty($tagsDataInsert)){
                
                $postTagActive->insert($tagsDataInsert);
            }

            $request->session()->flash(Config::get('constant.SAVE_SUCCESS'), true);
            return redirect()->route('ADMIN_GET_EDIT_POST',  ['id' => $postId]);

        }catch (\Exception $e){
            return redirect()->back()->with(Config::get('constant.SAVE_ERROR'), 'đã có lỗi: '.$e->getMessage());
        }
    }

    public function getEditPost($id){
        if(!is_numeric($id)){
            $post = $this->model->createPostModel()->first();
        }else{
            $post = $this->model->createPostModel()->find($id);
        }

        if($post == null){
            return redirect()->route('ADMIN_DASHBOARD');
        }
        
        return view('admin.post-edit', compact(['post', 'categories', 'types', 'styles']));
    }

    public function posts(Request $request){
        $limit = 20;
        $posts = $this->model->createPostModel()->paginate($limit);
        return view('admin.post-list', compact(['posts']));
    }

    

    public function deletePost($id = 0){

        $this->model->createPostModel()->find($id)->delete();

        $status = 200;
        $response = array( 'status' => $status, 'message' => 'success' );
        return response()->json( $response );
    }

}
