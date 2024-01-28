import React from 'react';

const WaitingForExportOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M6 4C6 2.89543 6.89543 2 8 2H16C17.1046 2 18 2.89543 18 4V6H19C21.2091 6 23 7.79086 23 10V17C23 18.1046 22.1046 19 21 19H19V17H21V10C21 8.89543 20.1046 8 19 8H5C3.89543 8 3 8.89543 3 10V17H5V19H3C1.89543 19 1 18.1046 1 17V10C1 7.79086 2.79086 6 5 6H6V4ZM16 4V6H8V4H16Z'
                fill={color}
            />
            <path
                d='M17 10C17 9.44772 17.4477 9 18 9H19C19.5523 9 20 9.44772 20 10C20 10.5523 19.5523 11 19 11H18C17.4477 11 17 10.5523 17 10Z'
                fill={color}
            />
            <path
                d='M10 16C9.44771 16 9 16.4477 9 17C9 17.5523 9.44771 18 10 18H14C14.5523 18 15 17.5523 15 17C15 16.4477 14.5523 16 14 16H10Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5 13C5 12.4477 5.44772 12 6 12H18C18.5523 12 19 12.4477 19 13C19 13.5523 18.5523 14 18 14V20C18 21.1046 17.1046 22 16 22H8C6.89543 22 6 21.1046 6 20V14C5.44772 14 5 13.5523 5 13ZM8 14H16V20H8V14Z'
                fill={color}
            />
        </svg>
    );
};

export default WaitingForExportOutlineMdSVG;
