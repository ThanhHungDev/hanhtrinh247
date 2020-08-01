<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\ADMIN_VALIDATE_SAVE_RATING;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;

class RatingController extends Controller
{
    /**
     * Show form save data of component ( insert or edit )
     *
     * @return View
     */
    public function index( $id = 0 ){

        if( !$id ){
            /// thêm mới
            $rating    = $this->model->createRatingModel()->getInstanceNull();
        }else{
            //// edit 
            $rating    = $this->model->createRatingModel()->find($id);
            if( !$rating ){
                //// redirect 404
                return abort(404);
            }
        }
        
        return view('admin.rating.save', compact([ 'rating' ]));
    }


    public function save(ADMIN_VALIDATE_SAVE_RATING $request, $id = 0){

        ///setting data insert table rating
        $ratingInput = $request->only( 'username', 'avatar');
        /// set id save rating 
        $ratingInput['id'] = $id;
        
        try{
            /// create instance Rating Model 
            $rating = $this->model->createRatingModel();

            $rating->save($ratingInput);

            $request->session()->flash(Config::get('constant.SAVE_SUCCESS'), true);
            return redirect()->route('ADMIN_STORE_RATING',  ['id' => $rating->getModelInstance()->id ]);

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
        $ratings = $this->model->createRatingModel()->paginate( $limit );
        return view('admin.rating.load', compact(['ratings']));
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
     * Delete 1 rating
     *
     * @param  int  $id
     * @return View
     */
    public function delete($id = 0){

        $this->model->createRatingModel()->find($id)->delete();

        $status = 200;
        $response = array( 'status' => $status, 'message' => 'success' );
        return response()->json( $response );
    }
}
