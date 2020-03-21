import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ShopsPage from "./pages/shops/ShopsPage";
import ProductsPage from "./pages/products/ProductsPage";
import ProductPage from "./pages/products/ProductPage";
import VerifyAccountPage from "./pages/authentication/VerifyAccountPage";
import ResetPassword from "./pages/authentication/ResetPasswordPage";
import ForgotPasswordPage from "./pages/authentication/ForgotPasswordPage";
import ChangePassword from "./pages/authentication/ChangePasswordPage";
import SignUpPage from "./pages/authentication/SignUpPage";
import SignInPage from "./pages/authentication/SignInPage";
import OrdersPage from "./pages/orders/OrdersPage";
import ShoppingCartPage from "./pages/cart/ShoppingCartPage";
import ShoppingListPage from "./pages/shopping-list/ShoppingListPage";
import CreateShopPage from "./pages/shops/CreateShopPage";
import CreateProductPage from "./pages/products/CreateProductPage";
import CreateShoppingListPage from "./pages/shopping-list/CreateShoppingListPage";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true}>
                    <HomePage/>
                </Route>

                <Route path="/shops">
                    <ShopsPage/>
                </Route>

                <Route path="/products/:productId">
                    <ProductPage/>
                </Route>

                <Route path="/products">
                    <ProductsPage/>
                </Route>

                <Route path="/list">
                    <ShoppingListPage/>
                </Route>

                <Route path="/cart">
                    <ShoppingCartPage/>
                </Route>

                <Route path="/orders/:orderId">
                    <OrdersPage/>
                </Route>

                <Route path="/orders">
                    <OrdersPage/>
                </Route>

                <Route path="/login">
                    <SignInPage/>
                </Route>

                <Route path="/register">
                    <SignUpPage/>
                </Route>

                <Route path="/change-password">
                    <ChangePassword/>
                </Route>

                <Route path="/forgot-password">
                    <ForgotPasswordPage/>
                </Route>

                <Route path="/reset-password">
                    <ResetPassword/>
                </Route>

                <Route path="/verify/:token">
                    <VerifyAccountPage/>
                </Route>

                <Route path="/new/list" exact={true}>
                    <CreateShoppingListPage/>
                </Route>

                <Route path="/new/product" exact={true}>
                    <CreateProductPage/>
                </Route>

                <Route path="/new/shop" exact={true}>
                    <CreateShopPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
