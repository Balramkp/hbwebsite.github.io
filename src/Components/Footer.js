import React from 'react';
import '../Style/footer.css';
import { Link } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <div className='foot_content'>
      <div className='under_footer'>
        <Link className='logo' to="/">Hotlor</Link>
        <div className='add_con'>
          <h6>Address:</h6>
          <p>Level 1, 12 Sample, Italy NSW 2000</p>
        </div>
        <div className='add_con contact'>
          <h6>contact</h6>
          <p>1800 123 4567</p>
          <p>1800 123 6789</p>
        </div>
        <div className='social'>
          <FaFacebookF className='media' />
          <FaInstagram className='media' />
          <FaTwitter className='media' />
        </div>
      </div>

      <div className='under_footer'>
        <ul >
          <li>
            <Link className='foot_link' to="/">Home</Link>
          </li>
          <li>
            <Link className='foot_link' to="/room">Room</Link>
          </li>
          <li>
            <Link className='foot_link' to="/restaurant">Restaurant</Link>
          </li>
          <li>
            <Link className='foot_link' to="/wedding">Wedding</Link>
          </li>
          <li>
            <Link className='foot_link' to="/events">Events</Link>
          </li>
          <li>
            <Link className='foot_link' to="/spa">Spa</Link>
          </li>
        </ul>
      </div>

      <div className='under_footer'>
        <ul >
          <li>
            <Link className='foot_link' to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link className='foot_link' to="/Booking">Booking</Link>
          </li>
          <li>
            <Link className='foot_link' to="/styleGuide">Style Guide</Link>
          </li>
          <li>
            <Link className='foot_link' to="/LicenseInfo">License Info</Link>
          </li>
          <li>
            <Link className='foot_link' to="/404">404</Link>
          </li>
          <li>
            <Link className='foot_link' to="/password">Password</Link>
          </li>
        </ul>
      </div>
      </div>
    </footer>
  )
}

export default Footer