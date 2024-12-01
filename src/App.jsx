import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar link={[
        { path: "/", name: "Home" }, 
        { path: "/produk", name: "Produk" }, 
        { path: "/register", name: "Register" },
        // { path: "/tentang", name: "Tentang" },
        { path: "/grafik", name: "Grafik" },
        { path: "/camera", name: "Camera" },



        ]} />
      {/* Tempat halaman anak dirender sesuai dengan rute yang dipilih */}
      <div className="container mx-auto p-6">
        <Outlet /> {/* Ini akan menampilkan konten anak */}
      </div>
      {/* <link to="/register" className="hover:text-blue-300">Register</link> */}
    </>
  );
}

export default App;
