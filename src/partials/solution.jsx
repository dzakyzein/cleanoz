import React from "react";
import { motion } from "framer-motion";

const Solution = () => {
  return (
    <section
      className='bg-[#F0FFF4] py-20 px-6 text-gray-800'
      id='solution'
      data-aos='fade-up'
    >
      <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center'>
        {/* Teks */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className='text-3xl md:text-4xl font-bold text-[#4CAF50] font-[Montserrat] mb-6 leading-snug'>
            CleanOZ Bukan Sulap — Ini Solusi.
          </h2>
          <p className='text-lg text-gray-700 mb-4'>
            Cleanoz bukan cuma buat irit bensin.
            <br />
            Ini adalah cara rakyat kecil ngelawan krisis.
          </p>
          <ul className='space-y-3 text-gray-700 text-base'>
            <li>✅ Tetesin Cleanoz ke tangki bensin</li>
            <li>✅ Mesin bersih → BBM lebih irit</li>
            <li>✅ Tarikan enteng → suara mesin halus</li>
            <li>✅ Dompet lebih aman → sisa uang bisa ditabung</li>
            <li>✅ Bonus emas mini → hemat, dapet cuan</li>
          </ul>
          <p className='mt-6 italic text-sm text-gray-600'>
            Karena setiap tetes Cleanoz nyimpen tenaga besar buat bikin hidup
            tetap jalan.
          </p>
        </motion.div>

        {/* Gambar */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className='space-y-6'
        >
          <img
            src='https://cdn.scalev.id/Image/Rp5bncNEKTSLhA5K_xPNamJBuH7xu4s3sST2R3zxgQg/1740105550114-images_7642981710837559675_1.webp'
            alt='Produk Cleanoz'
            className='rounded-xl shadow w-full'
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;
