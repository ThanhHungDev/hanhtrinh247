<?php 
use Illuminate\Support\Facades\Route;

Route::get('/404', function(){
    echo 'ページが見つかりません';
})->name('CLIENT_404');


Route::group(['prefix' => '/','middleware' => 'HTML_MINIFIER'], function () {
    Route::get('/','ClientController@index')->name('TOP_PAGE');
});
