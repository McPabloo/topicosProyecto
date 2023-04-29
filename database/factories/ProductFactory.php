<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    protected $model = Product::class;

    public function definition()
    {
        return [
            'model' => $this->faker->word(),
            'description' => $this->faker->sentence(),
            'stock' => $this->faker->numberBetween(1, 100),
            'price' => $this->faker->numberBetween(1000, 10000),
            'brand' => $this->faker->word(),
            'category' => $this->faker->word(),
            'year' => $this->faker->numberBetween(2000, 2023),
            'image' => $this->faker->imageUrl(),
        ];
    }
}
