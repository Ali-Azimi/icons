import React from 'react';

const TransactionOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path d='M4.5 6H8.5V8H4.5V6Z' fill={color} />
            <path d='M8.5 9.5H4.5V10.5H8.5V9.5Z' fill={color} />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5 1.5C3.067 1.5 1.5 3.067 1.5 5V14C1.5 14.2761 1.72386 14.5 2 14.5H8C9.933 14.5 11.5 12.933 11.5 11V7.5H12.3333C13.53 7.5 14.5 6.52995 14.5 5.33333V3.5C14.5 2.39543 13.6046 1.5 12.5 1.5H5ZM10.7676 2.5H5C3.61929 2.5 2.5 3.61929 2.5 5V13.5H8C9.38071 13.5 10.5 12.3807 10.5 11V3.5C10.5 3.13571 10.5974 2.79417 10.7676 2.5ZM11.5 6.5H12.3333C12.9777 6.5 13.5 5.97767 13.5 5.33333V3.5C13.5 2.94772 13.0523 2.5 12.5 2.5C11.9477 2.5 11.5 2.94772 11.5 3.5V6.5Z'
                fill={color}
            />
        </svg>
    );
};

export default TransactionOutlineSmSVG;
