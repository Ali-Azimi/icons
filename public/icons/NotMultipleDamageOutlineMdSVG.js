import React from 'react';

const NotMultipleDamageOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M13.9285 2.37117C14.1336 1.85838 13.8842 1.27641 13.3714 1.0713C12.8586 0.866188 12.2766 1.1156 12.0715 1.62839L10.2508 6.18008C10.0243 6.74654 10.0686 7.38543 10.3713 7.91514L11.8364 10.479C11.8423 10.4899 11.8485 10.5006 11.8548 10.5112L11.8847 10.5636C11.8847 10.5639 11.8848 10.5646 11.8845 10.5653C11.2503 12.0525 10.3482 14.2013 9.73544 15.7494C9.42739 16.5276 9.47817 17.3667 9.95448 18.0281C10.4235 18.6794 11.1904 18.9998 12 18.9998H17V21C17 22.1046 17.8954 23 19 23H21C22.1046 23 23 22.1046 23 21V14.6128C23 12.9142 22.249 11.3094 20.9603 10.2218C20.9551 10.2039 20.9494 10.1861 20.9432 10.1683L19.5974 6.34132C18.8935 4.33946 17.0026 3 14.8806 3H13.6769L13.9285 2.37117ZM12.8769 5L12.1078 6.92286L13.2946 8.99978H17.6574C17.9184 8.99978 18.1777 9.01992 18.4332 9.0595L17.7107 7.00479C17.2883 5.80368 16.1538 5 14.8806 5H12.8769ZM19 21V18.9998H20C20.3506 18.9998 20.6872 18.9396 21 18.8291V21H19ZM21 16C20.9999 16.5522 20.5522 16.9998 20 16.9998H12C11.7051 16.9998 11.6013 16.8925 11.5775 16.8594C11.5609 16.8364 11.4966 16.7343 11.5951 16.4855C12.1979 14.9625 13.0916 12.8333 13.7242 11.3498C13.7728 11.2358 13.8103 11.1187 13.8368 10.9998H17.6574C18.315 10.9998 18.9552 11.2111 19.4836 11.6025C20.4375 12.309 21 13.4258 21 14.6128V16Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4.51636 11.6025C5.04479 11.2111 5.685 10.9998 6.34262 10.9998H7.5C8.05228 10.9998 8.5 10.5521 8.5 9.99978C8.5 9.44749 8.05228 8.99978 7.5 8.99978H6.34262C6.08147 8.99978 5.82199 9.01995 5.56633 9.05958L6.28889 7.0048C6.709 5.81012 7.86256 5 9.14264 5V3C7.02749 3 5.10836 4.33302 4.40215 6.34133L3.05641 10.1683C3.0501 10.1862 3.04433 10.2042 3.03909 10.2223C1.75076 11.3099 1 12.9145 1 14.6128V21C1 22.1046 1.89543 23 3 23H5C6.10457 23 7 22.1046 7 21V18C7 17.4477 6.55228 16.9998 6 16.9998H4C3.44779 16.9998 3.00012 16.5522 3 16V14.6128C3 13.4258 3.56254 12.309 4.51636 11.6025ZM3 18.8291V21H5V18.9998H4C3.64936 18.9998 3.31278 18.9396 3 18.8291Z'
                fill={color}
            />
        </svg>
    );
};

export default NotMultipleDamageOutlineMdSVG;