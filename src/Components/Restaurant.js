import React from 'react'
import '../Style/restaurant.css'
import { Link } from 'react-router-dom'
import images_17 from '../Assets/images_17.jpg'
import images_18 from '../Assets/images_18.jpg'
import images_19 from '../Assets/images_19.jpg'

const Restaurant = () => {
  return (
    <>
    <div className='spa_wellness'>
      <h2>Fine Dining</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
    </div>

    <div className='spa_wellness_2'>
      <div className='inside_wellness'>
      <h5>Fine Dine</h5>
      <h2>Unparalled cuisine  by authentic rural touche</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
      <Link className='btn btn_rooms btn_look' to='/rooms'>Reserve Table</Link>
      </div>
      <div className='spa_img'>
        <img src={images_17} alt='images17' />
      </div>
    </div>

    <div className='box_res'>
        <h2>With Modern and Ancient Techniques</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className='box_img2'>
        <img src={images_18} alt='images18' />
        </div>
    </div>

    <div className='box_room timing'>
      <div className='box_un'>
      <h5>Timing</h5>
      <h2>Restaurant Hours</h2>
      <h5>Monday - Friday</h5>
      <p>Breakfast 7:00am – 11:00am</p>
      <p>Lunch 11:00am – 3:00pm</p>
      <p>Dinner 3:00pm – 10:00pm</p>
      <h5>Monday - Friday</h5>
      <p>Brunch 7:00am – 3:00pm</p>
      <p>Dinner 3:00pm – 10:00pm</p>
      <Link className='btn btn_rooms btn_look' to='/rooms'>Reserve Table</Link>
      </div>
      <div className='rooms_img'>
        <img src={images_19} alt='images19' />
      </div>
    </div>
    </>
  )
}

export default Restaurant