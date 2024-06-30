<?php

namespace Database\Seeders;

use App\Models\Damage;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DamageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 0; $i <= 2; $i++) {

            Damage::create([
                'policy_id' => fake()->numberBetween(1, 5),
                'user_id' => fake()->numberBetween(1, 5),
                'status' => 'обработка',
                'description' => fake()->text(),
                'amount' => fake()->randomFloat(2, 0, 9999.99),
                'date_occurred' => fake()->date(),
            ]);

            Damage::create([
                'policy_id' => fake()->numberBetween(1, 5),
                'user_id' => fake()->numberBetween(1, 5),
                'status' => 'ликвидација',
                'description' => fake()->text(),
                'amount' => fake()->randomFloat(2, 0, 9999.99),
                'date_occurred' => fake()->date(),
            ]);

            Damage::create([
                'policy_id' => fake()->numberBetween(1, 5),
                'user_id' => fake()->numberBetween(1, 5),
                'status' => 'одбиена',
                'description' => fake()->text(),
                'amount' => fake()->randomFloat(2, 0, 9999.99),
                'date_occurred' => fake()->date(),
            ]);
        }
    }
}
