

import React from 'react'
import ForgotPasswordVerificationComp from '../../components/forgotPasswordVerificationComp'

function ForgetPasswordVerification() {
   
  return (
    <div className="w-screen h-screen  flex flex-row">
      <div
        className="w-full xl:w-1/2 h-screen flex justify-center items-center px-4"
      >
        <ForgotPasswordVerificationComp />
      </div>
      <div className="h-screen hidden xl:w-1/2 lg:block">
       {/*  <image
          src={"/images/changePasswordPic.png"}
          alt="user comment"
          width={300}
          height={400}
          className="w-full h-full"
        /> */}
      </div>
    </div>
  )
}

export default ForgetPasswordVerification