import React from 'react';

const VisaSingleTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M5.88235 1C4.23422 1 3 2.40112 3 4V20C3 21.5989 4.23422 23 5.88235 23H18.1176C19.7658 23 21 21.5989 21 20V4C21 2.40112 19.7658 1 18.1176 1H5.88235Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 15C14.7614 15 17 12.7614 17 10C17 7.23858 14.7614 5 12 5C9.23858 5 7 7.23858 7 10C7 12.7614 9.23858 15 12 15ZM12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z'
                fill='#040A1F'
            />
            <path
                d='M9 18C8.44772 18 8 18.4477 8 19C8 19.5523 8.44772 20 9 20H15C15.5523 20 16 19.5523 16 19C16 18.4477 15.5523 18 15 18H9Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default VisaSingleTwoToneMdSVG;
