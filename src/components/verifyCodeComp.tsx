import React, { useEffect, useRef, useState } from "react";
import OTPInput from "react-otp-input";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { useAppSelector } from "../redux/store/store";
import LoadingScreen from "./loadingScreen";
import CountDownTimer from "./countDownTimer";

export default function VerifyCodeComp() {
  /* get data from the store */

  const userProfileState = useAppSelector(
    (state) => state.authReducer.userProfile
  );

  /* route for navigation */

/*   const router = useRouter(); */

  console.log("this is the router data", userProfileState);

  const [otp, setOtp] = useState("");

  /* start call to the server to validate token obtained from mail */
  const [startApiCall, setStartApiCall] = useState(false);

  /* start call to the server to send mail to the user registered mail which contains the token */
  const [startEmailVerificationApi, setStartEmailVerificationApi] =
    useState(false);

  /* to show or hide the loader screen */
  const [loader, setLoader] = useState(false);

  /* controll sending of new mail to users mail which contains their token */
  const [resentMail, setResentMail] = useState(false);

  /* a count down timer for controlling when to active a new mail sending */
  const [resumeCounter, setResumeCounter] = useState(false);
  const [counterKey, setCounterKey] = useState(1);

  /* start   useMutation*/

  /* const sendEmailVerificationMutation = useMutation({
    mutationKey: ["sendVerificationEmaiKey"],
    mutationFn: sendVerificationEmailApi,
  }); */

/*   const {
    data: userResponse,
    error,
    isError,
    isPending,
    isSuccess,
  } = sendEmailVerificationMutation; */

  /* make a call to the server demanding for email sending to user for verification */

 /*  useEffect(() => {
    if (isError && startEmailVerificationApi) {
      console.log("error ran in verifyCode", error);
      setLoader(false);
      let errorMessage;
      if (error instanceof AxiosError && error?.response) {
        errorMessage = error?.response.data.message;
      } else {
        errorMessage = error?.message;
      }

      toast.error(errorMessage);

      setLoader(false);
      setStartEmailVerificationApi(false);
      return;
    }

    if (isPending && startEmailVerificationApi) {
      setLoader(true);
    }

    if (isSuccess && startEmailVerificationApi) {
      setCounterKey(counterKey + 1);
      toast.success(userResponse.message);
      setLoader(false);
      setStartEmailVerificationApi(false);
    }
  }, [isError, isPending, isSuccess, startEmailVerificationApi]);
 */
  console.log("resendEmail:", resentMail);
  /* make apicall to send email verification */
  useEffect(() => {
    (async () => {
      try {
        console.log("code has ren here");
        if (!userProfileState.token) {
          toast.error("Email not found, failed to send email");
          return;
        }
        setStartEmailVerificationApi(true);
        console.log("this is the token", userProfileState.token);
      /*   await sendEmailVerificationMutation.mutateAsync(userProfileState.token); */
      } catch (error) {
        setLoader(false);
      } finally {
        setLoader(false);
      }
    })();
  }, [resentMail]);

  /* mutation to send four digit token for verification */

/*   const sendTokenForVerification = useMutation({
    mutationKey: ["token-validation"],
    mutationFn: verifyEmailApi,
  }); */

 /*  const {
    data: tokenVerificationData,
    error: tokenVerificationError,
    isError: tokeVerificationIsError,
    isPending: tokeVerificationIsPending,
    isSuccess: tokenVerificationIsSuccess,
  } = sendTokenForVerification; */

 /*  useEffect(() => {
    if (tokeVerificationIsError && startApiCall) {
      console.log("error ran in verifyCode", tokenVerificationError);
      setLoader(false);
      let errorMessage;
      if (
        tokenVerificationError instanceof AxiosError &&
        tokenVerificationError?.response
      ) {
        errorMessage = tokenVerificationError?.response.data.message;
      } else {
        errorMessage = tokenVerificationError?.message;
      }

      toast.error(errorMessage);
      setLoader(false);
      setStartApiCall(false);

      return;
    }

    if (tokeVerificationIsPending && startApiCall) {
      setLoader(true);
    }

    if (tokenVerificationIsSuccess && startApiCall) {
      setLoader(false);
      setStartApiCall(false);
      toast.success(tokenVerificationData.message);
      router.push("/emailVerificationSuccess");
    }
  }, [
    startApiCall,
    tokeVerificationIsPending,
    tokeVerificationIsError,
    tokenVerificationIsSuccess,
  ]);
 */
/*   const handleSubmit = async () => {
    try {
      setLoader(true);
      setStartApiCall(!startApiCall);
      await sendTokenForVerification.mutateAsync({
        token: "123456",
        jwtToken: userProfileState.token,
      });
    } catch (error: any) {
      console.log(error.message);
    }
  }; */

  return (
    <div className="flex flex-col ">
      {loader && <LoadingScreen />}
      <div className=" flex flex-row items-center space-x-2 ">
        <div>
        {/*   <image
            src={"/images/logo.png"}
            width={30}
            height={31}
            alt="quible logo"
          />
        </div>
        <div>
          <image
            src={"/images/Quible.png"}
            width={77}
            height={18.7}
            alt="quible log"
          /> */}
        </div>
      </div>
      <p className="text-gray-900 text-[26px] font-semibold font-['Inter'] leading-[35.10px] mt-12">
        Verify Code
      </p>

      <p className="text-gray-500 text-sm font-normal font-['Inter'] leading-[18.90px]">
        Please enter the code we just sent to email {userProfileState.userEmail}
      </p>

      <div className="mt-6">
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
          //  handleSubmit();
          }}
          disabled={otp.length === 5 ? false : true || loader}
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
