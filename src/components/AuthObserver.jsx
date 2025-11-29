import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../utils/Firebase";
import { addUser, removeUser } from "../store/userSlice";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const AuthObserver = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pathname = useLocation().pathname;

  // action on singin/login & signout
  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        // on signin/login
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            name: user.displayName,
          }),
        );
        if (!pathname.startsWith("/browse")) {
          navigate("/browse", { replace: true });
        }
      } else {
        // on signout
        dispatch(removeUser());
        if (pathname === "/login") navigate("/login");
        else navigate("/");
      }
    });
  }, []);

  return <Outlet />;
};

export default AuthObserver;
