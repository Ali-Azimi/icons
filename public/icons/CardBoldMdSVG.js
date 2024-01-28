import React from 'react';

const CardBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M1 7C1 5.34315 2.34315 4 4 4H20C21.6569 4 23 5.34315 23 7V7.5C23 7.77614 22.7761 8 22.5 8H1.5C1.22386 8 1 7.77614 1 7.5V7Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1.5 10C1.22386 10 1 10.2239 1 10.5V17C1 18.6569 2.34315 20 4 20H20C21.6569 20 23 18.6569 23 17V10.5C23 10.2239 22.7761 10 22.5 10H1.5ZM3 16C3 15.4477 3.44772 15 4 15H8C8.55228 15 9 15.4477 9 16C9 16.5523 8.55228 17 8 17H4C3.44772 17 3 16.5523 3 16ZM12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z'
                fill={color}
            />
        </svg>
    );
};

export default CardBoldMdSVG;
