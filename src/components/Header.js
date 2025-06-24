import IMG from "../images/Netflix_Logo.png";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser , removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/GptSlice";

const Header = () => {
    const auth = getAuth();
    const user = useSelector((store) => store.user);
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
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
  const handleGptSearchClick = () =>{
   dispatch(toggleGptSearchView());

  }
  return (
    <div className=" absolute w-full z-10 p-10 md:px-32 py-1 flex items-center justify-between">
      <div className="flex items-center gap-4 text-sm">
      <img className="w-28 lg:w-48 2xl:w-72" src={IMG} alt="logo" />
       {user && (
        <>
         <ul className="flex gap-4 text-white">
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Recently Added</li>
            <li>My List</li>
           </ul>
        </>
       )}
      </div>
   
      <div className="flex items-center gap-4">
        {user && (
          // ✅ Show this if user is signed in
          <>
          <button
          onClick={handleGptSearchClick}
           className=" text-gray-600">{showGptSearch? "Homepage" : "GPT Search"}</button>
            <h2 className="font-medium text-gray-600">{user.email}</h2>
            <button
              onClick={handleSignOut}
              className="text-white bg-button-red py-1.5 px-4 text-sm font-semibold rounded-sm"
            >
              Sign Out
            </button>
          </>
        ) 
   
      }

      </div>
    </div>
  );
};

export default Header;
