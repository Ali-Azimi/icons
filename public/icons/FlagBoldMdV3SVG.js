import React from 'react';

const FlagBoldMdV3SVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M3 1C3.55228 1 4 1.44772 4 2H14C15.1046 2 16 2.89543 16 4V6H20.8916C21.6811 6 22.3637 6.40411 22.7276 7.01857C23.0982 7.64437 23.1176 8.46981 22.617 9.14836L20.8822 11.5L22.617 13.8516C23.1176 14.5302 23.0982 15.3556 22.7276 15.9814C22.3637 16.5959 21.6811 17 20.8916 17H13C12.4477 17 12 16.5523 12 16V13H4V22C4 22.5523 3.55228 23 3 23C2.44772 23 2 22.5523 2 22V12V3V2C2 1.44772 2.44772 1 3 1Z'
                fill={color}
            />
        </svg>
    );
};

export default FlagBoldMdV3SVG;
