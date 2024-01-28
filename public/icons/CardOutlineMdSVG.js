import React from 'react';

const CardOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M5 15C5 14.4477 5.44772 14 6 14H9C9.55228 14 10 14.4477 10 15C10 15.5523 9.55228 16 9 16H6C5.44772 16 5 15.5523 5 15Z'
                fill={color}
            />
            <path
                d='M12 16C12.5523 16 13 15.5523 13 15C13 14.4477 12.5523 14 12 14C11.4477 14 11 14.4477 11 15C11 15.5523 11.4477 16 12 16Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4 4C2.34315 4 1 5.34315 1 7V17C1 18.6569 2.34315 20 4 20H20C21.6569 20 23 18.6569 23 17V7C23 5.34315 21.6569 4 20 4H4ZM21 8V7C21 6.44772 20.5523 6 20 6H4C3.44772 6 3 6.44772 3 7V8H21ZM3 10H21V17C21 17.5523 20.5523 18 20 18H4C3.44772 18 3 17.5523 3 17V10Z'
                fill={color}
            />
        </svg>
    );
};

export default CardOutlineMdSVG;
