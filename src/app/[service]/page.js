import React from 'react'
import Products from '@/app/components/Products'



export async function getStaticPaths() {
  const services = ['meat', 'qurbani', 'aqeeqa'];

  // const paths =  ['*', ...services].map((service) => ({
  //   params: { service },
  // }));


  const paths = [
    { params: { service: services[0] } }, // 'meat'
    { params: { service: services[1] } }, // 'qurbani'
    { params: { service: services[2] } }, // 'qurbani'
  ];

  // Add a catch-all route for other services (optional)
  // paths.push({ params: { service: '*' } });

  return { paths, fallback: false }; // Or fallback: 'blocking' for dynamic data fetching
}

export async function generateStaticParams() {
  const services = ['meat', 'qurbani', 'aqeeqa'];

  // return {
  //   params: services.map((service) => ({ service })),
  // };

  return services.map((service) => ({
    service: service,
  }))   
}

const Page = (props) => {
  return (
    <Products admin={false} home={false} service={props.params.service}/>
  )
}
Page.displayName = 'Services';

export default Page;