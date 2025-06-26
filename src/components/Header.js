import IMG from "../images/Netflix_Logo.png";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser , removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/GptSlice";
import { Link } from "react-scroll";
import { useLocation } from "react-router";

const Header = () => {
  const [showChevron, setShowChevron] = useState(false)

  const handleShowChevron = () => {
    setShowChevron((prev => !prev));
  }
  const location = useLocation();
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
         <ul className="flex gap-4 text-white hover:cursor-pointer">
            <li
              onClick={() => {
              if (showGptSearch) { dispatch(toggleGptSearchView());
              }
              navigate("/browse");
              }}
              >Home
            </li>
            <li>TV Shows</li>
            <li><Link smooth={true}   
            duration={500}              
            offset={-90}  to="movies-section">Movies</Link></li>
            <li>Recently Added</li>
            <li>My List</li>
           </ul>
        </>
       )}
      </div>
   
      <div className="flex items-center gap-4">
        {user && (
          <>
          {location.pathname === "/browse" && !showGptSearch && (
            <button
          onClick={handleGptSearchClick}
           className=" text-black bg-white py-1.5 px-10 text-sm font-semibold rounded-sm hover:cursor-pointer ">
             GPT Search</button>
          ) }
           <div className="flex items-center gap-2.5">
            <img className="w-8 rounded-xs hover:cursor-pointer"
             alt="profile" src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp" />
            <div className="relative">
            <i
            onClick={()=>{
              handleShowChevron();
            }}
             class="fa-solid fa-chevron-down text-white text-xs"> </i>
             {showChevron && ( 
          <form className=" absolute top-8 left-[-28px] bg-black/90 text-white/60 font-semibold rounded-sm text-sm space-y-1 p-3">
           <option>Manage</option>
            <option
            className="text-button-red font-semibold"
            onClick={handleSignOut} 
            >Sign Out</option>
           </form>

             )}

            </div>
            </div>
          </>
        ) 
   
      }

      </div>
    </div>
  );
};

export default Header;
