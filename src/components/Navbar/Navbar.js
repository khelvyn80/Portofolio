import React from 'react'
import './Navbar.css'
import Kay from '../../assets/Kay.png'
import {Link} from 'react-router-dom';


function Navbar() {
  return (
  <header>
  <div>
    <div>
         <img src={Kay} alt='' />
     </div>
    <div>
        <ul>
                <li><Link to ='/'>Home</Link></li>
                <li><Link to ='/about'>About</Link></li>
                <li><Link to ='/projects'>Projects</Link></li>
                <li><Link to ='/contact'>Contact</Link></li> 
         </ul>
    </div>
</div>  
</header> 
)
}

export default Navbar;