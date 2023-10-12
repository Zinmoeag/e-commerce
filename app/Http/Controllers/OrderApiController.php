<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Cart;
use App\Models\Product;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Gate;

class OrderApiController extends Controller
{
    public function index()
    {
        $orders = auth()->user()->orders;
        return response()->json(['orders' => $orders]);
    }

    public function show(Order $order)
    {
        if(Gate::allows('checkConfirmation', $order)){
            return response()->json(['order' => $order]);
        }else{
            return response([
                "order" => "not authorized" ,
            ],401);
        }

    }

    public function confirmation(Order $order)
    {
        //check if user requested order is his own order or not
        if(Gate::allows('checkConfirmation', $order)){
            return response()->json([
                "order" => $order->load(["products"]),
            ],200);
        }else{
            return response([
                "order" => "not authorized" ,
            ],401);
        }
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'phone' => ['required', 'string'],
            'address' => ['required', 'string'],
            'payment' => ['required', 'string'],
            'cart_token' => ['required']
        ],[
            'cart_token' => "Products is not selected"
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => $validator->errors()], 422);
        }

        $cart = Cart::where('token',request('cart_token'))->first();
        if($cart){

            $totalPrice = $cart->total_price;

            // Create the order
            $userId = auth()->id();
            $order = Order::create([
                'user_id' => $userId,
                'order_date' => now(),
                'phone' => $request->input('phone'),
                'payment'=>$request->input('payment'),
                'address' => $request->input('address'),
                'total_price' => $totalPrice,
            ]);


            // Attach products and quantities
            foreach ($cart->products as $product) {
                $order->products()
                    ->attach($product['id'],[
                        "user_id" => $userId,
                        "quantity" => $product->pivot->quantity,
                    ]);

                //stock qty
                $substractedQty = $product->stock_qty - $product->pivot->quantity;

                if($substractedQty < 0){
                    return response()->json([
                        "message" => [
                            $product->id => 'only '.$product->stock_qty . " is avaliable"
                        ]
                    ],422);
                }else{
                    $product->stock_qty = $substractedQty;
                    $product->save();
                }
            }

            return response()->json([
                'message' => 'Order Successfully Created',
                'order_type' => 'cart',
                'order_id' => $order->id,
            ], 201);

        }else{
            return response()->json(['message' => 'cart is not exist', 404]);
        }
    }

    public function updateAddress($id)
    {
        $order = Order::find($id);
        //check if user requested order is his own order or not
        if(Gate::allows('checkConfirmation', $order)){

            if (!$order) {
                return response()->json(['message' => 'Order not found'], 404);
            }

            $validator = Validator::make(request()->all(), [
                'phone' => ['required', 'string'],
                'address' => ['required', 'string'],
            ]);

            if ($validator->fails()) {
                return response()->json(['message' => $validator->errors()], 422);
            }

            // Update the order
            $order->update([
                'order_date' => now(),
                'phone' => request()->input('phone'),
                'address' => request()->input('address'),
                'total_price' => $order->total_price,
            ]);

            return response()->json([
                'message' => 'Order updated Successfully'
            ], 200);

        }else{
            return response([
                "order" => "not authorized" ,
            ],401);
        }
    }

    public function destroy($id)
    {
        $order = Order::find($id);

        if (!$order) {
            return response()->json(['message' => 'Order not found'], 404);
        }

        //delete record from pivot table
        auth()->user()->orders()->detach($order->id);
        $order->delete();

        return response()->json([
            'message' => 'Order deleted Successfully',
        ], 204);
    }

    public function placeOrder(Request $request) {

        $orderId = $request->input('order_id');
        $weight = 10;


        try {
            $order = Order::findOrFail($orderId);

            foreach ($order->products as $product) {
                $score = $product->pivot->quantity * $weight;
                $product->increment('score', $score);
            }

            return response()->json([
                'message' => 'Score incremented for all products',
            ],200);
        } catch (\Exception $e) {
            return response()->json([
                'e' => $request->input('order_id'),
                'message' => 'Order not found or an error occurred.',
            ],404);
        }
    }


}
