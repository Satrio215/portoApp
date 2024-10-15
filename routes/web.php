<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PengalamanController;
use App\Http\Controllers\ProjekController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    //Paengalaman
    Route::get('/pengalamans', [PengalamanController::class, 'index'])->name('pengalamans.index');
    Route::get('/pengalamans/create', [PengalamanController::class, 'create'])->name('pengalamans.create');
    Route::post('/pengalamans', [PengalamanController::class, 'store'])->name('pengalamans.store');
    Route::get('/pengalamans/edit/{id}', [PengalamanController::class, 'edit'])->name('pengalamans.edit');
    Route::put('/pengalamans/{id}', [PengalamanController::class, 'update'])->name('pengalamans.update');
    Route::delete('/pengalamans/{id}', [PengalamanController::class, 'destroy'])->name('pengalamans.destroy');

    //Projek
    Route::get('/projeks', [ProjekController::class, 'index'])->name('projeks.index');

});



require __DIR__.'/auth.php';
