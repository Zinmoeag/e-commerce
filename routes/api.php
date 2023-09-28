<?php

use App\Http\Controllers\Api\BrandApiController;
use App\Http\Controllers\Api\CategoryApiController;
use App\Http\Controllers\Api\ProductApiController;
use App\Http\Controllers\OrderApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\UserProfileApiController;
use GuzzleHttp\Handler\Proxy;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
//Get Api for products

Route::apiResource('/products', ProductApiController::class)->parameters('products', 'product_code');
//
Route::apiResource('/categories', CategoryApiController::class)->parameters('categories', 'slug');

Route::apiResource('/brands', BrandApiController::class)->parameters('brands', 'slug');

Route::apiResource('/orders',OrderApiController::class);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// For UserProfileApiController
Route::controller(UserProfileApiController::class)->middleware('auth:sanctum')->group(function () {
    // For User Edit Profile
    Route::get('user/profile/edit', 'UserProfileEdit');
    Route::match(['get', 'post'], 'user/profile/store', 'UserProfileStore');

    // For change Password
    Route::get('user/password/change', 'UserChangePassword');
    Route::match(['get','post'],'user/password/update', 'UserUpdatePassword');

    //For email update
    Route::post('user/email/update', 'UserUpdateEmail');

    // For User Register and login
    Route::match(['get','post'],'/show/user','showUser');
    // Route::match(['get','post'],'/logout','UserLogout');
});

Route::middleware('auth:sanctum','auth:web')->post('/logout', [UserProfileApiController::class, 'UserLogout']);


Route::post('/register',[UserProfileApiController::class, 'RegisterStore']);
Route::post('/login',[UserProfileApiController::class, 'UserLogin']);
