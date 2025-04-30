
import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createTranferPinUserApi} from "../apiServices/authApi";
import { toast } from "react-toastify";
import {  transferPinSchema } from "../utils/yubValidation";
import { useAppDispatch, useAppSelector } from "../redux/store/store";
import LoadingScreen from "./loadingScreen";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { createTransferPinCompType } from "../utils/types";




// Define TypeScript types for form values
interface IFormInput {
transferPin: string
}

const CreateTransferPinComp = ({ 
  setShowModal,
  setShowVerifyPinModal,
  showModal,
  showVerifyPinModal
}:createTransferPinCompType) => {
  // Initialize the form with react-hook-form and Yup resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(transferPinSchema),
  });

  /* dispatch a function for the store */
  const dispatch = useAppDispatch();

  const navigate = useNavigate()

  /* for navigation */


  const jwtToken =  useAppSelector(state => state.authReducer.userProfile.token)
 

  /* set the display of the loader */
  const [loader, setLoader] = useState(false);
  // Define the form submission handler

    const onSubmit = async (data: { transferPin: string }) => {
        try {
     
            setLoader(!loader)
          const { status, message, } = await createTranferPinUserApi({
            jwtToken: jwtToken,
            transferPin: data.transferPin
          });
        
        setLoader(!loader);
            if (status === "success") { 
              toast.success(message)
              setShowModal(!showModal)
              setShowVerifyPinModal(!showVerifyPinModal)
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
      <div className="text-gray-500 text-sm font-normal font-['Inter'] leading-[18.90px]">
       Create Four Digit Transfer Pin
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 w-full">
        <div className="flex flex-col space-y-1">
          <label className="text-slate-700 text-sm font-medium font-['Inter'] leading-[18px]">
            Transfer Pin
          </label>
          <input
            {...register("transferPin")}
            placeholder="enter pin"
            type="number"
            className="text-slate-700 text-sm font-medium font-['Inter'] leading-[18px]
            w-[328px] h-[39px] px-2.5 py-2.5 bg-white rounded-lg shadow border border-gray-300 justify-start items-center mt-4
            "
          />
          <p className="text-red-700 text-sm font-medium font-['Inter'] leading-[18px] mt-4">
            {errors.transferPin?.message}
          </p>
        </div>
    
        {/* submit button starts */}
        <button
          disabled={loader}
          className="w-full h-[39px] p-2.5 bg-blue-600 rounded-lg  justify-center items-center  inline-flex mt-2"
        >
          <span className="text-white text-sm font-semibold font-['Inter'] leading-[18.90px]">
            {loader ? "Please wait..." : "Create pin"}
          </span>
        </button>
      </form>
    </div>
  );
};

export default CreateTransferPinComp;
