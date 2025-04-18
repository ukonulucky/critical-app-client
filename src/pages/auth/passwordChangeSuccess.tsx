import React from 'react'

const PasswordChangeSuccess= () => {
// const router = useRouter()

  return (
    <div className="flex flex-col bg-white items-center justify-center px-[20px] h-screen">
      <div className=" flex flex-col justify-center items-center w-full">
        <div className="w-[140px] h-[140px] bg-green-50 rounded-full justify-center items-center flex">
                {/*   <image
                      alt='success'
            src={'/images/success.png'}
                      className="w-[67.03px] h-[67.03px]"
                      width={67.03}
                      height={67.08}
                    
          /> */}
        </div>
        <div className="w-[279px] h-[76px] flex-col justify-center items-center gap-2 inline-flex mt-[37px]">
          <span className="text-center text-neutral-900 text-xl font-medium font-['Aeonik-Medium'] leading-7">
           Password Updated
          </span>
          <span className="w-[279px] text-center text-zinc-600 text-xs font-normal font-['Aeonik-Regular'] leading-tight">
            Your password has been updated successfully. Continue to login
          </span>
        </div>
              <div className="w-[500px]  items-center mt-[32px]">
                   {/* submit button starts */}
          <button
                      onClick={() => { 
                         // router.push("/login")
                      }}
            className={ `w-full h-[39px]  p-2.5  rounded-lg  justify-center items-center  inline-flex mt-4 bg-blue-950 `}>
        <span className="text-white text-sm font-semibold font-['Inter'] leading-[18.90px]">Okay, Proceed to Sign in</span>
      </button>
         
        </div>
      </div>
    </div>
  )
}

export default PasswordChangeSuccess
