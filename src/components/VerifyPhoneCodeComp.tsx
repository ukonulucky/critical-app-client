import React, { useEffect, useRef, useState } from "react";
import OTPInput from "react-otp-input";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { useAppSelector } from "../redux/store/store";
import LoadingScreen from "./loadingScreen";
import CountDownTimer from "./countDownTimer";
import { verifyUserPhoneOtp } from "../apiServices/authApi";
import {  useNavigate } from "react-router-dom";


export default function VerifyPhoneCodeComp() {
  /* get data from the store */

  const userProfileState = useAppSelector(
    (state) => state.authReducer.userProfile
  );



  const navigate = useNavigate()


  const [otp, setOtp] = useState("");


  /* to show or hide the loader screen */
  const [loader, setLoader] = useState(false);

  /* controll sending of new mail to users mail which contains their token */
  const [resentMail, setResentMail] = useState(false);

  /* a count down timer for controlling when to active a new mail sending */
  const [resumeCounter, setResumeCounter] = useState(false);
  const [counterKey, setCounterKey] = useState(1);


 
 
  /* make apicall to send email verification */
 


  

 
  const handleSubmit = async () => {
    try {

      if (!userProfileState.userEmail) throw new Error("user email is required")
      setLoader(!loader);
   
      const { status,message } = await verifyUserPhoneOtp({
        OTP: otp,
        token: userProfileState.token
      })
      if (status === "success") { 
        toast.success(message)
        navigate("/home")
      }
     
         setLoader(!loader)
    } catch (error: any) {
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
  } ; 

  return (
    <div className="flex flex-col ">
      {loader && <LoadingScreen />}
      <div className=" flex flex-row items-center space-x-2 ">
        <div>
      
        </div>
      </div>
      <p className="text-gray-900 text-[26px] font-semibold font-['Inter'] leading-[35.10px] mt-12">
        Verify Phone OTP Code
      </p>

      <p className="text-gray-500 text-sm font-normal font-['Inter'] leading-[18.90px]">
        Please enter the code we just sent to {userProfileState?.phoneNumber}
      </p>

      <div className="mt-6">
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
            console.log("button clicked")
          handleSubmit();
          }}
          disabled={otp.length === 5 ? false : true }
          className={`w-full h-[39px]  p-2.5  rounded-lg  justify-center items-center  inline-flex mt-4 ${
            otp.length !== 5 ? "bg-blue-950 bg-opacity-70 " : "bg-blue-950"
          }`}
        >
          <span className="text-white text-sm font-semibold font-['Inter'] leading-[18.90px]">
            {loader ? "Please wait.." : "Verify code"}
          </span>
        </button>
      </div>

      <div className="flex-row items-center justify-center mt-2">
        <CountDownTimer
          key={counterKey}
          setResentEmail={setResentMail}
          resentEmail={resentMail}
        />
      </div>
    </div>
  );
}
