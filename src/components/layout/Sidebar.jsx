import React from "react";
import { Link } from "react-router-dom";
import { BarChart3, CreditCard, Wallet } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-lg hidden md:flex flex-col">
      <div className="p-6 text-2xl font-bold text-purple-700 border-b">
        🌾 AgroDashboard
      </div>
      <nav className="flex-1 p-4 space-y-4">
        <Link to="/" className="flex items-center gap-2 text-gray-700 hover:text-purple-700">
          <BarChart3 className="w-5 h-5" /> Hesabat
        </Link>
        <Link to="/cards" className="flex items-center gap-2 text-gray-700 hover:text-purple-700">
          <CreditCard className="w-5 h-5" /> Kartlar
        </Link>
        <Link to="/subsidies" className="flex items-center gap-2 text-gray-700 hover:text-purple-700">
          <Wallet className="w-5 h-5" /> Subsidiyalar
        </Link>
      </nav>
      <div className="p-4 border-t text-sm text-gray-500">© 2025 Agro</div>
    </aside>
  );
};

export default Sidebar;