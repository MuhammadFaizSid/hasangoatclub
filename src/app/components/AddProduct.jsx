import React, { useState } from 'react'
import formStyles from '@/app/styles/form.module.css'
import { services } from '@/app/components/Navbar'
import { extractLinkValues } from '@/app/services'
import {push, ref, set } from "firebase/database";
import {
    getDownloadURL,
    ref as storageRef,
    uploadBytes,
  } from "firebase/storage";
import { db, storage } from '@/app/firebase';
import { InfinitySpin } from 'react-loader-spinner'
import { v4 as uuidv4 } from 'uuid';

const AddProduct = () => {
    const [productName, setProductName] = useState('')
    const [code, setCode] = useState('')
    const [weight, setWeight] = useState('')
    const [inStock, setInStock] = useState(true)
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [errors, setErrors] = useState('')
    const [success, setSuccess] = useState('')
    const [url, setUrl] = useState('')
    const [loading, setLoading] = useState(false)
    const linkValues = extractLinkValues(services)
    const [imageUpload, setImageUpload] = useState(null);

    async function uploadFile() {
        if (imageUpload === null) {
          alert("Please select an image");
          return;
        }
      
        const imageRef = storageRef(storage, `products/${uuidv4()}`);
        let whatToReturn;
      
        try {
          await uploadBytes(imageRef, imageUpload);
          const url = await getDownloadURL(imageRef);
          setUrl(url);
          whatToReturn = { upload_success: true, url: url };
        } catch (error) {
            console.log(error)
          whatToReturn = { upload_success: false };
        }
      
        return whatToReturn;
      }
      

    const handleAddProduct = async (e) => {

        e.preventDefault()
        setLoading(true)
        setErrors("")
        setSuccess("")
        try {
            const response = await uploadFile()
            if (response.upload_success){

            const data = {
                product_name: productName,
                code: code,
                weight: weight,
                in_stock: inStock,
                description: description,
                category: category,
                price: price,
                product_image_url: response.url,
            }

            // const dataRef = ref(db, 'products');
            // const newPostRef = push(dataRef);
            // await set(newPostRef, data);

            const dataRef = ref(db, 'products');
            const newListRef = push(dataRef); // Generate unique key for new item
            await set(newListRef, data);

            setProductName('')
            setCode('')
            setWeight('')
            setInStock(true)
            setDescription('')
            setCategory('')
            setPrice('')
            setSuccess("Data added successfully!");
            props.setNewProductAdded(true)
        }
        else{
          console.log(first)
            // setErrors(`Error uploading image`);
        }  




        } catch (error) {
            // setErrors(`Error adding data: ${error}`);
            console.log(error)
        }
        setLoading(false)

    };

 
  
 
  

    return (
        <section className={formStyles.formWrapper}  >
            <form style={{paddingBottom: '0'}} className={formStyles.form} onSubmit={loading ? () => {} : handleAddProduct}>
                <h1 className={formStyles.formHeading}>Add a Product</h1>
                <input placeholder='product name' required type='text' value={productName} onChange={(e) => setProductName(e.target.value)} />
                <input placeholder='code' required type='text' value={code} onChange={(e) => setCode(e.target.value)} />
                <input placeholder='weight' required type='text' value={weight} onChange={(e) => setWeight(e.target.value)} />
                <div className={formStyles.optionFieldWrapper}>
                <input
  placeholder="in stock"
  id="in_stock"
  type="checkbox"
  defaultChecked={true} // Set default to checked
  onChange={(e) => setInStock(e.target.checked)}
/>

                    <label htmlFor='in_stock' className={formStyles.fieldName}>In Stock</label>
                </div>
                <div className={formStyles.fieldWrapper}>
                    <label className={formStyles.fieldName}>Category</label>

                    {linkValues.map((e, i) => {
                        return <div key={`category_${i}`} className={formStyles.optionFieldWrapper}>
                            <input type='radio' name='category' value={e} id={e} checked={e === category} onClick={(e) => setCategory(e.target.value)} />
                            <label htmlFor={e} className={formStyles.fieldName}>{e}</label>
                        </div>
                    })}
                </div>
                <input placeholder='price' required type='number' value={price} onChange={(e) => setPrice(e.target.value)} />
                <textarea value={description} placeholder='description' onChange={(e) => setDescription(e.target.value)} />
                <input
  label="Image"
  placeholder="Choose image"
  accept="image/png,image/jpeg"
  type="file"
  onChange={(e) => {
    setImageUpload(e.target.files[0]);
  }}
/>
                {errors ? <p className={formStyles.error}>{errors}</p> : ""}
                {success ? <p className={formStyles.success}>{success}</p> : ""}
                <button disabled={!(productName && code && weight && description && category && price && imageUpload)} className='primary-button' type='submit'>
                {loading ? <InfinitySpin
                        visible={loading}
                        width="40"
                        color="var(--white)"
                        ariaLabel="infinity-spin-loading"
                    /> : "Add"}</button>
            </form>
        </section>
    )
}

export default AddProduct