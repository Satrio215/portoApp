<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PengalamanController;
use App\Http\Controllers\ProjekController;
use App\Models\Pengalaman;
use App\Models\projek;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $pengalamans = Pengalaman::latest()->get();
    $projeks = Projek::latest()->get()->map(function ($projek) {
        $projek->gambar = Storage::url($projek->gambar);
        return $projek;
    });

    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'pengalamans' => $pengalamans,
        'projeks' => $projeks,
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
    Route::get('/projeks/create', [ProjekController::class, 'create'])->name('projeks.create');
    Route::post('/projeks', [ProjekController::class, 'store'])->name('projeks.store');
    Route::get('/projeks/edit/{id}', [ProjekController::class, 'edit'])->name('projeks.edit');
    Route::put('/projeks/{id}', [ProjekController::class, 'update'])->name('projeks.update');
    Route::delete('/projeks/{id}', [ProjekController::class, 'destroy'])->name('projeks.destroy');
});





require __DIR__.'/auth.php';
