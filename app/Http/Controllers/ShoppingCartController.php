<?php

namespace App\Http\Controllers;

use App\Models\ShoppingCart;
use App\Models\Product;
use Illuminate\Http\Request;
use Validator;
use Illuminate\Support\Facades\DB;

class ShoppingCartController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $registros = DB::table('products')
              ->join('shopping_carts', 'products.id', '=', 'shopping_carts.product_id')
              ->select('products.image', 'products.model', 'products.price', 'products.year',
              'shopping_carts.id as sid', 'products.id')
              ->where('shopping_carts.status', 'false')
              ->where('user_id', $request->user_id)
              ->get();
        return $registros;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function cambioStatus(Request $request)
    {
        $cart = ShoppingCart::where('id', $request->id)->first();
        $cart->status = "true";
        
        $cart->save();
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'cantidad' => 'required',
            'producto_id' => 'required',
            'usuario_id' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $lista_carritos = ShoppingCart::create([
            'user_id' => $request->usuario_id,
            'product_id' => $request->producto_id,
            'quantity' => $request->cantidad,
            'status' => 'false',
        ]);
        $lista_carritos->save();

        return $lista_carritos->id;
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ShoppingCart  $shoppingCart
     * @return \Illuminate\Http\Response
     */
    public function show(ShoppingCart $shoppingCart)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ShoppingCart  $shoppingCart
     * @return \Illuminate\Http\Response
     */
    public function edit(ShoppingCart $shoppingCart)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ShoppingCart  $shoppingCart
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ShoppingCart $shoppingCart)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ShoppingCart  $shoppingCart
     * @return \Illuminate\Http\Response
     */
    public function destroy(ShoppingCart $shoppingCart)
    {
        //
    }
}
