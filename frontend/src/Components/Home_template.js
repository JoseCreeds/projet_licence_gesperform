import React , {useState , useEffect} from 'react'
import Meeting from '../img/meeting.png'
import '../CSS/Home_template.css'
import Musica from '../img/musica.png'
import Live from '../img/instagram-live.png'
import Performancetemplate from './Performencestemplate'
import Ranking from '../img/ranking.png'


export default function () {

  const [performance , setPerformance] = useState([])
  const getBestEmployee = () =>{
  fetch(`https://gesperform.online/public/api/getbestemployee`, {
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      //body:JSON.stringify({
        //num_matricul: userMatricul , 
      //}) 
     
    })
    .then(response => response.json())
    .then((data) =>{
      console.log(data)
      setPerformance(data.notes)
    })
  }



 useEffect(()=>{
    getBestEmployee()
 } , [])

 return (

    
  <div className='contain_home_template'>

<div className='contain_home_template_one'>
            
            <div className='contain_img'>
              <img  src={Meeting} className='home_img'/>
            </div>
              
            <div className='contain_desc'>
                
                <h3 className=''>
                   Pléniaire sur les différentes performances du dernier trimestre de 2022 
                </h3>
                <a href="#" style={{textDecoration:'none' , color:' rgb(212, 166, 14 )'}} className=''>
                   Parcourez les meilleures  performences afin de viser l'excellence
                </a>

            </div>
            
        </div>

        <div className='separator'>
        
        </div>
     
    <div className='my_performences'>
           
      {
        performance.map( eachPerf =>  <div style={{display:"flex", justifyContent:"space-around", alignItems:"center", marginTop:" ", marginBottom:"7%"}}>
            
                
    <div className='my_performences'>
         <div className='row1'>
              
              <div className='perf_prime'>
                <img  src={Ranking} className='img_confirm_perf2'/>
              </div> 

              <div className='perf_one'>
                  <h4 className=''>
                     Matricul de l'employé : {eachPerf.id}
                  </h4>
                  <h4 className=''>
                      Note de l'employé au cours du trimestre : {eachPerf.note}
                  </h4>
                  <h4 className=''>
                      Commentaire
                  </h4>
              </div>

          </div>
    </div>

          </div>
          
        )
      }
              
    </div>
  </div>
 )
}
