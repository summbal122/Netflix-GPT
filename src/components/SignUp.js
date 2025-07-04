import { validateData } from "../utils/validate";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase.js";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import SectionSignUp from "./SectionSignUp.js";

const SignUp = () => {
  const navigate = useNavigate();
    
    const [errorMessage, setErrorMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
 
    const handleButtonClick = (e) => {
    e.preventDefault();
    validateData(email.current.value, password.current.value);
    const message = validateData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    createUserWithEmailAndPassword(
      auth, 
      email.current.value, 
      password.current.value
    ).then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
      updateProfile(user,
         {
        displayName: email.current.value ,
       photoURL: "https://avatars.githubusercontent.com/u/146133333?v=4&size=64"
        }).then(() => {
        
        }).catch((error) => {
        // An error occurred
       
        });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode, errorMessage);
    
    // ..
  });

  }
   const handleSignIn = () => {
    navigate("/");
  };

  return (
    <div>
    <div className="w-full relative  bg-cover bg-center bg-gradient-to-tl from-black to-black bg-no-repeat bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/7968847f-3da9-44b3-8bbb-13a46579881f/web/PK-en-20250609-TRIFECTA-perspective_fe615052-4a49-4618-b131-4499f9cf0058_small.jpg')]">
      <div className="absolute inset-0 bg-black  opacity-70  z-0 "></div>
      <div className="absolute bottom-0 left-0 h-60 2xl:h-96 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
      <div className="relative z-10">


        <div className="flex justify-center items-center h-screen ">
          <div className="flex flex-col w-full md:w-6/8 lg:w-5/8 2xl:w-9/12  px-6  gap-3 lg:gap-3 2xl:gap-8 rounded-md items-center text-center">
            
            <h1 className="text-white text-5xl lg:text-5xl  font-extrabold 2xl:text-9xl leading-12 lg:leading-10 2xl:leading-32 ">Unlimited movies, TV shows, and more</h1>
            <p className="text-white font-bold text-lg lg:text-xl 2xl:text-5xl">Starts at Rs 250. Cancel anytime.</p>
            <p className="text-white text-md lg:text-lg 2xl:text-3xl">Ready to watch? Enter your email to create or restart your membership.</p>
            <form className="flex flex-col w-full 2xl:w-3/4 gap-4 items-center">
              <div className="flex gap-1 md:gap-4 items-center w-full">
             
              <input
              ref={email}
                type="text"
                placeholder="Email address"
                className="p-2 md:p-4 2xl:p-10 text-white text-xs lg:text-lg 2xl:text-5xl bg-black/70 border border-gray-500 w-2/3 outline-none rounded-sm"
              />
               <input
                ref={password}
                type="password"
                placeholder="Password"
                className="p-4 2xl:p-10 text-xs lg:text-lg 2xl:text-5xl text-white bg-black/70 border border-gray-500 w-1/3 outline-none rounded-sm"
              />
              </div>
              <button
               onSubmit={(e) => e.preventDefault()} 
               onClick={handleButtonClick}
               className="bg-button-red text-sm lg:text-xl 2xl:text-6xl  text-white  font-semibold py-2 px-3 md:py-3 md:px-5 2xl:py-8 2xl:px-12 cursor-pointer rounded-sm 2xl:rounded-xl flex gap-2 md:gap-4 2xl:gap-8 items-center hover:opacity-80 ">
                Get Started <i className="fa-solid fa-chevron-right">
                  </i> </button>
              
            </form>
            <div className="flex items-center gap-2">
              <p className="text-white text-md 2xl:text-4xl">Don't have an account?</p>
               <button
              onClick={handleSignIn}
              className="text-white font-semibold hover:underline text-md lg:text-sm 2xl:text-xl hover:cursor-pointer"
            >
              Sign In
            </button>
            </div>
           
          <p className="text-red-500">
          {errorMessage} </p>
          </div>
         
        </div>
      </div>
    
      
    </div>
    <SectionSignUp/>
    </div>
  );
};

export default SignUp;
