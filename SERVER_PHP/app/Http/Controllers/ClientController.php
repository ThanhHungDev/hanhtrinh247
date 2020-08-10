<?php

namespace App\Http\Controllers;

use App\Http\Requests\CLIENT_VALIDATE_CONTACT;
use App\Mail\MailContact;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
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

    public function contact(){
        
        return view('client.contact');
    }

    public function mailContact(CLIENT_VALIDATE_CONTACT $request){

        $input = $request->only('name', 'email', 'mobile', 'message');

        Mail::to(trim($input['email']))->send(new MailContact($input));

        try{
            if (Mail::failures()) {
                throw new Exception('liên hệ thất bại');
            }
            
            $request->session()->flash(Config::get('constant.SAVE_SUCCESS'), true);
            return redirect()->route('CONTACT_PAGE');

        }catch (\Exception $e){
            return redirect()->back()
            ->with(Config::get('constant.SAVE_ERROR'), 'đã có lỗi: '.$e->getMessage())
            ->withInput($request->all());
        }
    }
    public function mailSelectThemeContact(CLIENT_VALIDATE_CONTACT $request){

        $input = $request->only('slug', 'name', 'email', 'mobile', 'message');
        $input['theme'] = $this->model->createThemeModel()->getThemeBySlug(trim($input['slug']));

        Mail::to(trim($input['email']))->send(new MailContact($input));

        try{
            if (Mail::failures()) {
                throw new Exception('liên hệ thất bại');
            }
            
            return redirect()->back()
            ->with(Config::get('constant.SAVE_SUCCESS'), true);

        }catch (\Exception $e){
            return redirect()->back()
            ->with(Config::get('constant.SAVE_ERROR'), 'đã có lỗi: '.$e->getMessage())
            ->withInput($request->all());
        }
    }

    public function tagThemeDetail( $slug ){

        $tags = $this->model->createTagThemeModel()->getAll();
        $tag  = $this->model->createTagThemeModel()->getBySlug($slug);
        // 
        if( !$tag ){
            return abort(404);
        }
        return view('client.tag-theme', compact('tag', 'tags'));
    }

    public function tagDetail( $slug ){

        $tag = $this->model->createTagModel()->getBySlug($slug);

        if( !$tag ){
            return abort(404);
        }
        return view('client.tag', compact('tag'));
    }
    
}
