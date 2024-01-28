import React from 'react';

const CallTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M20.162 23C17.2388 23 14.2668 22.6535 11.7154 21.227C7.97012 19.133 4.86624 16.0289 2.77249 12.2834C1.34637 9.73227 1 6.7607 1 3.83801V3.2C1 1.98497 1.98497 1 3.2 1H6.90526C8.12029 1 9.10526 1.98498 9.10526 3.2V5.13426C9.10526 5.85966 8.74768 6.53843 8.14942 6.94867L7.51599 7.38302C6.64543 7.97998 6.30941 9.11889 6.82522 10.0399C8.49787 13.0263 10.9737 15.5021 13.9601 17.1748C14.8811 17.6906 16.02 17.3546 16.6169 16.4841L17.0513 15.8506C17.4616 15.2523 18.1403 14.8947 18.8657 14.8947H20.8C22.015 14.8947 23 15.8797 23 17.0947V19.5263L23.0001 17.9632L23.0002 18.8316L23.0002 17.5L23.0003 20.8C23.0003 22.015 22.0154 23 20.8003 23H20.162Z'
                fill={color}
            />
        </svg>
    );
};

export default CallTwoToneMdSVG;
