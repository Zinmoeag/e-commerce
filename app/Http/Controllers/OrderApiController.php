<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class OrderApiController extends Controller
{
    public function index()
    {
        $orders = Order::all();
        return response()->json(['orders' => $orders]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'order_date' => ['required', 'date'],
            'phone' => ['required', 'string'],
            'address' => ['required', 'string'],
            'total_price' => ['required', 'numeric'],
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
        $order = Order::create([
            'order_date' => $request->input('order_date'),
            'phone' => $request->input('phone'),
            'address' => $request->input('address'),
            'total_price' => $totalPrice,
        ]);

        // Attach products and quantities
        $order->products()->attach($request->input('products'));

        return response()->json(['message' => 'Order Successfully Created'], 201);
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

        // Update the order
        $order->update([
            'order_date' => request()->input('order_date'),
            'phone' => request()->input('phone'),
            'address' => request()->input('address'),
            'total_price' => $totalPrice,
        ]);

        return response()->json(['message' => 'Order updated Successfully'], 200);
    }

    public function destroy($id)
    {
        $order = Order::find($id);

        if (!$order) {
            return response()->json(['message' => 'Order not found'], 404);
        }

        $order->delete();

        return response()->json(['message' => 'Order deleted Successfully'], 204);
    }
}
