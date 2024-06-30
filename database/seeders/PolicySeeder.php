<?php

namespace Database\Seeders;

use App\Models\Policy;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class PolicySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 0; $i <= 3; $i++) {Policy::create(['user_id' => fake()->numberBetween(1, 5),'policy_number' => 'PO-12345678','policy_type'=>'car','start_date' => fake()->date(),'end_date' => fake()->date(),]);

            Policy::create([
                'user_id' => fake()->numberBetween(1, 5),
                'policy_number' => 'PO-12345678',
                'policy_type'=>'home',
                'start_date' => fake()->date(),
                'end_date' => fake()->date(),
            ]);

            Policy::create([
                'user_id' => fake()->numberBetween(1, 5),
                'policy_number' => 'PO-12345678',
                'policy_type'=>'bicycle',
                'start_date' => fake()->date(),
                'end_date' => fake()->date(),
            ]);
        }
    }
}
