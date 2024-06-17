import React from 'react'
import logo from '../assets/netflixmernlogo.png'
import {Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { useAuth } from '../Context/AuthContext'
import {toast} from 'react-hot-toast';
import { useSelector } from 'react-redux'

function Login() {
  const { LoginData } = useAuth()
  const Loading=useSelector((store)=>store.user.isLoading)
  const navigate=useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
      const response = await LoginData( data.email, data.password)
      if (response == true) {
        navigate("/home")
        toast.success("Login successful!")
      }
      else {
        toast.error("Login Failed!")
      }
    }
  return (
    <div className='w-full h-screen'>
        <img src={logo} alt="logo" className='z-10 w-56 mx-9 -mt-4 absolute' />
      <img src={`https://xxboxnews.blob.core.windows.net/prod/sites/2/2023/05/Background-size1920x1080-4e1694a6-75aa-4c36-9d4d-7fb6a3102005-bc5318781aad7f5c8520.png`} alt="background" className='w-full h-screen bg-gradient-to-b from-black to-black absolute' />
        <div className='flex flex-col items-center justify-center h-screen'>
              <div className='z-10 absolute bg-black px-8 py-6 rounded-md text-gray-400 bg-opacity-80 flex flex-col items-start self-center my-[7%]'>
                <h2 className='text-3xl font-semibold py-4'>Sign In</h2>
          <form className='flex flex-col gap-3' onSubmit={handleSubmit(onSubmit)}>
            <input type="email" placeholder="Enter the email" className="input input-bordered w-96 max-w-xs h-12 rounded-md bg-gray-900 px-2" {...register("email", { required: true })} required />
            {errors.email && <span>This field is required</span>}
            <input type="password" placeholder="Enter the password" className="input input-bordered w-96 max-w-xs h-12 rounded-md bg-gray-900 px-2" {...register("password", { required: true })} required />
            {errors.password && <span>This field is required</span>}
                      <button className='py-2 px-3 bg-red-500 rounded-md text-white font-semibold my-5'>{Loading?"Loading":"Sign in"}</button>
                  <div className='flex flex-row gap-24 items-center'>
                      <p ><input type='checkbox' className='mx-2 '/>Remember me</p>
                      <a href="signup">Need help?</a>
                  </div>
              </form>
              <div className='flex flex-col items-start text-start'>
                <p className='mx-1 text-xl my-6'>New to Netflix?<Link to="/" className='font-semibold text-white mx-1'>Sign Up now</Link></p>
                <p className='w-80 text-sm'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn more</a></p>
              </div>
        </div>
    </div>
    </div>
  )
}

export default Login