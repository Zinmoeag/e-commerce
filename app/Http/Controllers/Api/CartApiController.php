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
    public function showCart(Cart $cart)
    {
        $cartProducts = $cart->products;
        $totalQty = $cartProducts->reduce(function ($carry, $product){
            $quantity = $product['pivot']['quantity'];
            return $carry + $quantity;
        },0);

        $totalPrice = $cartProducts->reduce(function ($carry, $product){
            $totalPrice = $product['pivot']['total_price'];
            return $carry + $totalPrice;
        },0);


        $cart->total_quantity = $totalQty;
        $cart->total_price = $totalPrice;
        $cart->save();

        return response()->json([
           'cartItem' => $cartProducts,
            'cart' => $cart,
            'message' => 'Cart created successfully'
        ],200);
    }


    public function storeCart(Request $request)
    {
        if($request->input('type') === 'buy'){
            $productId = $request->input('product_id');
            $productsQty = $request->input('qty');
            $product = Product::findOrFail($productId);
            $productPrice = $product->price;

            $cart = Cart::create([
                'expire_date' => now()->addDays(3),
                'token' => Str::uuid(),
                'total_quantity' => $productsQty,
                'total_price' => $productsQty * $productPrice,
            ]);

            $cart->products()->attach($productId,[
                'quantity' => $productsQty,
                'total_price' => $productsQty * $productPrice,
            ]);

            return response()->json([
                'cartItem' => $cart->products,
                'cart' => $cart,
                'message' => $request->input('type'),
            ],200);

        }else{
            $cart = Cart::create([
                'expire_date' => now()->addDays(3),
                'token' => Str::uuid(),
                'total_quantity' => 0,
                'total_price' => 0,
            ]);
             return response()->json([
                'cartItem' => $cart->products,
                'cart' => $cart,
                'message' => request()->all(),
            ],200);
        }

        }


    public function resetCart(Cart $cart)
    {
        $cart->delete();
        return response()->json([
            "message" => "Cart Reset Successfully"
        ],204);
    }


    public function addItem(Cart $cart){

        $validator = Validator::make(request()->all(), [
            'product_id' =>  ["required",'exists:products,id'],
            'quantity' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => $validator->errors()], 422);
        }
            $cartProducts = $cart->products;
            $productId = request('product_id');
            $quantity =  request('quantity');
            $product = Product::findOrFail($productId);

            //sum of existing item
            $totalQty = $cartProducts->reduce(function ($carry, $product){
                $quantity = $product['pivot']['quantity'];
                return $carry + $quantity;
            },0);


            $totalPrice = $cartProducts->reduce(function ($carry, $product){
                $totalPrice = $product['pivot']['total_price'];
                return $carry + $totalPrice;
            },0);


            if($cartProducts->contains($productId)){
                //increase qty if product already exist in cart
                $targetProduct = $cart->products()
                            ->where("products.id", $productId)
                            ->first();

                $pivotRecord = $targetProduct->pivot;

                $existedQty = $pivotRecord->quantity;
                $newQty = $existedQty + $quantity;
                $existedPrice = $pivotRecord->total_price;
                $newPice = $existedPrice + ($quantity * $product->price);

                $pivotRecord->quantity = $newQty;
                $pivotRecord->total_price = $newPice;
                $pivotRecord->save();

            }else{
                // add item to cart
                $cart->products()->syncWithoutDetaching([
                    $productId => [
                        'quantity'=>$quantity,
                        'total_price' => $quantity * $product->price
                    ],
                ]);

                $targetProduct = $cart->products()
                            ->where("products.id", $productId)
                            ->first();
            }
            
            $cart->total_quantity = $totalQty + $quantity;
            $cart->total_price = $totalPrice + ($targetProduct->price * $quantity);
            $cart->save();

            return response()->json([
                "product" => $targetProduct,
                'cart' => $cart,
            ],200);

    }

    public function removeItem(Cart $cart){

            $validator = Validator::make(request()->all(), [
                'product_id' =>  ["required",'exists:products,id'],
            ]);

            if ($validator->fails()) {
                return response()->json(['message' => $validator->errors()], 422);
            }


            //get quantity and price of remove item
            $targetProduct = $cart->products->firstWhere("id",request('product_id'));
            $quantity = $targetProduct->pivot->quantity;
            $totalPrice = $targetProduct->pivot->total_price;

            $cart->total_quantity = $cart->total_quantity - $quantity;
            $cart->total_price  = $cart->total_price - $totalPrice;
            $cart->save();

            $cart->products()->detach(request('product_id'));

            return response()->json([
                'targetProduct' => $targetProduct,
                'cart' => $cart,
                'message' => 'deleted',
            ],200);
    }

    public function incrementQty(Cart $cart){

        $validator = Validator::make(request()->all(), [
            'product_id' =>  ["required",'exists:products,id'],
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => $validator->errors()], 422);
        }

        $IncreaseQty = 1;

        if($cart->products->contains(request('product_id'))){

            $targetProduct = $cart->products()
                            ->where("products.id", request('product_id'))
                            ->first();

            $pivotRecord = $targetProduct->pivot;
            $currentQty = $pivotRecord->quantity;

            if($targetProduct->stock_qty > $currentQty){

                $newQty = $currentQty + $IncreaseQty;

                $currentPrice = $pivotRecord->total_price;
                $newPrice = $currentPrice + ($targetProduct->price * $IncreaseQty);

                //update quantity and price for pivot record
                $pivotRecord->quantity = $newQty;
                $pivotRecord->total_price = $newPrice;
                $pivotRecord->save();

                //update total quantity and price for cart
                $cart->total_quantity = $cart->total_quantity + $IncreaseQty;
                $cart->total_price = $cart->total_price + ($targetProduct->price * $IncreaseQty);
                $cart->save();

                return response()->json([
                    'product' => $targetProduct,
                    'cart' => $cart,
                    'message' => 'Quantity incremented successfully',
                ]);

            }else{
                return response()->json([
                    'error' => [
                        $targetProduct->id => "stock out"
                    ]
                ],422);
            }
        }
    }

    public function decrementQty(Cart $cart){

        $validator = Validator::make(request()->all(), [
            'product_id' =>  ["required",'exists:products,id'],
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => $validator->errors()], 422);
        }

        $decreaseQty = 1;

        if($cart->products->contains(request('product_id'))){
            $targetProduct = $cart->products()
                            ->where("products.id", request('product_id'))
                            ->first();
            $pivotRecord = $targetProduct->pivot;

            $currentQty = $pivotRecord->quantity;
            $newQty = $currentQty - $decreaseQty;

            $currentPrice = $pivotRecord->total_price;
            $newPrice = $currentPrice - ($targetProduct->price * $decreaseQty);

            //update quantity and price for pivot record
            $pivotRecord->quantity = $newQty;
            $pivotRecord->total_price = $newPrice;
            $pivotRecord->save();

            //update total quantity and price for cart
            $cart->total_quantity = $cart->total_quantity - $decreaseQty;
            $cart->total_price = $cart->total_price - ($targetProduct->price * $decreaseQty);
            $cart->save();

            return response()->json([
                'product' => $targetProduct,
                'cart' => $cart,
                'message' => 'Quantity incremented successfully',
            ]);
        }
    }
}
