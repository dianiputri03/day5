import React, { useState } from "react"; // Hanya import useState

export default function Tentang() {
  let angkaVar = 0;
  const [angkaState, setAngkaState] = useState(0);
  const [nama, setNama] = useState(""); // Menambahkan state untuk nama

  function bilangHalo() {
    alert("Halo");
  }

  const bilangHaloParam = (nama) => {
    alert(`Halo ${nama}`);
  };

  function tambah() {
    angkaVar = angkaVar + 1;  // Update angkaVar untuk increment
    let angkaBaru = angkaState + 1;
    setAngkaState(angkaBaru);
  }

  function kurang() {
    angkaVar = angkaVar - 1;  // Update angkaVar untuk decrement
    let angkaBaru = angkaState - 1;
    setAngkaState(angkaBaru);
  }

  // Fungsi untuk mengubah nama
  const ubahNama = (event) => {
    setNama(event.target.value); // Mengupdate state nama dengan nilai input
  };

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => bilangHaloParam("Budi")}
      >
        Klik ini
      </button>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={bilangHalo}
      >
        Klik itu
      </button>

      <hr />

      Angka Var: {angkaVar} <br />
      Angka State: {angkaState} <br />

      <button
        className="ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={tambah}
      >
        Tambah
      </button>

      <button
        className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={kurang}
      >
        Kurang
      </button>

      <br />

      {/* Input untuk mengubah nama */}
      <input
        type="text"
        placeholder="Masukkan nama"
        onChange={ubahNama}
        value={nama} // Menambahkan value agar input bisa menampilkan nama dari state
      />
      <br />

      {/* Menampilkan Hai + nama */}
      {nama && <p>Hai, {nama}!</p>}
    </div>
  );
}
