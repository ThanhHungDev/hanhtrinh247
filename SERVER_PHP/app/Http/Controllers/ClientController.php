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

    public function contact( $slug_theme = null ){
        
        return view('client.contact', compact('slug_theme'));
    }

    public function mailContact(CLIENT_VALIDATE_CONTACT $request){

        $input = $request->only('name', 'email', 'mobile', 'message');

        Mail::to(trim($input['email']))->send(new MailContact($input));

        try{
            if (Mail::failures()) {
                throw new Exception('連絡できませんでした');
            }
            
            $request->session()->flash(Config::get('constant.SAVE_SUCCESS'), true);
            return redirect()->route('CONTACT_PAGE');

        }catch (\Exception $e){
            return redirect()->back()
            ->with(Config::get('constant.SAVE_ERROR'), 'エラーが発生しました： '.$e->getMessage())
            ->withInput($request->all());
        }
    }
    public function mailSelectThemeContact(CLIENT_VALIDATE_CONTACT $request){

        $input = $request->only('slug', 'name', 'email', 'mobile', 'message');
        $input['theme'] = $this->model->createThemeModel()->getThemeBySlug(trim($input['slug']));

        Mail::to(trim($input['email']))->send(new MailContact($input));

        try{
            if (Mail::failures()) {
                throw new Exception('連絡できませんでした');
            }
            
            return redirect()->back()
            ->with(Config::get('constant.SAVE_SUCCESS'), true);

        }catch (\Exception $e){
            return redirect()->back()
            ->with(Config::get('constant.SAVE_ERROR'), 'エラーが発生しました： '.$e->getMessage())
            ->withInput($request->all());
        }
    }

    public function tagThemeDetail( $slug ){

        $tags = $this->model->createTagThemeModel()->getAll();
        $tag  = $this->model->createTagThemeModel()->getBySlug($slug);

        $themes_in_tag = $tag->themes;
        $theme_ids     = $themes_in_tag->pluck('id')->toArray();
        $themes_relation = $this->model->createThemeModel()
                            ->getThemeRelationThemeId( $theme_ids )->take(3)->get();
        // $tag_theme_ids = $this->model->createTagThemeActiveModel()
        //                     ->getTagThemeByThemeIds($theme_ids)->pluck('tag_theme_id')->toArray();
        // $themes_relation = $this->model->createThemeModel()
        //                     ->getThemeByTagIds( $tag_theme_ids, $theme_ids )->take(3)->get();
        // 
        if( !$tag ){
            return abort(404);
        }
        return view('client.tag-theme', compact('tag', 'tags', 'themes_in_tag', 'themes_relation'));
    }

    public function tagDetail( $slug ){

        $tag = $this->model->createTagModel()->getBySlug($slug);

        if( !$tag ){
            return abort(404);
        }
        return view('client.tag', compact('tag'));
    }

    public function searchTheme( Request $request){

        $limit = 10;
        $query = null;
        if($request->has('q')) {
            $query = $request->query('q');
        }
        $search = $this->model->createDBModel()->searchTheme($query)->paginate($limit);
        $tags = $this->model->createTagThemeModel()
        ->getTagByThemeId($search->pluck('id')->toArray())->take(10)->get();
        return view('client.search-theme', compact('search', 'query', 'tags'));
    }
    
}
