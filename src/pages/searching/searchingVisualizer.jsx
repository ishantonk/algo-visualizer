import React from 'react';
import BinarySearch from '../../components/binarySearch';
import LinearSearch from '../../components/linearSearch';

const SearchingVisualizer = () => {
    return (
        <div className='flex flex-col'>
            <LinearSearch />
            <BinarySearch />
        </div>
    );
};

export default SearchingVisualizer;