import { Address } from "../../Modules/Address/Address"
import { CreateAddress } from "../../Modules/Address/CreateAddress/CreateAddress"
import { Login } from "../../Modules/Auth/Login"
import { Signup } from "../../Modules/Auth/Signup"
import { Categories } from "../../Modules/Categories/Categories"
import { CategoriesDetails } from "../../Modules/Categories/CategoriesDetails"
import { DeliveryForm } from "../../Modules/DeliveryForm/DeliveryForm"
import Home from "../../Modules/Home/Home"
import { Order } from "../../Modules/Orders/Order"
import { OrderDetails } from "../../Modules/Orders/OrderDetails"
import OrderSuccess from "../../Modules/OrderSuccess/OrderSuccess"
import { ProductDetails } from "../../Modules/Products/ProductDetails"
import { EditProfile } from "../../Modules/Profile/EditProfile"
import { Profile } from "../../Modules/Profile/Profile"
import { NotFound } from "./NotFound/NotFound"



export const elements = [
    {
        isAuth: false,
        path: "/",
        element: <Home />
    },
    {
        isAuth: false,
        path: "/product/:id",
        element: <ProductDetails />
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
        path: "/login",
        element: <Login />
    },
    {
        isAuth: false,
        path: "/signup",
        element: <Signup />
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

