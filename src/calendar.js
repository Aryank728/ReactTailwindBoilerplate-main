import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const TodoQuestionForm = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6">Amie</h1>
                <div className='mb-4'>
                    <Link to="/AmieRollout">
                        <button className="text-gray-800 font-bold py-2 px-4 rounded">
                            <ArrowBackIcon /> Back
                        </button>
                    </Link>
                </div>
                <p className="text-gray-700 mb-6">
                    how many of your calendar events are todos (no one else is invited)? *
                </p>
                <div className="mb-6">
                    <div className="flex items-center mb-2">
                        <input
                            type="radio"
                            id="option1"
                            value="3+ per day"
                            checked={selectedOption === '3+ per day'}
                            onChange={handleOptionChange}
                            className="form-radio h-5 w-5 text-indigo-600"
                        />
                        <label htmlFor="option1" className="ml-2 text-gray-700">
                            3+ per day
                        </label>
                    </div>
                    <div className="flex items-center mb-2">
                        <input
                            type="radio"
                            id="option2"
                            value="1-2 per day"
                            checked={selectedOption === '1-2 per day'}
                            onChange={handleOptionChange}
                            className="form-radio h-5 w-5 text-indigo-600"
                        />
                        <label htmlFor="option2" className="ml-2 text-gray-700">
                            1-2 per day
                        </label>
                    </div>
                    <div className="flex items-center mb-2">
                        <input
                            type="radio"
                            id="option3"
                            value="few per week"
                            checked={selectedOption === 'few per week'}
                            onChange={handleOptionChange}
                            className="form-radio h-5 w-5 text-indigo-600"
                        />
                        <label htmlFor="option3" className="ml-2 text-gray-700">
                            few per week
                        </label>
                    </div>
                    <div className="flex items-center mb-2">
                        <input
                            type="radio"
                            id="option4"
                            value="few per month"
                            checked={selectedOption === 'few per month'}
                            onChange={handleOptionChange}
                            className="form-radio h-5 w-5 text-indigo-600"
                        />
                        <label htmlFor="option4" className="ml-2 text-gray-700">
                            few per month
                        </label>
                    </div>
                    <div className="flex items-center mb-2">
                        <input
                            type="radio"
                            id="option5"
                            value="i don't schedule my todos"
                            checked={selectedOption === "i don't schedule my todos"}
                            onChange={handleOptionChange}
                            className="form-radio h-5 w-5 text-indigo-600"
                        />
                        <label htmlFor="option5" className="ml-2 text-gray-700">
                            i don't schedule my todos
                        </label>
                    </div>
                </div>
                <Link to="/work">
                    <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors duration-300">
                        Next <ArrowForwardIcon />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default TodoQuestionForm;