import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/Firebase.js";
import { addUser, removeUser } from "./store/userSlice.js";

const App = () => {
  const dispatch = useDispatch();

  // action on singin/login & signout
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // on signin/login
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            name: user.displayName,
          }),
        );
      } else {
        // on signout
        dispatch(removeUser());
      }
    });

    return () => unsubscribe(); // cleanup method
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
