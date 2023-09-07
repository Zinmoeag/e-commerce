<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductApiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Product::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store()
    {
        $product = new Product;
        
        $product->name = request()->name;
        $product->product_code = request()->product_code;
        $product->category_id = request()->category_id;
        $product->brand_id = request()->brand_id;
        $product->image = request()->image;
        $product->description = request()->description;
        $product->stock_qty = request()->stock_qty;
        $product->price = request()->price;
        $product->save();

        return $product;
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return Product::find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update($id)
    {
        $product = Product::find($id);

        $product->name = request()->name;
        $product->product_code = request()->product_code;
        $product->category_id = request()->category_id;
        $product->brand_id = request()->brand_id;
        $product->image = request()->image;
        $product->description = request()->description;
        $product->stock_qty = request()->stock_qty;
        $product->price = request()->price;
        $product->save();

        return $product;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $product = Product::find($id);
        $product->delete();

        return $product;
    }
}
