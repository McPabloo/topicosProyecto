<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShoppingHistory extends Model
{
    use HasFactory;

    protected $fillable = [
        'id','user_id', 'discount_id', 'sCart_id', 'total', 'sDate',
    ];

    public function products()
    {
        return $this->belongsTo(products::class);
    }

    
}
