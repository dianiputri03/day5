import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Beranda from './pages/Beranda.jsx'
import Produk from './pages/Produk.jsx'
import Detail from './pages/Detail.jsx'
import Tentang from './pages/Tentang.jsx'
import Grafik from './pages/Grafik.jsx'
import Register from './pages/Register.jsx'
import Camera from './pages/Camera.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <NotFound />,
    children: [
      
      { path: '/', element: <Beranda /> },
      { path: '/register', element: <Register /> },
      { path: '/produk', element: <Produk /> },
      { path: '/detail', eleprodukment: <Detail /> },
      { path: '/tentang', element: <Tentang /> },
      { path: '/grafik', element: <Grafik /> },
      { path: '/detail/:id', element: <Detail /> },
      { path: '/camera', element: <Camera /> },






      



    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
