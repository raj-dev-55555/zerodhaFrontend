import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(null); // IMPORTANT (loading state)
  const [user, setUser] = useState("");

  // 🔥 VERIFY USER ON LOAD
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

  // 🔥 LOGOUT
  const handleLogout = async () => {
    try {
      await axios.post(
        "https://zerodhabackend-m6gu.onrender.com/api/auth/logout",
        {},
        { withCredentials: true }
      );

      setIsLoggedIn(false);
      setUser("");

      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  // 🔥 LOADING STATE (VERY IMPORTANT)
  if (isLoggedIn === null) {
    return (
      <nav className="navbar bg-white navbar-expand-lg border-bottom p-2">
        <div className="container-fluid">
          Loading...
        </div>
      </nav>
    );
  }

  return (
    <nav className="navbar bg-white navbar-expand-lg border-bottom">
      <div className="container-fluid p-2">

        {/* LOGO */}
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            alt="Logo"
            style={{ width: "30%" }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            {/* SIGNUP (ONLY IF NOT LOGGED IN) */}
            {!isLoggedIn && (
              <li className="nav-item">
                <Link className="nav-link active" to="/signup">
                  Signup
                </Link>
              </li>
            )}

            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/products">
                Product
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/pricing">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/support">
                Support
              </Link>
            </li>

            {/* DASHBOARD (ONLY IF LOGGED IN) */}
            {isLoggedIn && (
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="https://zerodhadashboard-6p87.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Dashboard
                </a>
              </li>
            )}

            {/* LOGIN */}
            {!isLoggedIn && (
              <li className="nav-item">
                <Link className="nav-link active" to="/login">
                  Login
                </Link>
              </li>
            )}

            {/* USER NAME */}
            {isLoggedIn && user && (
              <li className="nav-item">
                <span className="nav-link">Hi, {user}</span>
              </li>
            )}

            {/* LOGOUT */}
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
      </div>
    </nav>
  );
}

export default Navbar;