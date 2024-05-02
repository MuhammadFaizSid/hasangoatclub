import React from 'react'
import headerStyles from '@/app/styles/header.module.css'
import { currentYear } from '@/app/services'

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <h1 className={headerStyles.headerHeading}>HASSAN GOAT CLUB</h1>
      <h2 className={headerStyles.headerHeadingSmall}>QURBANI SESSION {currentYear}</h2>
    </header>
  )
}

export default Header