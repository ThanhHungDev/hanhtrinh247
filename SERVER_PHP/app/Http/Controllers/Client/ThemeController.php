<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Cookie;

class ThemeController extends Controller
{

    public function index( Request $request, $slug ){

        $DF_COOKIE_NAME = Config::get('constant.VIEW_COOKIE_THEME').$slug;
        $cookieViewTheme  = $request->cookie($DF_COOKIE_NAME);

        $themeModel = $this->model->createThemeModel();
        $theme = $themeModel->getThemeBySlug($slug);
        if( !$theme ){
            return abort(404);
        }
        if(!$cookieViewTheme){
            Cookie::queue($DF_COOKIE_NAME, true, 10);
            $theme->view += 1;
            $theme->save();
        }
        
        return view('client.theme-detail', compact('theme'));
    }

    public function view( Request $request, $slug ){

        $DF_COOKIE_NAME  = Config::get('constant.VIEW_COOKIE_THEME').$slug;
        $cookieViewTheme = $request->cookie($DF_COOKIE_NAME);

        $themeModel = $this->model->createThemeModel();
        $theme      = $themeModel->getThemeBySlug($slug);
        if( !$theme ){
            return abort(404);
        }
        if(!$cookieViewTheme){
            Cookie::queue($DF_COOKIE_NAME, true, 10);
            $theme->view += 1;
            $theme->save();
        }

        $themes_relation = $this->model->createThemeModel()
                            ->getThemeRelationThemeId( array($theme->id) )->take(3)->get();
        
        return view('client.theme-view', compact('theme', 'themes_relation'));
    }

     /**
     * CLIENT 
     */
    public function load(){

        $tags   = $this->model->createTagThemeModel()->getAll();
        $themes = $this->model->createThemeModel()->getThemes();

        return view('client.themes', compact('themes', 'tags'));
    }
}
