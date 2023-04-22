<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SalesHistory extends Model
{
    use HasFactory;

    protected $fillable = [
        'id','user_id', 'discount_id', 'sCart_id', 'total', 'sDate',
    ];

    public function discounts()
    {
        return $this->belongsTo(discounts::class);
    }

    public function shopping_carts()
    {
        return $this->hasOne(shopping_carts::class);
    }
    
}
