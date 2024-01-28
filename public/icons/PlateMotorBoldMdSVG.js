import React from 'react';

const PlateMotorBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path d='M6 9V11H8V9H6Z' fill={color} />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V19C23 20.6569 21.6569 22 20 22H4C2.34315 22 1 20.6569 1 19V6ZM4 7H10V13H4V7ZM6 17C6 17.5523 5.55228 18 5 18C4.44772 18 4 17.5523 4 17C4 16.4477 4.44772 16 5 16C5.55228 16 6 16.4477 6 17ZM20 17C20 17.5523 19.5523 18 19 18C18.4477 18 18 17.5523 18 17C18 16.4477 18.4477 16 19 16C19.5523 16 20 16.4477 20 17ZM16 7H13V9H14V13H16V7ZM17 7V9H18V13H20V7H17Z'
                fill={color}
            />
        </svg>
    );
};

export default PlateMotorBoldMdSVG;
