<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PolicyController;
use App\Http\Controllers\DamagesController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
// Route::middleware('auth:api')->group(function () {

    Route::get('/invoices', [InvoiceController::class, 'index']);
    Route::get('/invoices/{id}', [InvoiceController::class, 'show'])->middleware('auth:api');
    Route::put('/invoices/{id}', [InvoiceController::class, 'update']);
    Route::delete('/invoices/{id}', [InvoiceController::class, 'destroy']); // soft delete

    Route::get('/policies', [PolicyController::class, 'index']);
    Route::get('/policies/{id}', [PolicyController::class, 'show']); // request the id of the user
    Route::put('/policies/{id}', [PolicyController::class, 'update']);
    Route::delete('/policies/{id}', [PolicyController::class, 'destroy']); // soft delete

    Route::get('/damages', [DamagesController::class, 'index']);
    Route::get('/damages/{id}', [DamagesController::class, 'show']); // request the id of the user
    Route::put('/damages/{id}', [DamagesController::class, 'update']);
    Route::delete('/damages/{id}', [DamagesController::class, 'destroy']); // soft delete
// });

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Route::middleware('auth:api')->group(function () {
Route::get('/me', [AuthController::class, 'me']);
Route::post('/logout', [AuthController::class, 'logout']);
Route::post('/refresh', [AuthController::class, 'refresh']);
// });

// Route::middleware('auth:api')->group(function () {
Route::get('/users', [UserController::class, 'index']);
Route::get('/users/{id}', [UserController::class, 'show']);
Route::post('/users', [UserController::class, 'store']);
Route::put('/users/{id}', [UserController::class, 'update']);
Route::delete('/users/{id}', [UserController::class, 'destroy']);
// });

// require __DIR__ . '/auth.php';
