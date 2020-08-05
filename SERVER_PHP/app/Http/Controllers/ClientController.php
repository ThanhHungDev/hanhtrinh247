<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ClientController extends Controller
{
    /**
     * CLIENT HOME PAGE
     */
    public function index(){

        $themes   = $this->model->createThemeModel()->getThemesHomePage();

        return view('client.index', compact('themes'));
    }

    public function contact(){
        return 'contact';
    }
}
