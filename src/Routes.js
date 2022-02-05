import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Categories from "./views/category/Categories";
import Product from "./views/product/Product";
import FlexBox from "./views/tailwind/FlexBox";
import AddCategory from "./views/category/AddCategory";
import NotFound from "./views/404/NotFound";
import DashboardLayout from "./layout/DashboardLayout";
import Order from "./views/order/Order";
import AccountPayment from "./views/payment/AccountPayment";
import TransactionPayment from "./views/payment/TransactionPaymennt";
import AddProduct from "./views/product/AddProduct";

export default function Routes() {
    return useRoutes([
        // {
        //     path: "/",
        //     element: <MainLayout />,
        //     children: [
        //         { path: "category", element: <Categories /> },
        //         { path: "product", element: <Product /> },
        //         { path: "flexbox", element: <FlexBox /> },
        //     ],
        // },
        { path: "/", element: <MainLayout /> },
        {
            path: "/category",
            element: <Categories />,
            children: [{ path: "addcategory", element: <AddCategory /> }],
        },
        {
            path: "/dashboard",
            element: <DashboardLayout />,
            children: [
                { path: "category", element: <Categories /> },
                { path: "product", element: <Product /> },
                { path: "product/new", element: <AddProduct /> },
                { path: "order", element: <Order /> },
                { path: "payment", element: <AccountPayment /> },
                { path: "transaction", element: <TransactionPayment /> },
            ],
        },
        { path: "/product", element: <Product /> },
        { path: "/flexbox", element: <FlexBox /> },
        { path: "/404found", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404found" /> },
    ]);

    // dibawah adalah react router dom version 5
    // <Switch>
    //     <Redirect exact from="/" to="/home"/>
    //     <Route path='/home' component={MainLayout}/>
    //     <Route exact path='/category' component={Categories}/>
    //     <Route exact path='/category/new' component={AddCategory}/>
    //     <Route exact path='/product' component={Product}/>

    // </Switch>
}
