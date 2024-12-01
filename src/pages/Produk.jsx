// import React from 'react';

// function Produk() {
//   const products = [
//     {
//       id: 1,
//       name: 'Ayam goreng',
//       description: 'Ayam goreng enak.',
//       price: 'Rp 100.000',
//       imageUrl: 'https://asset.kompas.com/crops/XrfZLJ_gi1qij-axwhcyRtA09mU=/0x0:4296x2864/1200x800/data/photo/2024/01/02/6593842f0f83c.jpg', // Ganti dengan URL gambar produk yang sesuai
//     },
//     {
//       id: 2,
//       name: 'Ikan bakar',
//       description: 'Ikan bakar mantul',
//       price: 'Rp 200.000',
//       imageUrl: 'https://cdn.betahita.id/8/9/1/4/8914.jpeg', // Ganti dengan URL gambar produk yang sesuai
//     },
//     // Tambahkan produk lainnya sesuai kebutuhan
//   ];

//   return (
//     <div className="container mx-auto p-6">
//       <h2 className="text-3xl font-semibold text-center mb-6">Produk Kami</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
//             <img
//               className="w-full h-48 object-cover"
//               src={product.imageUrl}
//               alt={product.name}
//             />
//             <div className="px-6 py-4">
//               <h3 className="font-bold text-xl mb-2">{product.name}</h3>
//               <p className="text-gray-700 text-base">{product.description}</p>
//               <p className="font-semibold text-gray-800">{product.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Produk;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Pastikan Anda mengimpor Link
import { baseUrl } from "../config";
import Spinner from "../components/Spinner";
export default function Produk() {
  const [isLoading, setIsLoading] = useState(false);
  const [dataProduk, setDataProduk] = useState(null);

  const loadData = () => {
    setIsLoading(true);
    axios
      .get(`${baseUrl}products`)
      .then((response) => {
        console.log(response.data);
        const hasil = response.data;
        setDataProduk(hasil);
      })
      .catch((error) => {
        alert(error);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    loadData();
    return () => {
      // Cleanup jika diperlukan
    };
  }, []);

  return (
    <>
      {isLoading || dataProduk == null ? (
        <Spinner />
      ) : (
        // <table className="w-full border">
        //   <thead>
        //     <tr>
        //       <th className="p-2">No</th>
        //       <th className="p-2">Nama</th>
        //       <th className="p-2">Harga</th>
        //       <th className="p-2">Deskripsi</th>
        //       <th className="p-2">Gambar</th>
        //       <th className="p-2 w-1/6">&nbsp;</th>
        //     </tr>
        //   </thead>
        //   <tbody>
        //     {dataProduk.map((item, index) => (
        //       <tr key={item.id}>
        //         <td className="p-2">{index + 1}</td>
        //         <td className="p-2">{item.title}</td>
        //         <td className="p-2">{item.price}</td>
        //         <td className="p-2">{item.description}</td>
        //         <td className="p-2">
        //           <img src={item.image} alt={item.title} width={100} />
        //         </td>
        //         <td className="p-2">
        //           <Link to={`/detail/${item.id}`}>Detail</Link>
        //         </td>
        //       </tr>
        //     ))}
        //   </tbody>
        // </table>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {dataProduk.map((item, index) => (
    <div key={index} className="border-2 border-gray-200 max-w-sm rounded overflow-hidden shadow-2xl flex flex-col">
      {/* Gambar */}
      <center>
        <img 
          src={item.image}
          alt={item.title}
          className="w-full h-48 object-contain mt-4"
        />
      </center>

      {/* Isi Card */}
      <div className="px-6 py-4 flex flex-col flex-grow">
        <div className="font-bold text-xl mb-2">{item.title}</div>
        <p className="text-gray-700 text-base text-justify">{item.description}</p>

      </div>

      {/* Tombol Detail */}
      <div className="px-6 py-4 mt-auto">
      <div className="mt-4 font-bold text-xl mb-10">{item.price}</div>
      <Link to={`/detail/${item.id}`}>
        <button className="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Detail </button>
      </Link>
      </div>
    </div>
  ))}
</div>


        

      )}
    </>
  );
}
