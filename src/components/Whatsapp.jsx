import React from 'react';
import cn from '../lib/cn';

const phoneNumber = '8801515299650'; // Replace with your phone number (include country code without '+')
const message = 'Hello! I need some help.'; // Replace with the message you want

const openWhatsApp = () => {
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};

const Whatsapp = ({ className }) => {
  return (
    <div className={cn(
        className,
        'fixed top-[95vh] md:top-[96vh] -right-4 md:right-16 transform -translate-y-1/2' // Fixed vertically in the middle of the screen
    )}>
      <img
        onClick={openWhatsApp}
        src="https://static.vecteezy.com/system/resources/previews/018/930/462/non_2x/whatsapp-logo-whatsapp-icon-whatsapp-transparent-free-png.png"
        alt="WhatsApp"
        className="w-16 h-16 md:w-24 md:h-24 cursor-pointer hover:bg-green-300 rounded-full transition-all duration-300"
      />
    </div>
  );
}

export default Whatsapp;
