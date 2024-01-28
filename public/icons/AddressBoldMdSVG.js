import React from 'react';

const AddressBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M12 1C12.5523 1 13 1.44772 13 2V3.5H17.6667C17.9912 3.5 18.307 3.60527 18.5667 3.8L20.7 5.4C21.7667 6.2 21.7667 7.8 20.7 8.6L18.5667 10.2C18.307 10.3947 17.9912 10.5 17.6667 10.5H13V13.5H14C14.8284 13.5 15.5 14.1716 15.5 15V19C15.5 19.8284 14.8284 20.5 14 20.5H13V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V20.5H6.33333C6.00878 20.5 5.69298 20.3947 5.43333 20.2L3.3 18.6C2.23333 17.8 2.23333 16.2 3.3 15.4L5.43333 13.8C5.69298 13.6053 6.00878 13.5 6.33333 13.5H11V10.5H10C9.17157 10.5 8.5 9.82843 8.5 9V5C8.5 4.17157 9.17157 3.5 10 3.5H11V2C11 1.44772 11.4477 1 12 1Z'
                fill={color}
            />
        </svg>
    );
};

export default AddressBoldMdSVG;