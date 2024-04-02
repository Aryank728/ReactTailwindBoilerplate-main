import React from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const DemoComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Amie</h1>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            what's your email?
          </label>
          <div className="flex items-center">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="name@gmail.com"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <span className="ml-2 text-red-500">*</span>
          </div>
          <p className="text-gray-500 text-sm mt-1">
            tip: use your personal email so you never lose access to Amie, you can add work emails as sub-accounts.
          </p>
        </div>
        <div className="mb-6">
          <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">
            what's your first name?
          </label>
          <div className="flex items-center">
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="first name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <span className="ml-2 text-red-500">*</span>
          </div>
          <p className="text-gray-500 text-sm mt-1">we also love nicknames!</p>
        </div>
        <Link to="/AmieRollout">
          <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors duration-300">
            Continue <ArrowForwardIcon />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default DemoComponent;