import { useRef, useState } from "react";
import { Link } from "react-router";
import { validateData } from "../utils/validate";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase.js";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    validateData(email.current.value, password.current.value);
    const message = validateData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {})
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode, errorMessage);
      });
  };

  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/7968847f-3da9-44b3-8bbb-13a46579881f/web/PK-en-20250609-TRIFECTA-perspective_fe615052-4a49-4618-b131-4499f9cf0058_small.jpg')] min-h-screen">
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
        <div className="relative z-10 p-6">
         
            <div className="bg-black/70 flex flex-col w-11/12 mt-20 lg:w-10/12 2xl:w-11/12 py-10 px-14 lg:py-6 lg:px-10  2xl:px-18 2xl:py-18 gap-6 md:gap-3 2xl:gap-8 rounded-md 2xl:rounded-xl 2xl:text-xl">
              <h1 className="text-white text-3xl lg:text-2xl 2xl:text-5xl font-bold" onClick={handleButtonClick}>
                Sign In
              </h1>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-3 lg:gap-2 2xl:gap-5 items-center w-full"
              >
                <input
                  ref={email}
                  type="text"
                  placeholder="Email or mobile number"
                  className="p-4 lg:p-3 2xl:p-6 text-white bg-transparent border border-gray-600 w-full outline-none rounded-sm text-xl lg:text-sm 2xl:text-xl"
                />
                <input
                  ref={password}
                  type="password"
                  placeholder="Password"
                  className="p-4 lg:p-3 2xl:p-6 text-white bg-transparent border border-gray-600 w-full outline-none rounded-sm text-xl lg:text-sm 2xl:text-xl"
                />

                <button
                  className="bg-button-red text-white w-full p-4 lg:p-3 2xl:p-6 cursor-pointer rounded-sm font-semibold text-xl md:text-md lg:text-sm 2xl:text-2xl hover:opacity-80"
                  onClick={handleButtonClick}
                >
                  Sign In
                </button>

                <h2 className="text-gray-400">OR</h2>

                <button className="bg-gray text-white w-full p-3 2xl:p-6 cursor-pointer hover:opacity-80 rounded-sm text-xl lg:text-sm 2xl:text-xl">
                  Use a Sign-In Code
                </button>

                <p className="text-white underline hover:text-gray-400 text-md lg:text-sm 2xl:text-xl">
                  Forgot password?
                </p>

                <div className="flex flex-col  md:gap-3 2xl:gap-3 w-full">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="customCheck"
                      className="accent-white w-4 h-4 hover:cursor-pointer"
                    />
                    <label htmlFor="customCheck" className="text-white text-lg lg:text-sm 2xl:text-xl ">
                      Remember me
                    </label>
                  </div>

                  <p className="text-gray-300 text-md lg:text-sm 2xl:text-xl">
                    New to Netflix?
                    <span
                      className="text-white font-semibold hover:underline"
                      onClick={toggleSignInForm}
                    >
                      <Link to="/signup"> Sign up now. </Link>
                    </span>
                  </p>
                  <p className="text-gray-500 text-lg md:text-xs 2xl:text-xl">
                    This page is protected by Google reCAPTCHA to ensure you're
                    not a bot.
                  </p>
                  <a
                    className="text-blue-500 underline text-xl md:text-xs 2xl:text-xl"
                    href="https://www.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more
                  </a>
                </div>
              </form>
              <p className="text-red-700">{errorMessage}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
