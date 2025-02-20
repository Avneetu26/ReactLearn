import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import AboutComponent from "./components/AboutComponent";
import ContactComponent from "./components/ContactComponent";
import ErrorComponent from "./components/ErrorComponent";
import RestaurantMenuComponent from "./components/RestaurantMenuComponent"
import ShimmerComponent from "./components/ShimmerComponent";
import UserContext from "./utils/UserContext";
// import GroceryComponent from "./components/GroceryComponent";

// synchronous input
const GroceryComponent = lazy(() => import("./components/GroceryComponent"));

const AppLayout = () => {

    const [userName, setUserName] = useState("");

    useEffect(() => {
        const userData = {
            name: "Avneet Kaur"
        }

        setUserName(userData.name);
    }, [])

    return (
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
            <div className="app">
                <HeaderComponent/>
                <Outlet />
            </div>
        </UserContext.Provider>
    );
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
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<ShimmerComponent />}> <GroceryComponent /> </Suspense> 
            }
        ],
        errorElement: <ErrorComponent/>
    },
    
]);

root.render(<RouterProvider router={appRouter}/>)


