import IMG from "../images/Netflix_Logo.png";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router";
import { useEffect, useState, useRef } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser , removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/GptSlice";
import { Link } from "react-scroll";
import { useLocation } from "react-router";
import useGenres from "../hooks/useGenres";


const Header = () => {
  useGenres();
  const [showGenre, setShowGenre] = useState(false);
  const genres = useSelector(store => store.movies.genres);
   const genresRef = useRef(null);
  const [showChevron, setShowChevron] = useState(false)
  const dropdownRef = useRef(null);
  const handleShowChevron = () => {
    setShowChevron((prev => !prev));
  }
  const location = useLocation();
    const auth = getAuth();
    const user = useSelector((store) => store.user);
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleGenre = () => {
     setShowGenre(prev => !prev);
};
useEffect(() => {
  const handleClickOutside = (event) => {
    if ( dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {setShowChevron(false);
    }
    if (
      genresRef.current &&
      !genresRef.current.contains(event.target)
    ) { setShowGenre(false);
    }
  };
   document.addEventListener("mousedown", handleClickOutside);
   return () => {
    document.removeEventListener("mousedown", handleClickOutside);
   };
    }, [showChevron, showGenre]);

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
    <div className=" w-full z-60 px-10 md:px-32 pt-2 flex items-center justify-between bg-black/60  fixed ">
      <div className="flex items-center gap-4 text-sm">
      <img className="w-28 lg:w-48 2xl:w-72" src={IMG} alt="logo" />
       {user && (
        <>
         <ul className="flex gap-4 text-white hover:cursor-pointer">
            <li
              className="hover:font-bold"
              onClick={() => { if (showGptSearch) { dispatch(toggleGptSearchView());
              }
              navigate("/browse");
              }}>Home
            </li>
            <li className="hover:font-bold">
              <Link 
              smooth={true}  duration={500}              
              offset={-90}
              to="tv-shows">TV Shows</Link>
            </li>
            <li className="hover:font-bold"><Link smooth={true}   
            duration={500}              
            offset={-90}  to="movies-section">Movies</Link></li>
            <li className="hover:font-bold">Recently Added</li>
            <div className="relative"
            ref={genresRef}>
              <li className="hover:font-bold"
              onClick={() => {
              handleGenre();
            }}>Genres</li>

             {showGenre && ( 
           <div className="absolute border border-[#141414] w-36 top-9 left-[-28px] bg-black/90 text-white/60 font-semibold rounded-sm text-sm space-y-1 p-3 z-50"> {(genres.map((genre) => {
             return <h1 className="hover:opacity-60"  key={genre.id}>{genre.name}</h1>;
            })) }
             </div>)}
            </div>
             

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
         className=" text-black bg-white py-1.5 px-10 text-sm font-semibold rounded-sm hover:cursor-pointer hover:opacity-60 ">
             GPT Search</button>
          ) }
           <div className="flex items-center gap-2.5">
            <img className="w-8 rounded-xs hover:cursor-pointer"
             alt="profile" src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp" />
            <div ref={dropdownRef} className="relative">
              <i
                onClick={handleShowChevron}
                className={`fa-solid ${showChevron ? "fa-chevron-up" : "fa-chevron-down"} text-white text-xs hover:cursor-pointer`}
              ></i>
              {showChevron && ( 
                <div
                  className="absolute border border-[#141414] w-22 top-10 left-[-28px] bg-black/90 text-white/60 font-semibold rounded-sm text-sm space-y-1 p-3 z-50"
                >
                  <h1 className="hover:cursor-pointer hover:opacity-60">Manage</h1>
                  <h2
                    className="text-button-red font-semibold hover:cursor-pointer"
                    onClick={() => {
                      handleSignOut();
                      setShowChevron(false);
                    }}> Sign Out
                  </h2>
                </div>
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
