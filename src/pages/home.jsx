import React from 'react';

import AlgoTypeCard from '../components/algoTypeCard';
import { algoTypeList } from '../utils/utils';

const Home = () => (
    <>
        <div className="flex flex-col justify-center items-center my-8">
            <h1 className="text-3xl font-bold">
                <span className="text-gray-800 m-2">Algorithms</span>
                <span className="text-gray-600 m-2">visualizer</span>
            </h1>
            <p className="text-gray-600 my-4">
                Algorithm Visualizer is a web application that visualizes the algorithms that are used in computer science.
            </p>
        </div>

        <div className="flex flex-col justify-center items-center my-8">
            <div className="grid grid-cols-3 grid-flow-row gap-10">
                {algoTypeList.map((algoType, index) => (
                    <AlgoTypeCard key={index} algoType={algoType} />
                ))}
            </div>
        </div>
    </>
)

export default Home;