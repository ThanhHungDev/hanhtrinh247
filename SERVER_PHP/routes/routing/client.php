<?php 
use Illuminate\Support\Facades\Route;

Route::get('/404', function(){
    echo 'ページが見つかりません';
})->name('CLIENT_404');


Route::group(['prefix' => '/','middleware' => [ 'HTML_MINIFIER']], function () { ///'READ_CACHE',
    Route::get('/','ClientController@index')->name('HOME_PAGE');

    Route::get('/search/{q?}','ClientController@index')->name('SEARCH');
    Route::get('/services','ClientController@index')->name('SERVICE');
    Route::get('/chats','ClientController@index')->name('CHAT');

    Route::get('/themes','Client\ThemeController@load')->name('THEME_LOAD');
    Route::get('/theme/{slug}','Client\ThemeController@index')->name('THEME_DETAIL');
});
