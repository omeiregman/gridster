import React from 'react';



const GridCell = ({ size, filled, inPath, start, end, onClick }) => {

    let colorState = filled ? ' filled' : '';

    if (inPath) {
        colorState = ' inPath';
    }

    if (start) {
        colorState = ' start';
    }

    if (end) {
        colorState = ' end';
    }


    return (
        <div
            className={`GridCell${colorState}`} style={{ width: `${size}px`, height: `${size}px` }}
            onClick={onClick}
        >
        </div >
    )
}



export default GridCell;
