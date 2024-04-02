import { useState } from "react";
import "./App.css";
import Dashboard from "./pages/dashboard";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Product from "./pages/product";

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Dashboard/>
    },
    {
      path:'/product',
      element:<Product/>
    }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
