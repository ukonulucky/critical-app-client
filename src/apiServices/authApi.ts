import { apiLoginType, apiRegisterType,  } from '../utils/types'
import axios from 'axios'
import Cookies from "js-cookie"


const baseUrl = 'http://localhost:5000/api/v1'

/* register api */
export const registerApi = async (data: apiRegisterType) => {
 
    const response = await axios.post(`${baseUrl}/user/register`, data)
    console.log("this is the response", response)
  return response.data 
} 

/* register login api */
export const loginApi = async (data: apiLoginType) => {
  const response = await axios.post(`${baseUrl}/user/login`, data)
  return response.data
}

/* verify email otp inputed  by user api */
export const verifyEmailApi = async (data: {
  jwtToken: string
  token: string
}) => {
  const response = await axios.post(
    `${baseUrl}/user/verify-email`,
    { token: data.token },
    {
      headers: {
        Authorization: `Bearer ${data.jwtToken}`
      }
    }
  )
  return response.data
}

/* send verification email to user  api */

export const sendVerificationEmailApi = async (token: string) => {

  const response = await axios.get(`${baseUrl}/user/send-verification-email`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response.data
}

/* send user email for password reset */

export const sendUserEmailForPasswordResetApi = async (data: {
  email: string
}) => {
  /* user/send-password-token */
 
  const response = await axios.post(`${baseUrl}/user/forgotPasswordOTPSender`, data)
  
  console.log("data gotten", response)
  
  return response.data
 
}

/* verify user password reset token sent to user email */

/* 
verifyUserPasswordResetTokenApi
*/
export const verifyUserPasswordResetTokenApi = async (data: {
  email: string
  token: string
}) => {
  const response = await axios.post(`${baseUrl}/user/changePassword/OTPveirfy`, data)
  return response.data
}

/* Reset the user password */
export const resetUserPasswordApi = async (data: {
  email: string
  password: string
}) => {
  const response = await axios.post(`${baseUrl}/user/reset-password`, data)
  return response.data
}


// send apicall to send user phone number an OTP

export const sendUserPhoneApi = async (data: {
  phone: string,
  token: string
}) => {
  const response = await axios.post(`${baseUrl}/user/registerPhone`, data, {
    headers: {
      "Authorization": `Bearer ${data.token}`
    }
  })
  return response.data
}

// verify otp sent to users phone
export const verifyUserPhoneOtp = async (data: {
  OTP: string,
  token: string
}) => {
  const response = await axios.post(`${baseUrl}/user/verifyPhone`, data, {
    headers: {
      "Authorization": `Bearer ${data.token}`
    }
  })
  return response.data
}


/* logout user */

export const logOutUserApi = async (data: {
  jwtToken: string
 }) => {
  console.log("ran here from logout func")
  const jwtToken = Cookies.get("adminToken");


  const response = await axios.get(`${baseUrl}/user/logout`, {
    headers: {
      Authorization: `Bearer ${data.jwtToken}`
    }
  })
  return response.data
}



///account/transferPinCreation

export const createTranferPinUserApi = async (data: {
  jwtToken: string,
  transferPin: string
 }) => {
 
  const response = await axios.post(`${baseUrl}/user/account/transferPinCreation`, {
   transferPin: data.transferPin
  }, {
    headers: {
      Authorization: `Bearer ${data.jwtToken}`
    }
  })
  return response.data
}







