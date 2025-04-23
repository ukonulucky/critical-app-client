import {  useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {  registerApi } from "../apiServices/authApi";
import { signUpSchema } from "../utils/yubValidation";
import { useAppDispatch } from "../redux/store/store";
import LoadingScreen from "./loadingScreen";
import { AxiosError } from "axios";
import { toast } from "react-toastify";




// Define TypeScript types for form values
interface IFormInput {
    email: string;
    password: string;
    fullName: string
}

const RegisterComp = () => {
  // Initialize the form with react-hook-form and Yup resolver
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(signUpSchema)
  });

  /* dispatch a function for the store */
  const dispatch = useAppDispatch();

 

  /* show modal when email is not verified */



  const [userEmail, setUserEmail] = useState("");

  const [userToken, setUserToken] = useState("");
  /* for navigation */

 

  /* set the display of the loader */
  const [loader, setLoader] = useState(false);


  // Define the form submission handler

  const onSubmit = async (data: IFormInput) => {
    try {
      setLoader(!loader);
      /* make api call for user signUp */
      console.log("input data: ", data)
        const response = await registerApi(data)
      console.log("input data: ", data)
      console.log("input response", response)
      setLoader(!loader);
      toast.success(response.message)
    } catch (error) {
      let errorMessage;
      if (error instanceof AxiosError) {
        errorMessage = error.response?.data.message || error.message
      } else { 
        errorMessage = "Unknown error"
      }
      toast.error(errorMessage)
      setLoader(!loader);
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
        Register account
      </div>

      <div className="text-gray-500 text-sm font-normal font-['Inter'] leading-[18.90px]">
       Create a SmartTechBank account
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 w-full">

      <div className="flex flex-col space-y-1">
          <label className="text-slate-700 text-sm font-medium font-['Inter'] leading-[18px]">
            Fullname
          </label>
          <input
            {...register("fullName")}
            placeholder="user"
            className="text-slate-700 text-sm font-medium font-['Inter'] leading-[18px]
            w-[328px] h-[39px] px-2.5 py-2.5 bg-white rounded-lg shadow border border-gray-300 justify-start items-center mt-4
            "
          />
          <p className="text-red-700 text-sm font-medium font-['Inter'] leading-[18px] mt-4">
            {errors.fullName?.message}
          </p>
        </div>

        <div className="flex flex-col space-y-1 mt-2">
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
        <a href={"/auth/login"}>
          <p className="text-blue-950 text-sm font-semibold font-['Inter'] leading-[18.90px]">
           Login user
          </p>
        </a>
      </div>
    </div>
  );
};

export default RegisterComp;
