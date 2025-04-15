import React, { useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Sidebar from './components/Sidebar';

function Dashboard({ onLogout, user }) {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');

  const mapContainerStyle = {
    width: '100%',
    height: '100%'
  };

  const center = {
    lat: 26.9124, // Jaipur coordinates
    lng: 75.7873
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Top Navigation */}
      <nav className="bg-white border-b">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <h1 className="text-2xl font-bold">Uber</h1>
            <div className="flex space-x-4">
              <button className="px-4 py-2 text-black font-medium">Ride</button>
              <button className="px-4 py-2 text-gray-500">Courier</button>
              <button className="px-4 py-2 text-gray-500">Rentals</button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2">Activity</button>
            <button onClick={onLogout} className="px-4 py-2">
              {user?.email || 'Account'}
            </button>
          </div>
        </div>
      </nav>

      <div className="flex-1 flex">
        {/* Left Sidebar */}
        <div className="w-96 bg-white p-6 shadow-lg z-10">
          <h2 className="text-2xl font-bold mb-6">Get a ride</h2>
          
          <div className="space-y-4">
            <div className="relative">
              <input
                type="text"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                placeholder="Pickup location"
                className="w-full p-4 pl-12 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-black rounded-full"></div>
            </div>

            <div className="relative">
              <input
                type="text"
                value={dropoff}
                onChange={(e) => setDropoff(e.target.value)}
                placeholder="Dropoff location"
                className="w-full p-4 pl-12 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-black rounded-full"></div>
            </div>

            <div className="relative">
              <select className="w-full p-4 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black appearance-none">
                <option>Pickup now</option>
                <option>Schedule for later</option>
              </select>
            </div>

            <div className="relative">
              <select className="w-full p-4 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black appearance-none">
                <option>For me</option>
                <option>For someone else</option>
              </select>
            </div>

            <button className="w-full bg-black text-white py-4 rounded-lg hover:bg-gray-800">
              Search
            </button>
          </div>
        </div>

        {/* Map Area */}
        <div className="flex-1 relative">
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={13}
            >
              {/* Add markers, etc. here */}
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
