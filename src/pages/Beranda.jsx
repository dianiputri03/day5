import React from "react";
import { Link } from "react-router-dom"; // Import Link dari react-router-dom

function Beranda() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Selamat datang di Toko Dian!
          </h1>
          <p className="text-xl mb-8">
            Temukan produk terbaik dengan harga yang bersaing. Kami menyediakan
            berbagai pilihan untuk Anda!
          </p>
          {/* Menggunakan Link dari react-router-dom */}
          <Link
            to="/produk"
            className="bg-yellow-500 hover:bg-yellow-400 text-black py-2 px-6 rounded-lg text-xl transition duration-300"
          >
            Lihat Produk
          </Link>
        </div>
      </section>
      

      {/* Produk Section */}
      <section id="produk" className="py-20">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-semibold mb-8">Keunggulan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img
                src="https://mms.img.susercontent.com/b51e4a64c45fd7d851087821300417c9"
                alt="Produk 1"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold">Murah</h3>
              <p className="text-gray-600">Bisa nego</p>
              {/* Menggunakan Link untuk navigasi ke halaman detail */}
              <Link
                to="/detail-produk"
                className="text-blue-600 hover:text-blue-500 mt-4 inline-block"
              >
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <img
                src="https://narabahasa.id/web/wp-content/uploads/2024/06/Aman-1024x576.png"
                alt="Produk 2"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold">Aman</h3>
              <p className="text-gray-600">Aman aja</p>
              <Link
                to="/detail-produk"
                className="text-blue-600 hover:text-blue-500 mt-4 inline-block"
              >
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <img
                src="https://i0.wp.com/karna.id/wp-content/uploads/2019/12/Zona-Nyaman.png?fit=634%2C339&ssl=1"
                alt="Produk 3"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold">Nyaman</h3>
              <p className="text-gray-600">Nyaman banget</p>
              <Link
                to="/detail-produk"
                className="text-blue-600 hover:text-blue-500 mt-4 inline-block"
              >
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Toko Dian. All rights reserved.</p>
        </div>
      </footer>
    </div> 
  );
}

export default Beranda;
