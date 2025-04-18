
import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginApi } from "../apiServices/authApi";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { loginSchema } from "../utils/yubValidation";
import { useAppDispatch } from "../redux/store/store";
import LoadingScreen from "./loadingScreen";
import EmailNotVerifiedModal from "./EmailVerificationModel";



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
    getValues,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(loginSchema),
  });

  /* dispatch a function for the store */
  const dispatch = useAppDispatch();

  /* control fetching of stores */

  const [fetchStores, setFetchStores] = useState(false);

  /* show modal when email is not verified */

  const [showVerifyEmailModel, setShowVerifyEmailModel] = useState(false);

  const [userEmail, setUserEmail] = useState("");

  const [userToken, setUserToken] = useState("");
  /* for navigation */

 

  /* set the display of the loader */
  const [loader, setLoader] = useState(false);

  /* start api call */
  const [startApiCall, setStartApiCall] = useState(false);

/*   const signInMutation = useMutation({
    mutationKey: ["signIn"],
    mutationFn: loginApi,
  }); */

  /*   get all stores associated in user email */

 /*  const storeMutation = useMutation({
    mutationKey: ["get-store"],
    mutationFn: getStoreApi,
  }); */

  /* obtain the different state for the loginApi response */

/*   const {
    data: userResponse,
    error,
    isError,
    isPending,
    isSuccess,
  } = signInMutation; */

  /* useEffect for responding to diffrent response from the user signin */
/* 
  useEffect(() => {
    if (isError && startApiCall) {
      setLoader(false);
      let errorMessage;
      if (error instanceof AxiosError && error?.response) {
        errorMessage = error?.response.data.message;
      } else {
        errorMessage = error?.message;
      }

      toast.error(errorMessage);
      setStartApiCall(false);
      setLoader(false);

      return;
    }

    if (isPending && startApiCall) {
      setLoader(true);
    }

    if (isSuccess && startApiCall) {
   
      if (!userResponse.data.user.email_verified) {
        setUserEmail(userResponse.data.user.email);

        setUserToken(userResponse.data.token);
        setShowVerifyEmailModel(true);
        setLoader(false);
        setStartApiCall(false);
        return;
      }

      setStartApiCall(false);
      const token = userResponse.data.token;

  
      const { fullname, email, phone, role, image} = userResponse.data.user
      
      dispatch(setUserBioAction({
        firstName: fullname.split(" ")[0],
        lastName: fullname.split(" ")[1] || "",
        phoneNumber: phone,
        token,
        userEmail: email,
        userImage: image || "",
        role,
      }))
      fetchStoreFunc(token);
    }
  }, [isError, isPending, isSuccess, startApiCall]);
 */
  // Define the form submission handler

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      setLoader(!loader);
      setStartApiCall(true);
      /* make api call for user signUp */

/*       await signInMutation.mutateAsync(data); */
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoader(false);
    }
  };

/*   const {
    data: storeResponse,
    isError: storeIsError,
    isPending: storeIsPending,
    isSuccess: storeIsSuccess,
    error: storeError,
  } = storeMutation; */

  /* useEffect for responding to fetching of stores */

/*   useEffect(() => {
    if (storeIsError && fetchStores) {
      let errorMessage;
      if (error instanceof AxiosError && error?.response) {
        errorMessage = error?.response.data.message;
      } else {
        errorMessage = error?.message;
      }

      toast.error(errorMessage);
      setFetchStores(false);
      setLoader(false);

      return;
    }

    if (storeIsPending && fetchStores) {
      setLoader(true);
    }

    if (storeIsSuccess && fetchStores) {
      if (storeResponse.data.stores.docs.length === 0) {
        setLoader(false);
        Cookies.set("adminToken", userToken);
        setFetchStores(false);
        const storeEmail = getValues("email");

        if (typeof window !== "undefined") {
          localStorage.setItem("userData", JSON.stringify(storeEmail));
        }

        router.push("/registerStore");
        return;
      }

      const { address, description, image, name, phone, _id, user } =
        storeResponse.data.stores.docs[0];

      const storeData = {
        address,
        description,
        image,
        name,
        phone,
        store_id: _id,
        user,
      };
      if (typeof window !== "undefined") {
        localStorage.setItem("store", JSON.stringify(storeData));
      }

      dispatch(
        addStoreData({
          address,
          description,
          image,
          name,
          phone,
          store_id: _id,
          user,
        })
      );
      Cookies.set("adminToken", userToken, {
        expires: 7,
      });
      Cookies.set("storeId", _id, {
        expires: 7,
      });
      setLoader(false);
      setFetchStores(false);
      router.push("/admin/storeDashboard");
      toast.success("User Logged in successfully");
    }
  }, [storeIsError, storeIsPending, storeIsSuccess, fetchStores]);
 */
  /* make apicall to fetch stres */

  const fetchStoreFunc = async (id: string) => {
    try {
      /* make api call to fetch stores */
      setUserToken(id);
      setFetchStores(true);
     // await storeMutation.mutateAsync({ jwtToken: id });
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="flex flex-col ">
 {loader && <LoadingScreen />}

      {showVerifyEmailModel && (
        <EmailNotVerifiedModal
          showVerifyEmailModel={showVerifyEmailModel}
          setShowVerifyEmailModel={setShowVerifyEmailModel}
          userEmail={userEmail}
          userToken={userToken}
        />
      )}
      <div className=" flex flex-row items-center space-x-2">
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
      <div className="text-gray-900 text-[26px] font-semibold font-['Inter'] mt-4 leading-[35.10px]">
        Sign in to continue
      </div>

      <div className="text-gray-500 text-sm font-normal font-['Inter'] leading-[18.90px]">
        Sign in to your Quible account
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
            href={"/resetpassword"}
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
          New to Qstore?
        </p>
        <a href={"/signUp"}>
          <p className="text-blue-950 text-sm font-semibold font-['Inter'] leading-[18.90px]">
            Register user
          </p>
        </a>
      </div>
    </div>
  );
};

export default LoginComp;
