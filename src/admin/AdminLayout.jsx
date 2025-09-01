import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AdminLayout = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
        <ul>
          <li className="mb-2 cursor-pointer" onClick={() => navigate("/admin")}>
            Dashboard
          </li>
          <li className="mb-2 cursor-pointer" onClick={() => navigate("/admin/users")}>
            Users
          </li>
          <li className="mb-2 cursor-pointer" onClick={() => navigate("/admin/products")}>
            Products
          </li>
        </ul>
        <button onClick={logout} className="mt-4 bg-red-500 p-2 rounded">
          Logout
        </button>
      </aside>

      <main className="flex-1 p-6">
        <Outlet /> 
      </main>
    </div>
  );
};

export default AdminLayout;
