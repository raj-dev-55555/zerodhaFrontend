import React, { useState } from "react";
import { Link, useNavigate,useLocation } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

    const from = location.state?.from?.pathname; 
    
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://zerodhabackend-m6gu.onrender.com/api/auth/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;

      if (success) {
        
        handleSuccess(message);
              // ⭐ CASE 1: came from protected route
        if (from) {
          navigate(from, { replace: true });
        } 
        // ⭐ CASE 2: direct login
        else {
          navigate("/");
        }
      }

      else {
        handleError(message);
      }
      window.location.reload();

    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <div className="form_page">
      <div className="form_container">
        <h2>Login Account</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
            />
          </div>
          <button type="submit">Submit</button>
          <span>
            Already have not  an account? <Link to={"/signup"}>Signup</Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;





// // import React, { useState } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";

// // function Login() {
// //   const navigate = useNavigate();

// //   const [data, setData] = useState({
// //     email: "",
// //     password: ""
// //   });

// //   const handleChange = (e) => {
// //     setData({ ...data, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const res = await axios.post(
// //         "http://localhost:8080/api/auth/login",
// //         data,
// //         { withCredentials: true }
// //       );

// //       if (res.data.success) {
// //         navigate("/");
// //         window.location.reload();

// //       } else {
// //         alert(res.data.message);
// //       }
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Login</h2>

// //       <form onSubmit={handleSubmit}>
// //         <input
// //           type="email"
// //           name="email"
// //           placeholder="Email"
// //           onChange={handleChange}
// //         />

// //         <input
// //           type="password"
// //           name="password"
// //           placeholder="Password"
// //           onChange={handleChange}
// //         />

// //         <button type="submit">Login</button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default Login;


// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate, useLocation } from "react-router-dom";

// function Login() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const from = location.state?.from?.pathname; // 👈 protected route memory

//   const [data, setData] = useState({
//     email: "",
//     password: ""
//   });

//   const handleChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(
//         "http://localhost:8080/api/auth/login",
//         data,
//         { withCredentials: true }
//       );

//       if (res.data.success) {

//         // ⭐ CASE 1: came from protected route
//         if (from) {
//           navigate(from, { replace: true });
//         } 
//         // ⭐ CASE 2: direct login
//         else {
//           navigate("/");
//         }
//       } else {
//         alert(res.data.message);
//       }
//       window.location.reload();

//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           onChange={handleChange}
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={handleChange}
//         />

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;






























































