<?php
use App\Http\Controllers\User\UserProfileApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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
    Route::get('/register','RegisterStore');
    Route::match(['get','post'],'/show/user','showUser');
    Route::get('/login','UserLogin');

});

