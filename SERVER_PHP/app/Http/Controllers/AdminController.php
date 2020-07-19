<?php

namespace App\Http\Controllers;

use App\FactoryModel\FactoryModelInterface;
use App\Http\Requests\ADMIN_VALIDATE_LOGIN;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\MessageBag;

class AdminController extends Controller
{
    private $model = null;

    // Ở đây Service Container sẽ "tiêm" instance của Model tương ứng vào
    /// thông qua việc bind trong provider
    public function __construct(FactoryModelInterface $_model) 
    {
        $this->model = $_model;
    }
    
    public function login(){
        
        if (Auth::check() && Auth::user()->role_id == config('constant.ROLE.ADMIN')){
            return redirect()->route('ADMIN_SITTER');
        }
        return view('admin.login');
    }

    public function postLogin(ADMIN_VALIDATE_LOGIN $request){
        $data = $request->only('email', 'password');
        $remember = $request->input('save-password') ? true : false;
        $detect   = $request->input('detect');
        
        $data['active']  = 1;
        $data['role_id'] = config('constant.ROLE.ADMIN');

        if (Auth::attempt($data, $remember)){
            $user         = Auth::user();
            $tokenRefresh = $this->tokenRefreshSevice->getTokenRefresh($detect, $user['id']);
            $token = $tokenRefresh['token'];
            
            return redirect()->route('ADMIN_SITTER')
            ->withCookie(cookie()->forever(config("constant.TOKEN_COOKIE_NAME"), $token));
        }
        $errors = new MessageBag(['errorlogin' => 'パスワードまたはメールアドレスが異なります。!']);
        return redirect()->back()->withInput()->withErrors($errors);
    }

    public function logout()
    {
        Auth::logout();
        return redirect()->route('ADMIN_LOGIN');
    }
}
