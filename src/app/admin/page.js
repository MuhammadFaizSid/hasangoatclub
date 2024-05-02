"use client"
import React, { useState } from 'react'
import AdminLogin from '@/app/components/AdminLogin'
import AddProduct from '@/app/components/AddProduct'
import Products from '@/app/components/Products'
// need to commit // now
const Page = () => {
    const [loginSuccess, setLoginSuccess] = useState(false) 
    const [newProductAdded, setNewProductAdded] = useState(false) 
  return (
    loginSuccess ? <>
    
    <AddProduct setNewProductAdded={setNewProductAdded}/>
    <Products newProductAdded={newProductAdded} setNewProductAdded={setNewProductAdded} admin={true} home={true}/>

    </>
     : <AdminLogin setLoginSuccess={setLoginSuccess}/>
  )
}

export default Page