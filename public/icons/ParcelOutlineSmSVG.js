import React from 'react';

const ParcelOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M3 1.5C2.17157 1.5 1.5 2.17157 1.5 3V5C1.5 5.82843 2.17157 6.5 3 6.5V13C3 13.8284 3.67157 14.5 4.5 14.5H11.5C12.3284 14.5 13 13.8284 13 13V6.5C13.8284 6.5 14.5 5.82843 14.5 5V3C14.5 2.17157 13.8284 1.5 13 1.5H3ZM12 6.5V13C12 13.2761 11.7761 13.5 11.5 13.5H4.5C4.22386 13.5 4 13.2761 4 13V6.5H12ZM3 5.5C2.72386 5.5 2.5 5.27614 2.5 5V3C2.5 2.72386 2.72386 2.5 3 2.5H13C13.2761 2.5 13.5 2.72386 13.5 3V5C13.5 5.27614 13.2761 5.5 13 5.5H3Z'
                fill={color}
            />
        </svg>
    );
};

export default ParcelOutlineSmSVG;
