import React from "react";
import {
  FaLeaf,
  FaFireAlt,
  FaTools,
  FaGasPump,
  FaCog,
  FaOilCan,
} from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaFireAlt />,
    text: "Membersihkan sisa pembakaran agar mesin tetap bersih",
  },
  { icon: <FaCog />, text: "Mencegah kerak karbon yang menempel di piston" },
  { icon: <FaTools />, text: "Menjaga performa mesin tetap optimal" },
  { icon: <FaGasPump />, text: "Menghemat BBM hingga 20–40%" },
  { icon: <FaOilCan />, text: "Mengurangi keausan & memperpanjang umur oli" },
  {
    icon: <FaLeaf />,
    text: "Produk cairan pembersih ruang bakar mesin kendaraan",
  },
];

const About = () => {
  return (
    <section className='bg-[#F7FFF7] py-20 px-6' id='about' data-aos='fade-up'>
      <div className='max-w-5xl mx-auto text-center'>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className='text-3xl md:text-4xl font-bold text-[#4CAF50] font-[Montserrat] mb-8'
        >
          Tentang CleanOZ
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className='text-gray-700 text-lg max-w-3xl mx-auto mb-12'
        >
          CleanOZ adalah cairan pembersih ruang bakar mesin kendaraan yang
          membantu menjaga kebersihan dan efisiensi mesin agar tetap optimal,
          hemat, dan awet.
        </motion.p>

        <div className='grid sm:grid-cols-2 gap-8 text-left'>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2 + index * 0.15,
                duration: 0.6,
              }}
              viewport={{ once: true }}
              className='flex items-start gap-4'
            >
              <div className='text-[#FF9800] text-xl mt-1'>{feature.icon}</div>
              <p className='text-gray-800'>{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
