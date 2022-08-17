import React from 'react'
import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";

const SearchArrayTile = (value, index) => {
    console.log(index);
    return (
        <Card className='w-24 bg-gray-200'>
            <CardHeader floated={false} className='flex justify-center items-center bg-gray-400 rounded-md p-2'>
                <Typography className='text-center text-xl font-bold'>0</Typography>
            </CardHeader>
            <CardBody className='text-center'>
                <Typography color="blue-gray" className="mb-2 font-semibold text-xs flex flex-row justify-center">
                    <span className="text-gray-800">Index</span>
                    <span className="text-gray-600">: </span>
                    <span className="text-gray-800">0</span>
                </Typography>
            </CardBody>
        </Card>
    )
}

export default SearchArrayTile