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

}
