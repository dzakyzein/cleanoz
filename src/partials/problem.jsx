import React from "react";
import { motion } from "framer-motion";

const Problem = () => {
  return (
    <section
      className='bg-[#fff3f3] py-20 px-6 text-gray-800'
      id='problem'
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
          <h2 className='text-3xl md:text-4xl font-bold text-red-600 font-[Montserrat] mb-6 leading-snug'>
            Bensin Makin Mahal. Mesin Makin Berat.
          </h2>
          <ul className='text-lg space-y-4 text-gray-700'>
            <li>🚨 Kerja nggak bisa berhenti, tapi isi bensin makin mahal.</li>
            <li>🚨 Mesin motor/mobil makin berat, servis jadi makin sering.</li>
            <li>🚨 Udah irit-irit, tetap habis buat beli BBM.</li>
            <li>🚨 Mau nabung susah — semua habis buat jalan terus.</li>
            <li>😮‍💨 Capek rasanya, kayak kerja nggak pernah cukup.</li>
          </ul>
          <p className='mt-6 italic text-[#4CAF50] font-semibold'>
            “Gas Tipis, Anti Krisis.”
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
            src='https://cdn.scalev.id/Image/oiiCjAT8xHQxQgLuPn4ctVEv706whauBQh45YvrmG20/1740105134573-images_5337321732158161632.webp'
            alt='Mobil dan motor'
            className='rounded-xl shadow-md w-full'
          />
          <img
            src='https://cdn.scalev.id/Image/sfeKLm-8W4HKyeFU-Xyiisf50OPX1ygZwsxotFeCTfI/1740105354536-images_5739451732158302543.webp'
            alt='Button belum lagi servis mahal'
            className='rounded-lg shadow w-full'
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
