import IMG from "../images/Netflix_Logo.png";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useEffect, useState, useRef } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/GptSlice";
import { Link } from "react-scroll";
import { useLocation } from "react-router";
import useGenres from "../hooks/useGenres";

const Header = () => {
  useGenres();
  const [showGenre, setShowGenre] = useState(false);
  const genres = useSelector((store) => store.movies.genres);
  const genresRef = useRef(null);
  const [showChevron, setShowChevron] = useState(false);
  const dropdownRef = useRef(null);
  const [mobileNav, setMobileNav] = useState(false);
  const location = useLocation();
  const auth = getAuth();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGenre = () => setShowGenre((prev) => !prev);
  const handleShowChevron = () => setShowChevron((prev) => !prev);
  const handleGptSearchClick = () => dispatch(toggleGptSearchView());
  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(removeUser());
      navigate("/login");
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setShowChevron(false);
      if (genresRef.current && !genresRef.current.contains(event.target)) setShowGenre(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showChevron, showGenre]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [auth, dispatch, navigate]);

  return (
 
    <div className="fixed top-0 flex w-full justify-center z-50">
      <img className=" absolute top-2 left-12 lg:left-18 2xl:left-14 h-18 md:w-44 lg:h-16 2xl:h-36 lg:w-40 2xl:w-md" src={IMG} alt="logo" />
      <div className="absolute top-8 ml-10 2xl:top-12  w-7/12 lg:w-7/12 ">
        <div className="flex items-center justify-between w-full md:w-fit">
          
          <div className="md:hidden flex items-center gap-2 justify-end">
            {user && (
              location.pathname === "/browse" &&
              !showGptSearch && (
                <button
                  onClick={handleGptSearchClick}
                  className="text-black bg-white px-6 md:px-3 py-0.5 md:py-1 rounded-sm text-[9px] lg:text-xs 2xl:text-2xl font-semibold"
                >
                  GPT Search
                </button>
              )
            )}
            <img
              className="w-4 lg:w-6 2xl:w-10 rounded-xs"
              alt="profile"
              src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
            />
            <i
              className="fa-solid fa-bars text-white text-xs md:text-lg ml-2"
              onClick={() => setMobileNav(!mobileNav)}
            ></i>
          </div>
        </div>

        {user && (
          <div className="hidden md:flex w-full justify-between items-center gap-3 ml-4">
            <ul className="flex gap-2 2xl:gap-6 text-xs lg:text-sm 2xl:text-3xl text-white">
              <li
                className="hover:font-bold cursor-pointer"
                onClick={() => {
                  if (showGptSearch) dispatch(toggleGptSearchView());
                  navigate("/browse");
                }}
              >
                Home
              </li>
              {!showGptSearch && (
                <>
                  <li className="hover:font-bold">
                    <Link smooth duration={500} offset={-90} to="tv-shows">
                      TV Shows
                    </Link>
                  </li>
                  <li className="hover:font-bold">
                    <Link smooth duration={500} offset={-90} to="movies-section">
                      Movies
                    </Link>
                  </li>
                  <li className="hover:font-bold">Recently Added</li>
                  <div className="relative" ref={genresRef}>
                    <li className="hover:font-bold" onClick={handleGenre}>Genres</li>
                    {showGenre && (
                      <div className="absolute border border-[#141414] w-36 top-9 left-[-28px] bg-black/90 text-white/60 font-semibold rounded-sm text-sm space-y-1 p-3 z-50">
                        {genres.map((genre) => (
                          <h1 key={genre.id} className="hover:opacity-60">{genre.name}</h1>
                        ))}
                      </div>
                    )}
                  </div>
                </>
              )}
            </ul>

            {location.pathname === "/browse" && !showGptSearch && (
              <button
                onClick={handleGptSearchClick}
                className="text-black bg-white py-1 px-4 2xl:px-18 2xl:py-3 text-xs 2xl:text-2xl font-semibold rounded-sm hover:opacity-60"
              >
                GPT Search
              </button>
            )}

            <div className="flex items-center gap-2 2xl:gap-4 relative" ref={dropdownRef}>
              <img
                className="w-6 2xl:w-14 rounded-xs cursor-pointer"
                alt="profile"
                src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
              />
              <i
                onClick={handleShowChevron}
                className={`fa-solid ${showChevron ? "fa-chevron-up" : "fa-chevron-down"} text-white cursor-pointer text-xs 2xl:text-2xl`}
              ></i>
              {showChevron && (
                <div className="absolute mt-36 w-[100px]  right-[-20px] 2xl:mt-40 border border-[#141414] bg-black/90 text-white/60 font-semibold rounded-sm text-sm space-y-2 p-3 z-50">
                  <h1 className="hover:opacity-60 cursor-pointer lg:text-md 2xl:text-lg">
                    Manage</h1>
                  <h2
                    className="text-button-red font-semibold hover:opacity-60 cursor-pointer lg:text-md 2xl:text-lg"
                    onClick={() => {
                      handleSignOut();
                      setShowChevron(false);
                    }}
                  >
                    Sign Out
                  </h2>
                </div>
              )}
            </div>
          </div>
        )}

        {mobileNav && user && (
          <div className="md:hidden mt-2 w-3/6 right-2 absolute top-9 bg-black/80 text-white py-3 rounded-sm space-y-2 text-xs font-semibold">
            <ul className="flex flex-col items-center gap-2 text-[10px]">
              <li
                className="cursor-pointer"
                onClick={() => {
                  if (showGptSearch) dispatch(toggleGptSearchView());
                  navigate("/browse");
                  setMobileNav(false);
                }}
              >
                Home
              </li>
              {!showGptSearch && (
                <>
                  <li>
                    <Link smooth duration={500} offset={-90} to="tv-shows">
                      TV Shows
                    </Link>
                  </li>
                  <li>
                    <Link smooth duration={500} offset={-90} to="movies-section">
                      Movies
                    </Link>
                  </li>
                  <li>Recently Added</li>
                  <li onClick={handleGenre}>Genres</li>
                  {showGenre && (
                    <div className="text-white/60 space-y-1 px-3">
                      {genres.map((genre) => (
                        <h1 key={genre.id} className="text-xs">{genre.name}</h1>
                      ))}
                    </div>
                  )}
                </>
              )}
              <li onClick={handleSignOut} className="text-button-red">Sign Out</li>
            </ul>
          </div>
        )}
      </div>
   
    </div>
  );
};

export default Header;
