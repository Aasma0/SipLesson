// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import { faGoogle  } from '@fortawesome/free-brands-svg-icons';


// const Register = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const toggleConfirmPasswordVisibility = () => {
//     setShowConfirmPassword(!showConfirmPassword);
//   };

//   return (
//     <div className="relative flex items-center justify-center min-h-screen">
//           <div className="absolute inset-0 bg-cover bg-center filter blur" style={{ backgroundImage: 'url(/image/teacup.png)' }}></div>
//       <div className="relative flex w-full max-w-5xl bg-white shadow-md overflow-hidden">
//       <div className="hidden lg:flex lg:w-1/2 bg-cover flex-col justify-between p-8" style={{ backgroundColor: '#8a7a5d' }}>
//   <div className="flex flex-col items-center justify-center h-full">
//     {/* Logo */}
//     <img src="/image/logo.png" alt="SipLesson Logo" className="w-32 mb-4 rounded-full" />
//     <h2 className="text-3xl font-bold text-white text-center">SipLesson</h2>
//     <p className="text-white mt-4 text-center">Discover the world of coffee and tea with us.</p>
//   </div>
//   <div className="mt-auto text-center text-white">
//     <p className="text-sm">Already have an account? <a href="/login" className="text-blue-300 hover:underline">Login</a></p> <br />    
//         <a href="/login" className="text-black hover:underline">
//           <FontAwesomeIcon icon={faGoogle} className="text-2xl gap-2" />
//         </a>
//   </div>
// </div>

//         {/* Right side with form */}
//         <div className="w-full p-8 lg:w-1/2">
//           <h2 className="text-3xl font-bold text-center mb-8">Create Account</h2>
//           <form className="mt-4 grid grid-cols-2 gap-4">
//             <div className="mb-6">
//               <label htmlFor="username" className="block text-gray-700">Username</label>
//               <input
//                 type="text"
//                 id="username"
//                 className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
//                 placeholder="Your Username"
//               />
//             </div>
//             <div className="mb-6">
//               <label htmlFor="email" className="block text-gray-700">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
//                 placeholder="Your Email"
//               />
//             </div>
//             <div className="mb-6 relative">
//               <label htmlFor="password" className="block text-gray-700">Password</label>
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 id="password"
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
//             <div className="mb-6 relative">
//               <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
//               <input
//                 type={showConfirmPassword ? 'text' : 'password'}
//                 id="confirmPassword"
//                 className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 pr-10"
//                 placeholder="Confirm Password"
//               />
//               <span
//                 className="absolute inset-y-0 right-0 flex items-center pr-3 pt-7 cursor-pointer"
//                 onClick={toggleConfirmPasswordVisibility}
//               >
//                 <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
//               </span>
//             </div>
//           </form>
//           <div className="mt-4 text-center">
//             <div className="text-sm text-gray-500 mb-4">
//               <a href="#" className="text-sm text-blue-600 hover:underline">Forgot your password?</a>
//             </div>
//             <button type="submit" className="w-28 text-center text-white py-2 rounded-md transition duration-200 mb-4" style={{ backgroundColor: '#7D806A' }}>
//               Register
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // console.log(userData);

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // const name = e.target.name;
    // const value = e.target.value;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const validate = () => {
    const errors = {};
    if (!userData.username) {
      errors.username = "Username is required";
    }
    if (!userData.email) errors.email = "Email is required";
    if (!userData.password) errors.password = "Password is required";
    if (!userData.confirmPassword)
      errors.confirmPassword = "Confirm Password is required";
    if (userData.password !== userData.confirmPassword)
      errors.confirmPassword = "Passwords must match";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
  
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post(
          "http://localhost:5000/auth/register",
          {
            name: userData.username,
            email: userData.email,
            password: userData.password,
          }
        );
        console.log(response);
        toast.success(response.data.msg);
  
        // navigate to login page
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } catch (error) {
        // Check if error.response is defined
        if (error.response) {
          console.error("Error response:", error.response);
          toast.error(error.response.data.msg);
        } else if (error.request) {
          // The request was made but no response was received
          console.error("Error request:", error.request);
          toast.error("Network error: Please try again later.");
        } else {
          // Something else caused the error
          console.error("Error:", error.message);
          toast.error("An unexpected error occurred. Please try again.");
        }
      }
    }
  };
  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Register</h2>
        <form onSubmit={handleSubmit}>
          <ToastContainer />
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
              type="text"
              id="username"
              placeholder="Enter your username"
              name="username"
              value={userData.username}
              onChange={handleChange}
            />
            {errors.username && (
              <div className="text-red-500 text-sm">{errors.username}</div>
            )}
          </div>
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
              value={userData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <div className="text-red-500 text-sm">{errors.email}</div>
            )}
          </div>
          <div className="mb-4 relative ">
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
              value={userData.password}
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
          <div className="mb-6 relative">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="confirm-password"
            >
              Confirm Password
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
              type={showConfirmPassword ? "text" : "password"}
              id="confirm-password"
              placeholder="Confirm your password"
              name="confirmPassword"
              value={userData.confirmPassword}
              onChange={handleChange}
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 mt-8"
              onClick={toggleConfirmPasswordVisibility}
            >
              {showConfirmPassword ? (
                <FaEyeSlash className="text-gray-500 cursor-pointer" />
              ) : (
                <FaEye className="text-gray-500 cursor-pointer" />
              )}
            </div>
            {errors.confirmPassword && (
              <div className="text-red-500 text-sm">
                {errors.confirmPassword}
              </div>
            )}
          </div>
          <button
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;