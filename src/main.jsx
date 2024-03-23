import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './routes/Home.jsx'
import Carrinho from './routes/Carrinho.jsx'
import './index.css'

const routers = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/carrinho',
    element: <Carrinho />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routers}/>
)
