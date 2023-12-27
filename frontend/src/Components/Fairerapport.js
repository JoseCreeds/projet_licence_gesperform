import React  from 'react'
import { Link } from 'react-router-dom'
import Logo_one from '../img/document.png'
import '../CSS/Fairerapport.css'
import { useState } from 'react'


export default function Fairerapport() {
  const [userMatricul , setMatricul] = useState(JSON.parse(localStorage.getItem('employee_detail')).num_matricul)
  const [titre , setTitre] = useState('')
  const [file , setFile ] = useState(null)
  const [done, setDone] = useState('');
  


  const faireUnRapport =()=>{

    const my_file = new FormData();
    my_file.append('image', file)
    my_file.append('num_matricule', userMatricul)
    my_file.append('titre', titre )
    

   fetch(`https://gesperform.online/public/api/insererrapport`, {
      method: 'POST',
      headers: {
        'Accept':'application/json',
        
      },
      body:my_file,
     
    })
    .then(response => response.json())
    .then((data) =>{
      //console.log(data)
      if(data.statut === 'Done')
      {setDone(data.statut)}
    })
 
  //  console.log(file)
  }

  return (
    <div className='contain_rapport'>
           
           <div className='contain_rapport_header'>
               <div className='contain_nav_confirme'> 
                    <Link style={{textDecoration:'none' , color:'black'}}  to='/acceuilemployee' className='retour' >
                        Retour
                    </Link>
            
                </div>  
    
                <div className='contain_img_confirm'>
                    <img  src={Logo_one} className='img_confirm'/>
                </div>  
            </div>

            <div className='contain_secondpart_rapport'>
             
              <div className='contain_form_rapport' >

                    <form encType='multipart/form-data'>
                          <input    onChange={(e)=>{setTitre(e.target.value) }} className='con_inpone_rapport' type='text' placeholder='Veuillez entrer le titre'/>
                          <input    onChange={(e)=>{setFile(e.target.files[0]) }} className='con_inpone_rapport' type='file' placeholder='Veuillez uploader le fichier'/>
                    </form>
                    <div style = {{color : "green"}} >{done}</div>
                    <button onClick={faireUnRapport} className='send_rapport' >
                      Soumettre rapport
                    </button>

               </div>
            </div>

    </div>
  )
}
