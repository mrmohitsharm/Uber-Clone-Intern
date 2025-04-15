import React from 'react';

function Topbar() {
  return (
    <div className="h-16 bg-white shadow-md flex items-center justify-between px-6">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div>User Name</div>
    </div>
  );
}

export default Topbar;
