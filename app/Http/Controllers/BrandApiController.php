<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use Illuminate\Http\Request;

class BrandApiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return  Brand::all();

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store()
    {
        $brand = new Brand;

        $brand->name = request()->name;
        $brand->slug = request()->slug;
        $brand->save();

        return $brand;
     }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $brand = Brand::find($id);

        return $brand;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update($id)
    {
        $brand = Brand::find($id);

        $brand->name = request()->name;
        $brand->slug = request()->slug;
        $brand->save();

        return $brand;
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $brand = Brand::find($id);

        $brand->delete();

        return $brand;
    }
}
