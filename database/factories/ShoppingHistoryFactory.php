<?php

namespace Database\Factories;

use App\Models\ShoppingHistory;
use Illuminate\Database\Eloquent\Factories\Factory;

class ShoppingHistoryFactory extends Factory
{
    protected $model = ShoppingHistory::class;

    public function definition()
    {
        return [
            'user_id' => $this->faker->numberBetween(1, 10),
            'quantity' => $this->faker->numberBetween(1, 5),
            'product_id' => $this->faker->numberBetween(1, 20),
            'sDate' => $this->faker->dateTimeBetween('-1 year', 'now')->format('Y-m-d'),
        ];
    }
}
