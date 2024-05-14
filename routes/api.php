<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('/data', function(Request $request){
    // $json = Storage::json(base_path('resources/data/data.json'));
    // echo $json;
    $json = Storage::get('data.json');
    $decoded = json_decode($json, true);
    // echo $decoded;
    return Response::json($decoded);
//  return Storage::json('data.json');
});


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
