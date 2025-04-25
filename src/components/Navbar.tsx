import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../redux/store/store";
import { logOutUserApi } from "../apiServices/authApi";
import { toast } from "react-toastify";
import { setIsAuthenticated, setUserBioAction } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
const [loader, setLoader] = useState(false)
  const { 
    isAuthenticated,
    userProfile
  } = useAppSelector(state => state.authReducer)
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

 const handleLogOut = async () => {
      try {
      
          setLoader(!loader)
        const { status, message } = await logOutUserApi({
            jwtToken: userProfile.token
          });
      
      setLoader(!loader);
          if (status === "success") { 
            toast.success(message)
            dispatch(setUserBioAction({
              fullName: "",
              phoneNumber:"",
              role: "",
              status:"",
              token: "",
              url: "",
              userEmail:""
            }))
            dispatch(setIsAuthenticated(false))
           
            navigate("/auth/login")
          }
       

      } catch (error) {
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
      setLoader(false);
    }
  };


  return (
    <nav className="bg-blue-700 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">BankEase</h1>

        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-2 focus:outline-none"
          >
            <img
              src="https://i.pravatar.cc/150?img=3"
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
              
                      { 
                          FaChevronDown({
                              className:"text-xs"
                          })   
                      }
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white text-gray-700 rounded-md shadow-lg py-2 z-20">
              { 
                isAuthenticated ? <button onClick={
                  () => {
                    handleLogOut()
                   }
                 }  className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                Sign Out
                </button> :
                  <button onClick={() => { 
                    navigate("/auth/login")
                  }} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  Sign In
                </button>
              }
              
              
             
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
