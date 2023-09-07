<?php

namespace App\Http\Controllers\POS;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SaleController extends Controller
{
    public function index(){

        return view('pos.index');
 
    }

    public function signIn(){
        return view('pos.sign-in');
    }

    public function signUp(){
        return view('pos.sign-up');
    }

    public function forgotPassword(){
        return view('pos.forgotPassword');
    }
}
