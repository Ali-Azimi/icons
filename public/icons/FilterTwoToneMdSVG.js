import React from 'react';

const FilterTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1 6C1 5.44772 1.44772 5 2 5H22C22.5523 5 23 5.44772 23 6C23 6.55228 22.5523 7 22 7H2C1.44772 7 1 6.55228 1 6Z'
                fill='#040A1F'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1 18C1 17.4477 1.44772 17 2 17H22C22.5523 17 23 17.4477 23 18C23 18.5523 22.5523 19 22 19H2C1.44772 19 1 18.5523 1 18Z'
                fill='#040A1F'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7 2C5.34315 2 4 3.34315 4 5V7C4 8.65685 5.34315 10 7 10H11C12.6569 10 14 8.65685 14 7V5C14 3.34315 12.6569 2 11 2H7ZM12 14C10.3431 14 9 15.3431 9 17V19C9 20.6569 10.3431 22 12 22H16C17.6569 22 19 20.6569 19 19V17C19 15.3431 17.6569 14 16 14H12Z'
                fill={color}
            />
        </svg>
    );
};

export default FilterTwoToneMdSVG;
