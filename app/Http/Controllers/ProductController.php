<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use App\Models\Product;
use Carbon\Carbon;
use Validator;
use App\Models\User;
use App\Models\ShoppingCart;
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

    public function compraAuto(Request $request)
    {
        $user = Product::where('model', $request->model)->first();
        $user->stock=$user->stock + $request->stock;
        
        $user->save();
    }

    public function addAuto(Request $request)
    {
        $rules = [
            'model' => 'required|string|max:255',
            'stock' => 'required|integer',
            'year' => 'required|integer',
            'description' => 'required|string|max:255',
            'brand' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'image' => 'required',
            'price' => 'required|numeric',
        ];
    
        // Validar los campos de entrada
        $validatedData = $request->validate($rules);
    
        // Crear una nueva instancia de Product con los datos validados
        $product = new Product;
        $product->model = $validatedData['model'];
        $product->stock = $validatedData['stock'];
        $product->year = $validatedData['year'];
        $product->description = $validatedData['description'];
        $product->brand = $validatedData['brand'];
        $product->category = $validatedData['category'];
        $product->price = $validatedData['price'];
        $product->image = $validatedData['image'];
    
        // Guardar el nuevo producto en la base de datos
        $product->save();
    }

    public function updateAuto(Request $request)
    {
        $rules = [
            'description' => 'required|string|max:255',
            'price' => 'required|numeric',
        ];
    
        // Validar los campos de entrada
        $validatedData = $request->validate($rules);
    
        // Crear una nueva instancia de Product con los datos validados
        $user = Product::where('model', $request->model)->first();
        
        $user->description = $request->description;
        $user->price = $request->price;
        $user->save();
    }

    public function getVentas(Request $request)
    {

        $year = $request->input('year');
        $month = $request->input('month');
        $modelo = $request->input('modelo');

        if($year === "all"){
            $rows = ShoppingCart::join('products', 'shopping_carts.product_id', '=', 'products.id')
            ->select('products.model', DB::raw('COUNT(*) as count'))
            ->where('shopping_carts.status', '=', 'true')
            ->where('products.model', 'LIKE', $modelo . '%')
            ->groupBy('products.model')
            ->get();
            return $rows;
        }

        if ($month === "all") {
            $rows = DB::table('shopping_carts')
                ->join('products', 'shopping_carts.product_id', '=', 'products.id')
                ->selectRaw('products.model', DB::raw('COUNT(*) as count'))
                ->where('shopping_carts.status', '=', 'true')
                ->where('products.model', 'LIKE', $modelo . '%')
                ->whereRaw("DATE_FORMAT(shopping_carts.updated_at, '%Y') = '$year'")
                ->groupBy('products.model')
                ->get();
            return $rows;
        }

        //si recibe digamos el mes en formato 3, se autocompleta a 03
        $month = str_pad($request->input('month'), 2, '0', STR_PAD_LEFT);
        $rows = DB::table('shopping_carts')
            ->join('products', 'shopping_carts.product_id', '=', 'products.id')
            ->selectRaw('products.model', DB::raw('COUNT(*) as count'))
            ->where('shopping_carts.status', '=', 'true')
            ->where('products.model', 'LIKE', $modelo . '%')
            ->whereRaw("DATE_FORMAT(shopping_carts.updated_at, '%Y-%m') = '$year-$month'")
            ->groupBy('products.model')
            ->get();
        return $rows;
        
    }

    public function updateUser(Request $request)
    {
        $user = User::where('id', $request->id)->first();
        $user->address=$request->address;
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
