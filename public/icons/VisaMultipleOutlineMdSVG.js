import React from 'react';

const VisaMultipleOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5 8C5 5.79086 6.79086 4 9 4C11.2091 4 13 5.79086 13 8C13 10.2091 11.2091 12 9 12C6.79086 12 5 10.2091 5 8ZM9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6Z'
                fill={color}
            />
            <path
                d='M7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44772 15 7 15H11C11.5523 15 12 14.5523 12 14C12 13.4477 11.5523 13 11 13H7Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4 1C2.34315 1 1 2.34315 1 4V16C1 17.6569 2.34315 19 4 19H8V20C8 21.6569 9.34315 23 11 23H20C21.6569 23 23 21.6569 23 20V8C23 6.34315 21.6569 5 20 5H19V7H20C20.5523 7 21 7.44772 21 8V20C21 20.5523 20.5523 21 20 21H11C10.4477 21 10 20.5523 10 20V19H14C15.6569 19 17 17.6569 17 16V4C17 2.34315 15.6569 1 14 1H4ZM3 4C3 3.44772 3.44772 3 4 3H14C14.5523 3 15 3.44772 15 4V16C15 16.5523 14.5523 17 14 17H4C3.44772 17 3 16.5523 3 16V4Z'
                fill={color}
            />
        </svg>
    );
};

export default VisaMultipleOutlineMdSVG;
