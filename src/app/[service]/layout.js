"use client"
import React, { useEffect, useState } from 'react'
import PageNotFound from '@/app/components/PageNotFound'
import { services } from '@/app/components/Navbar'
import { extractLinkValues } from '@/app/services'




const ProductLayout = ({ children, params }) => {
    const [is404, setIs404] = useState(false)



    useEffect(() => {
        const linkValues = extractLinkValues(services)

        if (!(linkValues.includes(params.service))) {
            setIs404(true)
        }
    }, [])
    return (
        is404 ? <PageNotFound /> : children 
    )
}

export default ProductLayout;