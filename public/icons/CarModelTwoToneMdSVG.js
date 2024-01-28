import React from 'react';

const CarModelTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M23 8C23 6.89543 22.1046 6 21 6H3C1.89543 6 1 6.89543 1 8V16C1 17.1046 1.89543 18 3 18L21 18C22.1046 18 23 17.1046 23 16V8Z'
                fill={color}
            />
            <path d='M19 1C19.5523 1 20 1.44772 20 2V5H18V3L6 3V5H4V2C4 1.44772 4.44772 1 5 1H19Z' fill='#040A1F' />
            <path d='M17 23C17.5523 23 18 22.5523 18 22V19H16V21H8V19H6L6 22C6 22.5523 6.44771 23 7 23H17Z' fill='#040A1F' />
            <path
                d='M5 9C4.44772 9 4 9.44772 4 10C4 10.5523 4.44772 11 5 11V14C5 14.5523 5.44772 15 6 15C6.55229 15 7 14.5523 7 14V9H5Z'
                fill='#040A1F'
            />
            <path
                d='M17 10C17 9.44772 17.4477 9 18 9H20V14C20 14.5523 19.5523 15 19 15C18.4477 15 18 14.5523 18 14V11C17.4477 11 17 10.5523 17 10Z'
                fill='#040A1F'
            />
            <path fillRule='evenodd' clipRule='evenodd' d='M15 9H9V15H15V9ZM11 13V11H13V13H11Z' fill='#040A1F' />
        </svg>
    );
};

export default CarModelTwoToneMdSVG;
