
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { RiEyeCloseLine } from "react-icons/ri";
import { SlEye } from "react-icons/sl";



/* import { useMutation } from "@tanstack/react-query";
import { resetUserPasswordApi } from "@/apiServices/authApi"; */
import { toast } from "react-toastify";

import { AxiosError } from "axios";
import LoadingScreen from "./loadingScreen";

// Define the schema using Yup
const schema = yup.object({
  newPassword: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword"), undefined], "Password muust match")
    .required("Please confirm your password"),
});

// Define TypeScript types for form values
interface IFormInput {
  newPassword: string;
  confirmPassword: string;
}

const ChangePasswordComp = () => {
  /* userProfile data */
  /* const userProfile = useAppSelector((state) => state.authReducer.userProfile);
 */
  const [loader, setLoader] = useState(false);

  /* routing */

/*   const router = useRouter(); */
  /* manage state for showing and hidding of password */

  const [showPassword, setshowPassword] = useState(false);

  const [showConfirmPassword, setshowConfirmPassword] = useState(false);

  const [startApiCall, setStartApiCall] = useState(false);

  // Initialize the form with react-hook-form and Yup resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

 

 

 

  return (
    <div className="flex flex-col ">
      {/* show loader while making api call */}
      {loader && <LoadingScreen />}
    
      <div className="text-gray-900 text-[26px] font-semibold font-['Inter'] leading-[35.10px] mt-12">
        Change Password
      </div>

      <p className="text-gray-500 text-sm font-normal font-['Inter'] leading-[18.90px]">
        Set a new password for your account
      </p>

      <form  className="mt-6 w-full">
        <div className="flex flex-col space-y-1">
          <label className="text-slate-700 text-sm font-medium font-['Inter'] leading-[18px]">
            Password
          </label>
          <div className="rounded-lg shadow border border-gray-300  w-[328px] h-[39px] mt-4  px-1 bg-white  items-center flex flex-row">
            <input
              type={showPassword ? "text" : "password"}
              {...register("newPassword")}
              placeholder="**********"
              className="text-slate-700 text-sm font-medium font-['Inter'] leading-[18px] h-full focus:border-transparent focus:outline-none
            flex-1"
            />
            <div
              onClick={() => {
                setshowPassword(!showPassword);
              }}
            >
             {/*  {showPassword ? <SlEye /> : <RiEyeCloseLine />} */}
            </div>
          </div>
          <p className="text-red-700 text-sm font-medium font-['Inter'] leading-[18px] mt-4">
            {errors.newPassword?.message}
          </p>
        </div>

        <div className="flex flex-col space-y-1 mt-6">
          <label className="text-slate-700 text-sm font-medium font-['Inter'] leading-[18px]">
            Confirm Password
          </label>
          <div className="rounded-lg shadow border border-gray-300  w-[328px] h-[39px] mt-4  px-1 bg-white  items-center flex flex-row">
            <input
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirmPassword")}
              placeholder="**********"
              className="text-slate-700 text-sm font-medium font-['Inter'] leading-[18px] h-full focus:border-transparent focus:outline-none
            flex-1"
            />
            <div
              onClick={() => {
                setshowConfirmPassword(!showConfirmPassword);
              }}
            >
                         {/*  {
                              showPassword ? <SlEye /> : <RiEyeCloseLine />
                          } */}

            </div>
          </div>

          <p className="text-red-700 text-sm font-medium font-['Inter'] leading-[18px] mt-4">
            {errors.confirmPassword?.message}
          </p>
        </div>

        {/* submit button starts */}
        <button disabled={ loader } className="w-full h-[39px] p-2.5 bg-blue-950 rounded-lg  justify-center items-center  inline-flex mt-6">
          <span className="text-white text-sm font-semibold font-['Inter'] leading-[18.90px]">
          {
            loader ? "Please wait.." : "Set new password"
            } 
          </span>
        </button>
      </form>
    </div>
  );
};

export default ChangePasswordComp;
