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
     * Run the seeder.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            [
                'name' => 'John Doe',
                'email' => 'john@gmail.com',
                'email_verified_at' => now(),
                'password' => 'contra123',
                'birthday' => '1990-01-01',
                'address' => '123 Main St',
                'phone' => '1234567890',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Pablo perez',
                'email' => 'pabloperez@gmail.com',
                'email_verified_at' => now(),
                'password' => 'pablo123',
                'birthday' => '1992-05-10',
                'address' => '456 Elm St',
                'phone' => '4951032190',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'lauro manuel',
                'email' => 'lauromanuel@gmail.com',
                'email_verified_at' => now(),
                'password' => 'lauro123',
                'birthday' => '1992-05-10',
                'address' => '456 Elm St',
                'phone' => '4491380738',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'name' => 'ana elizabeth',
                'email' => 'anaeli@yahoo.com',
                'email_verified_at' => now(),
                'password' => 'ana123',
                'birthday' => '1992-05-10',
                'address' => '456 Elm St',
                'phone' => '4491060778',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Jane Smith',
                'email' => 'jane@example.com',
                'email_verified_at' => now(),
                'password' => 'contra123',
                'birthday' => '1992-05-10',
                'address' => '456 Elm St',
                'phone' => '9876543210',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Juan Perez',
                'email' => 'juanperez@gmail.com',
                'email_verified_at' => now(),
                'password' => 'contra123',
                'birthday' => '1992-05-10',
                'address' => '456 Elm St',
                'phone' => '9876543210',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Maria Garcia',
                'email' => 'mariagarcia@yahoo.com',
                'email_verified_at' => now(),
                'password' => 'secret',
                'birthday' => '1992-05-10',
                'address' => '456 Elm St',
                'phone' => '9876543210',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Pedro Rodriguez',
                'email' => 'pedrorodriguez@gmail.com',
                'email_verified_at' => now(),
                'password' => 'contra123',
                'birthday' => '1992-05-10',
                'address' => '456 Elm St',
                'phone' => '9876543210',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'name' => 'Ana Lopez',
                'email' => 'analopez@yahoo.com',
                'email_verified_at' => now(),
                'password' => 'contra123',
                'birthday' => '1992-05-10',
                'address' => '456 Elm St',
                'phone' => '9876543210',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Carlos Martinez',
                'email' => 'carlosmartinez@gmail.com',
                'email_verified_at' => now(),
                'password' => 'contra123',
                'birthday' => '1992-05-10',
                'address' => '456 Elm St',
                'phone' => '9876543210',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Laura Hernandez',
                'email' => 'laurahernandez@yahoo.com',
                'email_verified_at' => now(),
                'password' => 'contra123',
                'birthday' => '1992-05-10',
                'address' => '456 Elm St',
                'phone' => '9876543210',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Maria Rodriguez',
                'email' => 'mariarodriguez@gmail.com',
                'email_verified_at' => now(),
                'password' => 'contra123',
                'birthday' => '1992-05-10',
                'address' => '456 Elm St',
                'phone' => '9876543210',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Pedro Gomez',
                'email' => 'pedrogomez@yahoo.com',
                'email_verified_at' => now(),
                'password' => 'contra123',
                'birthday' => '1992-05-10',
                'address' => '456 Elm St',
                'phone' => '9876543210',
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ],
           
        ];

        DB::table('users')->insert($users);
    }
}
