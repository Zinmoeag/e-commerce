<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Order;
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
            'products.*.product_id' => ['required', 'exists:products,id'],
            'products.*.quantity' => ['required', 'integer', 'min:1'],
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => $validator->errors()], 422);
        }


        $totalPrice = 0;

        foreach ($request->input('products') as $product) {
            $subtotal = $product['quantity'] * $product['price'];
            $totalPrice += $subtotal;
        }

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
        foreach ($request->input('products') as $product) {
            $order->products()
                ->attach($product['product_id'],[
                    "user_id" => $userId, 
                    "quantity" => $product["quantity"],
                ]);
        }

        return response()->json([
            'message' => 'Order Successfully Created',
            'order_id' => $order->id
        ], 201);
    }

    public function update($id)
    {
        $order = Order::find($id);

        if (!$order) {
            return response()->json(['message' => 'Order not found'], 404);
        }

        $validator = Validator::make(request()->all(), [
            'order_date' => ['required', 'date'],
            'phone' => ['required', 'string'],
            'address' => ['required', 'string'],
            'total_price' => ['required', 'numeric'],
            'products.*.product_id' => ['required', 'exists:products,id'], // Validate product IDs
            'products.*.quantity' => ['required', 'integer', 'min:1'], // Validate quantities
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => $validator->errors()], 422);
        }

        $totalPrice = 0;

        foreach (request()->input('products') as $product) {
            $subtotal = $product['quantity'] * $product['price'];
            $totalPrice += $subtotal;
        }

        //remove existed record in pivot
        auth()->user()->orders()->detach($order->id);

        // Update the order
        $order->update([
            'order_date' => request()->input('order_date'),
            'phone' => request()->input('phone'),
            'address' => request()->input('address'),
            'total_price' => $totalPrice,
        ]);

        foreach ($request->input('products') as $product) {
            $order->products()
                ->attach($product['product_id'],[
                    "user_id" => $userId, 
                    "quantity" => 1
                ]);
        }

        return response()->json(['message' => 'Order updated Successfully'], 200);
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
}
