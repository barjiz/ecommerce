import { Address } from "../../Modules/Address/Address"
import { CreateAddress } from "../../Modules/Address/CreateAddress/CreateAddress"
import { Login } from "../../Modules/Auth/Login"
import { StepForm } from "../../Modules/Auth/StepForm"
import { Categories } from "../../Modules/Categories/Categories"
import { CategoriesDetails } from "../../Modules/Categories/CategoriesDetails"
import { DeliveryForm } from "../../Modules/DeliveryForm/DeliveryForm"
import { FastFoodHome } from "../../Modules/Fastfood/FastFoodHome"
import { PoplularDishDetails } from "../../Modules/Fastfood/PoplularDishDetails"
import { GroceryHome } from "../../Modules/Grocery/GroceryHome"
import Home from "../../Modules/Home/Home"
import { Hotel } from "../../Modules/Hotel/Hotel"
import { HotelDetails } from "../../Modules/Hotel/HotelDetails"
import { Order } from "../../Modules/Orders/Order"
import { OrderDetails } from "../../Modules/Orders/OrderDetails"
import OrderSuccess from "../../Modules/OrderSuccess/OrderSuccess"
import { EditProfile } from "../../Modules/Profile/EditProfile"
import { Profile } from "../../Modules/Profile/Profile"


export const elements = [
    {
        isAuth: false,
        path: "/",
        element: <Home />
    },
    {
        isAuth: false,
        path: "fastfood",
        element: <GroceryHome />
    },
    {
        isAuth: false,
        path: "fastfood",
        element: <FastFoodHome />
    },
    {
        isAuth: false,
        path: "popular/:id",
        element: <PoplularDishDetails />
    },
    {
        isAuth: false,
        path: "hotel",
        element: <Hotel />
    },
    {
        isAuth: false,
        path: "hotel/:id",
        element: <HotelDetails />
    },
    {
        isAuth: false,
        path: "/categories/:id",
        element: <CategoriesDetails />
    },
    {
        isAuth: false,
        path: "/categories",
        element: <Categories />
    },
    {
        isAuth: false,
        path: "/signup",
        element: <StepForm />
    },
    {
        isAuth: false,
        path: "/login",
        element: <Login />
    },
    {
        isAuth: true,
        path: "/cart",
        element: <DeliveryForm />
    },
    {
        isAuth: true,
        path: "/ordersuccess",
        element: <OrderSuccess />
    },
    {
        isAuth: true,
        path: "/profile",
        element: <Profile />
    },
    {
        isAuth: true,
        path: "/profile/edit",
        element: <EditProfile />
    },
    {
        isAuth: true,
        path: "/address",
        element: <Address />
    },
    {
        isAuth: true,
        path: "/newaddress",
        element: <CreateAddress />
    },
    {
        isAuth: true,
        path: "/orders",
        element: <Order />
    },
    {
        isAuth: true,
        path: "/orders/:id",
        element: <OrderDetails />
    },
]

