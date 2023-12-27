<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\authController;
use App\Http\Controllers\rdvConfirmed;
use App\Http\Controllers\connectuserbenincontrol;
use App\Http\Controllers\faireRapport;
use App\Http\Controllers\marquerPresence;
use App\Http\Controllers\notes_performences;
use App\Http\Controllers\handleTokenn;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware(['cors'])->group(function () {  
    Route::post('/registeruser' , [authController::class , 'register']);
    Route::post('/handletoken' , [handleTokenn::class , 'handleToken']);
    Route::post('/getusertoken' , [handleTokenn::class , 'getUserToken']);
    Route::post('/insertbenincontroluser' , [connectuserbenincontrol::class , 'insertUser']);
    Route::post('/connectbenincontroluser' , [connectuserbenincontrol::class , 'connectMyUsers']);
    Route::post('/modifydata' , [connectuserbenincontrol::class , 'modifyData']);
    Route::post('/insererrapport' , [faireRapport::class , 'insertRapport']);
    Route::post('/getrapport' , [faireRapport::class , 'getRapportName']);
    Route::post('/getTimeStamp' , [marquerPresence::class , 'getTimeStamp']);
    Route::post('/getnotes' , [notes_performences::class , 'getNotes']);
    Route::post('/getbestemployee' , [notes_performences::class , 'getBestEmployee']);
    Route::post('/insertnotesperformences' , [notes_performences::class , 'insertNotes']);
    Route::post('/getnotesperformence' , [notes_performences::class , 'getPerformences']);
    Route::post('/notedeclient' , [notes_performences::class , 'noteDeClient']);
    Route::post('/notedesuperviseur' , [notes_performences::class , 'noteDuSuperviseur']);


});


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

