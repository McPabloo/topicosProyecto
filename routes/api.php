<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\ResponseController;
use App\Http\Controllers\studentController;
use App\Http\Controllers\ProductController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});*/

Route::post('register',[RegisterController::class,'register']);
Route::post('login',[RegisterController::class,'login']);
//Route::get('/studentIndex',[studentController::class,'index']);
Route::get('/get_token',[studentController::class,'get_token']);
Route::get('/index_productos', [ProductController::class,'index']);
Route::post('/get_producto', [ProductController::class,'getProducto']);

Route::middleware('auth:api')->group(function(){
   Route::get('/studentIndex',[studentController::class,'index']);
});

