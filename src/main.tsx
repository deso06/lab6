import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import './index.css';

import Layout from "./Layout";
import Home from "./Home";
import Courses from "./Courses";
import About from "./About";
import NotFound from "./NotFound";

const router = createBrowserRouter([ // [cite: 52]
  {
    path: "/",
    element: <Layout />, // [cite: 57]
    children: [
      { index: true, element: <Home /> }, // [cite: 59]
      { path: "courses", element: <Courses /> }, // [cite: 60]
      { path: "about", element: <About /> }, // [cite: 61]
      { path: "*", element: <NotFound /> }, // [cite: 39, 62]
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} /> {/* [cite: 71] */}
  </StrictMode>
);