import {
    createBrowserRouter,
   
  } from "react-router-dom";

import { Shop } from "../Pages/Shop";
import Main from "../Layouts/Main";
import { ShopCategory } from "../Pages/ShopCategory";

import Cart from "../Pages/Cart";
import { LoginSignup } from "../Pages/LoginSignup";
import men_banner from "../Components/Assets/banner_mens.png"
import women_banner from "../Components/Assets/banner_women.png"
import kids_banner from "../Components/Assets/banner_kids.png"
import Product from "../Pages/Product";




  export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element: <Shop></Shop>
        },
        {
            path:"/mens",
            element:<ShopCategory category="men"
            banner={men_banner}></ShopCategory>
        },
        
        {
            path:"/womens",
            element:<ShopCategory category="women"
            banner={women_banner}></ShopCategory>
        },
        
        {
            path:"/kids",
            element:<ShopCategory category="kid"
            banner={kids_banner}></ShopCategory>
        },
        {
          path:"/product",
          element:<Product></Product>
        },
        
        {
          path:"product/:productId",
          element:<Product></Product>
        },
        
        
        {
            path:"/cart",
            element:<Cart></Cart>
        },
        
        {
            path:"/login",
            element:<LoginSignup></LoginSignup>
        },
        
      ]
    },
    
  ]);