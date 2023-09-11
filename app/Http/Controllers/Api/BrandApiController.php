<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class BrandApiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Brand::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $rules = [
            'name' => ['required', 'max:255', Rule::unique('brans', 'name')],
            'slug' => ['required', 'max:255', Rule::unique('brands', 'slug')],
        ];

        $validator = Validator::make(request()->all(), $rules);

        if ($validator->fails()) {
            return $validator->errors();
        } else {
            $result = Brand::create([
                'name' => request()->name,
                'slug' => request()->slug
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
        return Brand::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update($id)
    {
        $product = Brand::findOrFail($id);
        $rules = [
            'name' => ['required', 'max:255', Rule::unique('brands', 'name')->ignore($id)],
            'slug' => ['required', 'max:255', Rule::unique('brands', 'slug')->ignore($id)]
        ];

        $validator = Validator::make(request()->all(), $rules);

        if ($validator->fails()) {
            return $validator->errors();
        } else {
            $formData = [
                'name' => request()->name,
                'slug' => request()->slug,
            ];
            $result = $product->update($formData);
            if ($result) {
                return ['Result' => 'Brand has been updated'];
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
        $result = Brand::findOrFail($id)->delete();

        if($result){
            return ['Result' => 'Item has been deleted'];
        } else {
            return ['Result' => 'Operation Fail'];
        }
    }
}
