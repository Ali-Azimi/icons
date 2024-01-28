import React from 'react';

const CopyOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7 1.5C6.17157 1.5 5.5 2.17157 5.5 3V3.5H4C3.17157 3.5 2.5 4.17157 2.5 5V13C2.5 13.8284 3.17157 14.5 4 14.5H10C10.8284 14.5 11.5 13.8284 11.5 13V11.5H13C13.8284 11.5 14.5 10.8284 14.5 10V5C14.5 3.067 12.933 1.5 11 1.5H7ZM10.5 11.5V13C10.5 13.2761 10.2761 13.5 10 13.5H4C3.72386 13.5 3.5 13.2761 3.5 13V5C3.5 4.72386 3.72386 4.5 4 4.5H5.5V10C5.5 10.8284 6.17157 11.5 7 11.5H10.5ZM6.5 3C6.5 2.72386 6.72386 2.5 7 2.5H11C12.3807 2.5 13.5 3.61929 13.5 5V10C13.5 10.2761 13.2761 10.5 13 10.5H7C6.72386 10.5 6.5 10.2761 6.5 10V3Z'
                fill={color}
            />
        </svg>
    );
};

export default CopyOutlineSmSVG;
