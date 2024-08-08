// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import { faGoogle } from '@fortawesome/free-brands-svg-icons';

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="relative flex items-center justify-center min-h-screen">
//       <div className="absolute inset-0 bg-cover bg-center filter blur" style={{ backgroundImage: 'url(/image/teacup.png)' }}></div>
//       <div className="relative flex w-full max-w-5xl bg-white shadow-md overflow-hidden">
//         {/* Right side with image */}
//         <div className="w-full p-8 lg:w-1/2">
//           <h2 className="text-3xl font-bold text-center mb-8">Hello, Welcome Back</h2>
//           <form className="mt-4">
//             <div className="mb-4">
//               <label className="block text-gray-700">Email</label>
//               <input type="email" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" placeholder="Your Email" />
//             </div>
//             <div className="mb-6 relative">
//               <label className="block text-gray-700">Password</label>
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 pr-10"
//                 placeholder="Your Password"
//               />
//               <span
//                 className="absolute inset-y-0 right-0 flex items-center pr-3 pt-7 cursor-pointer"
//                 onClick={togglePasswordVisibility}
//               >
//                 <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
//               </span>
//             </div>
//           </form>
//           <div className="mt-4 text-center">
//             <div className="text-sm text-gray-500 mb-4">
//               <a href="#" className="text-sm text-blue-600 hover:underline">Forgot your password?</a>
//             </div>
//             <button className="w-28 text-white py-2 rounded-md transition duration-200 mb-4" style={{ backgroundColor: '#7D806A' }}>
//               Login
//             </button>
//           </div>
//         </div>

//         {/* Left side with form */}
        
//         <div className="hidden lg:flex lg:w-1/2 bg-cover flex-col justify-between p-8" style={{ backgroundColor: '#8a7a5d' }}>
//           <div className="flex flex-col items-center justify-center h-full">
//             {/* Logo */}
//             <img src="/image/logo.png" alt="SipLesson Logo" className="w-32 mb-4 rounded-full" />
//             <h2 className="text-3xl font-bold text-white text-center">SipLesson</h2>
//             <p className="text-white mt-4 text-center">Discover the world of coffee and tea with us.</p>
//           </div>
//           <div className="mt-auto text-center text-white">
//             <p className="text-sm">Don't have an account? <a href="/registration" className="text-blue-300 hover:underline">Signup</a></p>
//             <br />
//             <a href="/login" className="text-black hover:underline">
//               <FontAwesomeIcon icon={faGoogle} className="text-2xl gap-2" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";


const LoginComponent = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const validate = () => {
    const errors = {};
    if (!loginData.email) errors.email = "Email is required";
    if (!loginData.password) errors.password = "Password is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post(
          "http://localhost:5000/auth/login",
          loginData
        );
        console.log(response);
        // set token in local storage
        localStorage.setItem("token", response.data.token);
        console.log(response.data.token);

        // show success message
        toast.success("Login successful");
         // navigate to login page
         setTimeout(() => {
          navigate("/dash");
        }, 1000);
      } catch (error) {
        console.error(error.response.data.msg);
        toast.error(error.response.data.msg);
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>
        <form onSubmit={handleSubmit}>
          <ToastContainer />
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
              type="email"
              id="email"
              placeholder="Enter your email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <div className="text-red-500 text-sm">{errors.email}</div>
            )}
          </div>
          <div className="mb-6 relative">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 mt-8"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <FaEyeSlash className="text-gray-500 cursor-pointer" />
              ) : (
                <FaEye className="text-gray-500 cursor-pointer" />
              )}
            </div>
            {errors.password && (
              <div className="text-red-500 text-sm">{errors.password}</div>
            )}
          </div>
          <button
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;