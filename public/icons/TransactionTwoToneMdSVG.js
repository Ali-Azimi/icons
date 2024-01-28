import React from 'react';

const TransactionTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M1 7C1 3.68629 3.68629 1 7 1H19C19.059 1 19.117 1.00515 19.1734 1.01504C17.3935 1.17973 16 2.67713 16 4.5V17C16 18.1335 15.6228 19.1789 14.9871 20.0176C13.9472 21.8013 12.0136 23 9.8 23H2C1.44772 23 1 22.5523 1 22V7Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M21 8V4.5C21 3.67157 20.3284 3 19.5 3C18.6716 3 18 3.67157 18 4.5V8H21ZM23 4.5V8C23 9.10457 22.1046 10 21 10H16V4.5C16 2.567 17.567 1 19.5 1C21.433 1 23 2.567 23 4.5Z'
                fill='#040A1F'
            />
            <path d='M5 7H12V10H5V7Z' fill='#040A1F' />
            <path d='M5 11H12V12H5V11Z' fill='#040A1F' />
            <path d='M5 15H12V17H5V15Z' fill='#040A1F' />
        </svg>
    );
};

export default TransactionTwoToneMdSVG;
