import { Home } from '@mui/icons-material'
import React , {useRef , useState , useEffect} from 'react'
import Header from './Header'
import Home_template from './Home_template'
import Footer from './Footer'
import HeaderClient from './HeaderClient'

export default function 

() {
    const windowHeight = useRef(window.innerHeight).current


  return (
    <div  className='contain_homepage'>
        <HeaderClient/>
        <Home_template/>
        <Footer/>
        
    </div>
  )
}
