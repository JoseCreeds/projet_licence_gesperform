import React , {useState , useEffect} from 'react'
import '../CSS/performences.css'
import Logo from '../img/kpi.png'
import Ranking from '../img/ranking.png'
import { Link } from 'react-router-dom'
import Performencestemplate from './Performencestemplate'

export default function Mesperformences() {

  const [userMatricul , setMatricul] = useState(JSON.parse(localStorage.getItem('employee_detail')).num_matricul)
  const [notes , setNotes] = useState([])
 
 
  const getNotes = ()=>{
  
    fetch(`https://gesperform.online/public/api/getnotes`, {
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        num_matricul: userMatricul , 
      }) 
     
    })
    .then(response => response.json())
    .then((data) =>{
      console.log(data)
      setNotes(data.notes);
    })
    
  }


  useEffect(()=>{
    getNotes()
  } , [])



  return (
    <div className='contain_performences'>
      
        <div className='contain_header_perf'>
           <div className='contain_mynav'> 
             <Link style={{textDecoration:'none' , color:'black'}}  to='/acceuilemployee' className='retour_perf' >
                Retour
             </Link>
           </div>  
           
            <h4 style={{color:'white'}} className=''>
               Vos performences
            </h4>
    
            <div className='contain_img_confirm'>
               <img  src={Logo} className='img_confirm_perf'/>
            </div>  
        </div>

        <div className='my_performences'>
           
           {
              notes.map( note =>  <Performencestemplate
                      key={note.id_note}
                      Note={note}
              /> )
           }
              

        </div>

    </div>
  )
}
