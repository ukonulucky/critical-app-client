import { apiLoginType, apiRegisterType, resgisterStoreApiType } from '../utils/types'
import axios from 'axios'
import Cookies from "js-cookie"


const baseUrl = 'https://quible-backend-c1fb17382f2e.herokuapp.com/api'

/* register api */
export const registerApi = async (data: apiRegisterType) => {
 
 const response = await axios.post(`${baseUrl}/user/register`, data)
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
 
  const response = await axios.post(`${baseUrl}/user/send-password-token`, data)
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
  const response = await axios.post(`${baseUrl}/user/verify-reset-token`, data)
  return response.data
}

/* Reset the user password */
export const resetUserPasswordApi = async (data: {
  email: string
  token: string
  password: string
}) => {
  const response = await axios.post(`${baseUrl}/user/reset-password`, data)
  return response.data
}

/* logout user */

export const logOutUserApi = async () => {
  console.log("ran here from logout func")
  const jwtToken = Cookies.get("adminToken");


  const response = await axios.get(`${baseUrl}/user/logout`, {
    headers: {
      Authorization: `Bearer ${jwtToken}`
    }
  })
  return response.data
}


/* update user profile  */

export const upLoadUserProfilePicApi = async (data: {
  formData: HTMLFormElement,
  token: string
}) => { 
  const response = await axios.post(`${baseUrl}/user/upload`, data.formData, {
    headers: {
      Authorization: `Bearer ${data.token}`,
      'Content-Type': 'multipart/form-data',
    },

  })
  
  return response.data
}
  

export const registerStoreApi = async ({ 
  address,
  description,
  image,
  location,
  name,
  phone  
}: resgisterStoreApiType) => {
  const jwtToken = Cookies.get("adminToken")
  const type ="store"
  const response = await axios.post(
    `${baseUrl}/store/create`,
    { 
      name,
      address,
      phone,
      description,
      type,
      location: {
        ...location, 
        state: address,
        lga: address
      },
      image
     
    },
    {
      headers: {
        Authorization: `Bearer ${jwtToken}`
      }
    }
  )
  return response.data
}





