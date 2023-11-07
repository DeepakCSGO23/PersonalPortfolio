import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import  About from './About';
import Skills from './Skills';
import Certificate from './Certificate';
import Experience from './Experience';
import Technology from './Technology';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "about",
    element: <About/>,
  },
  {
    path: "skills",
    element: <Skills/>,
  },{
    path: "certificate",
    element: <Certificate/>,
  },{
    path: "experience",
    element: <Experience/>
  },{
    path: "Technology",
    element:<Technology/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);