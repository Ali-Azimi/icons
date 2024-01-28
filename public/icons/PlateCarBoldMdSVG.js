import React from 'react';

const PlateCarBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1 9.91667C1 7.72409 2.82526 6 5.01 6H6C6.55228 6 7 6.44772 7 7V19C7 19.5523 6.55228 20 6 20H5.01C2.82526 20 1 18.2759 1 16.0833V9.91667ZM4 14C4.55228 14 5 13.5523 5 13C5 12.4477 4.55228 12 4 12C3.44772 12 3 12.4477 3 13C3 13.5523 3.44772 14 4 14Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M9 19C9 19.5523 9.44771 20 10 20H18.99C21.1747 20 23 18.2759 23 16.0833V9.91667C23 7.72409 21.1747 6 18.99 6H10C9.44772 6 9 6.44772 9 7V19ZM15 10V16H13V12H12V10H15ZM19 10V16H17V12H16V10H19Z'
                fill={color}
            />
        </svg>
    );
};

export default PlateCarBoldMdSVG;
