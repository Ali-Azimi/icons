import React from 'react';

const PlateMotorOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M19 17C19 17.5523 18.5523 18 18 18C17.4477 18 17 17.5523 17 17C17 16.4477 17.4477 16 18 16C18.5523 16 19 16.4477 19 17Z'
                fill={color}
            />
            <path d='M6 18C6.55228 18 7 17.5523 7 17C7 16.4477 6.55228 16 6 16C5.44772 16 5 16.4477 5 17C5 17.5523 5.44772 18 6 18Z' fill={color} />
            <path fillRule='evenodd' clipRule='evenodd' d='M10 7H5V13H10V7ZM7 11V9H8V11H7Z' fill={color} />
            <path d='M15 7V13H13V9H12V7H15Z' fill={color} />
            <path d='M16 7H19V13H17V9H16V7Z' fill={color} />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4 3C2.34315 3 1 4.34315 1 6V19C1 20.6569 2.34315 22 4 22H20C21.6569 22 23 20.6569 23 19V6C23 4.34315 21.6569 3 20 3H4ZM3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6V19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19V6Z'
                fill={color}
            />
        </svg>
    );
};

export default PlateMotorOutlineMdSVG;
