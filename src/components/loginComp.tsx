
import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginApi, registerApi } from "../apiServices/authApi";
import { toast } from "react-toastify";
import { loginSchema } from "../utils/yubValidation";
import { useAppDispatch } from "../redux/store/store";
import LoadingScreen from "./loadingScreen";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { setAccountDetailsAction, setIsAuthenticated, setUserBioAction } from "../redux/slices/authSlice";



// Define TypeScript types for form values
interface IFormInput {
  email: string;
  password: string;
}

const LoginComp = () => {
  // Initialize the form with react-hook-form and Yup resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(loginSchema),
  });

  /* dispatch a function for the store */
  const dispatch = useAppDispatch();

  const navigate = useNavigate()

  /* for navigation */

 

  /* set the display of the loader */
  const [loader, setLoader] = useState(false);
  // Define the form submission handler

  const onSubmit = async (data: { email: string; password: string }) => {
      try {
      
          setLoader(!loader)
        const { status,bankData, message, user: { 
          fullName,
          email,
          phone,
          role,
          url,
          isPhoneVerified,
          status: userStatus }, user,token } = await loginApi(data);
      
      setLoader(!loader);
          if (status === "success") { 
            toast.success(message)
            dispatch(setUserBioAction({
              fullName,
              phoneNumber: phone,
              role,
              status:userStatus,
              token,
              url,
              userEmail: email
            }))
            dispatch(setIsAuthenticated(true))
            console.log("bankdata from client", bankData)
            if (bankData && isPhoneVerified) { 

             dispatch(setAccountDetailsAction({
              accountName: bankData.accountName,
              accountNumber: bankData.accountNumber,
              accountType: "savings",
              balance: bankData.balance
            }))
              navigate("/home")
            }
             else { 
              navigate("/welcome")
            }
           
          }
       

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
      setLoader(false);
    }
  };


  return (
    <div className="flex flex-col ">
 {loader && <LoadingScreen />}

      
      <div className=" flex flex-row items-center space-x-2">

      </div>
      <div className="text-gray-900 text-[26px] font-semibold font-['Inter'] mt-4 leading-[35.10px]">
        Sign in to continue
      </div>

      <div className="text-gray-500 text-sm font-normal font-['Inter'] leading-[18.90px]">
        Sign in to your SmartTechBank
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 w-full">
        <div className="flex flex-col space-y-1">
          <label className="text-slate-700 text-sm font-medium font-['Inter'] leading-[18px]">
            Email
          </label>
          <input
            {...register("email")}
            placeholder="example@gmail.com"
            className="text-slate-700 text-sm font-medium font-['Inter'] leading-[18px]
            w-[328px] h-[39px] px-2.5 py-2.5 bg-white rounded-lg shadow border border-gray-300 justify-start items-center mt-4
            "
          />
          <p className="text-red-700 text-sm font-medium font-['Inter'] leading-[18px] mt-4">
            {errors.email?.message}
          </p>
        </div>
        <div className="flex flex-col space-y-1 mt-2">
          <label className="text-slate-700 text-sm font-medium font-['Inter'] leading-[18px]">
            Password
          </label>
          <input
            type="password"
            {...register("password")}
            placeholder="*************"
            className="text-slate-700 text-sm font-medium font-['Inter'] leading-[18px]
            w-[328px] h-[39px] px-2.5 py-2.5 bg-white rounded-lg shadow border border-gray-300 justify-start items-center mt-4
            "
          />
          <p className="text-red-700 text-sm font-medium font-['Inter'] leading-[18px] mt-4">
            {errors.password?.message}
          </p>
        </div>

        <div className="mt-2">
          <a
            href={"/auth/resetPassword"}
            className="text-blue-950 text-sm font-semibold font-['Inter'] leading-[18.90px] "
          >
            Reset password
          </a>
        </div>

        {/* submit button starts */}
        <button
          disabled={loader}
          className="w-full h-[39px] p-2.5 bg-blue-950 rounded-lg  justify-center items-center  inline-flex mt-2"
        >
          <span className="text-white text-sm font-semibold font-['Inter'] leading-[18.90px]">
            {loader ? "Please wait..." : "Sign in to account"}
          </span>
        </button>
      </form>

      <div className="flex flex-row items-center mt-3 w-full justify-center space-x-1">
        <p className="text-slate-700/opacity-60 text-sm font-medium font-['Inter'] leading-[18px]">
          New to SmartTechBank?
        </p>
        <a href={"/auth/register"}>
          <p className="text-blue-950 text-sm font-semibold font-['Inter'] leading-[18.90px]">
            Register user
          </p>
        </a>
      </div>
    </div>
  );
};

export default LoginComp;
