import React from 'react'

import AlgoTypeCard from '../components/algoTypeCard';
import algoTypes from '../utils/algoTypeList';

const Home = () => (
    <>
        <div className="flex flex-col justify-center items-center my-8">
            <h1 className="text-3xl font-bold">
                <span className="text-gray-800">Algorithms</span>
                <span className="text-gray-600">Visualizer</span>
            </h1>
            <p className="text-gray-600">
                This is a simple React app with a custom styled theme.
            </p>
        </div>

        <div className="flex flex-col justify-center items-center my-8">
            <div className="grid grid-cols-3 grid-flow-row gap-10">
                {algoTypes.map((algoType, index) => (
                    <AlgoTypeCard key={index} algoType={algoType} />
                ))}
            </div>
        </div>
    </>
)

export default Home