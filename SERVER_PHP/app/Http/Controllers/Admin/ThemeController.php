<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\ADMIN_VALIDATE_SAVE_THEME;
use App\Libraries\Catalogue;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;

class ThemeController extends Controller
{
    /**
     * Show form save data of component ( insert or edit )
     *
     * @return View
     */
    public function store( $id = 0 ){

        $tagsTheme = $this->model->createTagThemeModel()->getAll();
        if( !$id ){
            /// thêm mới
            $theme   = $this->model->createThemeModel()->getInstanceNull();
            $tags_id = 0;
        }else{
            //// edit 
            $theme   = $this->model->createThemeModel()->find($id);
            $tags_id = $this->model->createTagThemeActiveModel()->getByTheme($id);
            if( !$theme ){
                //// redirect 404
                return abort(404);
            }
        }
        
        return view('admin.theme.save', compact([ 'tags', 'tags_id', 'theme' ]));
    }


    public function save(ADMIN_VALIDATE_SAVE_THEME $request, $id = 0){

        ///setting data insert table theme
        $themeInput = $request->only( 'title', 'slug', 'excerpt', 'description',
        'content', 'background', 'image_laptop', 'image_tablet', 'image_mobile', 
        'site_name', 'image_seo', 'keyword_seo', 'description_seo');
        /// create catalogue
                   $catalogue   = Catalogue::generate($themeInput['content']);
        $themeInput['content']   = $catalogue->text;
        $themeInput['catalogue'] = $catalogue->catalogue;

        /// set id save post 
        $themeInput['id'] = $id;
        
        try{
            if( !$id && $this->checkSlugExist( $themeInput['slug'] )){
                
                throw new Exception('thêm mới nhưng slug đã tồn tại');
            }
            /// create instance Theme Model 
            $theme          = $this->model->createThemeModel();
            $tagThemeActive = $this->model->createTagThemeActiveModel();

            $theme->save($themeInput);

            $themeId = $theme->getInstanceNull()->id;
            /// save tag of post 
            $tagThemeActive->removeByThemeId($themeId);

            $tagsInput      = $request->tag_id;
            if( $tagsInput ){
                $tagsDataInsert = array_map( 
                    function( $tag ) use ( $themeId ){ 
                        return  ['theme_id' => $themeId, 'tag_theme_id' => $tag ]; 
                    }, $tagsInput
                );
                $tagThemeActive->insert($tagsDataInsert);
            }

            $request->session()->flash(Config::get('constant.SAVE_SUCCESS'), true);
            return redirect()->route('ADMIN_STORE_THEME',  ['id' => $themeId]);

        }catch (\Exception $e){
            return redirect()->back()
            ->with(Config::get('constant.SAVE_ERROR'), 'đã có lỗi: '.$e->getMessage())
            ->withInput($request->all());
        }
    }

    /**
     * Show all row of component
     *
     * @return View
     */
    public function load(){
        $limit = 10;
        $posts = $this->model->createPostModel()->paginate( $limit );
        return view('admin.post.load', compact(['posts']));
    }

    /**
     * Show the profile for the given user.
     *
     * @param  int  $id
     * @return View
     */
    public function show($id)
    {
        //// detail component
    }
    
    /**
     * Delete 1 post
     *
     * @param  int  $id
     * @return View
     */
    public function delete($id = 0){

        $this->model->createPostModel()->find($id)->delete();

        $status = 200;
        $response = array( 'status' => $status, 'message' => 'success' );
        return response()->json( $response );
    }
}
