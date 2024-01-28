import React from 'react';

const PaymentTypeOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4.50008 3.5C2.84325 3.5 1.50011 4.84311 1.50008 6.49994L1.5 10.5C1.49997 12.1568 2.84312 13.5 4.5 13.5H11.5002C13.157 13.5 14.5001 12.1569 14.5002 10.5001L14.5003 6.50006C14.5003 4.84318 13.1571 3.5 11.5003 3.5H4.50008ZM2.50008 6.49996C2.5001 5.39541 3.39552 4.5 4.50008 4.5H11.5003C12.6048 4.5 13.5003 5.39543 13.5003 6.5L2.50008 6.49996ZM2.50006 7.5H13.5002L13.5002 10.5001C13.5002 11.6046 12.6047 12.5 11.5002 12.5H4.5C3.39541 12.5 2.49998 11.6046 2.5 10.5L2.50006 7.5Z'
                fill={color}
            />
        </svg>
    );
};

export default PaymentTypeOutlineSmSVG;
