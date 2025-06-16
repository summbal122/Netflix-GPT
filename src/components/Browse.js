// components/Browse.js
import Header from "./Header";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { removeUser } from "../utils/userSlice";
import { useSelector } from "react-redux";

const Browse = () => {
  const user = useSelector(store => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = getAuth();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser()); // ✅ Call the function, not just reference
        navigate("/");          // ✅ Redirect to login page
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };

  return (
    <div className="px-32 py-1 flex items-center justify-between">
      <Header />
      <div>
        <button
          onClick={handleSignOut} // ✅ Trigger sign out on click
          className="text-white bg-button-red py-1.5 px-4 text-sm font-semibold rounded-sm"
        >
          Sign Out
        </button>
        <h2>{user}</h2>
      </div>
    </div>
  );
};

export default Browse;
