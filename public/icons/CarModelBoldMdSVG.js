import React from 'react';

const CarModelBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M19 1C19.5523 1 20 1.44772 20 2V4.5C20 4.77614 19.7761 5 19.5 5L4.5 5C4.22386 5 4 4.77614 4 4.5L4 2C4 1.44772 4.44771 1 5 1H19Z'
                fill={color}
            />
            <path
                d='M17 23C17.5523 23 18 22.5523 18 22V19.5C18 19.2239 17.7761 19 17.5 19H6.5C6.22386 19 6 19.2239 6 19.5V22C6 22.5523 6.44771 23 7 23H17Z'
                fill={color}
            />
            <path d='M11 11V13H13V11H11Z' fill={color} />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M21 6C22.1046 6 23 6.89543 23 8V16C23 17.1046 22.1046 18 21 18L3 18C1.89543 18 1 17.1046 1 16V8C1 6.89543 1.89543 6 3 6L21 6ZM5 9C4.44772 9 4 9.44771 4 10C4 10.5523 4.44772 11 5 11V14C5 14.5523 5.44772 15 6 15C6.55228 15 7 14.5523 7 14V9H5ZM18 9C17.4477 9 17 9.44771 17 10C17 10.5523 17.4477 11 18 11V14C18 14.5523 18.4477 15 19 15C19.5523 15 20 14.5523 20 14V9H18ZM9 9H15V15H9V9Z'
                fill={color}
            />
        </svg>
    );
};

export default CarModelBoldMdSVG;
