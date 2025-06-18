
import { useRef, useState } from "react";
import { Link } from "react-router";
import { validateData } from "../utils/validate";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase.js";




const Login = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);


  const handleButtonClick = () => {
    validateData(email.current.value,password.current.value);
    const message = validateData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;
    
    signInWithEmailAndPassword(
      auth, 
      email.current.value, 
      password.current.value
    ).then((userCredential) => {
    // Signed up 
  
   
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode, errorMessage);
   
  });


  }
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  } 

  return (
    <div> 
    <div className="relative  min-h-screen bg-cover bg-center bg-no-repeat bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/7968847f-3da9-44b3-8bbb-13a46579881f/web/PK-en-20250609-TRIFECTA-perspective_fe615052-4a49-4618-b131-4499f9cf0058_small.jpg')]">
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
      <div className="relative z-10">
        <div className="flex justify-center  items-center h-screen">
          <div className="bg-black/70 flex flex-col w-md py-14 px-12 gap-6 rounded-md">
            
            <h1 className="text-white text-2xl font-bold" onClick={handleButtonClick}>Sign In</h1>
            
            <form
            onSubmit={(e) => e.preventDefault()} 
            className="flex flex-col gap-4 items-center w-full">
              <input
                ref={email}
                type="text"
                placeholder="Email or mobile number"
                className="p-3 text-white bg-transparent border border-gray-600 w-full outline-none rounded-sm"
              />
              <input
                ref= {password}
                type="password"
                placeholder="Password"
                className="p-3 text-white bg-transparent border border-gray-600 w-full outline-none rounded-sm"
              />

              <button className="bg-button-red text-white w-full p-3 cursor-pointer rounded-sm" onClick={handleButtonClick} >Sign In</button>

              <h2 className="text-gray-400">OR</h2>

              <button className="bg-gray text-white w-full p-3 cursor-pointer hover:opacity-80 rounded-sm">
                Use a Sign-In Code
              </button>

              <p className="text-white underline hover:text-gray-400">Forgot password?</p>

              <div className="flex flex-col gap-2 w-full">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="customCheck"
                    className="accent-white w-4 h-4"
                  />
                  <label htmlFor="customCheck" className="text-white text-sm">
                    Remember me
                  </label>
                </div>

                <p className="text-gray-300">
                  New to Netflix?{" "}
                  <span className="text-white font-semibold hover:underline" onClick={
                    toggleSignInForm
                  }> <Link to="/signup"> Sign up now. </Link></span>
                </p>
                <p className="text-gray-500 text-xs">
                  This page is protected by Google reCAPTCHA to ensure you're not a bot.
                </p>
                <a
                  className="text-blue-500 underline text-xs"
                  href="https://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more
                </a>
              </div>
            </form>
            <p className=" text-red-700">{errorMessage}</p>

          </div>
        </div>
      </div>
    </div>
  

    <div className="bg-footer-black">
   <h1>jo</h1>
    </div>
    </div>
  );
};

export default Login;
