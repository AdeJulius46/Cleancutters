import React from 'react'
import Logo from '../src/assets/Logohelp.png'
const Nav = () => {
  return (
    <div className='Nav'>

    <div className='nave'>
        <nav  className=''>
            <img   src={Logo}  className='imge'  />
        </nav>  
        <div className='list'>
            <div><button id='butt'>Register as a cleaner</button> </div>
            <div  className='text-red'>Login</div>
            <div className='font-bold '>Menu</div>
        </div>
    </div>

    <div>
      
    </div>
    </div>
  )
}

export default Nav