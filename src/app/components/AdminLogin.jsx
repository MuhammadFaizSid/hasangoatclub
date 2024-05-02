import React, { useState } from 'react'
import formStyles from '@/app/styles/form.module.css'
const AdminLogin = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState('')
    const handleLogin = (e) =>{
        e.preventDefault()
        if (username === "irfanshaheen" && password === "irfanshaheen@hgc#2024"){
            setErrors('')
            props.setLoginSuccess(true)
        }

        else{
            setErrors('Invalid username or password')

        }
    }
  return (
   <section className={formStyles.formWrapper}  >
   <form className={formStyles.form}  onSubmit={handleLogin}>
    <h1 className={formStyles.formHeading}>Login</h1>
    <input placeholder='username' required type='text' value={username} onChange={(e) => setUsername(e.target.value)}/>
    <input placeholder='password' required type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
    {errors ? <p className={formStyles.error}>{errors}</p> : ""}
    <button className='primary-button' type='submit'>Login</button>
   </form>
   </section>
  )
}

export default AdminLogin