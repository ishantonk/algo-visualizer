import React from 'react'

const Node = ({ row, col, classes, nodeClick }) => {
    return (
        <div onClick={nodeClick} id={`row-${row}__col-${col}`} className={`${classes} h-6 w-6`}>
        </div>
    );
}

export default Node