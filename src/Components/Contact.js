import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineRight } from 'react-icons/ai'
import images_24  from '../Assets/images_24.jpg'
import '../Style/contact.css'

const Contact = () => {
  return (
    <>
    <div className='spa_wellness'>
      <h2>Contact</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
    </div>

    <div className='box_contact'>
      <h2>Contact us</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
      <div className='inner_box'>
        <div className='inner'>
          <div className='address'>
            <h5>Reservation</h5>
            <span>+1 (555) 000-1234</span>
            <span>+1 (555) 000-5778</span>
          </div>

          <div className='address'>
            <h5>Location</h5>
            <span>123 Sample St, Italy NSW 2000 AU</span>
            <span><Link className='dir' to='/maps'>Get Directions<AiOutlineRight/></Link></span>
          </div>

          <div className='address'>
            <h5>Email</h5>
            <span>Lorem ipsum dolor sit amet.</span>
            <span>hello@hotlor.com</span>
          </div>
        </div>
        <div className='contact_img'>
          <img src={images_24} alt='images24' />
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact