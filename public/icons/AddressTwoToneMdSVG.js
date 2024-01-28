import React from 'react';

const AddressTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 1C12.5523 1 13 1.44772 13 2V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V2C11 1.44772 11.4477 1 12 1Z'
                fill='#040A1F'
            />
            <path
                d='M10 3.5C9.17157 3.5 8.5 4.17157 8.5 5V9C8.5 9.82843 9.17157 10.5 10 10.5H17.6667C17.9912 10.5 18.307 10.3947 18.5667 10.2L20.7 8.6C21.7667 7.8 21.7667 6.2 20.7 5.4L18.5667 3.8C18.307 3.60527 17.9912 3.5 17.6667 3.5H10Z'
                fill={color}
            />
            <path
                d='M14 13.5C14.8284 13.5 15.5 14.1716 15.5 15V19C15.5 19.8284 14.8284 20.5 14 20.5H6.33333C6.00878 20.5 5.69298 20.3947 5.43333 20.2L3.3 18.6C2.23333 17.8 2.23333 16.2 3.3 15.4L5.43333 13.8C5.69298 13.6053 6.00878 13.5 6.33333 13.5H14Z'
                fill={color}
            />
        </svg>
    );
};

export default AddressTwoToneMdSVG;
