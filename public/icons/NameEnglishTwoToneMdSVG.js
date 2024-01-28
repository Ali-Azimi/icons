import React from 'react';

const NameEnglishTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M4 4C2.34315 4 1 5.34315 1 7V15C1 17.7614 3.23858 20 6 20H20C21.6569 20 23 18.6569 23 17V9C23 6.23858 20.7614 4 18 4H4Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M19 10C19 8.34315 17.6569 7 16 7C14.3431 7 13 8.34315 13 10C13 11.6569 14.3431 13 16 13C17.6569 13 19 11.6569 19 10ZM16 9C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11C15.4477 11 15 10.5523 15 10C15 9.44772 15.4477 9 16 9Z'
                fill='#040A1F'
            />
            <path
                d='M10 9C10.5523 9 11 9.44772 11 10C11 10.5523 10.5523 11 10 11H6C5.44772 11 5 10.5523 5 10C5 9.44772 5.44772 9 6 9H10Z'
                fill='#040A1F'
            />
            <path
                d='M7 13C7.55228 13 8 13.4477 8 14C8 14.5523 7.55228 15 7 15H6C5.44772 15 5 14.5523 5 14C5 13.4477 5.44772 13 6 13H7Z'
                fill='#040A1F'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M21 19.8293C20.6872 19.9398 20.3506 20 20 20H11V17C11 15.3431 12.3431 14 14 14H18C19.6569 14 21 15.3431 21 17V19.8293ZM18 16C18.5523 16 19 16.4477 19 17V18H13V17C13 16.4477 13.4477 16 14 16H18Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default NameEnglishTwoToneMdSVG;
