import React from "react";
import { motion } from "framer-motion";

const WhatYouGet = () => {
  return (
    <section
      className='bg-[#fefbe8] py-20 px-6 text-gray-800'
      id='what-you-get'
      data-aos='fade-up'
    >
      <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center'>
        {/* Teks */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className='text-3xl md:text-4xl font-bold text-[#FF9800] font-[Montserrat] mb-6'>
            Apa yang Akan Didapatkan?
          </h2>
          <ul className='list-disc ml-5 space-y-3 text-base text-gray-700'>
            <li>🧴 Cairan aditif pembersih ruang bakar mesin</li>
            <li>⛽ Hemat BBM hingga 20–40%</li>
            <li>🚗 Mesin lebih enteng, performa terjaga</li>
            <li>🔊 Suara mesin lebih halus & senyap</li>
            <li>💧 Super praktis — tinggal tetes ke tangki</li>
            <li>💎 Bonus Emas 24K setiap pembelian 1 kotak (isi 4 botol)</li>
          </ul>
        </motion.div>

        {/* Gambar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src='https://cdn.scalev.id/Image/eMITD5lVVjei4y2QcFcPT7ahFvyk7t55HpPv94fx_qA/1740108102829-images_7016781731659141551.webp'
            alt='Bonus emas BlessGold'
            className='rounded-xl shadow w-full'
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhatYouGet;
