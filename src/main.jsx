import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Browse from "./pages/Browse";
import appStore from "./store/appStore.js";
import { Provider } from "react-redux";
import AuthObserver from "./components/AuthObserver.jsx";
import Search from "./pages/Search.jsx";
import ComingSoon from "./components/ComingSoon.jsx";

// const router = createBrowserRouter([
//   {
//     element: <AuthObserver />,
//     children: [
//       { path: "/", element: <Signup /> },
//       { path: "/login", element: <Login /> },
//       { path: "/search", element: <Search /> },

//       {
//         element: <App />,
//         children: [{ path: "/browse", element: <Browse /> }],
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter([{ path: "/*", element: <ComingSoon /> }]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
