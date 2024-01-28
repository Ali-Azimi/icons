import React from 'react';

const PlateMotorTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M4 3C2.34315 3 1 4.34315 1 6V19C1 20.6569 2.34315 22 4 22H20C21.6569 22 23 20.6569 23 19V6C23 4.34315 21.6569 3 20 3H4Z'
                fill={color}
            />
            <path fillRule='evenodd' clipRule='evenodd' d='M10 7H4V13H10V7ZM6 11V9H8V11H6Z' fill='#040A1F' />
            <path d='M5 18C5.55228 18 6 17.5523 6 17C6 16.4477 5.55228 16 5 16C4.44772 16 4 16.4477 4 17C4 17.5523 4.44772 18 5 18Z' fill='#040A1F' />
            <path
                d='M19 18C19.5523 18 20 17.5523 20 17C20 16.4477 19.5523 16 19 16C18.4477 16 18 16.4477 18 17C18 17.5523 18.4477 18 19 18Z'
                fill='#040A1F'
            />
            <path d='M16 7V13H14V9H13V7H16Z' fill='#040A1F' />
            <path d='M17 7H20V13H18V9H17V7Z' fill='#040A1F' />
        </svg>
    );
};

export default PlateMotorTwoToneMdSVG;
