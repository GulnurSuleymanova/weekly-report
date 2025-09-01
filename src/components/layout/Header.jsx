import React from "react";
import user from "../../../public/user.jpg"
const Header = ({ title = " Həftəlik Hesabat" }) => {
  return (
    <header className="flex items-center justify-between bg-white shadow-lg p-6 rounded-xl mb-6">
      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      <div className="flex items-center gap-4">
        <span className="text-gray-600 font-medium">Gulnur</span>
        <img
          src={user}
          alt="User"
          className="w-10 h-10 rounded-full border-2 border-green-200"
        />
      </div>
    </header>
  );
};

export default Header;