import React from 'react'
import { Link } from 'react-router-dom'
import Logo_one from '../img/document.png'
import '../CSS/Fairerapport.css'
import { useState } from 'react'


export default function Confirmationnote() {
  const [num_mat, setNumMat]=useState(null)
  const [note, setNote]=useState(null)
  const [critique, setCritique]=useState(null)
  const [confirmation, setConfirmation]=useState(null)

  const insertNoteSuperviseur =()=>{

    fetch(`https://gesperform.online/public/api/notedesuperviseur`, {
       method: 'POST',
       headers: {
         'Accept':'application/json',
         'Content-Type':'application/json',
         
       },
       body:JSON.stringify({
          num_mat:num_mat,
          note:note,
          critique:critique
        }),
      
     })
     .then(response => response.json())
     .then((data) =>{
     console.log(data)

     if(data.statut ==="OK"){
      setConfirmation("Done")
     }
     })
  
   //  console.log(file)
  }

  return (
    <div className='contain_rapport'>
           
           <div className='contain_rapport_header'>
               <div className='contain_nav_confirme'> 
                    <Link style={{textDecoration:'none' , color:'black'}}  to='/superviseur' className='retour' >
                        Retour
                    </Link>
            
                </div>  
    
                <div className='contain_img_confirm'>
                    <img  src={Logo_one} className='img_confirm'/>
                </div>  
            </div>

            <div className='contain_secondpart_rapport'>
             
              <div className='contain_form_rapport' >
                                   
                    <input onChange={(e)=>{setNumMat(e.target.value)}} className='con_inpone_rapport' type='text' placeholder="Email ou matricul de cet agent"/>

                    <input onChange={(e)=>{setNote(e.target.value)}} className='con_inpone_rapport' type='text' placeholder="Veuillez noter le service sur 10"/>

                    <input onChange={(e)=>{setCritique(e.target.value)}} className='con_inpone_rapport' type='text' placeholder='Critique'/>
                    
                    <h4 style = {{color : "green"}}>{confirmation}</h4>

                    <button onClick={insertNoteSuperviseur} className='send_rapport' >
                      Valider
                    </button>

               </div>
            </div>

    </div>
  )
}
