import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Logo_one from '../img/document.png'
import '../CSS/Fairerapport.css'




export default function Confirmationnote() {
  const [typeofuser, setTypeUser] = useState('');
  const [num_matricule, setNum] = useState('');
  const [pwd, setPwd] = useState('');
  const [error , setError ] = useState('')



    const insertUser = ()=>{
       

   fetch(`https://gesperform.online/public/api/insertbenincontroluser`, {
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        num_matricul:num_matricule, 
        typeofuser:typeofuser, 
        password:pwd, 

      }),
     
      })
        .then(response => response.json())
        .then((data) =>{
          console.log(data)
          
          if(data.errors !== undefined){
            setError('Aucun champs vide ')
          } else {
            setError(data.statut)
          }

        })
 
    }

  return (
    <div className='contain_rapport'>
           
           <div className='contain_rapport_header'>
               <div className='contain_nav_confirme'> 
                    <Link style={{textDecoration:'none' , color:'black'}}  to='/admindashboard' className='retour' >
                        Retour
                    </Link>
            
                </div>  
    
                <div className='contain_img_confirm'>
                    <img  src={Logo_one} className='img_confirm'/>
                </div>  
            </div>

            <div className='contain_secondpart_rapport'>
             
              <div className='contain_form_rapport' >
                                   
                  
                  
                    <input  className='con_inpone_rapport' type='text' placeholder=" Matricul de cet agent"
                 
                     
                      onChange={(e)=>{setNum(e.target.value)}}
                      name="Matricule"
                      label="Matricule"
                      
                    />

                    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'100%'}}>  
                        <select className='con_inpone_rapport'
                        
                             onChange={(e)=>{setTypeUser(e.target.value)}}
                             name="type_of_user"
                             label="MType d'utilisateur"
                         >
                        
                          <option value={''}> Type d'utilisateur</option>  
                          <option value={'employe'}> Employé</option>      
                          <option value={'client'}> Client</option>
                          <option value={'admin'}> Administrateur</option>
                          <option value={'superviseur'}> Superviseur</option>
                        
                                  

                        </select>
                    </div>

                    <input className='con_inpone_rapport' type='text' placeholder='Mot de passe'
                      
                     onChange={(e)=>{setPwd(e.target.value)}}
                     name="mot_de_passe"
                     label="Mot de passe"
                    />

                  <div style={{color:'red'}}>
                     {
                       error
                     }

                  </div>

                    <button onClick={insertUser} className='send_rapport' >
                      Inscrire un utilisateur
                    </button>

               </div>
            </div>

    </div>
  )
}
