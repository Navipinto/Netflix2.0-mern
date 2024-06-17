import React, { useState } from 'react'
import netflixmernlogo from '../assets/netflixmernlogo.png'
import { useForm } from "react-hook-form"
import { useAuth } from '../Context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import {toast} from 'react-hot-toast'
import { useSelector } from 'react-redux'

function Signup() {
    const [showpass, setshowpass] = useState(false)
    const Loading = useSelector((store) => store.user.isLoading)

    const navigate= useNavigate()

    const {Signup}=useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    setshowpass(true)
    if(data.email&&data.username&&data.password)
      {
      const response=await Signup(data.username, data.email, data.password)
      if(response==true)
        {
          navigate("/login")
          toast.success("Sign Up Successful!")
        }
      else
      {
        toast.error("sign up failed!")
      }
      }
  }

    
  return (
    <div>
      <div className='flex flex-row justify-center bg-black w-full h-screen'>

            <img src={netflixmernlogo} alt="" className='z-10 absolute w-56 left-12 '/>
            <Link to="login" className='px-4 py-1 bg-red-600 text-white font-semibold absolute z-10 right-12 my-10 rounded-sm'>Login</Link>
          <img src="https://analyticsindiamag.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg" alt="" className='w-full h-screen absolute hidden md:block' />
              <div className='absolute h-screen w-full flex flex-col items-center justify-center text-white'>

              <h2 className='md:text-6xl text-4xl font-bold md:w-2/5 w-96'>Unlimited films, TV programmes and more.</h2>
              <p className=' text-xl font-sans my-3'>Watch anywhere. Cancel at any time.</p>
              <form className='flex flex-col xl:flex-row justify-center items-center gap-1 px-3' onSubmit={handleSubmit(onSubmit)}>
            <input type="email" placeholder='&nbsp;Email address' className='w-96 h-11 text-black rounded-sm font-semibold px-2' {...register("email", { required: true })} required />
            {errors.email && <span>This field is required</span>}
            {showpass && (<input type="username" placeholder='&nbsp;Username' className='w-96 h-11 text-black rounded-sm px-2 font-semibold' {...register("username", { required: true })} required />)}
            {errors.username && <span>This field is required</span>}
            {showpass && (<input type="password" placeholder='&nbsp;Password' className='w-96 h-11 text-black rounded-sm px-2 font-semibold' {...register("password", { required: true })} required />)}
            {errors.password && <span>This field is required</span>} 
            <button className="-ms-1 px-5 py-2 text-xl bg-red-600"> {Loading ? `Loading` :`Try it now >`}</button>
              </form>
                  <p className='text-md font-sans my-3'>Ready to watch ? Enter your email to create or access your account.</p>
          </div>
        </div>
        </div>
  )
}

export default Signup