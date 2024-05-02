// // "use client"
// import React, { useState } from 'react'
// import productDetailsStyles from '@/app/styles/productDetails.module.css'
// import Image from 'next/image'
// import productStyles from '@/app/styles/product.module.css'
// import ScaleRoundedIcon from '@mui/icons-material/ScaleRounded';
// import { WhatsApp, Circle, CategoryRounded } from '@mui/icons-material';
// import { getProduct } from '@/app/productAPI'
// import { InfinitySpin } from 'react-loader-spinner'
// import { customCurrencyFormatter } from '@/app/services';
// import { whatsappLink } from '@/app/services'
// import PageNotFound from '@/app/components/PageNotFound'

// export async function getStaticPaths() {
//   const response = await getProduct()
//   const paths = response.data.map((product) => ({
//     params: { id: product.id },
//   }));

//   return { paths, fallback: false }; // Set fallback to 'blocking' or 'ignored' as needed
// }

// export async function generateStaticParams() {
//   const products = await getProduct()

//   return products.map((product) => ({
//     slug: product.id,
//   }))
// }


// export default function ProductDetails(props) {
//   // const [is404, setIs404] = useState(false)
//   // const [product, setProduct] = useState({ loading: true, data: [], server_error: false, data_found: false })
//   // const id = props.params.id
//   // const callGetProducts = async () => {
//   //   const response = await getProduct({ 'id': id })
//   //   setProduct({ ...product, ...response, data: response.data_found ? response.data : [], loading: false })

//   //   if (response.data_found) {
//   //     if (id !== response?.data.id) {
//   //       setIs404(true)
//   //     }

//   //   }
//   //   else{
//   //     setIs404(true)

//   //   }
//   //   return { data_found: response.data_found, data: response.data_found ? response.data : [] }
//   // }

//   // useEffect(() => {
//   //   callGetProducts()

//   // }, [])

//   // const price = customCurrencyFormatter.format(product?.data?.price)
// // 
//   const [is404, setIs404] = useState(false)
//   const [product, setProduct] = useState({ loading: true, data: [], server_error: false, data_found: false })
//   const id = props.params.id

//   const callGetProducts = async () => {
//     const response = await getProduct({ 'id': id })
//     const dataFound = response.data_found;
//     const data = dataFound ? response.data : [];

//     if (!dataFound || id !== response?.data.id) {
//       setIs404(true);
//       return { data_found: false, data: [] }; // Early exit for 404
//     }

//     // Update product state only if data is found and matches ID
//     setProduct({ ...product, ...response, data, loading: false });
//   }

//   callGetProducts() // Call on component mount

//   const price = customCurrencyFormatter.format(product?.data?.price)

//   return (
//     is404 ? <PageNotFound /> : product.loading ? <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50vh' }}> <InfinitySpin
//       visible={true}
//       width="140"
//       color="var(--primary)"
//       ariaLabel="infinity-spin-loading"
//     /> </div> : product.server_error ? <h1>Server Error</h1> : <section className={productDetailsStyles.wrapper}>
//       <div className={productDetailsStyles.content}>
//         <div className={productDetailsStyles.images}>
//           <div className={productDetailsStyles.currentImage}>
//             <Image alt={product?.data?.product_name} src={product?.data?.product_image_url} width={500} height={500} priority={true} quality={80}/>
//           </div>



//         </div>

//         <div className={`${productStyles.productDetails} ${productDetailsStyles.productDetails}`}>

//           <p className={productDetailsStyles.brandName}>HASSAN GOAT CLUB / {props.params.service}</p>
//           <div className={productDetailsStyles.productHeader}>
//             <h2 className={productStyles.productTitle}>{product?.data?.product_name}</h2>
//             <p className={productDetailsStyles.brandName}>CODE: {product?.data?.code}</p>
//           </div>


//           <p className={productDetailsStyles.productDescription}>
//             {product?.data?.description}

//           </p>

//           <div className={productStyles.productOtherDetails}>

//             <h4 className={productStyles.productOtherShortInfo}>
//               <span className={productStyles.productIconStyles}>
//                 <ScaleRoundedIcon />{product?.data?.weight}</span> <Circle className={'circle-dot-styles'} /> <span className={productStyles.productIconStyles}>
//                 <CategoryRounded />{product?.data?.category}</span> <Circle className={'circle-dot-styles'} /><span className={product?.data?.in_stock ? productStyles.inStock : productStyles.outOfStock}>{product?.data?.in_stock ? "In" : "Out of"} Stock</span>
//             </h4>
//           </div>
//           <h3 className={productStyles.productPrice}>{price}</h3>

//           <div className={`${productStyles.productActionButtons} ${productDetailsStyles.productActionButtons}`}>
//             <a href={whatsappLink({ product_name: product?.data?.product_name, code: product?.data?.code, price: price, service: props.params.service, id: product?.data?.id })} target='_blank' className='whatsapp-button' ><WhatsApp />Whatsapp</a>

//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }



// "use client"
import React from 'react'
import { getProduct } from '@/app/productAPI'
import ProductDetails from '@/app/components/ProductDetails';

export async function getStaticPaths() {
  const response = await getProduct()
  const paths = response.data.map((product) => {
    if (product.id) {
      // Check if id exists
      return {

        params: { id: product.id, service: product.category },
      };
    } else {
      // Handle missing id (e.g., log a warning or skip the product)
      console.warn('Product missing id:', product);
      return null; // Or return an empty object to avoid errors
    }
  });

  return { paths, fallback: 'blocking' }; // Set fallback to 'blocking' or 'ignored' as needed
}

export async function generateStaticParams() {
  try {
    const products = await getProduct();

    return {
      params: products.map((product) => ({
        id: product.id,
      })),
      dynamicParams: true
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return {
      params: [],
      dynamicParams: true // Or throw an error to stop the build process
    };
  }
}


export default function ProductDetailsPage(props) {

  return (
    <ProductDetails id={props.params.id} service={props.params.service} />
  )
}


export const revalidate = 10 