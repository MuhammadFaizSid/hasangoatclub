import React from 'react'
import toptitleStyles from '@/app/styles/toptitle.module.css'

const TopTitle = () => {
  return (
    <div className={toptitleStyles.title}>

        <div className={toptitleStyles.slider}>


        {/* <p className={toptitleStyles.titleText}></p> */}
  <ul>
    <li className={toptitleStyles.titleText}>السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ</li>
    <li className={toptitleStyles.titleText}>BOOK FOR ONLY 30% ADVANCE PAYMENT</li>
    <li className={toptitleStyles.titleText}>TOOK FROM OUR COLLECTION POINTS</li>
  </ul>
</div>
    </div>
  )
}

export default TopTitle