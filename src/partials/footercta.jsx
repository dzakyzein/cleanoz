import React from "react";

const FooterCTA = () => {
  return (
    <footer className='bg-[#4CAF50] text-white px-6 py-20' id='cta'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12'>
        {/* Teks Inspiratif */}
        <div className='md:w-2/3 space-y-4'>
          <h2 className='text-3xl md:text-4xl font-bold font-[Montserrat] leading-tight'>
            Hidup Memang Berat, Tapi Rakyat Kecil Nggak Boleh Kalah.
          </h2>
          <p className='text-lg font-medium'>
            CleanOZ bukan cuma cairan irit bensin. Ini adalah{" "}
            <span className='text-yellow-300 font-bold'>
              gerakan #AntiKrisis
            </span>
            .
          </p>
          <p className='italic text-white/90 text-base'>
            Setiap tetes CleanOZ adalah tenaga buat hidup tetap jalan.
          </p>

          {/* CTA Button */}
          <div className='mt-6'>
            <a
              href='#form' // Ganti ke id/form kontak jika ada
              className='bg-[#FF9800] text-white font-bold px-8 py-4 rounded-full text-lg shadow-md hover:bg-[#fb8c00] transition'
            >
              KIRIM SAYA CLEANOZ
            </a>
          </div>
        </div>

        {/* Visual Side */}
        <div className='md:w-1/3 flex flex-col items-center gap-6'>
          <img
            src='https://cdn.scalev.id/Image/PDu4pBDZ1P69C58iKpyUauDJ6isztnAofWHyt0EuY1U/1740108079282-images_9704621732158234215.webp'
            alt='Promo Spesial'
            className='rounded-xl shadow w-56'
          />
          <img
            src='https://cdn.scalev.id/Image/iuQDv_XWTq5qzugAqf9OhYuiRj8VdnmpwZ0f8KAmOXg/1740108823242-images_3171531710837787904.webp'
            alt='Best Quality Icon'
            className='w-16'
          />
        </div>
      </div>

      {/* Footer Bawah */}
      <div className='text-center text-sm text-white/70 mt-12'>
        &copy; {new Date().getFullYear()} CleanOZ. Semua Hak Dilindungi.
      </div>
    </footer>
  );
};

export default FooterCTA;
