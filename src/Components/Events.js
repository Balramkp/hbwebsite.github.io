import React from 'react'
import images_20 from '../Assets/images_20.jpg'
import { Link } from 'react-router-dom'
import images_21 from '../Assets/images_21.jpg'

const Events = () => {
  return (
    <>
    <div className='spa_wellness'>
      <h2>Events</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
    </div>

    <div className='box_dining'>
      <div className='dining_img'>
        <img src={images_20} alt='images20' />
      </div>
      <div className='rooms_auth'>
        <h5>DINNING</h5>
        <h2>Authentic Recipes and greate attention to taste</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        <Link className='btn btn_rooms' to='/restaurant'>Reserve Table</Link>
      </div>
    </div>

    <div className='box_spa'>
      <div className='rooms_well'>
        <h5>Meeting</h5>
        <h2>Bringing the ultimate event experience to the dynamic meeting</h2>
      </div>
      <div className='have_look'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        <Link className='btn btn_rooms' to='/restaurant'>Book an Event</Link>
      </div>
    </div>

    <div className='box_dining'>
      <div className='dining_img'>
        <img src={images_21} alt='images21' />
      </div>
      <div className='rooms_auth'>
        <h5>Events</h5>
        <h2>Events have changed. So have we.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        <Link className='btn btn_rooms' to='/restaurant'>Book an Event</Link>
      </div>
    </div>


    </>
  )
}

export default Events