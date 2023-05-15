<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                'name' => 'Juan Perez',
                'email' => 'juanperez@gmail.com',
                'email_verified_at' => now(),
                'password' => 'password123',
                'status' => 'client',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now(), 
            ],
            [
                'name' => 'Maria Garcia',
                'email' => 'mariagarcia@yahoo.com',
                'email_verified_at' => now(),
                'password' => 'password123',
                'status' => 'client',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            
            [
                'name' => 'Pedro Rodriguez',
                'email' => 'pedrorodriguez@gmail.com',
                'email_verified_at' => now(),
                'password' => 'password123',
                'status' => 'client',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            
            [
                'name' => 'Ana Lopez',
                'email' => 'analopez@yahoo.com',
                'email_verified_at' => now(),
                'password' => 'password123',
                'status' => 'client',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            
            [
                'name' => 'Carlos Martinez',
                'email' => 'carlosmartinez@gmail.com',
                'email_verified_at' => now(),
                'password' => 'password123',
                'status' => 'client',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            
            [
                'name' => 'Laura Hernandez',
                'email' => 'laurahernandez@yahoo.com',
                'email_verified_at' => now(),
                'password' => 'password123',
                'status' => 'client',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            
            [
                'name' => 'Maria Rodriguez',
                'email' => 'mariarodriguez@gmail.com',
                'email_verified_at' => now(),
                'password' => 'password123',
                'status' => 'administrator',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Pedro Gomez',
                'email' => 'pedrogomez@yahoo.com',
                'email_verified_at' => now(),
                'password' => 'password123',
                'status' => 'client',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ],
           
            [
                'name' => 'Pablo perez',
                'email' => 'pabloperez@gamil.com',
                'email_verified_at' => now(),
                'password' => 'pablo123',
                'status' => 'client',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            

            [
                'name' => 'lauro manuel',
                'email' => 'lauromanuel@gamil.com',
                'email_verified_at' => now(),
                'password' => 'lauro123',
                'status' => 'client',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'name' => 'ana elizabeth',
                'email' => 'anaeli@yahoo.com',
                'email_verified_at' => now(),
                'password' => 'ana123',
                'status' => 'client',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ],


        ]);
    }
}