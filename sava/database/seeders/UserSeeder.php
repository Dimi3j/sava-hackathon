<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 0; $i <= 10; $i++) {
            User::create(['name' => fake()->sentence(rand(3, 6)), 'phone_number' => fake()->numberBetween(100000000, 999999999), 'email' => fake()->email(), 'password' => 12345678,]);
        }
    }
}
