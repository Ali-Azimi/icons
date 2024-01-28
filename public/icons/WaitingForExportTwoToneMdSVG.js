import React from 'react';

const WaitingForExportTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path d='M8 2C6.89543 2 6 2.89543 6 4V6H8V4L16 4V6H18V4C18 2.89543 17.1046 2 16 2H8Z' fill='#040A1F' />
            <path
                d='M1 10C1 7.79086 2.79086 6 5 6H19C21.2091 6 23 7.79086 23 10V17C23 18.1046 22.1046 19 21 19H17V20C17 20.5523 16.5523 21 16 21H8C7.44772 21 7 20.5523 7 20V19H3C1.89543 19 1 18.1046 1 17V10Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M18 9C18 8.44772 18.4477 8 19 8H20C20.5523 8 21 8.44772 21 9C21 9.55228 20.5523 10 20 10H19C18.4477 10 18 9.55228 18 9Z'
                fill='#040A1F'
            />
            <path
                d='M9 17C9 16.4477 9.44772 16 10 16H14C14.5523 16 15 16.4477 15 17C15 17.5523 14.5523 18 14 18H10C9.44772 18 9 17.5523 9 17Z'
                fill='#040A1F'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M6 12C5.44772 12 5 12.4477 5 13C5 13.5523 5.44772 14 6 14V20C6 21.1046 6.89543 22 8 22H16C17.1046 22 18 21.1046 18 20V14C18.5523 14 19 13.5523 19 13C19 12.4477 18.5523 12 18 12H6ZM16 14H8V20H16V14Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default WaitingForExportTwoToneMdSVG;
