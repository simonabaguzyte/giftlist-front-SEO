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
    path: "/giftlist-front-SEO/",
    element: <Root />,
  },
  {
    path: "/giftlist-front-SEO/register",
    element: <Register />,
  },
  {
    path: "/giftlist-front-SEO/login",
    element: <Login />,
  },
  {
    path: "/giftlist-front-SEO/my-lists",
    element: <GiftLists />,
  },
  {
    path: "/giftlist-front-SEO/my-lists/new",
    element: <NewGiftList />,
  },
  {
    path: "/giftlist-front-SEO/my-lists/:id",
    element: <GiftList />,
  },
  {
    path: "/giftlist-front-SEO/my-lists/:id/new",
    element: <NewGift />,
  },
  {
    path: "/giftlist-front-SEO/blog",
    element: <BlogPage />,
  },
  {
    path: "/giftlist-front-SEO/article/:id",
    element: <Article />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
