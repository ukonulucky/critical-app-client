
import ForgotPasswordVerificationComp from '../../components/forgotPasswordVerificationComp'
import bankPic from "../../asssets/bankLogo2.jpg"
function ForgetPasswordVerification() {
   
  return (
    <div className="w-screen h-screen  flex flex-row">
      <div
        className="w-full xl:w-1/2 h-screen flex justify-center items-center"
      >
        <ForgotPasswordVerificationComp />
      </div>
      <div className="h-screen hidden xl:w-1/2 lg:block">
        <img
          src={bankPic}
          alt="forgot password"
          width={300}
          height={400}
          className="w-full h-full"
        />
      </div>
    </div>
  )
}

export default ForgetPasswordVerification