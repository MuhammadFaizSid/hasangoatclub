"use client"

import React, {useState} from 'react'
import productStyles from '@/app/styles/product.module.css'
import Link from 'next/link'
import ScaleRoundedIcon from '@mui/icons-material/ScaleRounded';
import { WhatsApp, CategoryRounded, Circle } from '@mui/icons-material';
import { customCurrencyFormatter } from '@/app/services';
import { whatsappLink } from '@/app/services';
import Image from 'next/image'
import { updateData } from '@/app/productAPI'; // Import your update function


const Product = (props) => {
  const price = customCurrencyFormatter.format(props?.price)
  const [inStock, setInStock] = useState(props?.in_stock)

  const handleUpdate = async (event) => {
    event.preventDefault();
    await updateData( { in_stock: !inStock }, `products/${props?.id}`); // Replace with your path
    // Handle success or error states based on the updateData function's response
    setInStock(!inStock)
  };
  return (
    
    <div className={productStyles.product}>
      <div className={productStyles.productImage}>
      <Link href={`/${props?.category}/${props?.id}`}>
        <Image alt={props?.product_name} src={props?.product_image_url} width={300} height={300} priority={true} quality={80}/>
        </Link>

      </div>
      <div className={productStyles.productDetails}>
      <Link href={`/${props?.category}/${props?.id}`}><h2 className={productStyles.productTitle}>{props?.product_name}</h2></Link>
        <div className={productStyles.productOtherDetails}>

        <h4 className={productStyles.productOtherShortInfo}>
          <span className={productStyles.productIconStyles}>
         <ScaleRoundedIcon/>{props?.weight}</span> <Circle className={'circle-dot-styles'}/> <span className={productStyles.productIconStyles}>
         <CategoryRounded/>{props?.category}</span><Circle className={'circle-dot-styles'}/> <span className={inStock ?  productStyles.inStock : productStyles.outOfStock}>{inStock ? "In" : "Out of"} Stock</span>
          </h4>
        </div>
        <h3 className={productStyles.productPrice}>{price}</h3>
       {props.admin ? <button style={{background: 'var(--black)'}} onClick={handleUpdate} className='primary-button'> {inStock ? "Out of" : "In"} Stock </button> : ''}

        <div className={productStyles.productActionButtons}>
        <Link href={`/${props?.category}/${props?.id}`} className='primary-button' >Details</Link>
        
        <a href={whatsappLink({product_name: props?.product_name, code: props?.code, price: price, service: props?.category, id: props?.id})} target='_blank' className='whatsapp-button' ><WhatsApp/>Whatsapp</a>

        </div>

      </div>
    </div>
  )
}

export default Product