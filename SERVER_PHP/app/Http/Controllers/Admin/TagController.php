<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\ADMIN_VALIDATE_SAVE_TAG;
use App\Libraries\Catalogue;
use Exception;
use Illuminate\Support\Facades\Config;

class TagController extends Controller
{
    /**
     * Show form save data of component ( insert or edit )
     *
     * @return View
     */
    public function store( $id = 0 ){

        if( !$id ){
            /// thêm mới
            $tag    = $this->model->createTagModel()->getInstanceNull();
        }else{
            //// edit 
            $tag    = $this->model->createTagModel()->find($id);
            if( !$tag ){
                //// redirect 404
                return abort(404);
            }
        }
        
        return view('admin.tag.save', compact([ 'tag' ]));
    }


    public function save(ADMIN_VALIDATE_SAVE_TAG $request, $id = 0){

        ///setting data insert table tag
        $tagInput = $request->only( 'name', 'slug', 'excerpt', 
        'content', 'background', 'thumbnail', 'site_name', 
        'image_seo', 'keyword_seo', 'description_seo');

        /// create catalogue
                   $catalogue   = Catalogue::generate($tagInput['content']);
        $tagInput['content']   = $catalogue->text;
        $tagInput['catalogue'] = $catalogue->catalogue;

        /// set id save tag 
        $tagInput['id'] = $id;
        
        try{
            if( !$id && $this->checkSlugExist( $tagInput['slug'] )){
                
                throw new Exception('thêm mới nhưng slug đã tồn tại');
            }
            /// create instance Tag Model 
            $tag = $this->model->createTagModel();

            $tag->save($tagInput);
            $tagModel = $tag->getModelInstance();
            $tagID = $tagModel->id;

            $request->session()->flash(Config::get('constant.SAVE_SUCCESS'), true);
            return redirect()->route('ADMIN_STORE_TAG',  ['id' => $tagID ]);

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
        $tags = $this->model->createTagModel()->paginate( $limit );
        return view('admin.tag.load', compact(['tags']));
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
     * Delete 1 tag
     *
     * @param  int  $id
     * @return View
     */
    public function delete($id = 0){

        $this->model->createTagModel()->find($id)->delete();

        $status = 200;
        $response = array( 'status' => $status, 'message' => 'success' );
        return response()->json( $response );
    }
}
