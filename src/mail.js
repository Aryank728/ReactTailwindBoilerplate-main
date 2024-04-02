import React from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const Amie = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold mb-4">Amie</h1>
                <div className="mb-4">
                    <Link to="/size">
                        <button className="text-gray-800 font-bold py-2 px-4 rounded">
                            <ArrowBackIcon /> Back
                        </button>
                    </Link>
                </div>
                <div className="mb-4">
                    <p className="text-gray-600">which emails would you like to connect?</p>
                    <p className="text-gray-500 text-sm">
                        this helps us understand if it's multiple personal emails or your work account.
                    </p>
                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="account@refero.design"
                    />
                </div>
                <div>
                    <Link to="/thankyou">
                        <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors duration-300">
                            Continue <ArrowForwardIcon />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Amie;