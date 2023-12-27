import React ,{useState, useEffect} from 'react'
import Userlog from '../img/user.png'
import '../CSS/Inscription.css'
import Logo_one from '../img/music.png'

export default function Login() {

    const [displayState , setDisplayState] = useState('none'); 
    const [typeOfUser , setTypeOfUser] = useState('')

    const handleVisibility = ()=>{
        if(typeOfUser === 'artiste'){
            setDisplayState('flex');
        } else {
            setDisplayState('none');
        }
    }

    useEffect(()=>{
        handleVisibility()
    }, [typeOfUser])

    


  return (

    <div className='contain_inscription'>
      
      <div className='contain_firstpart_insc' >
         
          <div className='containlogimg_insc'>
            <img src={Userlog} className='logimg_insc' /> 
          </div>

          <h2 className=''>
             S'inscrire  
          </h2>
          
          <h3 className=''>
             Exploitez notre plateforme et faites valoir la musique béninoise
          </h3>

      </div>

      <div className='contain_secondpart_insc' >
        
       
       
        <div className='contain_form_insc' >

            <input className='con_inpone_insc' type='text' placeholder='Veuillez entrer votre nom complet'/>
            
           
            <input className='con_inpone_insc' type='email' placeholder='Veuillez entrer votre numéro de téléphone'/>

            <div className='contain_sexe_insc'>  

             
              <select className='select_me_insc' >
                        
                <option value={'femme'}> Femme</option>
                <option value={'homme'}> Hommme</option>
                        

              </select>
            </div>

            <div className='contain_sexe_insc'>  
              <select onChange={(e)=>{setTypeOfUser(e.target.value)}} className='select_me_insc' >
                <option value={'auditeur'}> Auditeur</option>      
                <option value={'artiste'}> Artiste</option>
              
                        

              </select>
            </div>


            <div style={{display:displayState}} className='only_for_artist_insc'>  

               <input className='con_inpone_insc' type='password' placeholder="Veuillez entrer votre pseudo d'artiste"/>
               <input className='con_inpone_insc' type='password' placeholder="Veuillez entrer votre régistre musical"/>

            </div>

            <input className='con_inpone_insc' type='password' placeholder='Veuillez entrer votre mot de passe'/>

            <button className='connect_me_insc' >
                S'inscrire
            </button>

           

            <a style={{textDecoration:'none' , color:' rgb(212, 166, 14 )'}} href='#'> Se connecter </a>

        </div>


        <div className='contain_img_insc' >
          <img src={Logo_one} className={'logoOne'}/>
        </div>
  
  

      </div>


    </div>
  )
}
