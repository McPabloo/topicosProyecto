<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Discount extends Model
{
    use HasFactory;

    protected $fillable = [
        'id','discAmount', 'description', 'code',
    ];

    public function sales_histories()
    {
        return $this->hasMany(sales_histories::class);
    }
}
