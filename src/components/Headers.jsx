import React, { useState } from 'react'

const Headers = () => {

    const [isFocused, setIsFocused] = useState(false);

    return (

        <div className='w-full flex justify-between items-center 
         px-6 py-4'>
            <div className="relative">
                <input
                    type="text"
                    className={`w-40 px-4 py-2 border rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-500 oyu ease-in-out ${isFocused ? "w-72" : ""
                        }`}
                    placeholder="Search"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
                <div className="absolute top-0 right-[-1px] h-full w-12">
                    <button
                        type="submit"
                        className="h-full w-full rounded-full bg-gray-500 hover:bg-gray-600 transition-all duration-500 ease-in-out"
                    >
                        <svg
                            className="text-white h-5 w-5 m-auto"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M22 22l-6-6" />
                            <path d="M20 10a8 8 0 11-16 0 8 8 0 0116 0z" />
                        </svg>
                    </button>
                </div>
            </div>

        </div>

    )
}

export default Headers