import React , {useEffect, useState} from 'react'
import Logo_one from '../img/timetable.png'
import { Link } from 'react-router-dom'
import '../CSS/confirmation.css'
import Spinner from './Spinner'



export default function ConfirmerPresence() {
  let [loading, setLoading] = useState(false);
  const [userMatricul , setMatricul] = useState(JSON.parse(localStorage.getItem('employee_detail')).num_matricul)
  const [accMsg , setAccMsg] = useState('Veuillez marquer votre présence')

  const [err , setErr] = useState(null)
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const validerPresence = ()=>{
    setLoading(true) ; 
    setAccMsg('Présence marquée')
    fetch(`https://gesperform.online/public/api/getTimeStamp`, {
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
      setLoading(false) ; 
      console.log(data)
      if(data.statut === 'OK'){
       
        window.location.replace('./acceuilemployee')
        setAccMsg('')
      }
    })
    
  }

  const verifierLocalisation = (distance)=>{
    if (distance < 100){
     // console.log('ok')
      //setAccMsg(distance)
      validerPresence();
    }else{
      console.log('come to office');
      setErr('Rendez vous dans nos bureaux')
      //setAccMsg('Veuillez vous rendre au bureau !');
      setAccMsg('')
    }
   console.log(distance)
  }

  const Calcdistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371000;
    const x = (lon2-lon1) * Math.cos((lat1+lat2)/2);
    const y = (lat2-lat1);
    const d = Math.sqrt(x*x + y*y) * R;
    return d;
  }



   
 const initiateAll = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Obtenir les coordonnées de latitude et longitude
          const { latitude, longitude } = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);

          //console.log(position.coords);
          verifierLocalisation(Calcdistance( longitude, latitude ,/* 6.432124, 2.35092 , */  2.46, 6.3519));
  
        },
        (error) => {
          console.log('Erreur de géolocalisation :', error);
        }
      );

    } else {
      console.log('La géolocalisation n\'est pas disponible dans ce navigateur.');
    }
  }

//autre fonction******************************************************************
  
  useEffect(()=>{
   
    setTimeout(()=>{
      setLoading(false)
    } , 2800)
  }, [])


  return (
    <div className='contain_confirmation'>
       
        <div className='contain_header'>
            <div className='contain_nav_confirm'>
                
              <Link style={{textDecoration:'none' , color:'black'}}  to='/acceuilemployee' className='retour' >
                  Retour
              </Link>
        
            </div>  

            <div className='contain_img_confirm'>
               <img  src={Logo_one} className='img_confirm'/>
            </div>  
        </div>


        <div className='contain_my_second_part'>
          {
            loading?  
            <Spinner
          
            />
            :
            <div className='' >
                <h4 className=''>
                  {accMsg}
                  {err}
                </h4>
                <div  style={{display:'flex', alignItems:'center', justifyContent:'center' , width:'100%'}}> <Link  style={{textDecoration:'none' , color:'black' , width:'70%'}} className='retour' to='' onClick={initiateAll}>Valider</Link> </div>
            </div>

         }
        </div>

      

    </div>
  )
}
