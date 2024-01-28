import React from 'react';

const ChevronRightOffOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7.1159 5.17992C7.29269 4.96778 7.60797 4.93912 7.82011 5.1159L10.8201 7.6159C10.9341 7.7109 11 7.85162 11 8.00001C11 8.1484 10.9341 8.28913 10.8201 8.38412L7.8201 10.8841C7.60797 11.0609 7.29268 11.0322 7.1159 10.8201C6.93912 10.608 6.96778 10.2927 7.17992 10.1159L9.71899 8.00001L7.17992 5.88412C6.96778 5.70734 6.93912 5.39206 7.1159 5.17992Z'
                fill={color}
            />
        </svg>
    );
};

export default ChevronRightOffOutlineSmSVG;
