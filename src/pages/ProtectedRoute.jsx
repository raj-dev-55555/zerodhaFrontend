// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ children }) => {
//   const isLoggedIn = localStorage.getItem("isLoggedIn");
  
//   if (!isLoggedIn) {
//     return <Navigate to="/login" />;
//   }
  
//   return children;
// };

// export default ProtectedRoute;


import React, { useEffect, useState } from "react";
import { Navigate,useLocation } from "react-router-dom";
import axios from "axios";

function ProtectedRoute({ children }) {
  const [auth, setAuth] = useState(null);
  const location = useLocation()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.post(
        "https://zerodhabackend-m6gu.onrender.com/api/auth/verify",

          // "http://localhost:8080/api/auth/verify",
          {},
          { withCredentials: true }
        );

        if (res.data.status) {
          setAuth(true);
        } else {
          setAuth(false);
        }
      } catch {
        setAuth(false);
      }
    };

    checkAuth();
  }, []);

  if (auth === null) return <h3>Loading...</h3>;

  if (!auth) return <Navigate to="/login" state={{from:location}} replace/>;

  return children;
}

export default ProtectedRoute;