import React from 'react';
import './index.scss';

const Button = ({ onClick, buttonName }) => (
    <button type="button" onClick={onClick} className="button">
        {buttonName}
    </button>
)

export default Button;