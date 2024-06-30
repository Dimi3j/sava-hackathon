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
        for ($i = 0; $i <= 5; $i++) {
            User::create(['name' => fake()->name(), 'phone' => fake()->numberBetween(100000000, 999999999), 'email' => fake()->email(), 'password' => 12345678,]);
        }
    }
}
