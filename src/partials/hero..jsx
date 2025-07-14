import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id='hero'
      className='pt-32 pb-20 px-6 bg-gradient-to-b from-[#4bbf54] to-white text-gray-800'
    >
      <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center'>
        {/* TEXT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-4xl md:text-5xl font-extrabold leading-tight text-[#4CAF50] font-[Montserrat] mb-4'
          >
            Boros Bensin Bikin Dompet Tipis? <br />
            <span className='text-[#FF9800]'>Gas Tipis Pakai Cleanoz!</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className='text-lg text-gray-700 mb-6'
          >
            Tiga Tetes Bukan Cuma Irit, Tapi Bikin Mesin Enteng, Suara Halus,
            Dan Hemat Biaya Servis!
          </motion.p>

          <motion.a
            href='#cta'
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className='inline-block bg-[#FF9800] text-white font-semibold px-6 py-3 rounded-full shadow hover:scale-105 transition'
          >
            KIRIM SAYA CLEANOZ
          </motion.a>
        </div>

        {/* IMAGE */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src='https://cdn.scalev.id/Image/_80DHjOh15B-7JCgbxr9fvoGNEeow1etLsnhm-ELi7s/1740124810449-headline_LP_scalev.webp'
            alt='Headline Cleanoz'
            className='w-full max-w-md mx-auto'
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
