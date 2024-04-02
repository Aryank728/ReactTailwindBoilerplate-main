import React from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const AmieRollout = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Amie</h1>
        <p className="text-orange-700 font-bold text-xl mb-6">
          we've started rolling out Amie! <span className="text-yellow-500">😍</span>
        </p>
        <p className="text-gray-700 text-xl mb-6">
          invites are sent in weekly batches so we can <br /> ship based on customer feedback and keep the app stable.
        </p>
        <Link to="/calendar">
          <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors duration-300">
            Let's gooo! <ArrowForwardIcon />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AmieRollout;