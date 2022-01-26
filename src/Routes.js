import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Categories from "./views/category/Categories";
import Product from "./views/product/Product";
import AddCategory from "./views/category/AddCategory";

export default function Routes() {
    return (
        <Switch>
            <Redirect exact from="/" to="/home"/>
            <Route path='/home' component={MainLayout}/>
            <Route exact path='/category' component={Categories}/>
            <Route exact path='/category/new' component={AddCategory}/>
            <Route exact path='/product' component={Product}/>

            
        </Switch>
    );
}
