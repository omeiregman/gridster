import React from 'react';
// import PropTypes from 'prop-types';


const GridCell = ({ size }) => {
    return (
        <div className="GridCell" style={{ width: `${size}px`, height: `${size}px` }}></div>
    )
}



export default GridCell;
