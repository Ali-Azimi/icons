import React from 'react';

const PaymentTypeBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M1 2C1 1.44772 1.44772 1 2 1H3.8C3.91046 1 4.00069 1.08982 3.99344 1.20004C3.89485 2.69751 2.69751 3.89485 1.20004 3.99344C1.08982 4.00069 1 3.91046 1 3.8V2Z'
                fill={color}
            />
            <path
                d='M1 18.2V20C1 20.5523 1.44772 21 2 21H3.8C3.91046 21 4.00069 20.9102 3.99344 20.8C3.89485 19.3025 2.69751 18.1051 1.20004 18.0066C1.08982 17.9993 1 18.0895 1 18.2Z'
                fill={color}
            />
            <path
                d='M1 15.8C1 15.9105 1.08985 15.9996 1.20022 16.0039C3.80241 16.1064 5.89359 18.1976 5.99606 20.7998C6.00041 20.9102 6.08954 21 6.2 21H7.85534C7.98179 21 8.07629 20.8841 8.05725 20.7591C8.01955 20.5116 8 20.2581 8 20V16C8 13.2386 10.2386 11 13 11H14.8C14.9105 11 15 10.9105 15 10.8V6.2C15 6.08954 14.9102 6.00041 14.7998 5.99606C12.1976 5.89359 10.1064 3.80241 10.0039 1.20022C9.99959 1.08985 9.91046 1 9.8 1H6.2C6.08954 1 6.00041 1.08985 5.99606 1.20022C5.89359 3.80241 3.80241 5.89359 1.20022 5.99606C1.08985 6.00041 1 6.08954 1 6.2V15.8Z'
                fill={color}
            />
            <path
                d='M15 3.8C15 3.91046 14.9102 4.00069 14.8 3.99344C13.3025 3.89485 12.1051 2.69751 12.0066 1.20004C11.9993 1.08982 12.0895 1 12.2 1H14C14.5523 1 15 1.44772 15 2V3.8Z'
                fill={color}
            />
            <path
                d='M10.0066 15.8C9.99931 15.9102 10.0895 16 10.2 16H22.8C22.9105 16 23.0007 15.9102 22.9934 15.8C22.8905 14.2364 21.5896 13 20 13H13C11.4104 13 10.1095 14.2364 10.0066 15.8Z'
                fill={color}
            />
            <path
                d='M10 18.2C10 18.0895 10.0895 18 10.2 18H22.8C22.9105 18 23 18.0895 23 18.2V20C23 21.6569 21.6569 23 20 23H13C11.3431 23 10 21.6569 10 20V18.2Z'
                fill={color}
            />
        </svg>
    );
};

export default PaymentTypeBoldMdSVG;
