<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Discount;

class DiscountsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $discounts = [
            [
                'discAmount' => 20000,
                'description' => 'Descuento de por apertura',
                'code' => 'DESC10'
            ],
           
            [
                'discAmount' => 30000,
                'description' => 'Descuento de pago contado',
                'code' => 'DESC20'
            ],
           
            [
                'discAmount' => 40000,
                'description' => 'Descuento de cliente frecuente',
                'code' => 'DESC15'
            ],
           
            [
                'discAmount' => 50000,
                'description' => 'Descuento por temporada',
                'code' => 'DESC5'
            ],
           
            [
                'discAmount' => 25000,
                'description' => 'Descuento de ',
                'code' => 'DESC25'
            ],

            [
                'discAmount' => 24000,
                'description' => 'Descuento de tasa de interes',
                'code' => 'DESC25'
            ],
            
            
            [
                'discAmount' => 40000, 
                'description' => 'Descuento de cliente frecuente',
                'code' => 'DESC15'
            ],
           
            [
                'discAmount' => 50000,
                'description' => 'Descuento por temporada',
                'code' => 'ADES76'
            ],
           
            [
                'discAmount' => 25000,
                'description' => 'Descuento de ',
                'code' => 'DESC98'
            ],

            [
                'discAmount' => 24000,
                'description' => 'Descuento de tasa de interes',
                'code' => 'DESC14'
            ],

        ];

        foreach ($discounts as $discount) {
            Discount::create($discount);
        }
    }
}