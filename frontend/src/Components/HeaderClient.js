import React from 'react'
import Logo_one from '../img/document.png'
import '../CSS/Header.css'
import { Link } from 'react-router-dom'



export default function HeaderClient() {
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

                <h3 className='part_one_one'>
                   Notez et critiquez un agent
                </h3>

                
            </div>

            <div className='part_two'>
               <img  src={Logo_one} className='home_img'/>
            </div>

               

        </div>

               
        <div className='contain_menus'>
            
            <Link style={{textDecoration:'none' , color:'black' }}  to='/Notesuragent' className='but' >
               Notez et critiquez un agent
            </Link>
          

        </div>
        
       

    </div>
  )
}
