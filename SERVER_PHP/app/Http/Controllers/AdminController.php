<?php

namespace App\Http\Controllers;

use App\Factory\FactoryModelInterface;
use App\Http\Requests\ADMIN_VALIDATE_LOGIN;
use App\Http\Requests\ADMIN_VALIDATE_SAVE_POST;
use App\Libraries\Catalogue;
use App\Models\Post;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;

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
        if (Auth::attempt( $dataLogin, false ))
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

        $topics = $this->model->createTopicModel()->getAll();
        $tags   = $this->model->createTagModel()->getAll();
        $post   = $this->model->createPostModel()->getPostNull();
        return view('admin.post', compact([ 'topics', 'tags', 'post' ]));
    }

    public function getEditPost( $id = 0 ){

        $topics  = $this->model->createTopicModel()->getAll();
        $tags    = $this->model->createTagModel()->getAll();
        $post    = $this->model->createPostModel()->find($id);
        $tags_id = $this->model->createPostTagActiveModel()->getByPost($id);
        if( !$post ){
            //// redirect 404
            return abort(404);
        }
        return view('admin.post', compact([ 'topics', 'tags', 'tags_id', 'post' ]));
    }

    public function savePost(ADMIN_VALIDATE_SAVE_POST $request, $id = 0){

        ///setting data insert table post
        $postInput = $request->only('topic_id', 'title', 'slug', 'excerpt', 
        'content', 'background', 'thumbnail', 'public', 'site_name', 
        'image_seo', 'keyword_seo', 'description_seo');

        /// create catalogue
                   $catalogue   = Catalogue::generate($postInput['content']);
        $postInput['content']   = $catalogue->text;
        $postInput['catalogue'] = $catalogue->catalogue;

        /// set id save post 
        $postInput['id'] = $id;
        
        try{
            if( !$id && $this->checkSlugExist( $postInput['slug'] )){
                
                throw new Exception('thêm mới nhưng slug đã tồn tại');
            }
            /// create instance Post Model 
            $post          = $this->model->createPostModel();
            $postTagActive = $this->model->createPostTagActiveModel();

            $post->save($postInput);

            $postId = $post->getModel()->id;
            /// save tag of post 
            $postTagActive->removeByPostId($postId);

            $tagsInput      = $request->tag_id;
            $tagsDataInsert = [];
            foreach( $tagsInput as $tag ){
                $tagsDataInsert[] = [ 'post_id' => $postId, 'tag_id' => $tag ];
            }
            if(!empty($tagsDataInsert)){
                
                $postTagActive->insert($tagsDataInsert);
            }

            $request->session()->flash(Config::get('constant.SAVE_SUCCESS'), true);
            return redirect()->route('ADMIN_GET_EDIT_POST',  ['id' => $postId]);

        }catch (\Exception $e){
            return redirect()->back()
            ->with(Config::get('constant.SAVE_ERROR'), 'đã có lỗi: '.$e->getMessage())
            ->withInput($request->all());
        }
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

    private function checkSlugExist( $slug = '' ){

        $exist = false;
        
        $exist = $this->model->createPostModel()->getPostBySlug( $slug );
        
        if( !$exist ){
            
            $exist = $this->model->createTopicModel()->getTopicBySlug($slug);
        }
        if( !$exist ){
            
            $exist = $this->model->createTagModel()->getTagBySlug($slug);
        }
        if( !$exist ){
            
            $exist = $this->model->createThemeModel()->getThemeBySlug($slug);
        }
        return $exist;
    }

    public function slug($slug = null ){

        $exist = $this->checkSlugExist( $slug );
        
        $status = 404;
        $data = array(
            'message'   => 'chưa tồn tại slug: ' . $slug,
            'internal'  => 'chưa tồn tại slug'
        );
        if( $exist ){
            $status = 200;
            $data = array(
                'message'   => 'exist slug: ' . $slug,
                'internal'  => 'exist slug'
            );
        }
        return response()->json($data, $status);
    }

}
