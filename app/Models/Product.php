<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'id','model', 'description', 'stock', 'price', 'brand', 'category', 'year', 'image',
    ];

    public function shopping_carts()
    {
        return $this->belongsTo(shopping_carts::class);
    }

    public function shopping_histories()
    {
        return $this->hasMany(shopping_histories::class);
    }

}
