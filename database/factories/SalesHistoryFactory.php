<?php

namespace Database\Factories;

use App\Models\SalesHistory;
use Illuminate\Database\Eloquent\Factories\Factory;

class SalesHistoryFactory extends Factory
{
    protected $model = SalesHistory::class;

    public function definition()
    {
        return [
            'user_id' => $this->faker->numberBetween(1, 10),
            'total' => $this->faker->numberBetween(10, 100),
            'discount_id' => $this->faker->numberBetween(1, 5),
            'sCart_id' => $this->faker->numberBetween(1, 10),
            'sDate' => $this->faker->dateTimeThisYear(),
        ];
    }
}
