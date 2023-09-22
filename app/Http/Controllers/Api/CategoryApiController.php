<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\category;
use Illuminate\Cache\Events\CacheHit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class CategoryApiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return category::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $rules = [
            'name' => ['required', 'max:255', Rule::unique('categories', 'name')],
            'slug' => ['required', 'max:255', Rule::unique('brands', 'slug')],
        ];

        $validator = Validator::make(request()->all(), $rules);

        if ($validator->fails()) {
            return $validator->errors();
        } else {
            $result = category::create([
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
    public function show($slug)
    {
        $category =  category::where('slug', $slug)->first();

        if (!$category) {
            return response()->json(['message' => 'brand not found'], 404);
        }
    
        // Return the category as a JSON response
        return response()->json($category);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update($slug)
    {
        $category =  category::where('slug', $slug)->first();
        $rules = [
            'name' => ['required', 'max:255', Rule::unique('brands', 'name')->ignore($slug)],
            'slug' => ['required', 'max:255', Rule::unique('brands', 'slug')->ignore($slug)]
        ];

        $validator = Validator::make(request()->all(), $rules);

        if ($validator->fails()) {
            return $validator->errors();
        } else {
            $formData = [
                'name' => request()->name,
                'slug' => request()->slug,
            ];
            $result = $category->update($formData);
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
    public function destroy(string $slug)
    {
        $result = category::where('slug', $slug)->first()->delete();

        if($result){
            return ['Result' => 'Item has been deleted'];
        } else {
            return ['Result' => 'Operation Fail'];
        }
    }
}
