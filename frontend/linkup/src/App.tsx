import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { FC, ReactNode } from "react";

import Login from "./pages/Login";
import Home from "./pages/Home";

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
            
              
              <Route path="/" element={<Home />}></Route>
              {/*
              <Route path="/market" element={<ProtectedRoute><MyCalendars /></ProtectedRoute>}></Route>
              <Route path="/connect" element={<ProtectedRoute><Calendar /></ProtectedRoute>}></Route>
              <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>}></Route>
              <Route path="/messages" element={<Help />}></Route> */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
