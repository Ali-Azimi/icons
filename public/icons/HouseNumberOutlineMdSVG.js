import React from 'react';

const HouseNumberOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path d='M9 6V14H7V8H6V6H9Z' fill={color} />
            <path fillRule='evenodd' clipRule='evenodd' d='M17 6H11V14H17V6ZM13 12V8H15V12H13Z' fill={color} />
            <path d='M17 18H7V16H17V18Z' fill={color} />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4 1C2.34315 1 1 2.34315 1 4V17C1 20.3137 3.68629 23 7 23H20C21.6569 23 23 21.6569 23 20V7C23 3.68629 20.3137 1 17 1H4ZM3 4C3 3.44772 3.44772 3 4 3H17C19.2091 3 21 4.79086 21 7V20C21 20.5523 20.5523 21 20 21H7C4.79086 21 3 19.2091 3 17V4Z'
                fill={color}
            />
        </svg>
    );
};

export default HouseNumberOutlineMdSVG;
