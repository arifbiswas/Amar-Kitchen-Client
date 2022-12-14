import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import banner from "../../../Assets/LogImages/loginBanner.svg";
import { AuthProvider } from "../../../Contexts/AuthContext/AuthContext";

const Login = () => {
  // use context api 
  const {googleWithLogin,loginWithEmailPass} = useContext(AuthProvider);
  // Google Auth Provider  
  const googleAuthProvider = new GoogleAuthProvider();

  // Register User input information 
  const [userInfo, setUserInfo] = useState({});
   const navigate = useNavigate();
   const location = useLocation();
   const from = location?.state?.from?.pathname || "/home";

  // form On submite
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);

    // loginWithEmailPass
    loginWithEmailPass(userInfo.email , userInfo.password)
    .then( result =>{
      const currentUser = result.user;
      console.log(currentUser);
      navigate(from , {replace :true})
    })
    .catch(e => {
      console.log(e);
      toast.error(e.message)
    })
  };
  // Login With Google pop up 
  const handleLoginWithGoogle =()=>{
    googleWithLogin(googleAuthProvider)
    .then(result => {
      const googleUser = result.user;
      navigate(from , {replace :true})
      console.log(googleUser);
      const authEmail = {
        email : googleUser.email
      }
      // get json web Token 
      fetch('https://ass-11-amar-kitchen-server-arifbiswas.vercel.app/jwt',{
            method : "POST",
            headers : {
              "content-type" : "application/json"
            },
            body : JSON.stringify(authEmail)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            localStorage.setItem("auth-token",JSON.stringify(data.token))
          })
          .catch(e => {
            console.log(e);
          })
    })
    .catch(e => {
      console.log(e);
      toast.error(e.message)
    })
  }
  return (
    <div className="flex justify-center items-center w-[100%]  h-[100vh]">
      <div className="bg-white  ">
        <div className=" flex flex-col lg:flex-row justify-center h-screen ">
          <img className=" w-[100%]  lg:w-[70%] " src={banner} alt="" />

          <div className="flex items-center w-full  mx-auto lg:w-2/6  lg:px-6">
            <div className="flex-1 border-2 p-5  lg:py-36 rounded-md border-yellow-200">
              <div className="text-center">
                <h2 className="text-5xl mb-8 font-black text-center text-yellow-500 ">
                  Login
                </h2>

                <p className="mt-3 text-gray-400 ">
                  Login to access your account
                </p>
              </div>
              <div>
                <button
                 onClick={handleLoginWithGoogle}
                  className="flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg  border-gray-700 hover:text-white hover:bg-gray-50  hover:bg-gray-600 text-black  w-full"
                >
                  <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
                    <path
                      d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                      fill="#FFC107"
                    />
                    <path
                      d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                      fill="#FF3D00"
                    />
                    <path
                      d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                      fill="#4CAF50"
                    />
                    <path
                      d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                      fill="#1976D2"
                    />
                  </svg>

                  <span className="mx-2">Login with Google</span>
                  
                </button>
                
              </div>
              <div className="mt-8">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm text-gray-900 "
                    >
                      Email Address
                    </label>
                    <input
                      onChange={(e) =>
                        setUserInfo({ ...userInfo, email: e.target.value })
                      }
                      type="email"
                      name="email"
                      id="email"
                      placeholder="your@gamil.com"
                      className="block w-full px-4 py-4 mt-2 text-gray-700  bg-white border rounded-md placeholder-gray-600   border-gray-700 focus:border-yellow-400 focus:ring-yellow-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between mb-2">
                      <label
                        htmlFor="password"
                        className="text-sm text-gray-600 "
                      >
                        Password
                      </label>
                      <p
                        
                        className="text-sm text-gray-400 focus:text-yellow-500 hover:text-yellow-500 hover:underline"
                      >
                        Forgot password?
                      </p>
                    </div>

                    <input
                      onChange={(e) =>
                        setUserInfo({ ...userInfo, password: e.target.value })
                      }
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Your Password"
                      className="block w-full px-4 py-4 mt-2 text-gray-700  bg-white border  rounded-md placeholder-gray-600   border-gray-700  focus:border-yellow-400 focus:ring-yellow-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      className="w-full px-4 py-3 tracking-wide text-white transition-colors duration-300 transform bg-yellow-500 rounded-md hover:bg-yellow-400 focus:outline-none focus:bg-yellow-400 focus:ring focus:ring-yellow-300 focus:ring-opacity-50"
                    >
                      Login
                    </button>
                  </div>
                </form>

                <p className="mt-6 text-sm text-center text-gray-400">
                  Don&#x27;t have an account yet?{" "}
                  <Link
                    to="/register"
                    className="text-yellow-500 focus:outline-none focus:underline hover:underline"
                  >
                    Register
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
