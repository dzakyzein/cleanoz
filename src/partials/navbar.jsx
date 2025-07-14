import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Beranda", href: "#hero" },
    { label: "Produk", href: "#product" },
    { label: "Manfaat", href: "#benefit" },
    { label: "Testimoni", href: "#testimoni" },
    { label: "Promo", href: "#cta" },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className='fixed top-0 w-full z-50 bg-white shadow-md'
    >
      <div className='max-w-6xl mx-auto px-4 py-3 flex items-center justify-between'>
        {/* Logo */}
        <a href='#hero' className='flex items-center gap-2'>
          <img
            src='https://cdn.scalev.id/Image/qUNt4WgjgZop88jSw8Ssyte5ITCd2Fx0Sj09fzWT6Rw/1740105611249-images_7436651710837578894.webp'
            alt='Cleanoz Logo'
            className='h-10 w-auto'
          />
          <span className='font-bold text-lg text-[#4CAF50]'>Cleanoz</span>
        </a>

        {/* Desktop Menu */}
        <div className='hidden md:flex gap-6 font-medium text-gray-700 text-sm'>
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className='hover:text-[#FF9800] transition'
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className='md:hidden'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label='Toggle menu'
            className='text-2xl text-gray-700'
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className='md:hidden px-6 pb-4 bg-white'
          >
            <div className='flex flex-col gap-4 text-sm font-medium text-gray-700'>
              {links.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className='hover:text-[#FF9800] transition'
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
