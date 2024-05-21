import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './routes/Home.jsx'
import Carrinho from './routes/Carrinho.jsx'
import './index.css'
import Compra from './components/compra/Compra.jsx'

const routers = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/carrinho',
    element: <Carrinho />
  },
  {
    path: "/compra",
    element: <Compra />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routers}/>
)
