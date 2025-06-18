import { validateData } from "../utils/validate";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase.js";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";


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
        // ...
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
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/7968847f-3da9-44b3-8bbb-13a46579881f/web/PK-en-20250609-TRIFECTA-perspective_fe615052-4a49-4618-b131-4499f9cf0058_small.jpg')]">
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
      <div className="relative z-10">

        <div className="flex justify-center items-center h-screen ">
          <div className="flex flex-col w-3xl py-14 px-12 gap-6 rounded-md items-center text-center">
            
            <h1 className="text-white text-6xl font-extrabold ">Unlimited movies, TV shows, and more</h1>
            <p className="text-white font-bold text-2xl">Starts at Rs 250. Cancel anytime.</p>
            <p className="text-white">Ready to watch? Enter your email to create or restart your membership.</p>
            <form className="flex flex-col gap-4 items-center w-full">
              <div className="flex gap-4 items-center w-full">
             
              <input
              ref={email}
                type="text"
                placeholder="Email address"
                className="p-4 text-white bg-black/70 border border-gray-500 w-2/3 outline-none rounded-sm"
              />
               <input
                ref={password}
                type="password"
                placeholder="Password"
                className="p-4 text-white bg-black/70 border border-gray-500 w-2/3 outline-none rounded-sm"
              />
              </div>
              <button
               onSubmit={(e) => e.preventDefault()} 
               onClick={handleButtonClick}
               className="bg-button-red text-2xl text-white w-1/3  font-semibold p-3 cursor-pointer rounded-sm hover:opacity-95 ">Get Started <i className="fa-solid fa-chevron-right"></i> </button>
              
            </form>
            <div className="flex items-center gap-4">
              <p className="text-white">Don't have an account?</p>
               <button
              onClick={handleSignIn}
              className="text-white bg-button-red py-1.5 px-4 text-sm font-semibold rounded-sm"
            >
              Sign In
            </button>
            </div>
           

          </div>
          <p className="text-red-500">
          {errorMessage} </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
