import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import Logo_one from '../img/document.png'
import '../CSS/Fairerapport.css'


export default function Fairerapport() {

  const [email , setEmail] = useState(JSON.parse(localStorage.getItem('client_detail')).email); 
  const [error , setError] = useState(''); 
  const [agentMat , setAgentMat] = useState('')
  const [note, setNote ] = useState(0);
  const [critique , setCritique] = useState('')
  const [ok, setOK] = useState('');

  const handleNotePlus = ()=>{
     
     if(note > 19){
      setNote(20)
     } else {
      setNote(note + 1)
     }
  }
  const handleNoteMoins = ()=>{
   
      if(note < 1){
      setNote(0)
     } else {
      setNote(note - 1)
     }
 }

  const checkIfEMpty = ()=>{
    if(  agentMat === '' || critique ===  ''){
      setError('Pas de champs vide ');
    } else if( agentMat !== '' && critique !== '')  {
      setError('');

      fetch(`https://gesperform.online/public/api/notedeclient`, {
        method: 'POST',
        headers: {
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          email:email, 
          note:note, 
          critique:critique, 
          matricule_agent:agentMat
        }) 
       
      })
      .then(response => response.json())
      .then((data) =>{
        if(data.statut === 'OK')
        {setOK(data.statut)}
        //console.log(data)
       
      })


    
    }
  }

  return (
    <div className='contain_rapport'>
           
           <div className='contain_rapport_header'>
               <div className='contain_nav_confirme'> 
                    <Link style={{textDecoration:'none' , color:'black'}}  to='/Acceuilclient' className='retour' >
                        Retour
                    </Link>
            
                </div>  
    
                <div className='contain_img_confirm'>
                    <img  src={Logo_one} className='img_confirm'/>
                </div>  
            </div>

            <div className='contain_secondpart_rapport'>
             
              <div className='contain_form_rapport' >
                                   
                    <input onChange={(e)=>{setAgentMat(e.target.value) }}  className='con_inpone_rapport' type='text' placeholder="Matricule de cet agent"/>

                  
                    <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}} className=''>
                       
                       <button onClick={handleNoteMoins} style={{width:'20%' , fontSize:'20px'}} className='send_rapport'>
                           -
                       </button>  
                         
                       <div style={{width:''}} className=''>
                          {note}
                       </div>  
     
                       <button  onClick={handleNotePlus}  style={{width:'20%', fontSize:'20px'}} className='send_rapport' >
                         +
                       </button>  
   
   
                    </div>  

                    <input onChange={(e)=>{setCritique(e.target.value) }}  className='con_inpone_rapport' type='text' placeholder='Critique'/>

                    <h4 style={{color:'red'}} className='contain_img_confirm'>
                        {error}
                    </h4> 
                    <div style = {{color : "green"}} >{ok}</div>
                    <button   onClick={checkIfEMpty} className='send_rapport' >
                      Soumettre rapport
                    </button>

               </div>
            </div>

    </div>
  )
}
