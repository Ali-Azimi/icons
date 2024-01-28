import React from 'react';

const MinibusTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M5 3C2.79086 3 1 4.79086 1 7V16C1 17.6569 2.34315 19 4 19H5.49982C5.95592 19.6072 6.68209 20 7.5 20C8.31791 20 9.04408 19.6072 9.50018 19H14.4998C14.9559 19.6072 15.6821 20 16.5 20C17.3179 20 18.0441 19.6072 18.5002 19H21C22.1046 19 23 18.1046 23 17V10C23 6.13401 19.866 3 16 3H5Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1 7C1 4.79086 2.79086 3 5 3H15V8C15 9.65685 13.6569 11 12 11H1V7ZM11 9V8C11 7.44772 10.5523 7 10 7C9.44771 7 9 7.44772 9 8V9H7V8C7 7.44772 6.55228 7 6 7C5.44772 7 5 7.44772 5 8V9H3V7C3 5.89543 3.89543 5 5 5H13V8C13 8.55228 12.5523 9 12 9H11Z'
                fill='#040A1F'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7.5 14C5.567 14 4 15.567 4 17.5C4 19.433 5.567 21 7.5 21C9.433 21 11 19.433 11 17.5C11 15.567 9.433 14 7.5 14ZM6 17.5C6 16.6716 6.67157 16 7.5 16C8.32843 16 9 16.6716 9 17.5C9 18.3284 8.32843 19 7.5 19C6.67157 19 6 18.3284 6 17.5Z'
                fill='#040A1F'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M16.5 14C14.567 14 13 15.567 13 17.5C13 19.433 14.567 21 16.5 21C18.433 21 20 19.433 20 17.5C20 15.567 18.433 14 16.5 14ZM15 17.5C15 16.6716 15.6716 16 16.5 16C17.3284 16 18 16.6716 18 17.5C18 18.3284 17.3284 19 16.5 19C15.6716 19 15 18.3284 15 17.5Z'
                fill='#040A1F'
            />
            <path d='M18 9C17.4477 9 17 9.44772 17 10C17 10.5523 17.4477 11 18 11H23V9H18Z' fill='#040A1F' />
        </svg>
    );
};

export default MinibusTwoToneMdSVG;
