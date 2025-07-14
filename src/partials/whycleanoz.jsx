import React from "react";
import {
  FaBolt,
  FaGasPump,
  FaSmileBeam,
  FaTools,
  FaBan,
  FaMoneyBillWave,
} from "react-icons/fa";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: <FaBolt />,
    title: "Tenaga Optimal",
    desc: "Mesin lebih bersih = tenaga tetap optimal",
  },
  {
    icon: <FaGasPump />,
    title: "BBM Lebih Hemat",
    desc: "Hemat hingga 20–40% dibanding tanpa CleanOZ",
  },
  {
    icon: <FaSmileBeam />,
    title: "Nyaman Berkendara",
    desc: "Tarikan enteng & suara mesin halus",
  },
  {
    icon: <FaTools />,
    title: "Mesin Tahan Lama",
    desc: "Oli 2x lebih awet, umur mesin lebih panjang",
  },
  {
    icon: <FaBan />,
    title: "Anti Drama Mogok",
    desc: "Cegah servis mendadak & mogok di jalan",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Hemat Biaya Servis",
    desc: "Perawatan ringan, dompet aman",
  },
];

const WhyCleanoz = () => {
  return (
    <section
      className='bg-[#FFFAF0] py-20 px-6'
      id='why-cleanoz'
      data-aos='fade-up'
    >
      <div className='max-w-6xl mx-auto text-center'>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className='text-3xl md:text-4xl font-bold text-[#4CAF50] font-[Montserrat] mb-10'
        >
          Mengapa Pilih CleanOZ?
        </motion.h2>

        <div className='grid md:grid-cols-3 gap-8 text-left'>
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className='bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300'
            >
              <div className='text-[#FF9800] text-3xl mb-4'>{item.icon}</div>
              <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                {item.title}
              </h3>
              <p className='text-gray-600'>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCleanoz;
