import React from "react";
import { motion } from "framer-motion";

const youtubeTesti = [
  {
    img: "https://i.ytimg.com/vi/VS77po73Ylo/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=VS77po73Ylo",
  },
  {
    img: "https://i.ytimg.com/vi/bemupKqha2M/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=bemupKqha2M",
  },
  {
    img: "https://i.ytimg.com/vi/vgjzF0JqfoM/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=vgjzF0JqfoM",
  },
  {
    img: "https://i.ytimg.com/vi/BJ172CrlpfE/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=BJ172CrlpfE",
  },
  {
    img: "https://i.ytimg.com/vi/O_2V0sJOuGc/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=O_2V0sJOuGc",
  },
];

const Testimoni = () => {
  return (
    <section id='testimoni' className='bg-[#fefefe] py-20 px-6 text-gray-800'>
      <div className='max-w-6xl mx-auto space-y-12'>
        {/* Judul & Deskripsi */}
        <motion.div
          className='text-center'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className='text-3xl md:text-4xl font-bold text-[#4CAF50] font-[Montserrat] mb-3'>
            Sudah Dicoba di 137.000+ Kendaraan
          </h2>
          <p className='text-gray-600 text-lg'>
            Mereka yang sudah merasakan manfaat CleanOZ
          </p>
        </motion.div>

        {/* Galeri YouTube Testimoni */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {youtubeTesti.map((yt, index) => (
            <motion.a
              key={index}
              href={yt.url}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:opacity-80 transition'
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={yt.img}
                alt={`Testimoni YouTube ${index + 1}`}
                className='rounded-xl shadow-md w-full'
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimoni;
