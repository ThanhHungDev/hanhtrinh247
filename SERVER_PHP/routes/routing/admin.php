<?php 
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'admin'], function () {

    Route::get('/login','AdminController@login')->name('ADMIN_LOGIN');
    Route::post('/login','AdminController@postLogin')->name('ADMIN_POST_LOGIN');
    Route::get('/logout','AdminController@logout')->name('ADMIN_LOGOUT');

    Route::group(['prefix' => '/', 'middleware' => 'ADMIN_LOGGED'], function () {
        Route::get('/','AdminController@index')->name('ADMIN_SITTER');
    });
});








// Route::group(['prefix' => 'admin'], function () {

//     Route::get('/login','LoginController@getLogin')->name('ADMIN_LOGIN');
//     Route::post('/login','LoginController@postLogin')->name('ADMIN_POST_LOGIN');
//     Route::get('/logout','LoginController@logout')->name('ADMIN_LOGOUT');

//     Route::group(['prefix' => '/', 'middleware' => 'CHECK_ADMIN_LOGIN'], function () {

//         Route::get('/dashboard','AdminController@dashboard')->name('ADMIN_DASHBOARD');

//         Route::get('/post','AdminController@viewInsertPost')->name('ADMIN_INSERT_POST');
//         Route::post('/post','AdminController@insertPost')->name('ADMIN_POST_INSERT_POST');
//         Route::get('/post/{id}','AdminController@getEditPost')->name('ADMIN_GET_EDIT_POST');
//         Route::post('/post/{id}','AdminController@saveEditPost')->name('ADMIN_POST_EDIT_POST');
//         Route::get('/posts','AdminController@posts')->name('ADMIN_GET_LIST_POST');
//         Route::delete('/post/{id?}','AdminController@deletePost')->name('ADMIN_DELETE_POST');


//         Route::get('/category','AdminController@viewInsertCategory')->name('ADMIN_INSERT_CATEGORY');
//         Route::post('/category','AdminController@insertCategory')->name('ADMIN_POST_INSERT_CATEGORY');
//         Route::get('/category/{id}','AdminController@getEditCategory')->name('ADMIN_GET_EDIT_CATEGORY');
//         Route::post('/category/{id}','AdminController@saveEditCategory')->name('ADMIN_POST_EDIT_CATEGORY');
//         Route::get('/categories','AdminController@categories')->name('ADMIN_GET_LIST_CATEGORY');
//         Route::delete('/category/{id?}','AdminController@deleteCategory')->name('ADMIN_DELETE_CATEGORY');


//         Route::get('/type','AdminController@viewInsertType')->name('ADMIN_INSERT_TYPE');
//         Route::post('/type','AdminController@insertType')->name('ADMIN_POST_INSERT_TYPE');
//         Route::get('/type/{id}','AdminController@getEditType')->name('ADMIN_GET_EDIT_TYPE');
//         Route::post('/type/{id}','AdminController@saveEditType')->name('ADMIN_POST_EDIT_TYPE');
//         Route::get('/types','AdminController@types')->name('ADMIN_GET_LIST_TYPE');
//         Route::delete('/type/{id?}','AdminController@deleteType')->name('ADMIN_DELETE_TYPE');

//         Route::get('/style','AdminController@viewInsertStyle')->name('ADMIN_INSERT_STYLE');
//         Route::post('/style','AdminController@insertStyle')->name('ADMIN_POST_INSERT_STYLE');
//         Route::get('/style/{id}','AdminController@getEditStyle')->name('ADMIN_GET_EDIT_STYLE');
//         Route::post('/style/{id}','AdminController@saveEditStyle')->name('ADMIN_POST_EDIT_STYLE');
//         Route::get('/styles','AdminController@styles')->name('ADMIN_GET_LIST_STYLE');
//         Route::delete('/style/{id?}','AdminController@deleteStyle')->name('ADMIN_DELETE_STYLE');
        

//         Route::get('/slug/{slug?}','AdminController@slug')->name('ADMIN_GET_SLUG');
//         Route::get('/typesByCategory', 'AdminController@categoryTypesByCategoryId')->name('ADMIN_GET_TYPE_BY_CATEGORY');
//         Route::get('/stylesByCategory', 'AdminController@categoryStylesByCategoryId')->name('ADMIN_GET_STYLE_BY_CATEGORY');
//         Route::get('/categoryByType', 'AdminController@categoryByTypeId')->name('ADMIN_GET_CATEGORY_BY_TYPE');
//         Route::get('/stylesByType', 'AdminController@categoryStylesByTypeId')->name('ADMIN_GET_STYLE_BY_TYPE');
//     });
// });