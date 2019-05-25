import React from 'react';
import PropTypes from 'prop-types';
import './common-styles.css';


const InputGroup = ({
    name,
    placeholder,
    value,
    type,
    onChange,
    onBlur
}) => {
    return (
        <div>
            <input
                className="custom__input"
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                type={type}
                onBlur={onBlur} />
        </div>
    )
}
InputGroup.PropTypes = {
    name: PropTypes.string.isRequired,
    placehoder: PropTypes.string,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired
}

export default InputGroup;