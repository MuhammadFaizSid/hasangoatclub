"use client"
import { useEffect, useState } from 'react'
import Product from '@/app/components/Product'
import productsStyles from '@/app/styles/products.module.css'
import { getProduct } from '@/app/productAPI'
import { InfinitySpin } from 'react-loader-spinner'

export default function Products(props) {
    const [products, setProducts] = useState({ loading: true, data: [], server_error: false, data_found: false })
    const callGetProducts = async () => {
        const response = await getProduct({category: props.service})
        setProducts({ ...products, ...response, loading: false })
    }

    useEffect(() => {
        callGetProducts()
    }, [])

    if (props.newProductAdded){
        callGetProducts()
        props.setNewProductAdded(false)
    }

    return (
        <>
            <div className={productsStyles.productsWrapper}>
            <h1>{props.service}</h1>
                <div className={productsStyles.products}>
                    {products.loading ? <InfinitySpin
                        visible={true}
                        width="140"
                        color="var(--primary)"
                        ariaLabel="infinity-spin-loading"
                    /> : products.server_error ? <h1>Server Error</h1> : products.data_found ? products.data.map((e, i) => {
                        return <Product key={`product_${i}`} admin={props.admin} id={e?.id} product_name={e?.product_name} description={e?.description} product_image_url={e?.product_image_url} code={e?.code} category={e?.category} price={e?.price} weight={e?.weight} in_stock={e?.in_stock} featured_image={e?.featured_image} />

                    }) : <h1 style={{color: 'var(--dark-gray'}}>No Data Found</h1>}

                </div>
            </div>
        </>
    );
}
