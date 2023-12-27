import React , {useState} from 'react'
import Ranking from '../img/ranking.png'

function Performencestemplate({Note}) {

    const [generalNote , setGeneralNote] = useState(null)


    const getPerf = ()=>{
  
        fetch(`https://gesperform.online/public/api/getnotesperformence`, {
          method: 'POST',
          headers: {
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
          body:JSON.stringify({
            id_note: Note.id_note , 
          }) 
         
        })
        .then(response => response.json())
        .then((data) =>{
          console.log(data)
          setGeneralNote(data.performences[0].note);
        })
        
    }
    

  return (
    <div className='my_performences'>
         <div className='row1'>
              
              <div className='perf_prime'>
                <img  src={Ranking} className='img_confirm_perf2'/>
              </div> 

              <div className='perf_one'>
                  <h4 className=''>
                     Vos performances du dernier trimestre de 2022 
                  </h4>
                  <h4 className=''>
                      Assiduité : {Note.statut_assiduite}
                  </h4>
                  <h4 className=''>
                      Conduite :  {Note.statut_conduite}
                  </h4>
                  <h4 className=''>
                      Creativité : {Note.statut_creat}
                  </h4>
                  <h4 className=''>
                
                      Ponctualité : {Note.statut_ponc}
                  </h4>

                   <button style={{width:'70%',backgroundColor:'rgb(70, 118, 206)', border:'none' , borderRadius:'10px'}} className='' onClick={getPerf} >
                
                     Performences globale de cette année 
                  </button>
              </div>

              <div style={{fontSize:'17px', color:'red', fontWeight:'bold'}} className='perf_prime'>
                {generalNote}
              </div> 

          </div>
    </div>
  )
}

export default Performencestemplate