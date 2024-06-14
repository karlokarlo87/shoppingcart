import "./App.css";

import { Route, Routes } from "react-router-dom";

import AuthLogin from "./components/auth/AuthLogin.tsx";
import AuthResset from "./components/auth/AuthResset.tsx";
import AuthSendEmail from "./components/auth/AuthSendEmail.tsx";
import AuthEmailSuccsess from "./components/auth/AuthEmailSuccsess.tsx";

import Users from "./components/users/Users.tsx";
import UsersList from "./components/users/UsersList.tsx";
import UserCreate from "./components/users/UserCreate.tsx";
import UsersView from "./components/users/UsersView.tsx";
import Layout from "./components/shared/layout";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import Orders from "./components/Orders";
import Order from "./components/Order";
import Customers from "./components/Customers";
import Customer from "./components/Customer";
import Product from "./components/Product";
import Categories from "./components/Categories";
import NotFound from "./components/notfound/NotFound.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Products />} />
          <Route index path="products" element={<Dashboard />} />
          <Route path="product" element={<Product />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="order" element={<Order />} />
          <Route path="customers" element={<Customers />} />
          <Route path="customer" element={<Customer />} />
          <Route path="categories" element={<Categories />} />
          <Route path="users">
            <Route path="limit/:from/" element={<UsersList />} />
            <Route path=":id" element={<Users />} />
            <Route path="create" element={<UserCreate />} />
            <Route path="view/:id" element={<UsersView />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="auth">
          <Route path="login" element={<AuthLogin />} />
          <Route path="updatePassword/:tocken?" element={<AuthResset />} />
          <Route path="sendemail" element={<AuthSendEmail />} />
          <Route path="EmailSuccsess" element={<AuthEmailSuccsess />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
