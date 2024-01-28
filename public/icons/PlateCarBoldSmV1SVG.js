import React from 'react';

const PlateCarBoldSmV1SVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1.25 7C1.25 6.0335 2.0335 5.25 3 5.25H13C13.9665 5.25 14.75 6.0335 14.75 7V11C14.75 11.9665 13.9665 12.75 13 12.75H3C2.0335 12.75 1.25 11.9665 1.25 11V7ZM5.75 6.75V11.25H13C13.1381 11.25 13.25 11.1381 13.25 11V7C13.25 6.86193 13.1381 6.75 13 6.75H5.75Z'
                fill={color}
            />
        </svg>
    );
};

export default PlateCarBoldSmV1SVG;
