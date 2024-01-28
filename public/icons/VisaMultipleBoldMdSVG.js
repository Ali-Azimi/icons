import React from 'react';

const VisaMultipleBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M8.5 20C8.22386 20 7.99563 20.2255 8.04113 20.4979C8.2783 21.9178 9.51277 23 11 23H20C21.6569 23 23 21.6569 23 20V8C23 6.34315 21.6569 5 20 5H19.5C19.2239 5 19 5.22386 19 5.5V15C19 17.7614 16.7614 20 14 20H8.5Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4 1C2.34315 1 1 2.34315 1 4V15C1 16.6569 2.34315 18 4 18H14C15.6569 18 17 16.6569 17 15V4C17 2.34315 15.6569 1 14 1H4ZM9 10C10.6569 10 12 8.65685 12 7C12 5.34315 10.6569 4 9 4C7.34315 4 6 5.34315 6 7C6 8.65685 7.34315 10 9 10ZM7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44772 15 7 15H11C11.5523 15 12 14.5523 12 14C12 13.4477 11.5523 13 11 13H7Z'
                fill={color}
            />
        </svg>
    );
};

export default VisaMultipleBoldMdSVG;
