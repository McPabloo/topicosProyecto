<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facadest\DB;
use App\Models\Product;
use Validator;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\ResponseController;

class ProductController extends ResponseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $products = Product::all();
    }

    public function getUsuario(Request $request)
    {
        $user = User::where('id', $request->id)->first();
        return $user;
    }

    public function getProducto(Request $request)
    {
        $product = Product::where('id', $request->id)->first();
        return $product;
    }

    public function updateUser(Request $request)
    {
        $user = User::where('id', $request->id)->first();
        $user->street=$request->street;
        $user->city =$request->city;
        $user->phone =$request->phone;
        $user->email =$request->email;
        $user->birthday =$request->birthday;
        $user->save();
        
    }

    public function get_token()
    {
        return csrf_token();
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }
}
