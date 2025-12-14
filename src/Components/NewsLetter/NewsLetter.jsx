import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  return (
    <div className="news-letter">
      <h1>Get Exclusive Offers On Your WhatsApp 👇🏿</h1>
      <p>Click below to order directly on WhatsApp</p>

      <div className='whatsapp'>
        <a href="https://wa.me/254715412841" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://i.postimg.cc/6p1LGq0t/whats-app-order.gif" 
            alt="Order on WhatsApp" 
            className="whatsapp-image"
          />
        </a>
      </div>
    </div>
  );
}

export default NewsLetter;
