import React from 'react'
import '../Style/room.css'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'
import images_7 from '../Assets/images_7.jpg'
import images_8 from '../Assets/images_8.jpg'
import images_9 from '../Assets/images_9.jpg'
import images_10 from '../Assets/images_10.jpg'
import images_11 from '../Assets/images_11.jpg'
import images_12 from '../Assets/images_12.jpg'

const Room = () => {
  return (
    <>
    <div className='room_suite'>
      <h2>Rooms and Suites</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
    </div>


    
    <div className='all_rooms'>
    <div className='box_read'>
      <div className='read'>
        <img src={images_7} alt='images7' />
        <h4>Luxury Suite</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        <Link className='read_more' to='/room/luxury-suite'>Show Detail<IoIosArrowForward className='more_arrow' /></Link>
      </div>
      <div className='read'>
        <img src={images_8} alt='images8' />
        <h4>Suites</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        <Link className='read_more' to='/events'>Show Detail<IoIosArrowForward className='more_arrow' /></Link>
      </div>
    </div>

    <div className='box_read'>
      <div className='read'>
        <img src={images_9} alt='images9' />
        <h4>Classic Double</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        <Link className='read_more' to='/wedding'>Show Detail<IoIosArrowForward className='more_arrow' /></Link>
      </div>
      <div className='read'>
        <img src={images_10} alt='images10' />
        <h4>Classic Single</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        <Link className='read_more' to='/events'>Show Detail<IoIosArrowForward className='more_arrow' /></Link>
      </div>
    </div>

    <div className='box_read'>
      <div className='read'>
        <img src={images_11} alt='images11' />
        <h4>Deluxe</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        <Link className='read_more' to='/wedding'>Show Detail<IoIosArrowForward className='more_arrow' /></Link>
      </div>
      <div className='read'>
        <img src={images_12} alt='images12' />
        <h4>Standard</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        <Link className='read_more' to='/events'>Show Detail<IoIosArrowForward className='more_arrow' /></Link>
      </div>
    </div>
    </div>
    </>
  )
}

export default Room