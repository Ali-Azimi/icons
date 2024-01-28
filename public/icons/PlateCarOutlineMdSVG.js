import React from 'react';

const PlateCarOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5.01 8C3.86998 8 3 8.88758 3 9.91667V16.0833C3 17.1124 3.86998 18 5.01 18H7V8H5.01ZM18.99 8H9V18H18.99C20.13 18 21 17.1124 21 16.0833V9.91667C21 8.88758 20.13 8 18.99 8ZM5.01 20H8H18.99C21.1747 20 23 18.2759 23 16.0833V9.91667C23 7.72409 21.1747 6 18.99 6H8H5.01C2.82526 6 1 7.72409 1 9.91667V16.0833C1 18.2759 2.82526 20 5.01 20ZM12 10H14V16H12V12H11V10H12ZM18 10H16H15V12H16V16H18V10ZM6 13C6 13.5523 5.55228 14 5 14C4.44772 14 4 13.5523 4 13C4 12.4477 4.44772 12 5 12C5.55228 12 6 12.4477 6 13Z'
                fill={color}
            />
        </svg>
    );
};

export default PlateCarOutlineMdSVG;
