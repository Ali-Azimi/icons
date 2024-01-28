import React from 'react';

const CacheTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 5C12.5523 5 13 5.44772 13 6V11.5L16.6 14.2C17.0418 14.5314 17.1314 15.1582 16.8 15.6C16.4686 16.0418 15.8418 16.1314 15.4 15.8L11 12.5V6C11 5.44772 11.4477 5 12 5Z'
                fill='#040A1F'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 3C7.02944 3 3 7.02944 3 12C3 14.1254 3.73579 16.0776 4.96806 17.6177L7.29289 15.2929L8.70711 16.7071L5.63604 19.7782C5.24551 20.1687 4.61235 20.1687 4.22183 19.7782C2.23231 17.7887 1 15.0373 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23V21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z'
                fill={color}
            />
        </svg>
    );
};

export default CacheTwoToneMdSVG;
