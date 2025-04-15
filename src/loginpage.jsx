import React, { useState } from 'react';

function LoginPage({ onLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!formData.email || !formData.password) {
      setError('Please fill in all required fields');
      return;
    }

    try {
      await onLogin(formData);
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-black text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Uber</div>
          <div className="flex space-x-6">
            <a href="#" className="hover:opacity-80">Ride</a>
            <a href="#" className="hover:opacity-80">Drive</a>
            <a href="#" className="hover:opacity-80">Business</a>
            <a href="#" className="hover:opacity-80">About</a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="hover:opacity-80">Help</button>
            <button className="hover:opacity-80">EN</button>
            <button className="hover:opacity-80">Log in</button>
            <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-100">
              Sign up
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 flex">
        {/* Left Side - Form */}
        <div className="w-1/2">
          <h1 className="text-5xl font-bold mb-8">Request a ride for now or later</h1>
          <p className="text-xl mb-8 text-gray-600">Add your trip details, hop in, and go.</p>
          
          <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
            {error && (
              <div className="p-3 bg-red-100 text-red-700 rounded-lg">
                {error}
              </div>
            )}

            <div className="relative">
              <input
                type="text"
                name="pickup"
                placeholder="Enter pickup location"
                className="w-full p-4 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-black rounded-full"></div>
            </div>

            <div className="relative">
              <input
                type="text"
                name="destination"
                placeholder="Enter destination"
                className="w-full p-4 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-black rounded-full"></div>
            </div>

            <div className="flex space-x-4">
              <button
                type="submit"
                className="flex-1 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition duration-300"
              >
                See prices
              </button>
              <button
                type="button"
                className="flex-1 bg-gray-100 text-black py-3 rounded-lg hover:bg-gray-200 transition duration-300"
              >
                Schedule for later
              </button>
            </div>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="w-1/2">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1653688465/assets/29/74ec2f-a727-47e1-9695-c78f8dadee5f/original/UberX-Share-Icon.png"
              alt="Uber ride"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
