import React from 'react';

const ArrayTile = ({ id, idx, value }) => {
    return (
        <div id={id} className='w-24 bg-gray-400 shadow-lg rounded-lg m-1 transition-all'>
            <div className='flex justify-center items-center bg-yellow-600 rounded-md p-2 m-4 mb-0 shadow-inner'>
                <p className='text-center text-xl font-bold'>{value}</p>
            </div>
            <div className='text-center p-6'>
                <div className="mb-2 font-semibold text-xs flex flex-row justify-center">
                    <span className="text-gray-800">Index</span>
                    <span className="text-gray-600">:</span>
                    <span className="text-gray-800 mx-1">{idx}</span>
                </div>
            </div>
        </div>
    )
}

export default ArrayTile