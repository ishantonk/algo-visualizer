import React, { useState, useEffect } from 'react'
import { Input, Button } from "@material-tailwind/react";
import SearchArrayTile from './searchArrayTile';
import randomIntFromInterval from "../utils/randomIntFromInterval";

const LinearSearch = () => {
    const [array, setArray] = useState([]);
    const [arrayLen, setArrayLen] = useState(10);

    const randomArray = () => {
        const tempArray = [];
        for (let i = 0; i < arrayLen; i++) {
            tempArray.push(randomIntFromInterval(0, 100));
        }
        setArray(tempArray);
    };

    useEffect(() => {
        randomArray();
    }, []);


    return (
        <>
            <div className="flex flex-col justify-center items-center my-8">
                <h1 className="text-3xl font-bold">
                    <span className="text-gray-800">Linear</span>
                    <span className="text-gray-600"> search</span>
                </h1>
                <div className='flex flex-row justify-center items-center my-8 w-1/3'>
                    <div className="flex w-full mx-2">
                        <Input label="Find element" />
                    </div>
                    <div className='flex'>
                        <Button className='rounded-r-none' color="green">Search</Button>
                    </div>
                    <div className='flex'>
                        <Button className='rounded-l-none' color="red">Reset</Button>
                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-center items-center">
                {array.map((value, index) => {
                    return (
                        <SearchArrayTile key={index} value={value} index={index} />
                    )
                })}
            </div>
        </>
    )
}

export default LinearSearch