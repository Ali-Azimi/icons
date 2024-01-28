import React from 'react';

const PaymentReceiptBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4 7.06513C4 3.72769 6.67413 1 10 1H19C19.5523 1 20 1.44772 20 2V20.6836C20 22.1309 18.5078 23.1346 17.164 22.5123L14.7555 21.3969L13.217 22.5844C12.4991 23.1385 11.5009 23.1385 10.783 22.5844L9.24447 21.3969L6.83598 22.5123C5.49222 23.1346 4 22.1309 4 20.6836V7.06513ZM16 7H8V10H16V7ZM8 11H16V12H8V11ZM16 14H8V16H16V14Z'
                fill={color}
            />
        </svg>
    );
};

export default PaymentReceiptBoldMdSVG;
