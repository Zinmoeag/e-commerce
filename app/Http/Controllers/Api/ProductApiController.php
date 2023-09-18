<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Symfony\Component\Mime\Part\Multipart\FormDataPart;

class ProductApiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return  Product::latest()
                ->filter(request(['search', 'category', 'brand']))
                ->paginate(6)
                ->withQueryString();
    }

    // public function search($name){
    //     return Product::where('name', 'Like', '%' .$name. '%')->get();
    // }
    /**
     * Store a newly created resource in storage.
     */
    public function store()
    {
        $rules = [
            'name' => ['required', 'max:255', Rule::unique('products', 'name')],
            'product_code' => ['required', 'numeric', Rule::unique('products', 'product_code')],
            'category_id' => ['required', Rule::exists('categories', 'id')],
            'brand_id' => ['required', Rule::exists('brands', 'id')],
            'description' => ['required'],
            'stock_qty' => ['required', 'numeric'],
            'price' => ['required', 'numeric']
        ];

        $validator = Validator::make(request()->all(), $rules);

        if ($validator->fails()) {
            return $validator->errors();
        } else {
            $result = Product::create([
                'name' => request()->name,
                'product_code' => request()->product_code,
                'category_id' => request()->category_id,
                'brand_id' => request()->brand_id,
                'image' => request()->file('image')->store('product_img'),
                'description' => request()->description,
                'stock_qty' => request()->stock_qty,
                'price' => request()->price
            ]);
            if ($result) {
                return ['Result' => 'Data has been saved'];
            } else {
                return ['Result' => 'Operation Fail'];
            }
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return Product::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update($id)
    {
        $product = Product::findOrFail($id);
        $rules = [
            'name' => ['required', 'max:255', Rule::unique('products', 'name')->ignore($product->id)],
            'product_code' => ['required', 'numeric', Rule::unique('products', 'product_code')->ignore($product->id)],
            'category_id' => ['required', Rule::exists('categories', 'id')],
            'brand_id' => ['required', Rule::exists('brands', 'id')],
            'description' => ['required'],
            'stock_qty' => ['required', 'numeric'],
            'price' => ['required', 'numeric']
        ];

        $validator = Validator::make(request()->all(), $rules);

        if ($validator->fails()) {
            return $validator->errors();
        } else {
            $formData = [
                'name' => request()->name,
                'product_code' => request()->product_code,
                'category_id' => request()->category_id,
                'brand_id' => request()->brand_id,
                'description' => request()->description,
                'stock_qty' => request()->stock_qty,
                'price' => request()->price
            ];
            $formData['image'] = request()->file('image') ? request()->file('image')->store('product_img') : $product->image;

            $result = $product->update($formData);
            
            if ($result) {
                return ['Result' => 'Data has been updated'];
            } else {
                return ['Result' => 'Operation Fail'];
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $result = Product::findOrFail($id)->delete();

        if($result){
            return ['Result' => 'Item has been deleted'];
        } else {
            return ['Result' => 'Operation Fail'];
        }
    }
}
