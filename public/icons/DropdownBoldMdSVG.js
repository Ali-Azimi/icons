import React from 'react';

const DropdownBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M11.3763 15.4331C11.7343 15.7585 12.2657 15.7585 12.6237 15.4331L16.6691 11.7559C17.3359 11.1498 16.9275 10 16.0453 10H7.95466C7.07252 10 6.66411 11.1498 7.33094 11.7559L11.3763 15.4331Z'
                fill={color}
            />
        </svg>
    );
};

export default DropdownBoldMdSVG;
