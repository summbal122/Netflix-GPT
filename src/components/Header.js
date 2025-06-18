import IMG from "../images/Netflix_Logo.png";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser , removeUser } from "../utils/userSlice";


const Header = () => {
    const auth = getAuth();
    const user = useSelector((store) => store.user);
    // const location = useLocation(); // to know which page we're on
 
    const dispatch = useDispatch();
    const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser(
          { uid: uid,
            email:email,
            displayName:displayName, 
            photoURL:photoURL }
        ));
        navigate("/browse"); // user is logged in  go to /browse
      } else {
        dispatch(removeUser());
        navigate("/"); // user is not logged in go to /login
      }
    });
    //  unsubscribe when component unmounts
    return () => unsubscribe(); 

  },[auth, dispatch, navigate] );

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/login");
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };

 

  return (
    <div className=" absolute w-full z-10 px-32 py-1 flex items-center justify-between">
      <img className="w-48" src={IMG} alt="logo" />
      <div className="flex items-center gap-4">
        {user && (
          // ✅ Show this if user is signed in
          <>
            <h2 className="text-white font-medium">{user.email}</h2>
            <button
              onClick={handleSignOut}
              className="text-white bg-button-red py-1.5 px-4 text-sm font-semibold rounded-sm"
            >
              Sign Out
            </button>
          </>
        ) 
        // : (
        //   // ✅ Show Sign In only on SignUp page, not on Login
        //   location.pathname === "/signup" && (
        //     <button
        //       onClick={handleSignIn}
        //       className="text-white bg-button-red py-1.5 px-4 text-sm font-semibold rounded-sm"
        //     >
        //       Sign In
        //     </button>
        //   )
        // )}
      }
      </div>
    </div>
  );
};

export default Header;
