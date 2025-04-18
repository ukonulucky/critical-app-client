
import { Navigate, useLocation } from 'react-router-dom'
import { checkAuthType } from '../utils/types';




function CheckAuth({ 
    children,
    isAuthenticated,
    user
}: checkAuthType) {

    const location = useLocation() ;


    /* condition when user is not logged in and tries to navigate to another route */

    if (!isAuthenticated && !(location.pathname.includes("/auth/login") || location.pathname.includes("/auth/register"))) { 
      return  <Navigate to="/auth/login" />
    }

    if (
        isAuthenticated &&
        (location.pathname.includes("/auth/login") || location.pathname.includes("/auth/register"))
    ) {
        if (user.role === "admin") {
        return   <Navigate to="/admin/dashboard" />
        } else { 
         return  <Navigate to="/shop/home" />
        }
     }

    
    if ( isAuthenticated && user.role === "user" && location.pathname.includes("/admin")) {
     return   <Navigate to="/unauthenticated" />
    } 


  return (
      <div>
          { 
              children
          }
</div>
  )
}

export default CheckAuth