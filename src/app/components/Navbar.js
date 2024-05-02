"use client"
import React, { useState } from 'react'
import navbarStyles from '@/app/styles/navbar.module.css'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation';
import { currentYear } from '@/app/services'


export const services = [
  { 'name': `Qurbani ${currentYear}`, 'link': 'qurbani' },
  { 'name': 'Aqeeqa', 'link': 'aqeeqa' },
  { 'name': 'Meat', 'link': 'meat' },
]

const Navbar = () => {
  const router = useRouter()
  const pathname = usePathname()
  const url = pathname.split('/')
  const [active, setActive] = useState(url[url.length - 1])

  const navigate = (params) => {
    if (params?.is_home){
      setActive('')
      router.push('/')

    }
    else{
      setActive(params?.link)
      router.push(`/${params?.link}`)
    }
  }
  return (
    <nav className={navbarStyles.nav}>
      <button onClick={() => navigate({is_home:true})} href={'/'}><Image alt='logo'  style={{ borderRadius: '100px' }} src={'/logo.jpeg'} width={90} height={90} /></button>
      <ul>
        {services.map((e, i) => {
          return <li key={`navigation_${i}`}><button onClick={() => navigate({link: e.link})} className={active === e.link ? navbarStyles.active : ''} href={`/${e.link}`}>{e.name}</button></li>
        })}

        <li><a href={'https://wa.me/923316660067'} target='_blank'> 24/7 Whatsapp / Call +92 312 3900290</a></li>
      </ul>
    </nav>
  )
}

export default Navbar