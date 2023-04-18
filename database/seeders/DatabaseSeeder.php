<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Program;
use App\Models\Student;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

Program::factory(3)->create();
Student::factory(10)->create();

        /*$student1 = new Program;

        $student1 -> name =  "cesar";
        $student1 -> description =  "tics papá";

        $student1 -> save();   
        
        $this->call(StudentSeeder::class);*/

    }
}
