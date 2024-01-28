import React from 'react';

const FlagTwoToneMdV2SVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M8.1754 2C5.35844 2 3 4.19811 3 7V14H20.9469C22.465 14 23.565 12.353 22.6891 10.9545L20.8385 8L22.6891 5.04548C23.5651 3.64702 22.465 2 20.9469 2H8.1754Z'
                fill={color}
            />
            <path
                d='M5 2C5 1.44772 4.55228 1 4 1C3.44772 1 3 1.44772 3 2V21H2C1.44772 21 1 21.4477 1 22C1 22.5523 1.44772 23 2 23H6C6.55228 23 7 22.5523 7 22C7 21.4477 6.55228 21 6 21H5V2Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default FlagTwoToneMdV2SVG;
