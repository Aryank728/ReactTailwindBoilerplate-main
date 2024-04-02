import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const WorkQuestionForm = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6">Amie</h1>
                <Link to="/calendar">
                    <button className="text-gray-800 font-bold py-2 px-4 rounded">
                        <ArrowBackIcon /> Back
                    </button>
                </Link>

                <p className="text-gray-700 mb-6">what kind of work do you do?</p>
                <div className="mb-6">
                    <div className="flex items-center mb-2">
                        <input
                            type="radio"
                            id="option1"
                            value="student"
                            checked={selectedOption === 'student'}
                            onChange={handleOptionChange}
                            className="form-radio h-5 w-5 text-indigo-600"
                        />
                        <label htmlFor="option1" className="ml-2 text-gray-700">
                            student
                        </label>
                    </div>

                    <div className="flex items-center mb-2">
                        <input
                            type="radio"
                            id="option2"
                            value="sales"
                            checked={selectedOption === 'sales'}
                            onChange={handleOptionChange}
                            className="form-radio h-5 w-5 text-indigo-600"
                        />
                        <label htmlFor="option2" className="ml-2 text-gray-700">
                            sales
                        </label>
                    </div>

                    <div className="flex items-center mb-2">
                        <input
                            type="radio"
                            id="option3"
                            value="Marketing"
                            checked={selectedOption === 'Marketing'}
                            onChange={handleOptionChange}
                            className="form-radio h-5 w-5 text-indigo-600"
                        />
                        <label htmlFor="option3" className="ml-2 text-gray-700">
                            Marketing
                        </label>
                    </div>

                    <div className="flex items-center mb-2">
                        <input
                            type="radio"
                            id="option4"
                            value="finance/accounting"
                            checked={selectedOption === 'finance/accounting'}
                            onChange={handleOptionChange}
                            className="form-radio h-5 w-5 text-indigo-600"
                        />
                        <label htmlFor="option4" className="ml-2 text-gray-700">
                            finance/accounting
                        </label>
                    </div>

                    <div className="flex items-center mb-2">
                        <input
                            type="radio"
                            id="option5"
                            value="venture capital"
                            checked={selectedOption === 'venture capital'}
                            onChange={handleOptionChange}
                            className="form-radio h-5 w-5 text-indigo-600"
                        />
                        <label htmlFor="option5" className="ml-2 text-gray-700">
                            venture capital
                        </label>
                    </div>

                    <div className="flex items-center mb-2">
                        <input
                            type="radio"
                            id="option6"
                            value="design"
                            checked={selectedOption === 'design'}
                            onChange={handleOptionChange}
                            className="form-radio h-5 w-5 text-indigo-600"
                        />
                        <label htmlFor="option6" className="ml-2 text-gray-700">
                            design
                        </label>
                    </div>

                    <div className="flex items-center mb-2">
                        <input
                            type="radio"
                            id="option7"
                            value="executive assistance"
                            checked={selectedOption === 'executive assistance'}
                            onChange={handleOptionChange}
                            className="form-radio h-5 w-5 text-indigo-600"
                        />
                        <label htmlFor="option7" className="ml-2 text-gray-700">
                            executive assistance
                        </label>
                    </div>

                    <div className="flex items-center mb-2">
                        <input
                            type="radio"
                            id="option8"
                            value="operations"
                            checked={selectedOption === 'operations'}
                            onChange={handleOptionChange}
                            className="form-radio h-5 w-5 text-indigo-600"
                        />
                        <label htmlFor="option8" className="ml-2 text-gray-700">
                            operations
                        </label>
                    </div>

                    <div className="flex items-center mb-2">
                        <input
                            type="radio"
                            id="option9"
                            value="recruiting/people"
                            checked={selectedOption === 'recruiting/people'}
                            onChange={handleOptionChange}
                            className="form-radio h-5 w-5 text-indigo-600"
                        />
                        <label htmlFor="option9" className="ml-2 text-gray-700">
                            recruiting/people
                        </label>
                    </div>

                    <div className="flex items-center mb-2">
                        <input
                            type="radio"
                            id="option10"
                            value="engineering"
                            checked={selectedOption === 'engineering'}
                            onChange={handleOptionChange}
                            className="form-radio h-5 w-5 text-indigo-600"
                        />
                        <label htmlFor="option10" className="ml-2 text-gray-700">
                            engineering
                        </label>
                    </div>

                    <div className="flex items-center mb-2">
                        <input
                            type="radio"
                            id="option11"
                            value="founder"
                            checked={selectedOption === 'founder'}
                            onChange={handleOptionChange}
                            className="form-radio h-5 w-5 text-indigo-600"
                        />
                        <label htmlFor="option11" className="ml-2 text-gray-700">
                            founder
                        </label>
                    </div>

                    <div className="flex items-center mb-2">
                        <input
                            type="radio"
                            id="option12"
                            value="product"
                            checked={selectedOption === 'product'}
                            onChange={handleOptionChange}
                            className="form-radio h-5 w-5 text-indigo-600"
                        />
                        <label htmlFor="option12" className="ml-2 text-gray-700">
                            product
                        </label>
                    </div>
                    <div className="flex items-center mb-2">
                        <input
                            type="radio"
                            id="option13"
                            value="other"
                            checked={selectedOption === 'other'}
                            onChange={handleOptionChange}
                            className="form-radio h-5 w-5 text-indigo-600"
                        />
                        <label htmlFor="option13" className="ml-2 text-gray-700">
                            other
                        </label>
                    </div>
                    {/* Add more radio button options */}
                </div>
                <Link to="/size">
                    <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors duration-300">
                        Next <ArrowForwardIcon />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default WorkQuestionForm;