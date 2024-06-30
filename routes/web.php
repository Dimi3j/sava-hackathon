<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

Route::get('/admin/profiles', [AdminController::class, 'profiles'])->name('admin.profiles');
Route::get('/admin/policies', [AdminController::class, 'policies'])->name('admin.policies');
Route::get('/admin/damages', [AdminController::class, 'damages'])->name('admin.damages');
Route::get('/admin/invoices', [AdminController::class, 'invoices'])->name('admin.invoices');
