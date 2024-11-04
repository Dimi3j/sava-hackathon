<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\UserController as WebUserController;
use App\Http\Controllers\DamageController;
use App\Http\Controllers\DamagesController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\PolicyController;

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

Route::get('/admin', [AdminController::class, 'dashboard'])->name('admin.dashboard');
Route::get('/admin/profiles', [AdminController::class, 'profiles'])->name('admin.profiles');
Route::get('/admin/policies', [AdminController::class, 'policies'])->name('admin.policies');
Route::get('/admin/damages', [AdminController::class, 'damages'])->name('admin.damages');
Route::get('/admin/invoices', [AdminController::class, 'invoices'])->name('admin.invoices');

// Route::resource('users', [UserController::class]);
// Route::resource('policies', [PolicyController::class]);
// Route::resource('damages', [DamagesController::class]);
// Route::resource('invoices', [InvoiceController::class]);

Route::get('/admin/users/{id}/edit', [WebUserController::class, 'edit'])->name('users.edit');
Route::put('/admin/users/update/{id}', [WebUserController::class, 'update'])->name('users.update');
Route::put('/admin/users/{id}', [WebUserController::class, 'usersIndex'])->name('users.index');
Route::delete('/admin/users/{id}', [WebUserController::class, 'destroy'])->name('users.destroy');
