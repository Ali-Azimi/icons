import React from 'react';

const DigitalVersionTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M4 1C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H12C13.6569 23 15 21.6569 15 20V14H13C11.3431 14 10 12.6569 10 11V5C10 3.89543 10.8954 3 12 3H14.8293C14.4175 1.83481 13.3062 1 12 1H4Z'
                fill={color}
            />
            <path d='M12 5H21V11C21 11.5523 20.5523 12 20 12H13C12.4477 12 12 11.5523 12 11V5Z' fill={color} />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M10 5.01099C9.99989 5.00134 9.99991 4.99169 10.0001 4.98204C10.0097 3.88574 10.9014 3 12 3H21C22.0984 3 22.99 3.8855 22.9999 4.98159C23.0001 4.9915 23.0001 5.00141 23 5.01131V11C23 12.6569 21.6569 14 20 14H13C11.3431 14 10 12.6569 10 11V5.01099ZM12 6.96384V11C12 11.5523 12.4477 12 13 12H20C20.5523 12 21 11.5523 21 11V6.96384L17.0882 9.80881C16.7375 10.0638 16.2625 10.0638 15.9118 9.80881L12 6.96384ZM20.2999 5H12.7001L16.5 7.76357L20.2999 5Z'
                fill='#040A1F'
            />
            <path fillRule='evenodd' clipRule='evenodd' d='M1 18H15V20H1V18Z' fill='#040A1F' />
        </svg>
    );
};

export default DigitalVersionTwoToneMdSVG;
