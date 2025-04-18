import React, { useEffect, useRef, useState } from 'react';
import OTPInput from "react-otp-input";
/* import { useAppDispatch, useAppSelector } from '@/redux/store/store'; */

/* import { useMutation } from '@tanstack/react-query'; */
import { sendUserEmailForPasswordResetApi, verifyUserPasswordResetTokenApi } from '../apiServices/authApi';
import { toast } from 'react-toastify';

import CountDownTimer from '../components/countDownTimer';
/* import { setUserEmailAndTokenAction } from '@/redux/slices/authSlice'; */
import { AxiosError } from 'axios';
import LoadingScreen from './loadingScreen';



export default function ForgotPasswordVerificationComp() {
    /* get data from the store */

 /*    const userProfileState = useAppSelector(state => state.authReducer.userProfile) */

  /* const dispatch =  useAppDispatch() */
  /* route for navigation */

  /*   const router = useRouter() */


    const [otp, setOtp] = useState('');
      
    /* start call to the server to validate token obtained from mail */
    const [startApiCall, setStartApiCall] = useState(false)
  
    /* start call to the server to send mail to the user registered mail which contains the token */
    const [startEmailVerificationApi, setStartEmailVerificationApi] =
      useState(false)
  
    /* to show or hide the loader screen */
    const [loader, setLoader] = useState(false)
  
    /* controll sending of new mail to users mail which contains their token */
    const [resentMail, setResentMail] = useState(false)
  
    /* a count down timer for controlling when to active a new mail sending */
    
    const [counterKey, setCounterKey] = useState(1)
   
  /* start   useMutation*/


/*   const sendUserEmailForPasswordReset = useMutation({
    mutationKey: ['sendUserEmailPasswordResetKey'],
    mutationFn: sendUserEmailForPasswordResetApi
  }) */
 /*  const sendEmailVerificationMutation = useMutation({
    mutationKey: ['sendVerificationEmaiKey'],
    mutationFn: sendVerificationEmailApi
  }) */





  /* const {
    data: userResponse,
    error,
    isError,
    isPending,
    isSuccess
  } =  sendUserEmailForPasswordReset */

  /* make a call to the server demanding for email sending to user for verification */



  type errorType = {
    response: {
      data: {
        message: string
      }
    }
  }

/*   useEffect(() => {
    if (isError && startEmailVerificationApi) {
      setLoader(false)
      let errorMessage
      if (error instanceof AxiosError) { 
        if ( error?.response) {
          errorMessage = error?.response.data.message
        } else {
          errorMessage = error?.message
        }
      }

      toast.error(errorMessage)
      
      setLoader(false)
      setStartEmailVerificationApi(false)

      return
    }

    if (isPending && startEmailVerificationApi) {
      setLoader(true)
    }

    if (isSuccess && startEmailVerificationApi) {
      dispatch(setUserEmailAndTokenAction({
        token: "123456",
        userEmail: userProfileState.userEmail
      }))
      setCounterKey(counterKey + 1)
      toast.success(userResponse.message)
      setLoader(false)
      setStartEmailVerificationApi(false)
    }
  }, [isError, isPending, isSuccess, startEmailVerificationApi])
 */
  /* display of useMuation states for sending mail */
 


  /* make apicall to send email verification */
/*   useEffect(() => {
    ; (async () => {
      try {
        setStartEmailVerificationApi(true)
        await sendUserEmailForPasswordReset.mutateAsync({
          email:userProfileState.userEmail
        })
      } catch (error) {
        console.log(error)
      }
    })()
  }, [resentMail])

 */
  /* mutation to send four digit token for verification */


 /* start  useMutation to verify the users otp pin */

 /* const verifyUserPasswordResetTokenMutation = useMutation({
    mutationKey: ['verifyUserPasswordResetToken'],
    mutationFn: verifyUserPasswordResetTokenApi
  }) */
  
  
  
  /*   const {
      data: tokenVerificationData,
      error: tokenVerificationError,
      isError: tokeVerificationIsError,
      isPending: tokeVerificationIsPending,
      isSuccess: tokenVerificationIsSuccess
    } = verifyUserPasswordResetTokenMutation
     */
     
   /*  useEffect(() => {
      if (tokeVerificationIsError && startApiCall) {
          setLoader(false)
          setStartApiCall(false)
        let errorMessage
        if ( tokenVerificationError instanceof AxiosError && tokenVerificationError?.response) {
          errorMessage = tokenVerificationError?.response.data.message
        } else {
          errorMessage = tokenVerificationError?.message
        }
      toast.error(errorMessage)
     
  
        return
      }
  
      if (tokeVerificationIsPending && startApiCall) {
        setLoader(true)
      }
  
      if (tokenVerificationIsSuccess && startApiCall) {
        setLoader(false)
          setStartApiCall(false)
          toast.success(tokenVerificationData.message)
          router.push("/changepassword")
   
      }
    }, [
      startApiCall,
      tokeVerificationIsPending,
      tokeVerificationIsError,
      tokenVerificationIsSuccess
    ])
    */ 
    
  /* 
    const handleSubmit = async () => {
        try {
       
            setLoader(!loader)
            setStartApiCall(!startApiCall)
            await verifyUserPasswordResetTokenMutation.mutateAsync({
                token: '123456',
                email: userProfileState.userEmail
            })
        } catch (error: any) {
            console.log(error.message)
        } finally { 
            setLoader(false)
        }
    } */
  
    
    return <div className='flex flex-col '>
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
    /> */}
</div>
    <div>
   {/*  <Image
    src={"/images/Quible.png"}
    width={77}
    height={18.7}
   alt='quible log'

  /> */}
  </div>
  </div>
  <p className="text-gray-900 text-[26px] font-semibold font-['Inter'] leading-[35.10px] mt-12">Verify Code</p>

     <p className="text-gray-500 text-sm font-normal font-['Inter'] leading-[18.90px]">
       {/*   Please enter the code we just sent to email { userProfileState.userEmail } */}
  </p>

      <div className='mt-6'>   
   
      <OTPInput
             shouldAutoFocus={true}
             onChange={(data: any) => {
                 setOtp(data)
             }}
             value={otp}
             inputStyle="inputStyle"
             numInputs={5}
             renderSeparator={<span className='w-4 h-4'></span>} 
             renderInput={(props) => <input  maxLength={1}   {...props}  />}  
             inputType="tel"
           
         />  


           {/* submit button starts */}
        <button
          
                onClick={() => { 
                   /*  handleSubmit() */
                }
                }
                disabled={ otp.length === 5 ? false : true  || loader }
                className={`w-full h-[39px]  p-2.5  rounded-lg  justify-center items-center  inline-flex mt-4 ${otp.length !== 5 ? "bg-blue-950 bg-opacity-70 " : "bg-blue-950"}`}>
          <span className="text-white text-sm font-semibold font-['Inter'] leading-[18.90px]">
            { 
         loader ? "Please wait.." : "Verify code"

            }
            </span>
      </button>
     </div>
     
     <div className="flex-row items-center justify-center mt-2">
     <CountDownTimer
            key={counterKey}
             setResentEmail={setResentMail} 
             resentEmail={ resentMail } 
            />
         
         
          </div>



</div> 
    
    
}



