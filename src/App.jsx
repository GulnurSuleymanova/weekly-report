import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import AdminLayout from "./admin/AdminLayout";
import Login from "./admin/Login";
import Dashboard from "./admin/Dashboard";
import Users from "./admin/Users";
import Products from "./admin/Products";

// PrivateRoute – admin yoxlaması
const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("adminToken"); // token yoxlanır
  return isAuthenticated ? children : <Navigate to="/admin/login" replace />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/admin/login" element={<Login />} />

        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
