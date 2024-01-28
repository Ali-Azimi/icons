import React from 'react';

const ParcelBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M1.5 3C1.5 2.17157 2.17157 1.5 3 1.5H13C13.8284 1.5 14.5 2.17157 14.5 3V4.5C14.5 5.32843 13.8284 6 13 6H3C2.17157 6 1.5 5.32843 1.5 4.5V3Z'
                fill={color}
            />
            <path
                d='M3 7.8C3 7.63431 3.13431 7.5 3.3 7.5H12.7C12.8657 7.5 13 7.63431 13 7.8V13C13 13.8284 12.3284 14.5 11.5 14.5H4.5C3.67157 14.5 3 13.8284 3 13V7.8Z'
                fill={color}
            />
        </svg>
    );
};

export default ParcelBoldSmSVG;
