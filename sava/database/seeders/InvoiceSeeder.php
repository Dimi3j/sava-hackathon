<?php

namespace Database\Seeders;

use App\Models\Invoice;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class InvoiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 0; $i <= 10; $i++) {
            Invoice::create(['policy_id' => fake()->numberBetween(1, 10), 'amount' => fake()->randomFloat(2, 0, 9999.99), 'issue_date' => fake()->date(),]);
        }
    }
}
