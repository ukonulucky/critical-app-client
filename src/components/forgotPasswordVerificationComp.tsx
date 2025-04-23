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
   








    
    return <div className='flex flex-col'>
      {
      loader && <LoadingScreen />
      }
 
  <p className="text-gray-900 text-[26px] font-semibold font-['Inter'] leading-[35.10px] mt-12">Verify Code</p>

     <p className="text-gray-500 text-sm font-normal font-['Inter'] leading-[18.90px]">
       {/*   Please enter the code we just sent to email { userProfileState.userEmail } */}
  </p>

      <div className='mt-6 '>   
   
      <OTPInput
             shouldAutoFocus={true}
             onChange={(data: any) => {
                 setOtp(data)
             }}
                skipDefaultStyles={true}
              
             value={otp}
             inputStyle="w-12 h-12 border border-gray-300 rounded-md text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
             numInputs={5}
             renderSeparator={<span className='w-4 h-4 '></span>} 
                renderInput={(props) => <input maxLength={1}   {...props} />} 
                
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



