import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import About from './component/About.jsx';
import Contact from './component/Contact.jsx';
import Error from './component/Error.jsx';
import Body from './component/Body.jsx';
import RestaurantMenu from './component/RestaurantMenu.jsx';


const AppRouter = createBrowserRouter([
  {
   path:"/",
   element:<App />,
   children:[
    {
      path:"/",
      element:<Body />
    },
    {
      path:"about",
      element:<About />
     },
     {
       path:"contact",
       element:<Contact />
     },
     {
      path: "/restaurants/:resId",
      element: <RestaurantMenu />,
    },
    // {
    //   path: "/restaurants",
    //   element: <RestaurantMenu />, 
    // }
   ],
   errorElement:<Error />
  },
  

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={AppRouter}/>
  </React.StrictMode>,
)
