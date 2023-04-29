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
                'email' => 'juanperez@example.com',
                'email_verified_at' => now(),
                'password' => Hash::make('password123'),
                'status' => 'client',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Maria Garcia',
                'email' => 'mariagarcia@example.com',
                'email_verified_at' => now(),
                'password' => Hash::make('password123'),
                'status' => 'client',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            
            [
                'name' => 'Pedro Rodriguez',
                'email' => 'pedrorodriguez@example.com',
                'email_verified_at' => now(),
                'password' => Hash::make('password123'),
                'status' => 'client',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            
            [
                'name' => 'Ana Lopez',
                'email' => 'analopez@example.com',
                'email_verified_at' => now(),
                'password' => Hash::make('password123'),
                'status' => 'client',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            
            [
                'name' => 'Carlos Martinez',
                'email' => 'carlosmartinez@example.com',
                'email_verified_at' => now(),
                'password' => Hash::make('password123'),
                'status' => 'client',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            
            [
                'name' => 'Laura Hernandez',
                'email' => 'laurahernandez@example.com',
                'email_verified_at' => now(),
                'password' => Hash::make('password123'),
                'status' => 'client',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            
            [
                'name' => 'Maria Rodriguez',
                'email' => 'mariarodriguez@example.com',
                'email_verified_at' => now(),
                'password' => Hash::make('password456'),
                'status' => 'administrator',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Pedro Gomez',
                'email' => 'pedrogomez@example.com',
                'email_verified_at' => now(),
                'password' => Hash::make('password789'),
                'status' => 'client',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ],
           
            [
                'name' => 'Jorge Fernandez',
                'email' => 'jorgefernandez@example.com',
                'email_verified_at' => now(),
                'password' => Hash::make('passworddef'),
                'status' => 'client',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}