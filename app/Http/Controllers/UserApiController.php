<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserApiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return User::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store()
    {
        $user = new User();

        $user->name = request()->name;
        $user->email = request()->email;
        $user->address = request()->address;
        $user->photo = request()->photo;
        $user->password = request()->password;
        $user->is_admin = request()->is_admin;
        $user->save();

        return $user;
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $user = User::find($id);

        return $user;
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update($id)
    {
        $user = User::find($id);

        $user->name = request()->name;
        $user->email = request()->email;
        $user->address = request()->address;
        $user->photo = request()->photo;
        $user->password = request()->password;
        $user->is_admin = request()->is_admin;
        $user->save();

        return $user;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $user = User::find($id);

        $user->delete();

        return $user;
    }
}
