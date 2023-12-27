import React from 'react'
import Logo_one from '../img/document.png'
import '../CSS/Header.css'
import { Link } from 'react-router-dom'



export default function Header() {
  return (
    <div className='contain_header'>
         
        <div className='nav_bar'>
          
          <div className='contain_button'>

            <Link style={{textDecoration:'none' , color:'black'}}  to='/' className='but' >
                Deconnexion
            </Link>
        
            </div>
        </div>

            
        <div className='contain_title'>
            
            <div className='part_one'>
                
                <h5 className='part_one_one'>
                   Bienvenu sur votre dashboard
                </h5>

                <ul className='part_one_one'>
                  <li className=''>
                      Consultez vos performences
                  </li>
                  <li className=''>
                      Faites vos rapports
                  </li>
                   <li className=''>
                      Validez votre presence
                  </li>
                </ul>

                
            </div>

            <div className='part_two'>
               <img  src={Logo_one} className='home_img'/>
            </div>

               

        </div>

               
        <div className='contain_menus'>
            
            <Link style={{textDecoration:'none' , color:'black' }}  to='/adduser' className='but' >
               Ajouter utilisateur
            </Link>
          
            <Link style={{textDecoration:'none' , color:'black' }}  to='/evaluerperformence' className='but' >
               Evaluer performances
            </Link>
             
          
          
        </div>
        
       

    </div>
  )
}
