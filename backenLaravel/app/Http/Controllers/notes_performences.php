<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
Use Illuminate\Http\Response; 
use Illuminate\Support\Facades\DB;
Use Carbon\Carbon;

class notes_performences extends Controller
{

    //create id_note 

    public function createNoteId(){
        $random = random_int(0, 9000000); 
        $token = 'note_'.$random;
        return $token;
    }   
    

    // insert notes perf

    public function insertNotes(Request $request){


        $myNoteId = $this -> createNoteId();
      
        $userfilled =  $request -> validate([
           
            'num_matricul' => 'required|string',
            'statut_ponctualite' => 'required|string',
            'statut_assiduite' => 'required|string',
            'statut_creativite' => 'required|string',
            'statut_conduite' => 'required|string',
            'commentaire' => 'required|string',
        ]);

        $note = $request['statut_ponctualite'] + $request['statut_assiduite'] + $request['statut_creativite'] +  $request['statut_conduite'];

        //notes

        DB::table('notes')->insert([
          
            [
                'id_employee' => $request['num_matricul'], 
                'id_note' => $myNoteId, 
                'statut_ponc' => $request['statut_ponctualite'],
                'statut_assiduite' => $request['statut_assiduite'],
                'statut_creat' => $request['statut_creativite'],
                'statut_conduite' => $request['statut_conduite'],

            ],    

        ]);


        DB::table('performences')->insert([
          
            [
                'id_note_ref' => $myNoteId, 
                'note' => $note, 
                'date' =>  Carbon::now() -> toDateTimeString(),
                'commentaire' => $request['commentaire'],
            ],    

        ]);

        $response = [
            'statut'  => 'OK',
           
        ];

        return response(
            $response , 201
        );

    }

    




    public function getNotes(Request $request){
      
        $userfilled =  $request -> validate([
           
            'num_matricul' => 'required',

        ]);

      
        $checkUserNote =  DB::table('notes')
        ->where('id_employee', $request['num_matricul'])
        ->get();
            
        $response = [
            'statut'  => 'OK',
            'notes'  => $checkUserNote,
        ];

        return response(
            $response , 200
        );

        

    }


    //peut voir une performence pour une note donnne


    public function getPerformences(Request $request){
            
        $userfilled =  $request -> validate([
           
            'id_note' => 'required|string',

        ]);

        $checkperformence =  DB::table('performences')
        ->where('id_note_ref', $request['id_note'])
        ->get();

        $response = [
            'statut'  => 'OK',
            'performences'  => $checkperformence,
        ];

        return response(
            $response , 200
        );
            
    }

    //note de client 

    public function noteDeClient(Request $request){
       
        $userfilled =  $request -> validate([
           
            'email' => 'required',
            'note' => 'required',
            'matricule_agent' => 'required',
            'critique' => 'required',
          
        ]);

        DB::table('note_client')->insert([
          
            [
                'email_client' => $request['email'], 
                'note' => $request['note'], 
                'critique' => $request['critique'],
                'id_employee' => $request['matricule_agent'],
            ],    

        ]);

        $response = [
            'statut'  => 'OK',
        ];

        return response(
            $response , 200
        );

    }

    public function noteDuSuperviseur(Request $request){

        $userfilled =  $request -> validate([
           
            'num_mat' => 'required',
            'note' => 'required',
            'critique' => 'required',
          
        ]);

        DB::table('note_superviseur')->insert([

            [
                'num_mat'=>$request['num_mat'],
                'note'=>$request['note'],
                'critique'=>$request['critique']

            ]
        ]);
         $response = [
            'statut'  => 'OK',
        ];
    
        return response(
            $response , 200
        );
    
    }

    // get Best employee

    public function getBestEmployee(){
       
 
        $checkperformence =  DB::table('performences')
        ->where('note', '>', 15)
        ->get();
       
        $response = [
            'statut'  => 'OK',
            'notes'  => $checkperformence,
        ];
    
       return response(
           $response , 200
        ); 
           
    }




}
