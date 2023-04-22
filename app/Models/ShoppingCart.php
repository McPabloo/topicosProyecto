<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShoppingCart extends Model
{
    use HasFactory;

    protected $fillable = [
        'id','quantity', 'product_id', 'user_id',
    ];


    public function products()
    {
        return $this->hasMany(products::class);
    }

    public function sales_histories()
    {
        return $this->belongsTo(sales_histories::class);
    }

    public function users()
    {
        return $this->belongsTo(users::class);
    }

}
