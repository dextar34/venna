import React from 'react'
import '../googleMap.css'; // Import the CSS file
import cn from '../lib/cn'
import Container from '../components/layer/Container'
import IconWithLink from '../components/layer/IconWithLink'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";




const Contact = () => {
  
  

  return (
    <div className={cn('mt-24 ')}>
      <Container className={cn('flex flex-col items-center gap-10',
        'md:text-3xl'
      )}>
        <div className={cn('bg-white rounded-lg mx-4')}>
          <h1 className={cn('text-2xl p-2 border-b border-black flex justify-center',
            'md:text-3xl'
          )}>Contact US</h1>
          <div className={cn('flex flex-col items-center my-2 py-2')}>
          <div className={cn('flex items-center gap-5 py-2 mx-2')}>
          <FaPhoneAlt />
            <IconWithLink txt={'01*********'} href={'tel:01*********'} type={'phone'} />
          </div>
          <div className={cn('flex items-center gap-5 py-2 mx-2')}>
          <FaLocationDot />
            <p>Wari, Dhaka</p>
          </div>
          <div className={cn('flex items-center gap-5 py-2 mx-2')}>
          <IoMail />
            <IconWithLink txt={'vienna.apparel.official@gmail.com'} href={'mailto:vienna.apparel.official@gmail.com?subject=Question%20&body=Hello,%20want%20to%20ask%20something.'} />
          </div>
          </div>
        </div>
        <div className={cn('map-container mx-4 pb-10')}>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7305.626401203901!2d90.41276184068587!3d23.718363887414146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8539c8e1dd7%3A0xf454a7a2dc22ba5!2sWari%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1728654851133!5m2!1sen!2sbd"
        width="100%" // Make it 100% for dynamic sizing
        height="250"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
        </div>
      </Container>
    </div>
  )
}

export default Contact
