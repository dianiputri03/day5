// 
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';
import {useEffect} from 'react';
import { baseUrl } from '../config';
import { Link } from 'react-router-dom';
export default function Detail() {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [detailProduk, setDetailProduk] = useState(null);

    const loadData = () => {
        setIsLoading(true);
        axios
            .get(`${baseUrl}products/${id}`)
            .then((response) => {
                console.log(response.data);
                const hasil = response.data;
                setDetailProduk(hasil);
            })
            .catch((error) => {
                alert(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    useEffect(() => {
        loadData();
        return () => {
            // Cleanup jika diperlukan
        };
    }, []);

    return (
      <>
      {
          isLoading || detailProduk == null ? (<Spinner/>) : (<>
          {/* <h1>Detail Produk</h1>
          <p>{detailProduk.title}</p>
          <p>{detailProduk.description}</p>
          <img src={detailProduk.image} width={200}/>
          <p>{detailProduk.price}</p>
          <p>{detailProduk.category}</p>
          <p>{detailProduk.rating.rate}</p> */}
          
<div className="max-w-sm w-full lg:max-w-full lg:flex h-100">
  <div className="mt-4 mb-4 h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{
            backgroundImage: `url(${detailProduk.image})`,
          }} title={detailProduk.title}>
  </div>
  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
      <div className="text-gray-900 font-bold text-xl mb-2">{detailProduk.title}</div>
      <p className="text-gray-700 text-base">{detailProduk.description}</p>
    </div>
      
      <center><div className="text-md">
        <p className="text-gray-900 leading-none font-bold">Price</p>
        <p className="text-gray-600 font-semibold">${detailProduk.price} </p>
      </div>
      </center>
      <Link to={`/produk`}>
        <button className="w-full mt-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Back </button>
      </Link>
  </div>
</div>
          </>)
      }
      </>
    )
  } 