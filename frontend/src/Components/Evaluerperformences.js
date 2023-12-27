import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Logo_one from '../img/document.png'
import '../CSS/Fairerapport.css'




export default function Evaluerperformence() {
  const [typeofuser, setTypeUser] = useState('');
  const [num_matricule, setNum] = useState('');
  const [assiduite, setAssiduite] = useState('');
  const [conduite, setConduite] = useState('');
  const [ponctualite, setPonctualite] = useState('');
  const [creativite, setCreativite] = useState('');
  const [comments, setComment] = useState('');
  const [error , setError ] = useState('')


    const insertNotes = ()=>{
        

      fetch(`https://gesperform.online/public/api/insertnotesperformences`, {
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        num_matricul:num_matricule, 
        statut_ponctualite:ponctualite, 
        statut_creativite:creativite,
        statut_assiduite:assiduite,
        statut_conduite:conduite,
        commentaire:comments,
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

    const checkIfEmpty = ()=>{
      if(creativite === '' || ponctualite === '' || conduite === '' || assiduite === '' || num_matricule  === '' ){
        setError('Aucun champs vide')
      } else if(conduite !== '' && ponctualite !== '' && assiduite !== '' && creativite !== '' && num_matricule !== '') {
         setError('');
         insertNotes()
      }
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
                      
                    />

                    <input  className='con_inpone_rapport' type='text' placeholder=" Statut ponctualité"
                 
                     
                      onChange={(e)=>{setPonctualite(e.target.value)}}
                      
                      
                    />

                   

                    <input className='con_inpone_rapport' type='text' placeholder='Statut conduite'
                      
                     onChange={(e)=>{setConduite(e.target.value)}}
                  
                    />

                    <input className='con_inpone_rapport' type='text' placeholder='Statut assiduité'
                      
                     onChange={(e)=>{setAssiduite(e.target.value)}}
                  
                    />

                    <input className='con_inpone_rapport' type='text' placeholder='Statut créativité'
                      
                     onChange={(e)=>{setCreativite(e.target.value)}}
                  
                    />

                    <input className='con_inpone_rapport' type='text' placeholder='Commentaire'
                      
                     onChange={(e)=>{setComment(e.target.value)}}
                  
                    />

                  <div style={{color:'red'}}>
                     {
                       error
                     }

                  </div>

                    <button onClick={checkIfEmpty} className='send_rapport' >
                     Ajouter performences
                    </button>

               </div>
            </div>

    </div>
  )
}
