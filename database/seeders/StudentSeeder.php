<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Student;

class StudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $student = new Student;

        $student -> birthday =  "2023/02/02";
        $student -> email = "arheee@hotmail.com";  
        $student -> program_id =  1;
        $student -> control =  "1234255"; 
        $student -> lastname =  "lopez";
        $student -> name =  "cesar";

        $student -> save();  
    }
}
