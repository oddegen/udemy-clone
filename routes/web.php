<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SearchController;
use App\Models\Course;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $courses = Course::with([
        'creator',
        'students',
        'category',
        'requirements',
        'sections',
        'rating',
        'for'
    ])
    ->withAvg('rating', 'rating')
    ->withCount('rating')
    ->orderByDesc ('rating_avg_rating')
    ->take(20)
    ->get();
    
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'courses' => $courses,
    ]);
});

Route::get('/categories', [CategoryController::class, 'index']);

Route::get('/search',[SearchController::class,'search'])->name('search');


Route::get('/course', function(){
    return Inertia::render('CoursePage',[]);
});

Route::get('/cart', function(){
    return Inertia::render('Cart',[]);
});

Route::get('/teaching', function(){
    return Inertia::render('Teaching',[]);
});

Route::get('/learn', function(){
    return Inertia::render('Learn',[]);
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


require __DIR__.'/auth.php';
