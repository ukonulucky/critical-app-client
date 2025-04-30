import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckAuth from "./common/checkAuth";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import NotFound from "./pages/notfound";
import ChangePassword from "./pages/auth/changePassword";
import EmailVerifiedSuccessScreen from "./pages/auth/emailVerifactionSuccess";
import ForgetPasswordVerification from "./pages/auth/forgetPasswordVerification";
import PasswordChangeSuccess from "./pages/auth/passwordChangeSuccess";
import ResetPassword from "./pages/auth/resetPassword";
import VerifyCode from "./pages/auth/verifyCode";
import Unauthenticated from "./pages/auth/unAunthicated";
import WelcomePage from "./pages/welcomePage";
import { useAppSelector } from "./redux/store/store";
import VerifyPhoneCode from "./pages/auth/verifyPhoneCode";
import HomePage from "./pages/homePage";

function App() {

  const data : any = {
    isAuthenticated: false,
    user: {
      role: "user"
   
    }
  }

  const isAuthenticated = useAppSelector(state => state.authReducer.isAuthenticated)


  const user = useAppSelector(state => state.authReducer.userProfile)



  console.log("user profile from outer", user, "isAuthenticated result:", isAuthenticated)
  return (
   

   
    <BrowserRouter>
     <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        {/* auth section */}
        <Route path="/" element={
          <CheckAuth
            isAuthenticated={data.isAuthenticated}
            user={data.user != null ? data.user : null}
          >
            <HomePage />
          </CheckAuth>


        }>
   
          </Route>
          
        {/* auth routes  */}
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/changePassword" element={<ChangePassword />}/>
          <Route path="/auth/emailVerificationSuccess" element={<EmailVerifiedSuccessScreen />}/>
          <Route path="/auth/forgotPassword" element={<ForgetPasswordVerification />}/>
          <Route path="/auth/resetPassword" element={<ResetPassword />} />
          <Route path="/auth/passwordChangeSuccess" element={<PasswordChangeSuccess />}/>
          <Route path="/auth/verifyCode" element={<VerifyCode />} />
 
          
          <Route path="/unauthenticated" element={<Unauthenticated />} />
          
          <Route path="/phone/verify" element={<CheckAuth
            isAuthenticated={isAuthenticated}
            user={user}
          >
            <VerifyPhoneCode />
          </CheckAuth>} />


          <Route path="/welcome" element={<CheckAuth
            isAuthenticated={isAuthenticated}
            user={user}
          >
            
            <WelcomePage />
          </CheckAuth>} />


          <Route path="/home" element={<HomePage />} />
          
          <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
      </BrowserRouter>
    
  );
}

//Unauthenticated

export default App;