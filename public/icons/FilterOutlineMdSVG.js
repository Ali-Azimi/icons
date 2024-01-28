import React from 'react';

const FilterOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7 2C5.34315 2 4 3.34315 4 5H2C1.44772 5 1 5.44772 1 6C1 6.55228 1.44772 7 2 7H4C4 8.65685 5.34315 10 7 10H11C12.6569 10 14 8.65685 14 7H22C22.5523 7 23 6.55228 23 6C23 5.44772 22.5523 5 22 5H14C14 3.34315 12.6569 2 11 2H7ZM6 5C6 4.44772 6.44772 4 7 4H11C11.5523 4 12 4.44772 12 5V7C12 7.55228 11.5523 8 11 8H7C6.44772 8 6 7.55228 6 7V5Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 14C10.3431 14 9 15.3431 9 17H2C1.44772 17 1 17.4477 1 18C1 18.5523 1.44772 19 2 19H9C9 20.6569 10.3431 22 12 22H16C17.6569 22 19 20.6569 19 19H22C22.5523 19 23 18.5523 23 18C23 17.4477 22.5523 17 22 17H19C19 15.3431 17.6569 14 16 14H12ZM11 17C11 16.4477 11.4477 16 12 16H16C16.5523 16 17 16.4477 17 17V19C17 19.5523 16.5523 20 16 20H12C11.4477 20 11 19.5523 11 19V17Z'
                fill={color}
            />
        </svg>
    );
};

export default FilterOutlineMdSVG;
