import React from 'react';

const ChevronDownOffOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8.00001 11C8.1484 11 8.28913 10.9341 8.38412 10.8201L10.8841 7.82011C11.0609 7.60797 11.0322 7.29268 10.8201 7.1159C10.608 6.93912 10.2927 6.96778 10.1159 7.17992L8.00001 9.71899L5.88412 7.17992C5.70734 6.96778 5.39206 6.93912 5.17992 7.1159C4.96778 7.29268 4.93912 7.60797 5.1159 7.8201L7.6159 10.8201C7.7109 10.9341 7.85162 11 8.00001 11Z'
                fill={color}
            />
        </svg>
    );
};

export default ChevronDownOffOutlineSmSVG;
