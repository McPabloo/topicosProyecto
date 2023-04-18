<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Student;
use App\Models\Program;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Student>
 */
class StudentFactory extends Factory
{
    protected $student = Student::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => fake()->firstname(),
            'lastname' => fake()->lastname(),
            'control' => $this->faker->numerify('#########'),
            'email' => $this->faker->safeEmail(),
            'birthday' => $this->faker->date(),
            'program_id' => Program::all()->random()->id
        ];
    }
}
