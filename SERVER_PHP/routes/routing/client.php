<?php 
use Illuminate\Support\Facades\Route;

Route::get('/404', function(){
    echo 'ページが見つかりません';
})->name('CLIENT_404');

Route::get('/', function(){
    return " hùng đẹp trai ";
})->name('TOP_PAGE');
