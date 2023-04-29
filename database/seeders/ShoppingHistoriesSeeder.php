<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ShoppingHistory;

class ShoppingHistoriesSeeder extends Seeder
{
    public function run()
    {
        ShoppingHistory::factory()->count(3)->create();
    }
}
