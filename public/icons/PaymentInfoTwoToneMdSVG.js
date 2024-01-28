import React from 'react';

const PaymentInfoTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M12 1C11.4477 1 11 1.44772 11 2V13H13C13.5523 13 14 13.4477 14 14V20H22C22.5523 20 23 19.5523 23 19V2C23 1.44772 22.5523 1 22 1H12Z'
                fill={color}
            />
            <path d='M3 21V15H12V21H3Z' fill={color} />
            <path d='M15 1V2C15 3.65685 13.6569 5 12 5H11V2C11 1.44772 11.4477 1 12 1H15Z' fill='#040A1F' />
            <path d='M10 19H5V17H10V19Z' fill='#040A1F' />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M2 13C1.44772 13 1 13.4477 1 14V22C1 22.5523 1.44772 23 2 23H13C13.5523 23 14 22.5523 14 22V14C14 13.4477 13.5523 13 13 13H2ZM3 21V15H12V21H3Z'
                fill='#040A1F'
            />
            <path d='M19 2V1H22C22.5523 1 23 1.44772 23 2V5H22C20.3431 5 19 3.65685 19 2Z' fill='#040A1F' />
            <path d='M19 20V19C19 17.3431 20.3431 16 22 16H23V19C23 19.5523 22.5523 20 22 20H19Z' fill='#040A1F' />
            <path
                d='M17 12.5C18.1046 12.5 19 11.6046 19 10.5C19 9.39543 18.1046 8.5 17 8.5C15.8954 8.5 15 9.39543 15 10.5C15 11.6046 15.8954 12.5 17 12.5Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default PaymentInfoTwoToneMdSVG;
