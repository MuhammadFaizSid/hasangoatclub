const customCurrencyFormatter = new Intl.NumberFormat('en-US', { 
    style: 'currency',
    currency: 'PKR',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

const currentYear = new Date().getFullYear();


const whatsappNumber = "923133102636";
const whatsappLink = (params) => {
    const link = `https://hasangoatclub.io/hasangoatclub/${params.service}/${params.id}`
    const message = `السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ   
    %0a%0aI am interested in buying ${params?.product_name} [${params?.code}] of ${params?.price}. Kindly share further details.%0a%0aLink: ${link}
    `

    return `https://wa.me/${whatsappNumber}?text=${message}`
}

const extractLinkValues = (objectList) => {
  const linkValues = [];

  for (const obj of objectList) {
      if (obj.hasOwnProperty('link')) {
          linkValues.push(obj.link);
      }
  }

  return linkValues;
}


export {customCurrencyFormatter, whatsappNumber, currentYear, whatsappLink, extractLinkValues};