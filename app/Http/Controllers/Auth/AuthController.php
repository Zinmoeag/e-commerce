<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login (Request $request) {

        $validator = Validator::make($request->all(),[
            "email" => "required|email|exists:users,email",
            'password' => "required",
        ]);

        if($validator->fails()){

            return response()->json([
                "messages" => $validator->errors(),
            ],422);

        }


        $cleanData = $validator->safe()->only(['email',"password"]);

        if(!(Auth::attempt($cleanData))){

            return response()->json([

                "messages" => [
                    "email" => "invalid credential"
                ],

            ],422);
        }

        return response()->json([
            "message" => "successfully login",
        ],200);

    }


    public function logout(Request $request){

        // auth()->logout();
 
        $request->session()->invalidate();
     
        $request->session()->regenerateToken();

        return response()->json([
            "message" => "successfully Logout"
        ]);

    }

}
