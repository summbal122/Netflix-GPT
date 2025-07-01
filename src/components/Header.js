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
import { NETFLIX_PROFILE } from "../utils/Constants";

const Header = () => {
  useGenres();
  const [showGenre, setShowGenre] = useState(false);
  const genres = useSelector((store) => store.movies.genres);
  const genresRef = useRef(null);
  const [showChevron, setShowChevron] = useState(false);
  const dropdownRef = useRef(null);
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
      <img className="absolute top-3 left-12 lg:top-5 lg:left-18 2xl:left-14 h-18 md:w-44 lg:h-16 2xl:h-36 lg:w-40 2xl:w-md" src={IMG} alt="logo" />
      <div className="absolute top-8 ml-22 2xl:top-12 w-8/12 lg:w-7/12">
        {user && (
          <div className="flex w-full justify-between items-center gap-3 ml-4">
            <ul className="flex gap-3 2xl:gap-6 text-sm lg:text-sm 2xl:text-3xl text-white">
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
                  <li className="hover:font-bold hover:cursor-pointer">
                    <Link smooth duration={500} offset={-90} to="tv-shows">
                      TV Shows
                    </Link>
                  </li>
                  <li className="hover:font-bold hover:cursor-pointer">
                    <Link smooth duration={500} offset={-90} to="movies-section">
                      Movies
                    </Link>
                  </li>
                  <li className="hover:font-bold hover:cursor-pointer">Recently Added</li>
                  <div className="relative" ref={genresRef}>
                    <li className="hover:font-bold hover:cursor-pointer" onClick={handleGenre}>Genres</li>
                    {showGenre && (
                      <div className="absolute border border-[#141414] w-36 top-7 left-[-28px] bg-[#141414] text-white/60 font-semibold rounded-sm text-sm space-y-1 p-3 z-50">
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
                className="text-black bg-white py-2 px-6 2xl:px-18 2xl:py-3 text-md 2xl:text-2xl font-semibold rounded-sm 2xl:rounded-xl hover:opacity-80"
              >
                GPT Search
              </button>
            )}

            <div className="flex items-center gap-4 2xl:gap-4 relative" ref={dropdownRef}>
              <img
                className="w-10 2xl:w-20 rounded-md 2xl:rounded-xl cursor-pointer"
                alt="profile"
                src={NETFLIX_PROFILE}
              />
              <i
                onClick={handleShowChevron}
                className={`fa-solid ${showChevron ? "fa-chevron-up" : "fa-chevron-down"} text-white cursor-pointer text-2xl lg:text-sm 2xl:text-2xl`}
              ></i>
              {showChevron && (
                <div className="absolute mt-36 w-36 2xl:w-56 flex flex-col 2xl:p-6 items-center right-[-20px] 2xl:right-[-50px] 2xl:mt-54  bg-[#141414] text-white/60 font-semibold rounded-sm text-sm 2xl:rounded-xl space-y-1 2xl:space-y-2 p-3 z-50">
                  <h1 className="hover:opacity-60 cursor-pointer text-lg lg:text-md 2xl:text-2xl">
                    Manage</h1>
                  <h2
                    className="text-button-red font-semibold hover:opacity-60 cursor-pointer text-lg lg:text-md 2xl:text-2xl"
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
      </div>
    </div>
  );
};

export default Header;
