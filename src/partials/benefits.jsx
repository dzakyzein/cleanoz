import React from "react";
import { motion } from "framer-motion";

const benefits = [
  "Bensin jadi jauh lebih irit (hemat hingga 20-40%)",
  "Tarikan mesin enteng dan responsif",
  "Suara mesin lebih halus dan senyap",
  "Mencegah kerak karbon dan kerusakan mesin",
  "Efek langsung terasa sejak pemakaian pertama",
  "Oli jadi lebih awet dan tahan lama",
];

const guarantees = [
  "Aman untuk semua kendaraan: motor, mobil, solar, bensin",
  "Sudah teruji di lebih dari 137.000 kendaraan",
  "Tidak menimbulkan efek samping jika sesuai petunjuk",
  "Banyak testimoni nyata di media sosial dan YouTube",
];

const Benefits = () => {
  return (
    <section
      className='bg-white py-20 px-6 text-gray-800'
      id='benefit'
      data-aos='fade-up'
    >
      <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start'>
        {/* Teks */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className='text-3xl md:text-4xl font-bold text-[#4CAF50] font-[Montserrat] mb-6'>
            Benefit Utama untuk Pengguna
          </h2>

          <ul className='list-disc ml-5 space-y-3 text-base text-gray-700 mb-8'>
            {benefits.map((b, i) => (
              <li key={i}>✅ {b}</li>
            ))}
          </ul>

          <h3 className='text-xl font-semibold text-[#FF9800] mb-3 mt-20'>
            📄 Jaminan untuk Pengguna
          </h3>
          <ul className='list-disc ml-5 space-y-2 text-sm text-gray-600'>
            {guarantees.map((g, i) => (
              <li key={i}>🔒 {g}</li>
            ))}
          </ul>
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
            src='https://cdn.scalev.id/Image/JUtBttAUoiW87a5FtXQkrp4Vh50Av4WGh6aq6qt_gzw/save.gif'
            alt='GIF Mesin'
            className='rounded-lg shadow w-full'
          />
          <img
            src='https://cdn.scalev.id/Image/MZGHOcb98E9E4mUDGEbmI30LUn8nFqbPhcAfIl_xvMM/1740125254719-icon_benefit.webp'
            alt='Icon Benefit'
            className='w-40 md:w-48 mx-auto'
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
