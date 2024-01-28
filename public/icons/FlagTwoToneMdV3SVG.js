import React from 'react';

const FlagTwoToneMdV3SVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12V16C12 16.5523 12.4477 17 13 17H20.8916C21.6811 17 22.3637 16.5959 22.7276 15.9814C23.0982 15.3556 23.1176 14.5302 22.617 13.8516L20.8822 11.5L22.617 9.14836C23.1176 8.46981 23.0982 7.64437 22.7276 7.01857C22.3637 6.40411 21.6811 6 20.8916 6H16V4C16 2.89543 15.1046 2 14 2H3Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M3 1C3.55228 1 4 1.44772 4 2V22C4 22.5523 3.55228 23 3 23C2.44772 23 2 22.5523 2 22V2C2 1.44772 2.44772 1 3 1Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default FlagTwoToneMdV3SVG;
