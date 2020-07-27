<?php 
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'admin'], function () {

    Route::get('/login','AdminController@login')->name('ADMIN_LOGIN');
    Route::post('/login','AdminController@postLogin')->name('ADMIN_POST_LOGIN');
    Route::get('/logout','AdminController@logout')->name('ADMIN_LOGOUT');

    Route::group(['prefix' => '/', 'middleware' => 'ADMIN_LOGGED'], function () {
        Route::get('/','AdminController@index')->name('ADMIN_DASHBOARD');

        /// component post
        Route::get('/post/{id?}','Admin\PostController@store')->name('ADMIN_STORE_POST');
        Route::post('/post/{id?}','Admin\PostController@save')->name('ADMIN_SAVE_POST');
        Route::get('/posts','Admin\PostController@load')->name('ADMIN_LOAD_POST');
        Route::delete('/post/{id?}','Admin\PostController@delete')->name('ADMIN_DELETE_POST');

        /// component tag
        Route::get('/tag/{id?}','Admin\TagController@store')->name('ADMIN_STORE_TAG');
        Route::post('/tag/{id?}','Admin\TagController@save')->name('ADMIN_SAVE_TAG');
        Route::get('/tags','Admin\TagController@load')->name('ADMIN_LOAD_TAG');
        Route::delete('/tag/{id?}','Admin\TagController@delete')->name('ADMIN_DELETE_TAG');

        /// component theme
        Route::get('/theme/{id?}','Admin\ThemeController@store')->name('ADMIN_STORE_THEME');
        Route::post('/theme/{id?}','Admin\ThemeController@save')->name('ADMIN_SAVE_THEME');
        Route::get('/themes','Admin\ThemeController@load')->name('ADMIN_LOAD_THEME');
        Route::delete('/theme/{id?}','Admin\ThemeController@delete')->name('ADMIN_DELETE_THEME');

        /// component topic
        Route::get('/topic/{id?}','Admin\TopicController@store')->name('ADMIN_STORE_TOPIC');
        Route::post('/topic/{id?}','Admin\TopicController@save')->name('ADMIN_SAVE_TOPIC');
        Route::get('/topics','Admin\TopicController@load')->name('ADMIN_LOAD_TOPIC');
        Route::delete('/topic/{id?}','Admin\TopicController@delete')->name('ADMIN_DELETE_TOPIC');


        Route::get('/slug/{slug?}','AdminController@slug')->name('ADMIN_GET_SLUG');
    });
});






