import React from 'react';

const HouseNumberBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path d='M13 12V8H15V12H13Z' fill={color} />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1 4C1 2.34315 2.34315 1 4 1H17C20.3137 1 23 3.68629 23 7V20C23 21.6569 21.6569 23 20 23H7C3.68629 23 1 20.3137 1 17V4ZM9 6V14H7V8H6V6H9ZM17 6H11V14H17V6ZM17 18H7V16H17V18Z'
                fill={color}
            />
        </svg>
    );
};

export default HouseNumberBoldMdSVG;
