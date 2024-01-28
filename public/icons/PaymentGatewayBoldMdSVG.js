import React from 'react';

const PaymentGatewayBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M12.7469 1.14565C12.2677 0.95145 11.7323 0.95145 11.2531 1.14565L1.62446 5.04718C1.24699 5.20013 1 5.56672 1 5.97399V8C1 8.55228 1.44772 9 2 9H22C22.5523 9 23 8.55228 23 8V5.97399C23 5.56672 22.753 5.20013 22.3755 5.04718L12.7469 1.14565Z'
                fill={color}
            />
            <path d='M2 10H22V12H2V10Z' fill={color} />
            <path
                d='M3 13H11V21H13V13H21V21H22C22.5523 21 23 21.4477 23 22C23 22.5523 22.5523 23 22 23H2C1.44772 23 1 22.5523 1 22C1 21.4477 1.44772 21 2 21H3V13Z'
                fill={color}
            />
        </svg>
    );
};

export default PaymentGatewayBoldMdSVG;
