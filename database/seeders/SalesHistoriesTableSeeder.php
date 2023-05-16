<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SalesHistoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('sales_histories')->insert([
            [
                'user_id' => 1,
                'total' => 350000,
                'discount_id' => 1,
                'sCart_id' => 1,
                'sDate' => '2023-06-10',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 2,
                'total' => 180000,
                'discount_id' => 2,
                'sCart_id' => 2,
                'sDate' => '2023-09-02',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 3,
                'total' => 150000,
                'discount_id' => 3,
                'sCart_id' => 3,
                'sDate' => '2023-01-11',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 4,
                'total' => 750000,
                'discount_id' => 4,
                'sCart_id' => 4,
                'sDate' => '2023-08-07',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 5,
                'total' => 120000,
                'discount_id' => 5,
                'sCart_id' => 5,
                'sDate' => '2023-06-12',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'user_id' => 6,
                'total' => 350000,
                'discount_id' => 6,
                'sCart_id' => 6,
                'sDate' => '2023-06-10',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 7,
                'total' => 180000,
                'discount_id' => 7,
                'sCart_id' => 7,
                'sDate' => '2023-09-02',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 8,
                'total' => 150000,
                'discount_id' => 8,
                'sCart_id' => 8,
                'sDate' => '2023-01-11',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 9,
                'total' => 750000,
                'discount_id' => 9,
                'sCart_id' => 9,
                'sDate' => '2023-08-07',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 10,
                'total' => 120000,
                'discount_id' => 10,
                'sCart_id' => 10,
                'sDate' => '2023-06-12',
                'created_at' => now(),
                'updated_at' => now(),
            ],
           
        ]);
    }
}