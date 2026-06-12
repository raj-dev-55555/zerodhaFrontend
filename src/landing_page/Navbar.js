// import React from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//     return (



//         <nav class="navbar bg-white navbar-expand-lg border-bottom  ">
//             <div class="container-fluid p-2">
//                 <Link class="navbar-brand" to="/"><img src="media/images/logo.svg" alt="Logo" style={{ width: "30%" }}></img></Link>
//                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span class="navbar-toggler-icon"></span>
//                 </button>
//                 <div class="collapse navbar-collapse" id="navbarSupportedContent">

//                     <form class="d-flex" role="search">
//                         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li class="nav-item">
//                                 <Link class="nav-link active" aria-current="page" to="/signup">Signup</Link>
//                             </li>
//                             <li class="nav-item">
//                                 <Link class="nav-link active" to="/about">About</Link>
//                             </li>
//                             <li class="nav-item">
//                                 <Link class="nav-link active" to="/products">Product</Link>
//                             </li>

//                             <li class="nav-item">
//                                 <Link class="nav-link active" to="/pricing">Pricing</Link>
//                             </li>
//                             <li class="nav-item">
//                                 <Link class="nav-link active" to="/support">Support</Link>
//                             </li>

//                         </ul>
//                     </form>
//                 </div>
//             </div>
//         </nav>



//     )
// }

// export default Navbar;



import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function Navbar() {
  const [cookies, removeCookie] = useCookies([]);
  const navigate = useNavigate();
  // const isLoggedIn = !!cookies.token;
  const isLoggedIn = !!localStorage.getItem("isLoggedIn");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    removeCookie("token");
    navigate("/");
  };

  
  return (
    <nav className="navbar bg-white navbar-expand-lg border-bottom">
      <div className="container-fluid p-2">
        <Link className="navbar-brand" to="/">
          <img src="media/images/logo.svg" alt="Logo" style={{ width: "30%" }} />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              {/* Login nahi hai to dikhe */}
              {!isLoggedIn && (
                <li className="nav-item">
                  <Link className="nav-link active" to="/signup">Signup</Link>
                </li>
              )}

              <li className="nav-item">
                <Link className="nav-link active" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/products">Product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/pricing">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/support">Support</Link>
              </li>



              {/* Dashboard - login hone par hi dikhega */}
              {isLoggedIn && (
                <li className="nav-item">
                  <a className="nav-link active"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      if (isLoggedIn) {
                        window.location.href = "https://zerodhadashboard-6p87.onrender.com/";
                      } else {
                        localStorage.setItem("redirectTo", "https://zerodhadashboard-6p87.onrender.com/");
                        navigate("/login");
                      }
                    }}
                  >Dashboard</a>
                </li>
              )}






              {/* Login nahi hai to Login dikhe */}
              {!isLoggedIn && (
                <li className="nav-item">
                  <Link className="nav-link active" to="/login">Login</Link>
                </li>
              )}

              {/* Login hai to Logout dikhe */}
              {isLoggedIn && (
                <li className="nav-item">
                  <button className="btn btn-outline-danger nav-link" onClick={handleLogout}>Logout</button>
                </li>
              )}

            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;