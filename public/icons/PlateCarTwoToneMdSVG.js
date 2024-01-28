import React from 'react';

const PlateCarTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M5.01 6C2.82526 6 1 7.72409 1 9.91667V16.0833C1 18.2759 2.82526 20 5.01 20H18.99C21.1747 20 23 18.2759 23 16.0833V9.91667C23 7.72409 21.1747 6 18.99 6H5.01Z'
                fill={color}
            />
            <path d='M7 6H9V20H7V6Z' fill='#040A1F' />
            <path d='M15 10H12V12H13V16H15V10Z' fill='#040A1F' />
            <path d='M19 10H16V12H17V16H19V10Z' fill='#040A1F' />
            <path d='M5 13C5 13.5523 4.55228 14 4 14C3.44772 14 3 13.5523 3 13C3 12.4477 3.44772 12 4 12C4.55228 12 5 12.4477 5 13Z' fill='#040A1F' />
        </svg>
    );
};

export default PlateCarTwoToneMdSVG;
