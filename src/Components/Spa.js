import React, { useState } from 'react'
import '../Style/spa.css'
import { Link } from 'react-router-dom'
import images_13 from '../Assets/images_13.jpg'
import images_14 from '../Assets/images_14.jpg'
import images_15 from '../Assets/images_15.jpg'
import images_16 from '../Assets/images_16.jpg'
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
const Spa = () => {

  const [icon1, nexticon1] = useState(false);
  const [icon2, nexticon2] = useState(false);
  const [icon3, nexticon3] = useState(false);
  const [icon4, nexticon4] = useState(false);
  const [icon5, nexticon5] = useState(false);
  const [icon6, nexticon6] = useState(false);
  const [icon7, nexticon7] = useState(false);

  return (
    <>
    <div className='spa_wellness'>
      <h2>Spa Wellness</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
    </div>

    <div className='spa_wellness_2'>
      <div className='inside_wellness'>
      <h5>Spa and Wellness</h5>
      <h2>Escape to this luxury Spa</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
      <Link className='btn btn_rooms btn_look' to='/rooms'>Book Appoinment</Link>
      </div>
      <div className='spa_img'>
        <img src={images_13} alt='images13' />
      </div>
    </div>

    <div className='box_res'>
        <h2>With Modern and Ancient Techniques</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className='box_img2'>
        <img src={images_14} alt='images14' />
        </div>
      </div>

    <div className='box_room'>
      <div className='box_un'>
      <h5>Detox</h5>
      <h2>Connect with nature for your well being</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
      <Link className='btn btn_rooms btn_look' to='/rooms'>Book Appoinment</Link>
      </div>
      <div className='rooms_img'>
        <img src={images_15} alt='images15' />
      </div>
    </div>

    <div className='box_our_service'>
      <h2>Our Service</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
      <div className='box_dining'>
      <div className='dining_img'>
        <img src={images_16} alt='images16' />
      </div>
      <div className='rooms_auth'>
        <div className='box_qna'>
        <div className='qna'>
          <h5>Baliness Bliss</h5>
          <div className='plus_icon' onClick={()=> nexticon1(!icon1)}>
          {icon1 ? <AiOutlineClose className='plus' /> : <AiOutlinePlus className='plus' />}
          </div>
        </div>
          <p className={icon1 ? 'show_para1': 'hide_para1'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
        </div>
        <div className='box_qna'>
        <div className='qna'>
          <h5>Aromasoul Elementt</h5>
          <div className='plus_icon' onClick={()=> nexticon2(!icon2)}>
          {icon2 ? <AiOutlineClose className='plus' /> : <AiOutlinePlus className='plus' />}
          </div>
        </div>
          <p className={icon2 ? 'show_para2': 'hide_para2'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
        </div>
        <div className='box_qna'>
        <div className='qna'>
          <h5>PeppermintScalp Soother</h5>
          <div className='plus_icon' onClick={()=> nexticon3(!icon3)}>
          {icon3 ? <AiOutlineClose className='plus' /> : <AiOutlinePlus className='plus' />}
          </div>
        </div>
          <p className={icon3 ? 'show_para3': 'hide_para3'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
        </div>
        <div className='box_qna'>
        <div className='qna'>
          <h5>Foot Reflexology 60</h5>
          <div className='plus_icon' onClick={()=> nexticon4(!icon4)}>
          {icon4 ? <AiOutlineClose className='plus' /> : <AiOutlinePlus className='plus' />}
          </div>
        </div>
          <p className={icon4 ? 'show_para4': 'hide_para4'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
        </div>
        <div className='box_qna'>
        <div className='qna'>
          <h5>Premium Manicure</h5>
          <div className='plus_icon' onClick={()=> nexticon5(!icon5)}>
          {icon5 ? <AiOutlineClose className='plus' /> : <AiOutlinePlus className='plus' />}
          </div>
        </div>
          <p className={icon5 ? 'show_para5': 'hide_para5'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
        </div>
        <div className='box_qna'>
        <div className='qna'>
          <h5>Premium Pedicure</h5>
          <div className='plus_icon' onClick={()=> nexticon6(!icon6)}>
          {icon6 ? <AiOutlineClose className='plus' /> : <AiOutlinePlus className='plus' />}
          </div>
        </div>
          <p className={icon6 ? 'show_para6': 'hide_para6'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
        </div>
        <div className='box_qna'>
        <div className='qna'>
          <h5>Hot Stone Therapy</h5>
          <div className='plus_icon' onClick={()=> nexticon7(!icon7)}>
          {icon7 ? <AiOutlineClose className='plus' /> : <AiOutlinePlus className='plus' />}
          </div>
        </div>
          <p className={icon7 ? 'show_para7': 'hide_para7'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
        </div>
        
      </div>
    </div>
    </div>
    </>
  )
}

export default Spa