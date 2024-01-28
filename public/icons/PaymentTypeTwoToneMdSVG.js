import React from 'react';

const PaymentTypeTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M1 2C1 1.44772 1.44772 1 2 1H14C14.5523 1 15 1.44772 15 2V15H20C20.5523 15 21 15.4477 21 16H15V18H21V20C21 20.5523 20.5523 21 20 21H2C1.44772 21 1 20.5523 1 20V2Z'
                fill={color}
            />
            <path d='M1 4C2.65685 4 4 2.65685 4 1H6C6 3.76142 3.76142 6 1 6V4Z' fill='#040A1F' />
            <path d='M15 6C12.2386 6 10 3.76142 10 1H12C12 2.65685 13.3431 4 15 4V6Z' fill='#040A1F' />
            <path d='M6 21C6 18.2386 3.76142 16 1 16V18C2.65685 18 4 19.3431 4 21H6Z' fill='#040A1F' />
            <path
                d='M10 11C10 12.1046 9.10457 13 8 13C6.89543 13 6 12.1046 6 11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11Z'
                fill='#040A1F'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M10 16C10 14.3431 11.3431 13 13 13H20C21.6569 13 23 14.3431 23 16V20C23 21.6569 21.6569 23 20 23H13C11.3431 23 10 21.6569 10 20V16ZM13 15C12.4477 15 12 15.4477 12 16H21C21 15.4477 20.5523 15 20 15H13ZM12 20V18H21V20C21 20.5523 20.5523 21 20 21H13C12.4477 21 12 20.5523 12 20Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default PaymentTypeTwoToneMdSVG;
