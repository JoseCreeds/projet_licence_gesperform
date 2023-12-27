import React  from 'react'
import { Link } from 'react-router-dom'
import Logo_one from '../img/document.png'
import '../CSS/Fairerapport.css'
import { useState, useEffect } from 'react'


export default function Voirrapport() {
  const [userMatricul , setMatricul] = useState(JSON.parse(localStorage.getItem('employee_detail')).num_matricul)
  const [data , setData] = useState([])


  const getRapport =()=>{

   fetch(`https://gesperform.online/public/api/getrapport`, {
      method: 'POST',
      headers: {
        'Accept':'application/json',
        
      },
      //body:my_file,
     
    })
    .then(response => response.json())
    .then((data) =>{
    setData(data.notes)
    })
 
  //  console.log(file)
  }

  
    useEffect(()=>{getRapport()},[])


    return (
    <div className='contain_rapport'>
           
     

    </div>
  )
}
