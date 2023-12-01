import React from 'react';
import '../Style/home.css';
import { Link } from 'react-router-dom';
import images_1 from '../Assets/images_1.jpg';
import images_2 from '../Assets/images_2.jpg';
import images_3 from '../Assets/images_3.jpg';
import images_4 from '../Assets/images_4.jpg';
import images_5 from '../Assets/images_5.jpg';
import images_6 from '../Assets/images_6.jpg';
import { IoIosArrowForward } from 'react-icons/io'
const Home = () => {
  return (
    <>
    <div className='box_exp'>
        <h1>Experiance the great dining and Luxury living</h1>
        <p>Redefining luxury at the heart, Hotlor overlooks the visually stunning waters of the Bambolim Bay, tropical gardens and lush lawns that roll down to the water’s edge.</p>
        <Link className='btn btn_rooms' to="/room">Book a Room</Link>
        <div className='box_img1'>
        <img src={images_1} alt='images1' />
        </div>
    </div>
    <div className='box_res'>
        <h2>Experiance our Resort hotel</h2>
        <p>Redefining luxury at the heart, Hotlor overlooks the visually stunning waters of the Bambolim Bay, tropical gardens and lush lawns that roll down to the water’s edge.</p>
        <div className='box_img2'>
        <img src={images_2} alt='images2' />
        </div>
    </div>
    <div className='box_room'>
      <div className='box_un'>
      <h5>ROOMS</h5>
      <h2>Unwind and Relax</h2>
      <p>splendidly appointed grand rooms and magnificent suites. features a balcony offering relaxed seating with views of magical sunsets, free-form swimming pool or tropical gardens​.</p>
      <Link className='btn btn_rooms btn_look' to='/room'>Take a look</Link>
      </div>
      <div className='rooms_img'>
        <img src={images_3} alt='images3' />
      </div>
    </div>

    <div className='box_dining'>
      <div className='dining_img'>
        <img src={images_4} alt='images4' />
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
        <h5>SPA</h5>
        <h2>Wellness offering a Peaceful and serena retreat with Spa techniques</h2>
      </div>
      <div className='have_look'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        <Link className='btn btn_rooms' to='/restaurant'>Have a look</Link>
      </div>
    </div>
    
    <div className='box_read'>
      <div className='read'>
        <img src={images_5} alt='images5' />
        <h4>Wedding</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
        <Link className='read_more' to='/wedding'>Read More<IoIosArrowForward className='more_arrow' /></Link>
      </div>
      <div className='read'>
        <img src={images_6} alt='images6' />
        <h4>Meeting</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
        <Link className='read_more' to='/events'>Read More<IoIosArrowForward className='more_arrow' /></Link>
      </div>
    </div>
    </>
  )
}

export default Home