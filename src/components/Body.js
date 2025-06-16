// components/Body.js
import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
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
        navigate("/browse"); // user is logged in → go to /browse
      } else {
        dispatch(removeUser());
        navigate("/"); // user is not logged in → go to /login
      }
    });

    return () => unsubscribe(); // cleanup on unmount
  }, [dispatch, navigate]);

  return (
    <div>
      <Outlet /> {/* this will render Login, SignUp, Browse based on route */}
    </div>
  );
};

export default Body;
