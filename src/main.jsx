import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TermsAndConditions from "./components/TermsAndConditions.jsx";
import FaqScreen from "./components/FaqScreen.jsx";
import App from "./App.jsx";
import BlogsPersonal from "./components/private/BlogsPersonal.jsx";
import BlogsBusiness from "./components/business/BlogsBusiness.jsx";
import "./index.css";

// Define the router with all routes
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/terms", element: <TermsAndConditions /> },
  { path: "/faq", element: <FaqScreen /> },
  { path: "/blogs-personal", element: <BlogsPersonal /> },
  { path: "/blogs-business", element: <BlogsBusiness /> } 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
