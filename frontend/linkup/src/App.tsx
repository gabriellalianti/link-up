import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { FC, ReactNode } from "react";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Market from "./pages/Market";
import MyLinks from "./pages/MyLinks";
import Messages from "./pages/Messages";
import Notifications from "./pages/Notifications";
import FirstProfile from "./pages/FirstProfile";

// const ProtectedRoute: FC<{children?: ReactNode}> = ({ children }) => {
//   const token = Cookies.get("userinfo"); // Retrieve the token cookie

//   // If token doesn't exist, redirect to the login page
//   if (!token) {
//     return <Navigate to="/login" replace />;
//   }
//   // Render the children (protected content) if authenticated
//   return children;
// };

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            {/* If not logged in already, redirect to login, otherwise redirect to my calendars.*/}

              <Route path="/" element={<Login />}></Route>
              <Route path="/newprofile" element={<FirstProfile />}> </Route>
              <Route path="/market" element={<Market />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/my-links" element={<MyLinks />}></Route>
              <Route path="/notifications" element={<Notifications />}></Route>
              <Route path="/messages" element={<Messages />}></Route>

          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App


              