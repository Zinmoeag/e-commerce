<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
class UserProfileApiController extends Controller
{
// ------------------------------------------------------------------
    // For User Edit Profile
    public function UserProfileEdit(){
        $user = auth()->user();
        return $user;
    }
    public function UserProfileStore(Request $request){
        $user = auth()->user();
        $validator = Validator::make($request->all(),[
            'username' => 'required|string|max:255',
            'email' => 'required|email|unique:email',
            'address' => 'required|string',
            'phone' => 'required|string',
            'photo' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);
        if($validator->fails()){
            return response()->json(['error'=>$validator->errors()],400);
        }

        $user->name = $request->username;
        $user->email = $request->email;
        $user->address = $request->address;
        $user->phone = $request->phone;
        if($request->file('photo')){
            $file = $request->file('photo');
            @unlink(public_path('uploads/admin_imgs'.$user->photo));
            $filename = uniqid() . $file->getClientOriginalName();
            $file->move(public_path('uploads/user_img/'),$filename);
            $user['photo'] = $filename;
        }
        $user->save();


        return response()->json(['message'=>'Profile Updated Successfully']);
    }
// -----------------------------------------------------------
    // For Change Password
    public function UserChangePassword(){
        $user = Auth::user();
        return $user;
    }

    public function UserUpdatePassword(Request $request)
    {
        $user = Auth::user();

        $request->validate([
            'old_password' => 'required',
            'new_password' => 'required|confirmed|min:8',
        ]);

        if (Hash::check($request->old_password, $user->password)) {
            $user->password = Hash::make($request->new_password);
            $user->save();
            return response()->json(['message' => 'Password changed successfully']);
        }

        return response()->json(['error' => 'Old password is incorrect'], 400);
    }
}
