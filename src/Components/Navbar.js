import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Style/navbar.css';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

const Navbar = () => {

    const [currentmenu, changemenu] = useState(false)
    

  return (
    <nav>
      <Link className='logo' to="/">Hotlor</Link>
      <ul className={currentmenu ? "mobile_navbar" : "changemobile_navbar"} onClick={() => changemenu(false)}>
        <li>
          <Link className='nav_link' to="/room">Room</Link>
        </li>
        <li>
          <Link className='nav_link' to="/spa">Spa</Link>
        </li>
        <li>
          <Link className='nav_link' to="/restaurant">Restaurant</Link>
        </li>
        <li>
          <Link className='nav_link' to="/events">Events</Link>
        </li>
        <li>
          <Link className='nav_link' to="/wedding">Wedding</Link>
        </li>
        <li>
          <Link className='nav_link' to="/contact">Contact</Link>
        </li>
        <li>
          <Link className='btn btn_book' to="/book">Book</Link>
        </li>
      </ul>
      <div className='menu' onClick={()=> changemenu(!currentmenu)} >
        {currentmenu ? <ImCross className='menu_icon'/> : <FaBars className='menu_icon'/>}
      </div>
    </nav>

  )
}

export default Navbar