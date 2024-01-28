import React from 'react';

const PaymentGatewayOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M11.2531 1.14565C11.7323 0.95145 12.2677 0.95145 12.7469 1.14565L22.0612 4.91983C22.6341 5.15195 23 5.70856 23 6.31691V7.4935C23 8.31329 22.3406 9 21.5 9H2.5C1.65943 9 1 8.31329 1 7.4935V6.31691C1 5.70856 1.3659 5.15195 1.93876 4.91983L11.2531 1.14565ZM3 6.64776V7H21V6.64776L12 3.00094L3 6.64776Z'
                fill={color}
            />
            <path
                d='M5 21V13H3V21H2C1.44772 21 1 21.4477 1 22C1 22.5523 1.44772 23 2 23H22C22.5523 23 23 22.5523 23 22C23 21.4477 22.5523 21 22 21H21V13H19V21H13V13H11V21H5Z'
                fill={color}
            />
            <path d='M22 12V10H2V12H22Z' fill={color} />
        </svg>
    );
};

export default PaymentGatewayOutlineMdSVG;
