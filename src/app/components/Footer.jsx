import React from 'react'
import navbarStyles from '@/app/styles/navbar.module.css'
import { currentYear } from '@/app/services'
const Footer = () => {
  return (
    <nav className={navbarStyles.nav}>
              <ul>
            <li><a href={'https://wa.me/923316660067'} target='_blank'>© {currentYear}, HGC Powered by Muhammad Faiz Siddiqui</a></li>
        </ul>
    </nav>
  )
}

export default Footer