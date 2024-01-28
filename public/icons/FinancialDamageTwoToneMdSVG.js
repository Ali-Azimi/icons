import React from 'react';

const FinancialDamageTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M3 3C1.89543 3 1 3.89543 1 5V13C1 14.1046 1.89543 15 3 15H16C16.3138 15 16.6094 14.8527 16.7983 14.6022C16.9873 14.3517 17.0477 14.027 16.9615 13.7253L16.1033 10.7216L17.7809 8.62469C17.9227 8.44738 18 8.22707 18 8V4C18 3.44772 17.5523 3 17 3H3Z'
                fill={color}
            />
            <path
                d='M10 11C11.1046 11 12 10.1046 12 9C12 7.89543 11.1046 7 10 7C8.89543 7 8 7.89543 8 9C8 10.1046 8.89543 11 10 11Z'
                fill='#040A1F'
            />
            <path d='M19 10H21V18H13V20H21C22.1046 20 23 19.1046 23 18V10C23 8.89543 22.1046 8 21 8H19V10Z' fill='#040A1F' />
        </svg>
    );
};

export default FinancialDamageTwoToneMdSVG;
