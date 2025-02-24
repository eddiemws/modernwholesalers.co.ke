import React from 'react';
import '../Pages/CSS/LoginSignup.css';
// import shopImage1 from '../Assets/shop1.jpg';
// import shopImage2 from '../Assets/shop2.jpg';
// import shopImage3 from '../Assets/shop3.jpg';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <div className='about-us'>
      <motion.div className='about-header'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        <h1>About Modern Wholesalers</h1>
      </motion.div>

      <motion.p className='about-text'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}>
        We specialize in household items, offering a variety of cookware, beddings, and kitchenware at unbeatable prices. Our store, located in Nairobi, provides quality products that cater to your home essentials.
      </motion.p>

      <div className='about-images'>
        <motion.img src='https://i.postimg.cc/X7yvZ6Rt/modernhome.jpg' alt='Shop view 1' className='about-image'
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }} />
        <motion.img src='https://i.postimg.cc/nhbhBwZr/modernhome2.jpg' alt='Shop view 2' className='about-image'
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }} />
        <motion.img src='https://i.postimg.cc/8zRPHBPH/modernhome3.jpg' alt='Shop view 3' className='about-image'
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }} />
      </div>
    </div>
  );
};

export default AboutUs;
