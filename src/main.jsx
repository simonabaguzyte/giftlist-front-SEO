import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Register from "./routes/register";
import Login from "./routes/login";
import GiftLists from "./routes/giftLists";
import NewGiftList from "./routes/newGiftList";
import GiftList from "./routes/giftList";
import NewGift from "./routes/newGift";
import BlogPage from "./routes/blog";
import Article from "./routes/article";

// console.lo

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/my-lists",
    element: <GiftLists />,
  },
  {
    path: "/my-lists/new",
    element: <NewGiftList />,
  },
  {
    path: "/my-lists/:id",
    element: <GiftList />,
  },
  {
    path: "/my-lists/:id/new",
    element: <NewGift />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/article/:id",
    element: <Article />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
