import React from 'react';

const PaymentTypeBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M1.47534 6.25C1.35891 6.25 1.26654 6.15062 1.28304 6.03536C1.50848 4.46054 2.86291 3.25 4.50008 3.25H11.5003C13.1374 3.25 14.4919 4.46054 14.7173 6.03536C14.7338 6.15062 14.6414 6.25 14.525 6.25H1.47534Z'
                fill={color}
            />
            <path
                d='M1.25005 7.95C1.25005 7.83954 1.33959 7.75 1.45005 7.75H14.5502C14.6607 7.75 14.7502 7.83955 14.7502 7.95L14.7502 10.5001C14.7501 12.295 13.2951 13.75 11.5002 13.75H4.5C2.70505 13.75 1.24996 12.2949 1.25 10.5L1.25005 7.95Z'
                fill={color}
            />
        </svg>
    );
};

export default PaymentTypeBoldSmSVG;
