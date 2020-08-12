<?php 
use Illuminate\Support\Facades\Route;

Route::get('/404', function(){
    echo 'ページが見つかりません';
})->name('CLIENT_404');


Route::group(['prefix' => '/','middleware' => [ 'HTML_MINIFIER']], function () { ///'READ_CACHE',
    Route::get('/','ClientController@index')->name('HOME_PAGE');

    Route::get('/contact/{slug_theme?}','ClientController@contact')->name('CONTACT_PAGE');
    Route::post('/contact','ClientController@mailContact')->name('MAIL_CONTACT');
    Route::post('/select-theme','ClientController@mailSelectThemeContact')->name('MAIL_SELECT_THEME_CONTACT');

    Route::get('/search/{q?}','ClientController@index')->name('SEARCH');
    Route::get('/services','ClientController@index')->name('SERVICE_LOAD');
    Route::get('/service/{slug}','ClientController@index')->name('SERVICE_POST');
    Route::get('/chats','ClientController@index')->name('CHAT');

    Route::get('/themes','Client\ThemeController@load')->name('THEME_LOAD');
    Route::get('/theme/show/{slug}','Client\ThemeController@index')->name('THEME_DETAIL');
    Route::get('/theme/{slug}','Client\ThemeController@view')->name('THEME_VIEW');

    Route::get('/tag-theme/{slug}','ClientController@tagThemeDetail')->name('TAG_THEME_VIEW');

    Route::get('/tag/{slug}','ClientController@tagDetail')->name('TAG_VIEW');

    
    Route::get('/search-theme', 'ClientController@searchTheme')->name('SEARCH_THEME');
    Route::get('/investor','ClientController@investor')->name('INVESTOR_PAGE');
    
});
