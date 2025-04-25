import React, { useState } from 'react'
import { WelcomeDashboardProps } from '../utils/types';
import { useAppSelector } from '../redux/store/store';
import { sendUserPhoneApi } from '../apiServices/authApi';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';




function WelcomePage() {
    const [loader, setLoader] = useState(false)
  const { userEmail, fullName, phoneNumber, token} = useAppSelector(state => state.authReducer.userProfile)

const navigate = useNavigate()

   const handleSubmit = async () => {
         try {

           setLoader(!loader)
           const { status, message} = await sendUserPhoneApi({
             phone: phoneNumber,
             token
           })
      setLoader(!loader)
           if (!status) { 
               throw new Error("Failed to change password")
           }
           navigate("/phone/verify")
           toast.success(message) 
             }
         /* make api call for user signUp */
        catch (error) {
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
     }



  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-10">
      <div className="bg-blue-50 rounded-2xl shadow-xl w-full max-w-md p-8">
        <h1 className="text-2xl font-bold text-blue-900">Welcome, {fullName} 👋</h1>
        <p className="text-sm text-gray-600 mt-1">{userEmail}</p>

        <div className="mt-6">
          <p className="text-blue-800 font-medium text-lg">
            Your account has been successfully created!
          </p>
          <p className="text-sm text-gray-500 mt-2">
            To complete your profile, please verify your phone number.
          </p>
        </div>

        <button
          onClick={() => handleSubmit()}
          className="mt-6 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 w-full rounded-lg transition duration-300"
        >
          Verify Phone Number
        </button>
      </div>
    </div>
  );
}

export default WelcomePage
