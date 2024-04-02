import React from 'react';
import img from './59648.jpg';

const Amnie = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold mb-4">Amie</h1>
                <div className="mb-4">
                    <p className="text-pink-500">
                        thanks so much for answering our questions, we hope to give you access to Amie soon{' '}
                        <span role="img" aria-label="party">
                            🎉
                        </span>
                    </p>
                </div>
                <div className="mb-4">
                    <p className="text-gray-600">
                        follow us on{' '}
                        <a href="https://twitter.com" className="text-blue-500 hover:text-blue-700">
                            twitter
                        </a>{' '}
                        <span role="img" aria-label="smile">
                            🙂
                        </span>
                    </p>
                </div>
                <div className="mb-4" style={{ maxWidth: "600px", maxHeight: "500px" }}>
                    <img src={img} alt="Weekly Sync" className="max-w-full max-h-full" />
                </div>

            </div>
        </div>
    );
};

export default Amnie;