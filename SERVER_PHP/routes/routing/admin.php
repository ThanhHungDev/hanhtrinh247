<?php 
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'admin'], function () {

    Route::get('/login','AdminController@login')->name('ADMIN_LOGIN');
    Route::post('/login','AdminController@postLogin')->name('ADMIN_POST_LOGIN');
    Route::get('/logout','AdminController@logout')->name('ADMIN_LOGOUT');

    Route::group(['prefix' => '/', 'middleware' => 'ADMIN_LOGGED'], function () {
        Route::get('/','AdminController@index')->name('ADMIN_DASHBOARD');
        
        Route::get('/option','Admin\OptionController@index')->name('ADMIN_STORE_OPTION');
        Route::post('/option','Admin\OptionController@store')->name('ADMIN_SAVE_OPTION');

        /// component chat
        Route::get('/chat/{slug?}','AdminController@chat')->name('ADMIN_CHAT');

        /// component post
        Route::get('/post/{id?}','Admin\PostController@index')->name('ADMIN_STORE_POST');
        Route::post('/post/{id?}','Admin\PostController@save')->name('ADMIN_SAVE_POST');
        Route::get('/posts','Admin\PostController@load')->name('ADMIN_LOAD_POST');
        Route::delete('/post/{id?}','Admin\PostController@delete')->name('ADMIN_DELETE_POST');

        // /// component page
        // Route::get('/page/{id?}','Admin\PostController@index')->name('ADMIN_STORE_PAGE');
        // Route::post('/page/{id?}','Admin\PostController@save')->name('ADMIN_SAVE_PAGE');
        // Route::get('/pages','Admin\PostController@load')->name('ADMIN_LOAD_PAGE');

        /// component tag
        Route::get('/tag/{id?}','Admin\TagController@index')->name('ADMIN_STORE_TAG');
        Route::post('/tag/{id?}','Admin\TagController@save')->name('ADMIN_SAVE_TAG');
        Route::get('/tags','Admin\TagController@load')->name('ADMIN_LOAD_TAG');
        Route::delete('/tag/{id?}','Admin\TagController@delete')->name('ADMIN_DELETE_TAG');

        /// component theme
        Route::get('/theme/{id?}','Admin\ThemeController@index')->name('ADMIN_STORE_THEME');
        Route::post('/theme/{id?}','Admin\ThemeController@save')->name('ADMIN_SAVE_THEME');
        Route::get('/themes','Admin\ThemeController@load')->name('ADMIN_LOAD_THEME');
        Route::delete('/theme/{id?}','Admin\ThemeController@delete')->name('ADMIN_DELETE_THEME');

        /// component topic
        Route::get('/topic/{id?}','Admin\TopicController@index')->name('ADMIN_STORE_TOPIC');
        Route::post('/topic/{id?}','Admin\TopicController@save')->name('ADMIN_SAVE_TOPIC');
        Route::get('/topics','Admin\TopicController@load')->name('ADMIN_LOAD_TOPIC');
        Route::delete('/topic/{id?}','Admin\TopicController@delete')->name('ADMIN_DELETE_TOPIC');

        /// component tag theme
        Route::get('/tag-theme/{id?}','Admin\TagThemeController@index')->name('ADMIN_STORE_TAG_THEME');
        Route::post('/tag-theme/{id?}','Admin\TagThemeController@save')->name('ADMIN_SAVE_TAG_THEME');
        Route::get('/tags-theme','Admin\TagThemeController@load')->name('ADMIN_LOAD_TAG_THEME');
        Route::delete('/tag-theme/{id?}','Admin\TagThemeController@delete')->name('ADMIN_DELETE_TAG_THEME');

        /// component rating
        Route::get('/rating/{id?}','Admin\RatingController@index')->name('ADMIN_STORE_RATING');
        Route::post('/rating/{id?}','Admin\RatingController@save')->name('ADMIN_SAVE_RATING');
        Route::get('/ratings','Admin\RatingController@load')->name('ADMIN_LOAD_RATING');
        Route::delete('/rating/{id?}','Admin\RatingController@delete')->name('ADMIN_DELETE_RATING');


        Route::get('/slug/{slug?}','AdminController@slug')->name('ADMIN_GET_SLUG');
    });
});






