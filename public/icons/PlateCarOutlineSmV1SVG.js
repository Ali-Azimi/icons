import React from 'react';

const PlateCarOutlineSmV1SVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M3 5.5C2.17157 5.5 1.5 6.17157 1.5 7V11C1.5 11.8284 2.17157 12.5 3 12.5H13C13.8284 12.5 14.5 11.8284 14.5 11V7C14.5 6.17157 13.8284 5.5 13 5.5H3ZM4.5 11.5H3C2.72386 11.5 2.5 11.2761 2.5 11V7C2.5 6.72386 2.72386 6.5 3 6.5H4.5V11.5ZM5.5 6.5V11.5H13C13.2761 11.5 13.5 11.2761 13.5 11V7C13.5 6.72386 13.2761 6.5 13 6.5H5.5Z'
                fill={color}
            />
        </svg>
    );
};

export default PlateCarOutlineSmV1SVG;
