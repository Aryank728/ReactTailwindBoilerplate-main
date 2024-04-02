import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const CompanyQuestionForm = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6">Amie</h1>
                <Link to="/work">
                    <button className="text-gray-800 font-bold py-2 px-4 rounded">
                        <ArrowBackIcon /> Back
                    </button>
                </Link>
                <p className="text-gray-700 mb-6">how big is your company? *</p>
                <div className="mb-6">
                    <div className="flex items-center mb-2">
                        <input
                            type="radio"
                            id="option1"
                            value="just me"
                            checked={selectedOption === 'just me'}
                            onChange={handleOptionChange}
                            className="form-radio h-5 w-5 text-indigo-600"
                        />
                        <label htmlFor="option1" className="ml-2 text-gray-700">
                            just me
                        </label>
                    </div>
                    <div className="flex items-center mb-2">
                        <input
                            type="radio"
                            id="option2"
                            value="2-10"
                            checked={selectedOption === '2-10'}
                            onChange={handleOptionChange}
                            className="form-radio h-5 w-5 text-indigo-600"
                        />
                        <label htmlFor="option2" className="ml-2 text-gray-700">
                            2-10
                        </label>
                    </div>

                    <div className="flex items-center mb-2">
                        <input
                            type="radio"
                            id="option3"
                            value="11-25"
                            checked={selectedOption === '11-25'}
                            onChange={handleOptionChange}
                            className="form-radio h-5 w-5 text-indigo-600"
                        />
                        <label htmlFor="option3" className="ml-2 text-gray-700">
                            11-25
                        </label>
                    </div>

                    <div className="flex items-center mb-2">
                        <input
                            type="radio"
                            id="option4"
                            value="26-50"
                            checked={selectedOption === '26-50'}
                            onChange={handleOptionChange}
                            className="form-radio h-5 w-5 text-indigo-600"
                        />
                        <label htmlFor="option4" className="ml-2 text-gray-700">
                            26-50
                        </label>
                    </div>
                    <div className="flex items-center mb-2">
                        <input
                            type="radio"
                            id="option5"
                            value="51-100"
                            checked={selectedOption === '51-100'}
                            onChange={handleOptionChange}
                            className="form-radio h-5 w-5 text-indigo-600"
                        />
                        <label htmlFor="option5" className="ml-2 text-gray-700">
                            51-100
                        </label>
                    </div>

                    <div className="flex items-center mb-2">
                        <input
                            type="radio"
                            id="option6"
                            value="101-250"
                            checked={selectedOption === '101-250'}
                            onChange={handleOptionChange}
                            className="form-radio h-5 w-5 text-indigo-600"
                        />
                        <label htmlFor="option6" className="ml-2 text-gray-700">
                            101-250
                        </label>
                    </div>

                    <div className="flex items-center mb-2">
                        <input
                            type="radio"
                            id="option7"
                            value="251-500"
                            checked={selectedOption === '251-500'}
                            onChange={handleOptionChange}
                            className="form-radio h-5 w-5 text-indigo-600"
                        />
                        <label htmlFor="option7" className="ml-2 text-gray-700">
                            251-500
                        </label>
                    </div>

                    <div className="flex items-center mb-2">
                        <input
                            type="radio"
                            id="option8"
                            value="500+"
                            checked={selectedOption === '500+'}
                            onChange={handleOptionChange}
                            className="form-radio h-5 w-5 text-indigo-600"
                        />
                        <label htmlFor="option8" className="ml-2 text-gray-700">
                            500+
                        </label>
                    </div>

                    {/* Add more radio button options */}
                </div>
                <Link to="/mail">
                    <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors duration-300">
                        Continue <ArrowForwardIcon />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default CompanyQuestionForm;