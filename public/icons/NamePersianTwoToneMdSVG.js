import React from 'react';

const NamePersianTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M4 4C2.34315 4 1 5.34315 1 7V15C1 17.7614 3.23858 20 6 20H20C21.6569 20 23 18.6569 23 17V9C23 6.23858 20.7614 4 18 4H4Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5 10C5 8.34315 6.34315 7 8 7C9.65685 7 11 8.34315 11 10C11 11.6569 9.65685 13 8 13C6.34315 13 5 11.6569 5 10ZM8 9C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11C8.55228 11 9 10.5523 9 10C9 9.44772 8.55228 9 8 9Z'
                fill='#040A1F'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M13 17C13 15.3431 11.6569 14 10 14H6C4.34315 14 3 15.3431 3 17V19C3.83566 19.6277 4.87439 20 6 20H13V17ZM5 17C5 16.4477 5.44772 16 6 16H10C10.5523 16 11 16.4477 11 17V18H5V17Z'
                fill='#040A1F'
            />
            <path
                d='M14 9C13.4477 9 13 9.44772 13 10C13 10.5523 13.4477 11 14 11H18C18.5523 11 19 10.5523 19 10C19 9.44772 18.5523 9 18 9H14Z'
                fill='#040A1F'
            />
            <path
                d='M16 14C16 13.4477 16.4477 13 17 13H18C18.5523 13 19 13.4477 19 14C19 14.5523 18.5523 15 18 15H17C16.4477 15 16 14.5523 16 14Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default NamePersianTwoToneMdSVG;
