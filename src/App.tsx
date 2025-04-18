import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckAuth from "./common/checkAuth";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import HomePage from "./pages/homePage";
import NotFound from "./pages/notfound";

function App() {

  const data : any = {
    isAuthenticated: false,
    user: {
      role: "user"
    }
  }
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
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
  
        <Route path="/unauthenticated" element={<NotFound />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;