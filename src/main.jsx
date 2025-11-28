import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Browse from "./pages/Browse";

const router = createBrowserRouter([
  { path: "/", element: <Signup /> },
  { path: "login", element: <Login /> },
  {
    path: "browse",
    element: <App />,
    children: [{ index: true, element: <Browse /> }],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
