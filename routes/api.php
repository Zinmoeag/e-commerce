<?php

use App\Http\Controllers\Api\BrandApiController;
use App\Http\Controllers\Api\CategoryApiController;
use App\Http\Controllers\Api\ProductApiController;
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

Route::apiResource('/products', ProductApiController::class);
Route::apiResource('/brands', BrandApiController::class);
Route::apiResource('/categories', CategoryApiController::class);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// For UserProfileApiController
Route::controller(UserProfileApiController::class)->group(function () {
    // For User Edit Profile
    Route::get('user/profile/edit', 'UserProfileEdit');
    Route::match(['get', 'post'], 'user/profile/store', 'UserProfileStore');

    // For change Password
    Route::get('user/password/change', 'UserChangePassword');
    Route::match(['get','post'],'user/password/update', 'UserUpdatePassword');

    // For User Register and login
    Route::match(['get','post'],'/register','RegisterStore');
    Route::match(['get','post'],'/show/user','showUser');
    Route::match(['get','post'],'/login','UserLogin');
    Route::match(['get','post'],'/logout','UserLogout');

});
