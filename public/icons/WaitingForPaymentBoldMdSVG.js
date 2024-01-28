import React from 'react';

const WaitingForPaymentBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3H2.19303L2.90389 6.28937C3.37914 8.52854 4.77414 10.4844 6.76222 11.7524L6.7635 11.7532L7.14816 12L6.7635 12.2468L6.76224 12.2476C4.77415 13.5155 3.37915 15.4715 2.90389 17.7106L2.90347 17.7126L2.19303 21H2C1.44772 21 1 21.4477 1 22C1 22.5523 1.44772 23 2 23H8.16094C8.5321 23 8.77846 22.6057 8.67563 22.2491C8.56127 21.8525 8.5 21.4334 8.5 21V16C8.5 14.2773 9.43004 12.7562 10.8519 12L11.2365 11.7532L11.2377 11.7524C13.2258 10.4845 14.6209 8.52855 15.0961 6.28933L15.0965 6.28738L15.807 3H16C16.5523 3 17 2.55228 17 2C17 1.44772 16.5523 1 16 1H2Z'
                fill={color}
            />
            <path
                d='M23 21C23 22.1046 22.1046 23 21 23H13C11.8954 23 11 22.1046 11 21V19.2C11 19.0895 11.0895 19 11.2 19H22.8C22.9105 19 23 19.0895 23 19.2V21Z'
                fill={color}
            />
            <path
                d='M22.8 17C22.9105 17 23 16.9105 23 16.8V16C23 14.8954 22.1046 14 21 14H13C11.8954 14 11 14.8954 11 16V16.8C11 16.9105 11.0895 17 11.2 17H22.8Z'
                fill={color}
            />
        </svg>
    );
};

export default WaitingForPaymentBoldMdSVG;