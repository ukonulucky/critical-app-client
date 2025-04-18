'use client'
import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import { AxiosError } from 'axios'
import { useAppDispatch } from '../redux/store/store'
import LoadingScreen from './loadingScreen'



// Define the schema using Yup
const schema = yup.object({
  email: yup.string().email('Invalid email address').required('Email is required')
})

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

/*   const router = useRouter() */

    const [startApiCall, setStartApiCall] = useState(false)
  
    /* use mutation for forgotPassword */
    /* sendUserEmailForPasswordResetApi */
   /*  const sendUserEmailForPasswordResetMutation = useMutation({
      mutationKey: ['sendUserEmailForPasswordResetKey'],
      mutationFn: sendUserEmailForPasswordResetApi
    }) */
  
    
      /* obtain the different state for the loginApi response */
    
   /*    const { data: userResponseData, error, isError, isPending, isSuccess } =
        sendUserEmailForPasswordResetMutation */
  /*   
      useEffect(() => {
        if (isError && startApiCall) {
          setLoader(false)
          setStartApiCall(false)
          let errorMessage
          if (error instanceof AxiosError &&  error?.response) {
            errorMessage = error?.response.data.message
          } else {
            errorMessage = error?.message
          }
    
        toast.error(errorMessage)
          return
        }
    
        if (isPending && startApiCall) {
          setLoader(true)
        }
    
        if (isSuccess && startApiCall) {
          console.log("this is the response", userResponseData)
  
    
          setLoader(false)
          setStartApiCall(false)
          dispatch(setUserEmailAction({ userEmail: form.email }))
          router.push("/forgetPasswordVerification")
          
        }
      }, [isError, isPending, isSuccess, startApiCall])
    
 */
   /*  console.log(
      'response data',
      data,
      'isError:',
      isError,
      'isPending:',
      isPending,
      'isSuccess:',
      isSuccess,
      'errorMessage:',
      error?.message,
      'startapiCall:',
      startApiCall
    )
   */
    
  
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
        setStartApiCall(!startApiCall)
        /* make api call for user signUp */
        console.log('this is data new', data)
       /*  await sendUserEmailForPasswordResetMutation.mutateAsync(data) */
      } catch (error: any) {
        console.log(error.message)
      } finally {
        setLoader(false)
      }
    }
  

  // Initialize the form with react-hook-form and Yup resolver
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  })

  
  return (
    <div className='flex flex-col '>
      {
      loader && <LoadingScreen />
      }
      <div className=" flex flex-row items-center space-x-2 ">
        <div>
      {/*   <Image
        src={"/images/logo.png"}
        width={30}
        height={31}
          alt='quible logo'
        />
    </div>
        <div>
        <Image
        src={"/images/Quible.png"}
        width={77}
        height={18.7}
       alt='quible log'
    
      /> */}
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
