import * as yup from 'yup'

const ukPhoneRegExp = /^(?:\+44|0|0044)7\d{9}$/
// Define the schema using Yup
export const signUpSchema = yup.object({
  fullName: yup.string().required("Full name is required"),
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup.string().min(6, " Password must have a minimum lenght of 6 characters ").max(12, "Passoword cannot exceed 12 characters").required("Password is required"),
  phone: yup
    .string()
    .matches(ukPhoneRegExp, "Enter a valid UK mobile number")
    .required("Phone number is required"),
})





export const loginSchema = yup.object({
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup.string().required('Password is required'),
  
})


export const registerStoreSchema = yup.object({
  storeName: yup.string().required("Store name is required"),
  storeOwner: yup.string().required('Store owner name is required'),
  phoneNumber: yup.string().required('Phone number is required'),
  storeImage: yup.string().required("Store image is required"),
  storeAddress: yup.string().required("Store address is required"),
  
})





export const changePasswordSchema = yup.object().shape({
  currentPassword: yup.string().required('Password is required'),
  newPassword: yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .required('Password is required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('newPassword'), undefined], 'Passwords must match')
    .required('Confirm password is required')
});


// Define the schema using Yup
export const resetPasswordSchema = yup.object({
  email: yup.string().email('Invalid email address').required('Email is required')
})