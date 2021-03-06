<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('auth.login');
});

Auth::routes();

// Route::get('/home', function() {
//     return view('home');
// });
// Route::get('/cadastroProcessos', function() {
//     return view('cadastro_processos');
// });

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/cadastroProcessos', [App\Http\Controllers\ProcessoController::class, 'create'])->name('cadastroProcessos');
Route::get('/painelProcessos', [App\Http\Controllers\ProcessoController::class, 'show'])->name('painelProcessos');
// Route::get('/pesquisarProcesso', [App\Http\Controllers\ProcessoController::class, 'store'])->name('pesquisarProcesso');
// Route::get('/example', [App\Http\Controllers\ProcessoController::class, 'create'])->name('example');

//Rota de retorno API para o JS
Route::get('/getClasses/{tipo_item}', [App\Http\Controllers\ProcessoController::class, 'getItemProcessual']);