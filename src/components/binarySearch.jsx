import React, { useState, useEffect } from 'react';
import { Input, Button } from "@material-tailwind/react";
import ArrayTile from './ArrayTile';
import { randomInt } from "../utils/utils";
import getBinarySearchAlgorithms from '../algorithms/searchingAlgorithms/binarySearch';

const BinarySearch = () => {
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
      newArray.push(randomInt(5, 500));
    };

    // Sort array.
    newArray.sort((a, b) => a - b);
    setArray(newArray);
  };

  // Set back to initial values.
  const initialVal = () => {
    setFound(false);
    setIndexFound(-1);
    // Reset found state.
    for (let idx = 0; idx < array.length; idx++) {
      const currentTile = document.getElementById(`binary-search-tile-${idx}`);
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

  const runBinarySearchAnimation = () => {
    setDisable(true);
    const animations = [];
    if (searchValue === "") {
      return;
    };
    const searchValueInt = parseInt(searchValue);
    getBinarySearchAlgorithms(array, 0, array.length - 1, searchValueInt, animations);

    initialVal();

    for (let i = 0; i < animations.length; i++) {
      const [left, right, mid, isFound] = animations[i];
      const currentTile = document.getElementById(`binary-search-tile-${mid}`);

      if (isFound) {
        setTimeout(() => {
          setFound(true);
          setIndexFound(mid);

          // Set rest of tiles to red.
          for (let jdx = 0; jdx < array.length; jdx++) {
            const tile = document.getElementById(`binary-search-tile-${jdx}`);
            tile.classList.remove("bg-gray-400");
            tile.classList.add("bg-red-500");
          }

          currentTile.classList.remove("bg-red-500");
          currentTile.classList.add("bg-green-500");
          currentTile.classList.add("scale-125");
          currentTile.classList.add("mx-10");

        }, ANIMATION_SPEED_SECONDS * 1000 * (i + 1));
      } else if (left === right === mid === 0 && !isFound) {
        // Do nothing.
        // This is the case when the search value is not found.
      };

      setTimeout(() => {
        initialVal();
        for (let idx = left; idx <= right; idx++) {
          const currentTile = document.getElementById(`binary-search-tile-${idx}`);
          currentTile.classList.remove("bg-gray-400");
          currentTile.classList.add("bg-green-500");
          currentTile.classList.add("transition-all");
        }
      }, ANIMATION_SPEED_SECONDS * 1000 * i);
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
      <div className="flex flex-col items-center mt-8">
        <h1 className="text-3xl font-bold">
          <span className="text-gray-800">Binary</span>
          <span className="text-gray-600"> search</span>
        </h1>
        <div className='flex mx-auto mt-8 mb-2'>
          <Input className='' disabled={disable} label="Find element" onChange={(e) => setSearchValue(e.target.value)} />
          <Button disabled={disable} className='rounded-r-none' color="green" onClick={runBinarySearchAnimation}>Search</Button>
          <Button disabled={disable} className='rounded-l-none' color="red" onClick={handleReset}>Reset</Button>
        </div>
      </div>
      <div className="flex justify-center items-center my-2">
        {/* show message */}
        {found && <div className="text-center text-xl font-bold text-green-500 animate-bounce">Found at index {indexFound}</div>}
      </div>
      <div className='flex justify-center items-center mx-auto p-2 bg-gray-200 border border-gray-500 rounded-md'>
        <div className="flex flex-row flex-wrap justify-center items-center">
          {array.map((val, idx) => {
            return (
              <ArrayTile
                key={idx}
                id={`binary-search-tile-${idx}`}
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

export default BinarySearch;