<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\studentController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/*Route::get('/', function () {

    
    return view('welcome');
});*/

//Cualquier ruta nos las va a enviar a welcome
Route::view('/{path?}','welcome')
    ->where('path','.*');


    
//Route::get('/studentIndex',[studentController::class,'index']);

Route::get('/get_token',[studentController::class,'get_token']);
Route::post('/store',[studentController::class,'store']);





