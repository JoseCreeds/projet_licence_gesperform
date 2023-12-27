<?php


namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
Use Illuminate\Http\Response; 
use Illuminate\Support\Facades\DB;
Use Illuminate\Support\Facades\Hash; 


class connectuserbenincontrol extends Controller
{
    //
 
    public function insertUser(Request $request){
       
       $filled = $request -> validate([
            'num_matricul' => 'required',
            'password' => 'required',
            'typeofuser' => 'required',
        ]);

       $checkIfUser =  DB::table('utilisateur')
        ->where('num_matricul', $request['num_matricul'])
        ->get();

        if(sizeof($checkIfUser) == 0 ){
          
            DB::table('utilisateur')->insert([
          
                [
                    'num_matricul' => $request['num_matricul'], 
                    'nom' => 'empty', //insert by user
                    'email' =>'empty',
                    'prenom' => 'empty',//insert by user
                    'lieu_naissance' => 'empty',
                    'date_naissance' =>'empty',
                    'situation_matri' => 'empty',
                    'nombre_enfant' => 0,
                    'date_recrutement' => 'empty',
                    'piece_join_name' => 'empty',
                     'numero_compte'  => 'empty',
                     'reference_banque'  => 'empty',
                     'reference_contrat'  => 'empty',
                     'telephone'  => 'empty',//insert by user
                     'password'  => $request['password'],
                     'type_utilisateur'  => $request['typeofuser'],

                ],    
    
            ]);
    
            $response = [
                'statut'  => 'OK',
            ];
    
            return response(
                $response , 201
            );
    
        } else {
              
            $response = [
                'statut'  => 'User already registred',
            ];
    
            return response(
                $response , 201
            );
        } 

     

    }


    //Connect users

    public function connectMyUsers(Request $request){
      
        $filled = $request -> validate([
            'num_matricul' => 'required|string',
            'password' => 'required|string',
        ]);


        $checkNumMatri =  DB::table('utilisateur')
        ->where('num_matricul', $request['num_matricul'])
        ->where('password', $request['password'])
        ->get();

        if(sizeof($checkNumMatri) !== 0 ){
          
            $response = [
                'statut'  => 'OK',
                'user' => $checkNumMatri,
            ];
    
            return response(
                $response , 201
            );
        } else {
          
            $response = [
                'statut'  => 'Bad credentials',
            ];
    
            return response(
                $response , 405
            );
        }


    }

    //Modify user password



    public function modifyData(Request $request){
       
        $filled = $request -> validate([
            'num_matricul' => 'required',
            'new_password' => 'required|string',
        ]);

        $checkNumMatri =  DB::table('utilisateur')
        ->where('num_matricul', $request['num_matricul'])
        ->get();


        if(sizeof($checkNumMatri) !== 0){
          
            $response = [
                'statut'  => 'Data changed',
                'user' => $checkNumMatri,
            ];

            $update = DB::table('utilisateur')
            ->where('num_matricul', $request['num_matricul'])
            ->update([
          
                'password' => $request['new_password'],    
    
            ]);
    
            return response(
                $response , 201
            );
        }


    }
}
