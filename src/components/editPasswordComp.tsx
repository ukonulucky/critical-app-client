/* import { updatePasswordApi } from "@/apiServices/qstoreApi";
import { setGlobalAppLoaderAction } from "@/redux/slices/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store/store"; */
import { changePasswordSchema } from "../utils/yubValidation";
import { yupResolver } from "@hookform/resolvers/yup";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function EditPasswordComp() {
  const [loader, setLoader] = useState(false);


  /* get app state */

  /* const { firstName, lastName, phoneNumber, token, userEmail, userImage} = useAppSelector(state => state.authReducer.userProfile)
const dispatch = useAppDispatch() */
  


  /* yup validation and react hook form */
  const formOptions = { resolver: yupResolver(changePasswordSchema) };

  const [form, setForm] = useState<{
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  }>({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const {
    control,
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  const onSubmit = async (data: {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  }) => {
    try {
  /*  dispatch(setGlobalAppLoaderAction(true))
      const response = await updatePasswordApi({
        new_password: data.newPassword,
        password: data.currentPassword
      })
      if (!response.error) {
        toast.success(response.message)
      }
      reset()
      dispatch(setGlobalAppLoaderAction(false)) */

    } catch (error: any) {
      const errorMessage = error.response.data.message || error.message || "Unknown error"
      toast.error(errorMessage)
    /*   dispatch(setGlobalAppLoaderAction(false)) */
    } finally {
    /*  dispatch(setGlobalAppLoaderAction(false)) */
    }
  };

 

  return (
    <div className="flex-1 p-8 border-gray-200 border-2 my-4 mb-8 bg-white rounded-md py-12 ">
      {/* form section starts */}
      <div className="flex flex-row justify-center md:justify-start md:space-x-8 items-start">
        <div className="hidden md:flex flex-col space-y-3 ">
          <div className="flex flex-col space-y-1">
            <span className="text-neutral-900 capitalize text-[18px] font-light font-['Inter'] leading-[19px]">
              Change Password
            </span>
            <span className="text-slate-600  text-base font-normal font-['Inter'] leading-[18px]">
              Update your password here.
            </span>
          </div>

          <div
            className="border-none rounded-lg flex items-center space-x-1  cursor-pointer bg-gray-400 py-2 w-max px-3"
            /* onClick={handleSubmit(onSubmit)} */
          >
            <span className="text-white capitalize text-[12px] font-['Inter'] leading-[19px]">
              Save Changes
            </span>
          </div>
        </div>
        <div className="">
          <form
            /* onSubmit={handleSubmit(onSubmit)} */
            className="flex flex-col items-center w-full  "
          >
            <div className="flex flex-col space-y-1 flex-1 ">
                <label className="text-slate-700 text-sm font-medium font-['Inter'] leading-[18px]">
                  Current Password
                </label>
                <input
                  {...register("currentPassword")}
                  placeholder="enter current password"
                  className="text-slate-700 text-sm font-medium font-['Inter'] leading-[18px] focus:border-transparent 
             h-[39px] px-2.5 py-2.5 bg-white rounded-lg shadow border border-gray-300 justify-start items-center mt-4  focus:outline-none
             w-[328px]
            "
                />
                <p className="text-red-700 text-sm font-medium font-['Inter'] leading-[18px] mt-4">
               {/*    {errors.currentPassword?.message} */}
                </p>
              </div>
              <div className="flex flex-col space-y-1 flex-1 mt-3">
                <label className="text-slate-700 text-sm font-medium font-['Inter'] leading-[18px]">
                  New Password
                </label>
                <input
                  {...register("newPassword")}
                  placeholder="enter new password"
                  className="text-slate-700 text-sm font-medium font-['Inter'] leading-[18px] focus:border-transparent 
            h-[39px] px-2.5 py-2.5 bg-white rounded-lg shadow border border-gray-300 justify-start items-center mt-4  focus:outline-none
            w-[328px] 
            "
                />
                <p className="text-red-700 text-sm font-medium font-['Inter'] leading-[18px] mt-4">
                 {/*  {errors.newPassword?.message} */}
                </p>
              </div>
            <div className="flex flex-col space-y-1 mt-3">
              <label className="text-slate-700 text-sm font-medium font-['Inter'] leading-[18px]">
                Confirm Password
              </label>
              <input
                {...register("confirmPassword")}
                placeholder="confirm password"
                className="text-slate-700 text-sm font-medium font-['Inter'] leading-[18px] focus:border-transparent 
            h-[39px] px-2.5 py-2.5 bg-white rounded-lg shadow border border-gray-300 justify-start items-center mt-4  focus:outline-none
            w-[328px]
           "
              />
              <p className="text-red-700 text-sm font-medium font-['Inter'] leading-[18px] mt-4">
              {/*   {errors.confirmPassword?.message} */}
              </p>
            </div>

            {/* Terms and condition section */}
            <div className="w-full">
                      <div
            className="border-none rounded-lg  flex items-center space-x-1  cursor-pointer bg-[#F27C22] py-2 w-max px-3 mt-4 md:hidden"
           /*  onClick={handleSubmit(onSubmit)} */
          >
            <span className="text-white capitalize text-[12px] font-['Inter'] leading-[19px]">
              Save Changes
            </span>
          </div>
          </div>
            {/* submit button starts */}
          </form>
        </div>
      </div>
      {/* form section ends */}
    </div>
  );
}

export default EditPasswordComp;