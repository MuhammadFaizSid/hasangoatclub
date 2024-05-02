"use client"
import Header from '@/app/components/Header'
import productsStyles from '@/app/styles/products.module.css'
import { db } from './firebase';
import { collection, getDocs } from "firebase/firestore";
import Products from '@/app/components/Products'

export async function getServerData() {
  const querySnapshot = await getDocs(collection(db, "hasangoatclub"));
  let data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });

  return { props: { data } }; 
}

export default function Home() {
  return (
    <>
    <Header/>
    <Products admin={false}  home={true}/>
    </>
  );
}
