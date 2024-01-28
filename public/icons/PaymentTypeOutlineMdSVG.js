import React from 'react';

const PaymentTypeOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path d='M10 11C10 12.1046 9.10457 13 8 13C6.89543 13 6 12.1046 6 11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11Z' fill={color} />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1 2C1 1.44772 1.44772 1 2 1H14C14.5523 1 15 1.44772 15 2V13H20C21.6569 13 23 14.3431 23 16V20C23 21.6569 21.6569 23 20 23H13C11.6938 23 10.5825 22.1652 10.1707 21H2C1.44772 21 1 20.5523 1 20V2ZM13 5.87398V13C11.3431 13 10 14.3431 10 16V19H5.87398C5.5122 17.5944 4.40561 16.4878 3 16.126V5.87398C4.40561 5.5122 5.5122 4.40561 5.87398 3H10.126C10.4878 4.40561 11.5944 5.5122 13 5.87398ZM13 15C12.4477 15 12 15.4477 12 16H21C21 15.4477 20.5523 15 20 15H13ZM21 18H12V20C12 20.5523 12.4477 21 13 21H20C20.5523 21 21 20.5523 21 20V18Z'
                fill={color}
            />
        </svg>
    );
};

export default PaymentTypeOutlineMdSVG;
