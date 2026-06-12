import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(null); // 👈 IMPORTANT
  const [user, setUser] = useState("");

  // 🔥 VERIFY USER
  useEffect(() => {
    const verifyUser = async () => {
      try {
        const res = await axios.post(
          "https://zerodhabackend-m6gu.onrender.com/api/auth/verify",
          {},
          { withCredentials: true }
        );

        if (res.data.status) {
          setIsLoggedIn(true);
          setUser(res.data.user);
        } else {
          setIsLoggedIn(false);
        }
      } catch (err) {
        setIsLoggedIn(false);
      }
    };

    verifyUser();
  }, []);

  // 🔥 LOGOUT FIXED
  const handleLogout = async () => {
    try {
      await axios.post(
        "https://zerodhabackend-m6gu.onrender.com/api/auth/logout",
        {},
        { withCredentials: true }
      );

      setIsLoggedIn(false);
      setUser("");

      navigate("/login"); // better UX than home
    } catch (err) {
      console.log(err);
    }
  };

  // 🔥 LOADING STATE (IMPORTANT)
  if (isLoggedIn === null) {
    return (
      <nav className="navbar bg-white border-bottom p-2">
        Loading...
      </nav>
    );
  }

  return (
    <nav className="navbar bg-white navbar-expand-lg border-bottom">
      <div className="container-fluid p-2">

        <Link className="navbar-brand" to="/">
          <img src="media/images/logo.svg" alt="Logo" style={{ width: "30%" }} />
        </Link>

        <ul className="navbar-nav ms-auto">

          {!isLoggedIn && (
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Signup</Link>
            </li>
          )}

          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/products">Product</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/pricing">Pricing</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/support">Support</Link>
          </li>

          {isLoggedIn && (
            <li className="nav-item">
              <span className="nav-link">Hi, {user}</span>
            </li>
          )}

          {!isLoggedIn && (
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
          )}

          {isLoggedIn && (
            <li className="nav-item">
              <button
                className="btn btn-outline-danger nav-link"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          )}

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;