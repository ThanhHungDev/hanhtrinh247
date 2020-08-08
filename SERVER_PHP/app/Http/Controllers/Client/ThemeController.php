<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ThemeController extends Controller
{

    public function index( $slug ){

        $themeModel = $this->model->createThemeModel();
        $theme = $themeModel->getThemeBySlug($slug);
        if( !$theme ){
            return abort(404);
        }

        return view('client.theme-detail', compact('theme'));
    }

     /**
     * CLIENT 
     */
    public function load(){

        $tags   = $this->model->createTagThemeModel()->getAll();
        $themes = $this->model->createThemeModel()->getThemesHomePage();

        return view('client.themes', compact('themes', 'tags'));
    }
}
