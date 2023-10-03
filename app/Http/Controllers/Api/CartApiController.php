<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Str;

class CartApiController extends Controller
{
    public function showCart()
    {
        if (Auth::check()) {
            $user = Auth::user();
            $cart = $user->carts->first();
            if ($cart) {
                return response()->json(['cart' => $cart, 'message' => 'This is your cart items']);
            } else {
                return response()->json(['message' => 'Cart not found']);
            }
        } else {
            return response()->json(['message' => 'User not authenticated']);
        }
    }



    public function storeCart(Request $request)
    {
        if (Auth::check()) {
            $user = Auth::user();
            $products = $request->input('products');
            $totalPrice = 0;

            foreach ($products as $product) {
                $subtotal = $product['quantity'] * $product['price'];
                $totalPrice += $subtotal;
            }

            $cart = Cart::create([
                'expire_date' => now()->addDays(3),
                'token' => Str::uuid(),
                'total_quantity' => 0,
                'total_price' => $totalPrice,
            ]);

            return response()->json(['cart' => $cart, 'message' => 'Cart created successfully']);
        } else {
            return response()->json(['message' => 'User not authenticated']);
        }
    }

    public function resetCart(Request $request)
    {
        if (Auth::check()) {
            $user = Auth::user();
            $cart = $user->carts;

            if ($cart) {
                $cart->delete();
                $request->session()->invalidate();
                $request->session()->regenerateToken();
                return response()->json(["message" => "Cart Reset Successfully"]);
            } else {
                return response()->json(["message" => "Cart not found"]);
            }
        } else {
            return response()->json(["message" => "User not authenticated"]);
        }
    }


    public function addItem(Request $request,$productId){
        if(Auth::check()){
            $user = Auth::user();
            $cart = $user->cart;
            $product = Product::findOrFail($productId);
            $quantity = $request->input('quantity',1);
            $cart->products()->syncWithoutDetaching([$productId => ['quantity'=>$quantity]]);
            return response()->json(['message'=>'Item added to cart successfully']);

        }else{
            return response()->json(['message'=>'User not authenticated']);

        }
    }




    public function removeItem(Request $request,$productId){
        if(Auth::check()){
            $user = Auth::user();
            $cart = $user->cart;
            $product = Product::findOrFail($productId);
            $cart->products()->detach($productId);
            return response()->json(['message'=>'Item removed successfully']);

        }else{
            return response()->json(['message'=>'User not authenticated']);
        }
    }

    public function incrementQty(Request $request,$productId){
        if(Auth::check()){
            $user = Auth::user();
            $cart = $user->carts;
            $product = Product::findOrFail($productId);
            if($cart->products->contains($productId)){
                $currentQty = $cart->products->find($productId)->pivot->quantity;
                $newQty = $currentQty +1;

                $cart->products()->updateExistingPivot($productId,['quantity'=>$newQty]);
            }    return response()->json(['message' => 'Quantity incremented successfully']);
        } else {
            return response()->json(['message' => 'Product not found in the cart']);
        }
    }

    public function decrementQty(Request $request,$productId){
        if(Auth::check()){
            $user = Auth::user();
            $cart = $user->carts;
            $product = Product::findOrFail($productId);
            if($cart->products->contains($productId)){
                $currentQty = $cart->products->find($productId)->pivot->quantity;
                if($currentQty > 1){
                    $newQuty = $currentQty -1;
                    $cart->products()->updateExistingPivot($productId,['quantity'=>$newQuty]);
                    return response()->json(['message' => 'Quantity decrement successfully']);
                }

            }
        } else {
            return response()->json(['message' => 'Product not found in the cart']);
        }
    }
}
