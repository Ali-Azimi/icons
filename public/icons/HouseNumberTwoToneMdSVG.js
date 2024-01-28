import React from 'react';

const HouseNumberTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M4 1C2.34315 1 1 2.34315 1 4V17C1 20.3137 3.68629 23 7 23H20C21.6569 23 23 21.6569 23 20V7C23 3.68629 20.3137 1 17 1H4Z'
                fill={color}
            />
            <path d='M9 14V6H6V8H7V14H9Z' fill='#040A1F' />
            <path fillRule='evenodd' clipRule='evenodd' d='M11 6H17V14H11V6ZM13 8V12H15V8H13Z' fill='#040A1F' />
            <path d='M7 18H17V16H7V18Z' fill='#040A1F' />
        </svg>
    );
};

export default HouseNumberTwoToneMdSVG;
