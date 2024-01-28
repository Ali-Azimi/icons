import React from 'react';

const HouseNumberOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M6.5 5C6.5 4.72386 6.72386 4.5 7 4.5H8C8.27614 4.5 8.5 4.72386 8.5 5V10.5H9.5C9.77614 10.5 10 10.7239 10 11C10 11.2761 9.77614 11.5 9.5 11.5H6.5C6.22386 11.5 6 11.2761 6 11C6 10.7239 6.22386 10.5 6.5 10.5H7.5V5.5H7C6.72386 5.5 6.5 5.27614 6.5 5Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1.5 3C1.5 2.17157 2.17157 1.5 3 1.5H11C12.933 1.5 14.5 3.067 14.5 5V13C14.5 13.8284 13.8284 14.5 13 14.5H5C3.067 14.5 1.5 12.933 1.5 11V3ZM3 2.5C2.72386 2.5 2.5 2.72386 2.5 3V11C2.5 12.3807 3.61929 13.5 5 13.5H13C13.2761 13.5 13.5 13.2761 13.5 13V5C13.5 3.61929 12.3807 2.5 11 2.5H3Z'
                fill={color}
            />
        </svg>
    );
};

export default HouseNumberOutlineSmSVG;
