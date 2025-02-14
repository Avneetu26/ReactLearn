import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import AboutComponent from "./components/AboutComponent";
import ContactComponent from "./components/ContactComponent";
import ErrorComponent from "./components/ErrorComponent";
import RestaurantMenuComponent from "./components/RestaurantMenuComponent"

const AppLayout = () => {
    return (<div className="app">
        <HeaderComponent/>
        <Outlet />
    </div>);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <BodyComponent/>  
            },
            {
                path: "/about",
                element: <AboutComponent/>
            },
            {
                path: "/contact",
                element: <ContactComponent/>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenuComponent /> 
            }
        ],
        errorElement: <ErrorComponent/>
    },
    
]);

root.render(<RouterProvider router={appRouter}/>)


