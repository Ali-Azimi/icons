import React from 'react';

const CarModelOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path d='M20 2C20 1.44772 19.5523 1 19 1H5C4.44772 1 4 1.44772 4 2L4 5H6V3L18 3V5H20V2Z' fill={color} />
            <path d='M18 22C18 22.5523 17.5523 23 17 23H7C6.44771 23 6 22.5523 6 22V19H8V21H16V19H18V22Z' fill={color} />
            <path
                d='M6 9C5.44772 9 5 9.44772 5 10C5 10.5523 5.44772 11 6 11V14C6 14.5523 6.44772 15 7 15C7.55229 15 8 14.5523 8 14V9H6Z'
                fill={color}
            />
            <path
                d='M16 10C16 9.44772 16.4477 9 17 9H19V14C19 14.5523 18.5523 15 18 15C17.4477 15 17 14.5523 17 14V11C16.4477 11 16 10.5523 16 10Z'
                fill={color}
            />
            <path fillRule='evenodd' clipRule='evenodd' d='M15 9H9V15H15V9ZM11 13V11H13V13H11Z' fill={color} />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M21 6C22.1046 6 23 6.89543 23 8V16C23 17.1046 22.1046 18 21 18L3 18C1.89543 18 1 17.1046 1 16V8C1 6.89543 1.89543 6 3 6L21 6ZM21 16V8L3 8L3 16H21Z'
                fill={color}
            />
        </svg>
    );
};

export default CarModelOutlineMdSVG;
