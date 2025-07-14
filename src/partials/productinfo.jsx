import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const ProductInfo = () => {
  return (
    <section
      className='bg-white py-20 px-6 text-gray-800'
      id='product'
      data-aos='fade-up'
    >
      <div className='max-w-5xl mx-auto'>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className='text-3xl md:text-4xl font-bold text-[#4CAF50] mb-6 font-[Montserrat] text-center'
        >
          CleanOZ — Daily Maintenance Liquid Engine
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center text-lg mb-10 text-gray-600'
        >
          Aditif cair serbaguna untuk semua jenis bahan bakar: bensin, pertamax,
          pertalite, hingga solar.
        </motion.p>

        <div className='grid md:grid-cols-2 gap-10'>
          {/* Kiri: Detail produk */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className='space-y-4'
          >
            <h3 className='text-xl font-semibold text-[#FF9800]'>
              Detail Produk
            </h3>
            <ul className='list-disc list-inside space-y-2'>
              <li>Bentuk: Cairan aditif bahan bakar</li>
              <li>Isi: Botol 12 ml (bisa dipakai berkali-kali)</li>
              <li>Pemakaian: 3 tetes per liter BBM</li>
              <li>Kemasan dijual 1 kotak isi 4 botol</li>
            </ul>
          </motion.div>

          {/* Kanan: Kelebihan produk */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className='space-y-4'
          >
            <h3 className='text-xl font-semibold text-[#FF9800]'>
              Kelebihan CleanOZ
            </h3>
            <ul className='space-y-3'>
              {[
                "Penggunaan sangat mudah (cukup tetes, langsung tercampur)",
                "Aman untuk semua jenis mesin kendaraan (motor, mobil, kapal)",
                "Dipercaya sejak 2012 dan teruji di 137.000+ kendaraan",
                "Bonus emas 24K untuk pembelian 1 kotak",
              ].map((item, i) => (
                <li key={i} className='flex items-start gap-2'>
                  <FaCheckCircle className='text-[#4CAF50] mt-1' />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
