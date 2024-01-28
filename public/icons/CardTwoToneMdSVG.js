import React from 'react';

const CardTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M4 4C2.34315 4 1 5.34315 1 7V17C1 18.6569 2.34315 20 4 20H20C21.6569 20 23 18.6569 23 17V7C23 5.34315 21.6569 4 20 4H4Z'
                fill={color}
            />
            <path d='M1 8H23V10H1V8Z' fill='#040A1F' />
            <path
                d='M3 16C3 15.4477 3.44772 15 4 15H8C8.55228 15 9 15.4477 9 16C9 16.5523 8.55228 17 8 17H4C3.44772 17 3 16.5523 3 16Z'
                fill='#040A1F'
            />
            <path
                d='M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default CardTwoToneMdSVG;
