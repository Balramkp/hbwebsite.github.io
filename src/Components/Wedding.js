import React from 'react'
import { Link } from 'react-router-dom'
import images_22 from '../Assets/images_22.jpg'
import images_23 from '../Assets/images_23.jpg'

const Wedding = () => {
  return (
    <>
    <div className='spa_wellness'>
      <h2>Weddings</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
    </div>

    <div className='box_dining'>
      <div className='dining_img'>
        <img src={images_22} alt='images22' />
      </div>
      <div className='rooms_auth'>
        <h5>Wedding</h5>
        <h2>Authentic Recipes and greate attention to taste</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        <Link className='btn btn_rooms' to='/restaurant'>Book a Wedding</Link>
      </div>
    </div>

    <div className='box_spa'>
      <div className='rooms_well'>
        <h5>Love</h5>
        <h2>Celebrate your love with the ultimate romantic destination wedding.</h2>
      </div>
      <div className='have_look'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        <Link className='btn btn_rooms' to='/restaurant'>Book an Wedding</Link>
      </div>
    </div>

    <div className='box_dining'>
      <div className='dining_img'>
        <img src={images_23} alt='images23' />
      </div>
      <div className='rooms_auth'>
        <h5>Planning</h5>
        <h2>Wedding Planner with comprehensive of wedding specialists</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        <Link className='btn btn_rooms' to='/restaurant'>Book an Wedding</Link>
      </div>
    </div>
    </>
  )
}

export default Wedding