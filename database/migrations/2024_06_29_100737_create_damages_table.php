<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('damages', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('policy_id');
            $table->unsignedBigInteger('user_id');
            $table->enum('status', ['обработка', 'ликвидација', 'исплатена', 'одбиена']);
            $table->text('description');
            $table->decimal('amount', 10, 2);
            $table->date('date_occurred');
            $table->timestamps();

            $table->foreign('policy_id')->references('id')->on('policies');
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('damages');
    }
};
