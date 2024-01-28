import React from 'react';

const MyTransactionsBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1.25 5C1.25 2.92893 2.92893 1.25 5 1.25H12.5C13.7426 1.25 14.75 2.25736 14.75 3.5V5.33333C14.75 6.66802 13.668 7.75 12.3333 7.75H11.75V11C11.75 13.0711 10.0711 14.75 8 14.75H2C1.58579 14.75 1.25 14.4142 1.25 14V5ZM11.75 6.25H12.3333C12.8396 6.25 13.25 5.83959 13.25 5.33333V3.5C13.25 3.08579 12.9142 2.75 12.5 2.75C12.0858 2.75 11.75 3.08579 11.75 3.5V6.25ZM8.5 5H4.5V7H8.5V5ZM4.5 9.5H8.5V10.5H4.5V9.5Z'
                fill={color}
            />
        </svg>
    );
};

export default MyTransactionsBoldSmSVG;
