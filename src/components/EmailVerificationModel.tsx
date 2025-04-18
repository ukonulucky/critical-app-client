
import { EmailNotVerifiedModalType } from '../utils/types';
import { useAppDispatch } from '../redux/store/store';
import { setUserEmailAndTokenAction } from '../redux/slices/authSlice';

function EmailNotVerifiedModal({ 
  showVerifyEmailModel,
  setShowVerifyEmailModel,
  userEmail,
  userToken
  
}: EmailNotVerifiedModalType) {

  const dispatch = useAppDispatch()


  const handleProceed = () => {
    setShowVerifyEmailModel(!showVerifyEmailModel);
  dispatch(setUserEmailAndTokenAction({userEmail: userEmail, token : userToken}))
  /*   router.push("VerifyCode") */
  };

  return (
    <div
    className="flex-1 flex items-center justify-center absolute left-0 right-0 top-0 bottom-0 z-10"
    style={{
      backgroundColor: "rgba(78,78,78,0.3)",
    }}
      >
          
          
          <div className="flex flex-col p-4 bg-white relative rounded-lg">
              <span className="text-gray-900 text-[22px] font-semibold font-['Inter'] mt-4 leading-[35.10px]">
              Email not verified
              </span>
              <span className="text-gray-500 text-sm font-normal font-['Inter'] leading-[18.90px]">
              Proceed to verify your email
              </span>

      
              

              {/* button section */}
              <div className="mt-8 flex flex-row items-center space-x-2 w-full ">
              <button
                onClick={() => {
                  setShowVerifyEmailModel(!showVerifyEmailModel);
                }}
                className="w-[170px] h-[50px]   
                  rounded-lg shadow border border-neutral-300 
                  justify-center items-center  inline-flex "
              >
                <span className="text-neutral-400 text-sm font-semibold font-['Inter'] leading-[18.90px]">
                  Close
                </span>
              </button>

              <button className="w-[170px] h-[50px]   bg-blue-950 rounded-lg  justify-center items-center  inline-flex">
            <span className="text-white text-sm font-semibold font-['Inter'] leading-[18.90px]" onClick={() => { 
              handleProceed()
            }}>
                 Procees To Verify
                </span>
              </button>
            </div>

              {/* button section */}
      </div>

    
 
  </div>
  )
}

export default EmailNotVerifiedModal