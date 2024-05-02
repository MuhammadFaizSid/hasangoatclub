import React from 'react'
import Image from 'next/image'
import { whatsappNumber } from '@/app/services'
const ActionWhatsapp = () => {
  return (
   <a target='_blank' href={`https://wa.me/${whatsappNumber}?text=السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ %0a%0a Kindly share me the details of ...`} style={{position:'fixed', bottom: '30px', right: '30px', zIndex: '10000'}}><Image alt='whatsapp logo' src={'/Whatsapp.png'} width={68} height={68}/></a>
  )
}

export default ActionWhatsapp