<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
Use Illuminate\Http\Response; 
use Illuminate\Support\Facades\DB;
Use Illuminate\Support\Facades\Hash; 
Use Carbon\Carbon; 

class handleTokenn extends Controller
{
    //
    Public function handleToken (Request $request){

    
      
        $userfilled =  $request -> validate([
            'num_matricul' => 'required',
            'token' => 'required',

        ]);

      
        $checkUserNote =  DB::table('token')
        ->where('num_mat', $request['num_matricul'])
        ->get();
           
        if(sizeof($checkUserNote) == 0 ){
            DB::table('token') -> insert([
                 'num_mat' => $request['num_matricul'],
                  'token_value' => $request['token']
            ]) ;
         }else {
            DB::table('token')
              ->where('num_mat',    $request['num_matricul'])
              ->update([
                  'num_mat' => $request['num_matricul'],
                  'token_value' => $request['token' ] ,
              ]);
          
          }

        $response = [
            'statut'  => 'OK',
            'notes'  => $checkUserNote,
        ];
 
        return response(
            $response , 200
        );

    }

    Public function getUserToken (Request $request){
        $userfilled =  $request -> validate([
            'num_matricul' => 'required',

        ]);

      
        $checkUserNote =  DB::table('token')
        ->where('num_mat', $request['num_matricul'])
        ->get();

        
         $response = [
             'statut'  => 'OK',
             'notes'  => $checkUserNote,
          ];
     
         return response(
             $response , 200
         );
        
    }
}
