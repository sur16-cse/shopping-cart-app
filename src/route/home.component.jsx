import React from 'react'
import { Outlet } from 'react-router-dom'
import Products from '../components/products/products.component.jsx'
const Home = () => {
  return (
    <div>
      <Outlet />
      <Products/>
    </div>
  )
}

export default Home