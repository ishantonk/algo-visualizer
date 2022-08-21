import React, { useState, useEffect } from 'react';
import { Input, Button } from "@material-tailwind/react";
import ArrayTile from './ArrayTile';
import randomIntFromInterval from "../utils/randomIntFromInterval";
import getLinearSearchAnimations from '../algorithms/searchingAlgorithms/linearSearch';


export default function LinearSearch() {
    const ANIMATION_SPEED_SECONDS = 0.5;

    const [array, setArray] = useState([]);
    const [arraySize, setArraySize] = useState(10);
    const [searchValue, setSearchValue] = useState("");
    const [found, setFound] = useState(false);
    const [indexFound, setIndexFound] = useState(-1);
    const [disable, setDisable] = useState(false);


    // Change array size.
    const changeArraySize = (e) => {
        setArraySize(e.target.value);
    };

    // Create an array of random numbers.
    const resetArray = () => {
        const newArray = [];
        for (let i = 0; i < arraySize; i++) {
            newArray.push(randomIntFromInterval(5, 500));
        };
        setArray(newArray);
    };

    // Set back to initial values.
    const initialVal = () => {
        setFound(false);
        setIndexFound(-1);
        // Reset found state.
        for (let idx = 0; idx < array.length; idx++) {
            const currentTile = document.getElementById(`linear-search-tile-${idx}`);
            currentTile.classList.remove("bg-red-500");
            currentTile.classList.remove("bg-green-500");
            currentTile.classList.remove("scale-125");
            currentTile.classList.remove("mx-10");
            currentTile.classList.add("bg-gray-400");
        };
    };

    // Reset array and search value.
    const handleReset = () => {
        initialVal();
        resetArray();
        setSearchValue("");
    };

    const runLinearSearchAnimation = () => {
        setDisable(true);
        const animations = getLinearSearchAnimations(array, searchValue);

        initialVal();

        for (let i = 0; i < animations.length; i++) {
            const [idx, isFound] = animations[i];
            const currentTile = document.getElementById(`linear-search-tile-${idx}`);

            if (isFound) {
                setTimeout(() => {
                    setFound(true);
                    setIndexFound(idx);
                    currentTile.classList.remove("bg-gray-400");
                    currentTile.classList.add("bg-green-500");
                    currentTile.classList.add("scale-125");
                    currentTile.classList.add("mx-10");
                }, ANIMATION_SPEED_SECONDS * 1000 * i);
                break;
            } else {
                setTimeout(() => {
                    currentTile.classList.remove("bg-gray-400");
                    currentTile.classList.add("bg-red-500");
                    currentTile.classList.add("transition-all");
                }, ANIMATION_SPEED_SECONDS * 1000 * i);
            }
        };

        setTimeout(() => {
            setDisable(false);
        }, ANIMATION_SPEED_SECONDS * 1000 * animations.length);
    };

    useEffect(() => {
        resetArray();
    }, [arraySize]);

    return (
        <>
            <div className="flex flex-col justify-center items-center my-8">
                <h1 className="text-3xl font-bold">
                    <span className="text-gray-800">Linear</span>
                    <span className="text-gray-600"> search</span>
                </h1>
                <div className='flex flex-row justify-center items-center mt-8 mb-2 w-1/3'>
                    <div className="flex w-full mx-2">
                        <Input disabled={disable} label="Find element" onChange={(e) => setSearchValue(e.target.value)} />
                    </div>
                    <div className='flex'>
                        <Button disabled={disable} className='rounded-r-none' color="green" onClick={runLinearSearchAnimation}>Search</Button>
                    </div>
                    <div className='flex'>
                        <Button disabled={disable} className='rounded-l-none' color="red" onClick={handleReset}>Reset</Button>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center my-2">
                {/* show message */}
                {found && <div className="text-center text-xl font-bold text-green-500 animate-bounce">Found at index {indexFound}</div>}
            </div>
            <div className='flex justify-center items-center mx-auto p-2 bg-gray-200 border border-gray-500 rounded-md mb-8'>
                <div className="flex flex-row flex-wrap justify-center items-center">
                    {array.map((val, idx) => {
                        return (
                            <ArrayTile
                                key={idx}
                                id={`linear-search-tile-${idx}`}
                                idx={idx}
                                value={val}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    );
};