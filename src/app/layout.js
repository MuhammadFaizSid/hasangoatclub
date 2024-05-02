import "./globals.css";
import { Onest  } from 'next/font/google'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import TopTitle from '@/app/components/TopTitle'
import ActionWhatsapp from '@/app/components/ActionWhatsapp'
const onest = Onest({ 
  subsets: ['latin'], variable: "--font-onest"})

export const metadata = {
  title: "Hasan Goat Club",
  description: "Buy goat for Qurbani and Aqeeqah in affordable price with best options!",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={onest.className}>
        <div style={{position: 'relative'}}>
      <TopTitle/>
      <Navbar/>
      <ActionWhatsapp/>

       
      {children}
      <Footer/>
      </div></body>
    </html>
  );
}
