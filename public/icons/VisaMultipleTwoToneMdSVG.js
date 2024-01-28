import React from 'react';

const VisaMultipleTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M8 19V20C8 21.6569 9.34315 23 11 23H20C21.6569 23 23 21.6569 23 20V8C23 6.34315 21.6569 5 20 5H17V7H20C20.5523 7 21 7.44772 21 8V20C21 20.5523 20.5523 21 20 21H11C10.4477 21 10 20.5523 10 20V19H8Z'
                fill='#040A1F'
            />
            <path
                d='M4 1C2.34315 1 1 2.34315 1 4V16C1 17.6569 2.34315 19 4 19H14C15.6569 19 17 17.6569 17 16V4C17 2.34315 15.6569 1 14 1H4Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M9 4C6.79086 4 5 5.79086 5 8C5 10.2091 6.79086 12 9 12C11.2091 12 13 10.2091 13 8C13 5.79086 11.2091 4 9 4ZM7 8C7 6.89543 7.89543 6 9 6C10.1046 6 11 6.89543 11 8C11 9.10457 10.1046 10 9 10C7.89543 10 7 9.10457 7 8Z'
                fill='#040A1F'
            />
            <path
                d='M7 14C6.44772 14 6 14.4477 6 15C6 15.5523 6.44772 16 7 16H11C11.5523 16 12 15.5523 12 15C12 14.4477 11.5523 14 11 14H7Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default VisaMultipleTwoToneMdSVG;
