<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\POS\SaleController;
use App\Http\Controllers\POS\POSAuthController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('app');
});

Route::get('/products', [ProductController::class, 'index']);






// For Admin Group
//Route::middleware(['auth','is_admin'])->group(function(){});


//signIn

Route::prefix('pos')->group(function(){
    Route::get('/', [SaleController::class, 'index']);


    Route::get('/sign-in', [SaleController::class, 'signIn']);
    Route::get('/sign-up', [SaleController::class, 'signUp']);



    Route::post('/login', [POSAuthController::class, 'login']);

    Route::get('/logout',function() {
        Auth::logout();
        return redirect('/pos');      
    });    

});
