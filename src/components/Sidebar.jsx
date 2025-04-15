import React from 'react';

function Sidebar({ onLogout }) {
  return (
    <div className="w-64 bg-white shadow-md p-6 h-full">
      <h2 className="text-xl font-bold mb-6 text-green-600">Uber Admin</h2>
      <ul className="space-y-4">
        <li className="hover:text-green-600 cursor-pointer transition-colors">
          Dashboard
        </li>
        <li className="hover:text-green-600 cursor-pointer transition-colors">
          Rides
        </li>
        <li className="hover:text-green-600 cursor-pointer transition-colors">
          Drivers
        </li>
        <li 
          onClick={onLogout}
          className="hover:text-green-600 cursor-pointer transition-colors text-red-500 hover:text-red-600"
        >
          Logout
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
