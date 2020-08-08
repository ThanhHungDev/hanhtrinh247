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

        $themes   = $this->model->createThemeModel()->getThemesHomePage();

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
}
