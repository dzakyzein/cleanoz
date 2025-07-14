import React from "react";
import { motion } from "framer-motion";

const Opening = () => {
  return (
    <section
      className='bg-[#fff9f0] py-20 px-6 text-gray-800'
      id='opening'
      data-aos='fade-up'
    >
      <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center'>
        {/* Teks */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className='text-3xl md:text-4xl font-bold text-[#FF9800] font-[Montserrat] mb-6 leading-snug'>
            Pernah ngerasa gaji habis cuma buat isi bensin?
          </h2>
          <p className='text-lg md:text-xl text-gray-700 mb-6'>
            Tarikan motor makin berat. Dompet makin sesak. Hidup rasanya diem di
            tempat.
            <br />
            Padahal setiap hari harus ngerit di jalanan. Cari nafkah. Kirim
            barang. Jemput anak.
            <br />
            <strong className='text-[#4CAF50]'>
              Apa nggak capek kalau semua tenaga habis cuma buat bayar bensin?
            </strong>
          </p>
          <p className='text-base md:text-lg text-gray-600'>
            Rakyat kecil kayak kita nggak boleh kalah sama krisis. Karena hemat
            BBM itu bukan cuma soal bensin. Tapi soal bisa bertahan hidup.
          </p>
        </motion.div>

        {/* Gambar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className='space-y-6'
        >
          <img
            src='https://cdn.scalev.id/Image/QQQNvdOkiaZRyltWjQn4EnaN9xHGy0XeigGPFxCA0M4/1740105013385-images_1065611710837501574.webp'
            alt='Perempuan dalam mobil'
            className='rounded-xl shadow-md w-full'
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Opening;
