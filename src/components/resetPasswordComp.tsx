'use client'
import React, {  useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import { AxiosError } from 'axios'
import { useAppDispatch } from '../redux/store/store'
import LoadingScreen from './loadingScreen'
import { resetPasswordSchema } from '../utils/yubValidation'
import { useNavigate } from 'react-router-dom';
import { sendUserEmailForPasswordResetApi } from '../apiServices/authApi'
import { setUserEmailAction } from '../redux/slices/authSlice'





// Define TypeScript types for form values
interface IFormInput {
  email: string
}

const ResetPasswordComp = () => {
  /* dispatch an action  */
  const dispatch = useAppDispatch()

    /* set the display of the loader */
  const [loader, setLoader] = useState(false)
  
  /* routing */

  const navigate = useNavigate()

 
  
    const [form, setForm] = useState<{
      email: string
    }>({
      email: ''
    })
  
  

  
    const onSubmit = async (data: { email: string }) => {
        try {
          
            
        setForm({
          email: data.email
        })
            setLoader(!loader)
            const { status, message, data:userData} = await sendUserEmailForPasswordResetApi(data)
       
            if (status === "success") { 
                // set user email and token

                toast.success(message)
                dispatch(setUserEmailAction({userEmail: userData.userEmail}))
                navigate("/auth/verifyCode")
              
            }
        /* make api call for user signUp */
      
     
        } catch (error) {
            setLoader(!loader)
                  let errorMessage;
                  if (error instanceof AxiosError && error?.response) {
                    errorMessage = error?.response.data.message
                  } else if (error instanceof Error) {
                    errorMessage = error.message
                   
                  } else { 
                    errorMessage = "Unknown Error";
                  }
                    toast.error(errorMessage)
      
      } finally {
        setLoader(false)
      }
    }
  

  // Initialize the form with react-hook-form and Yup resolver
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(resetPasswordSchema),
  })

  
  return (
    <div className='flex flex-col '>
      {
      loader && <LoadingScreen />
      }
      <div className=" flex flex-row items-center space-x-2 ">
        <div>
     
      </div>
      </div>
      <div className="text-gray-900 text-[26px] font-semibold font-['Inter'] leading-[35.10px] mt-12">Reset Password</div>

      <div className="text-gray-500 text-sm font-normal font-['Inter'] leading-[18.90px]">We will send a reset link to your email</div>

      <form onSubmit={handleSubmit(onSubmit)} className='mt-6 w-full'>
        <div className='flex flex-col space-y-1'>
          <label className="text-slate-700 text-sm font-medium font-['Inter'] leading-[18px]">Email</label>
          <input {...register('email')}
            placeholder='example@gmail.com'
            className="text-slate-700 text-sm font-medium font-['Inter'] leading-[18px]
            w-[328px] h-[39px] px-2.5 py-2.5 bg-white rounded-lg shadow border border-gray-300 justify-start items-center mt-4
            "
          />
          <p className="text-red-700 text-sm font-medium font-['Inter'] leading-[18px] mt-4">{errors.email?.message}</p>
        </div>
     
     {/* submit button starts */}
        <button disabled={ loader } className="w-full h-[39px] p-2.5 bg-blue-950 rounded-lg  justify-center items-center  inline-flex mt-6">
          <span className="text-white text-sm font-semibold font-['Inter'] leading-[18.90px]">
          {
            loader ? "Please wait.." : "Send me resetlink"
            }
            </span>
      </button>
        
      </form>
    </div>
  )
}

export default ResetPasswordComp
