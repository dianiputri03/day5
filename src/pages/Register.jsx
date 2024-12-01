import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { addUserToDB } from '../configDB'; // Import fungsi IndexedDB


export default function Register() {
    const {
        register,
        handleSubmit,
        watch, // Melihat perubahan nilai dalam suatu field
        reset, // Reset form
        formState: { errors }, // Menangani pesan error
    } = useForm();

    const password = watch('password'); // Memantau nilai password
    const navigate = useNavigate

    // Fungsi onSubmit
    const onSubmit = async (data) => {
        // console.log(data); // Tampilkan data di console ketika form disubmit
        // alert("data berhasil didaftarkan")
        try {
            await addUserToDB(data); // Simpan data ke IndexedDB
            alert('Data berhasil didaftarkan dan disimpan di browser!');
        } catch (error) {
            console.error('Error saving data to IndexedDB:', error);
            alert('Terjadi kesalahan saat menyimpan data.');
        }

    };

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)} // Pastikan handleSubmit memanggil onSubmit
                className="max-w-md mx-auto p-6 bg-white rounded shadow-2xl border border-blue-300"
            >
                <h2 className="text-2xl font-bold mb-7">Form Registrasi</h2>

                {/* Nama */}
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Nama</label>
                    <input
                        type="text"
                        {...register("nama", { required: "Nama harus diisi." })}
                        className="w-full px-3 py-2 border rounded"
                    />
                    {errors.nama && (
                        <p className="text-red-500 text-sm mt-1">{errors.nama.message}</p>
                    )}
                </div>

                {/* Username */}
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Username</label>
                    <input
                        type="text"
                        {...register("username", { required: "Username harus diisi." })}
                        className="w-full px-3 py-2 border rounded"
                    />
                    {errors.username && (
                        <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
                    )}
                </div>

                {/* Password */}
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Password</label>
                    <input
                        type="password"
                        {...register("password", { required: "Password harus diisi." })}
                        className="w-full px-3 py-2 border rounded"
                    />
                    {errors.password && (
                        <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                    )}
                </div>

                {/* Ulangi Password */}
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Ulangi Password</label>
                    <input
                        type="password"
                        {...register("ulangiPassword", {
                            required: "Ulangi Password harus diisi.",
                            validate: (value) => {
                                // Bandingkan dengan password
                                return value === password || "Password tidak cocok.";
                            },
                        })}
                        className="w-full px-3 py-2 border rounded"
                    />
                    {errors.ulangiPassword && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.ulangiPassword.message}
                        </p>
                    )}
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Email</label>
                    <input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                </div>

                {/* Telepon */}
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Telepon</label>
                    <input
                        type="tel"
                        {...register("telp", {
                            required: "Telepon harus diisi.",
                            pattern: {
                                value: /^[0-9]*$/,
                                message: "Telepon harus berupa angka.",
                            },
                            minLength: {
                                value: 10,
                                message: "Telepon minimal 10 angka.",
                            },
                            maxLength: {
                                value: 12,
                                message: "Telepon maksimal 12 angka.",
                            },
                        })}
                        className="w-full px-3 py-2 border rounded"
                    />
                    {errors.telp && (
                        <p className="text-red-500 text-sm mt-1">{errors.telp.message}</p>
                    )}
                </div>
                {/* Foto */}
<div className="mb-4">
  <label className="block mb-1 font-medium">Foto</label>
  <input
    type="file"
    {...register("foto", {
      required: "Foto harus dipilih.",
    })}
    className="w-full px-3 py-2 border rounded"
    accept=".jpg,.jpeg,.png,.gif"
  />
  {errors.foto && (
    <p className="text-red-500 text-sm mt-1">{errors.foto.message}</p>
  )}
</div>

                {/* Button Register */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                >
                    Daftar
                </button>
            </form>
        </>
    );
}
