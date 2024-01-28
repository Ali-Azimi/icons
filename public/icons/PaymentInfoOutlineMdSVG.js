import React from 'react';

const PaymentInfoOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M16.5 12.5C17.6046 12.5 18.5 11.6046 18.5 10.5C18.5 9.39543 17.6046 8.5 16.5 8.5C15.3954 8.5 14.5 9.39543 14.5 10.5C14.5 11.6046 15.3954 12.5 16.5 12.5Z'
                fill={color}
            />
            <path d='M10 19H5V17H10V19Z' fill={color} />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M10 2C10 1.44772 10.4477 1 11 1H22C22.5523 1 23 1.44772 23 2V19C23 19.5523 22.5523 20 22 20H14V22C14 22.5523 13.5523 23 13 23H2C1.73478 23 1.48043 22.8946 1.29289 22.7071C1.10536 22.5196 1 22.2652 1 22L1 14C1 13.4477 1.44772 13 2 13H10V2ZM18 18H14V14C14 13.4477 13.5523 13 13 13H12V6C13.6569 6 15 4.65685 15 3H18C18 4.65685 19.3431 6 21 6V15C19.3431 15 18 16.3431 18 18ZM3 15V21H12V15H3Z'
                fill={color}
            />
        </svg>
    );
};

export default PaymentInfoOutlineMdSVG;
