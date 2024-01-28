import React from 'react';

const PaymentReceiptBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M6 1.5C4.05804 1.5 2.5 3.10196 2.5 5.05786V12.6884C2.5 13.7645 3.58829 14.5208 4.59185 14.0844L5.49656 13.6909C5.6538 13.6226 5.83461 13.6419 5.97568 13.7441L6.62704 14.2162C7.14905 14.5946 7.85095 14.5946 8.37296 14.2162L9.02432 13.7441C9.16539 13.6419 9.3462 13.6226 9.50344 13.6909L10.4082 14.0844C11.4117 14.5208 12.5 13.7645 12.5 12.6884V3.01929C12.5 2.18926 11.8374 1.5 11 1.5H6ZM5.5 5.5H9.5V7.5H5.5V5.5ZM9.5 9H5.5V10H9.5V9Z'
                fill={color}
            />
        </svg>
    );
};

export default PaymentReceiptBoldSmSVG;
