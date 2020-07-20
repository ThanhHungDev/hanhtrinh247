<?php

namespace App\Http\Controllers;

use App\Factory\FactoryModelInterface;
use App\Http\Requests\ADMIN_VALIDATE_LOGIN;
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

    public function viewInsertPost(){//Bạn chỉ sống một lần thôi, nhưng nếu bạn sống đúng, một lần là đủ rồi. ///You only live once, but if you do it right, once is enough.

        $topicModel = $this->model->createTopicModel();
        $topics     = $topicModel->all();
        return view('admin.post', compact([ 'topics' ]));
    }
}
