import React from 'react';
import PropTypes from 'prop-types';
import '../styles/common-styles.scss';


const InputGroup = ({
    name,
    value,
    type,
    onChange,
    onBlur
}) => {
    return (
        <div>
            <input
                className="custom__input"
                name={name}
                value={value}
                onChange={onChange}
                type={type}
                onBlur={onBlur} />
        </div>
    )
}
InputGroup.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired
}

export default InputGroup;