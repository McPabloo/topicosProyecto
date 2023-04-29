<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ShoppingHistory;

use Illuminate\Support\Facades\DB;

class ShoppingHistorySeeder extends Seeder
{
   /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $shoppingHistories = [
            [
                "user_id" => 1,
                "quantity" => 2,
                "product_id" => 4,
                "sDate" => "2022-03-15",
                "created_at" => now(),
                "updated_at" => now(),
            ],
            [
                "user_id" => 2,
                "quantity" => 1,
                "product_id" => 5,
                "sDate" => "2022-04-02",
                "created_at" => now(),
                "updated_at" => now(),
            ],
            [
                "user_id" => 3,
                "quantity" => 3,
                "product_id" => 6,
                "sDate" => "2022-02-28",
                "created_at" => now(),
                "updated_at" => now(),
            ],
            [
                "user_id" => 4,
                "quantity" => 2,
                "product_id" => 7,
                "sDate" => "2022-03-21",
                "created_at" => now(),
                "updated_at" => now(),
            ],
            [
                "user_id" => 5,
                "quantity" => 1,
                "product_id" => 8,
                "sDate" => "2022-04-10",
                "created_at" => now(),
                "updated_at" => now(),
            ],

            [
                "user_id" => 6,
                "quantity" => 1,
                "product_id" => 8,
                "sDate" => "2022-04-10",
                "created_at" => now(),
                "updated_at" => now(),
            ],

            [
                "user_id" => 7,
                "quantity" => 1,
                "product_id" => 8,
                "sDate" => "2022-04-10",
                "created_at" => now(),
                "updated_at" => now(),
            ],

            [
                "user_id" => 8,
                "quantity" => 1,
                "product_id" => 8,
                "sDate" => "2022-04-10",
                "created_at" => now(),
                "updated_at" => now(),
            ],


            [
                "user_id" => 9,
                "quantity" => 1,
                "product_id" => 8,
                "sDate" => "2022-04-10",
                "created_at" => now(),
                "updated_at" => now(),
            ],

            [
                "user_id" => 10,
                "quantity" => 1,
                "product_id" => 8,
                "sDate" => "2022-04-10",
                "created_at" => now(),
                "updated_at" => now(),
            ],


        ];

        DB::table('shopping_histories')->insert($shoppingHistories);
    }
}