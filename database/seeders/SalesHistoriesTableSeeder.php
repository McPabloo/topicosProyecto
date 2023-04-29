<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\SalesHistory;

class SalesHistoriesTableSeeder extends Seeder
{
    public function run()
    {
        SalesHistory::factory()->count(3)->create();
    }
}
