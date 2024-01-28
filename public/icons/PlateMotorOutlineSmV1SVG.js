import React from 'react';

const PlateMotorOutlineSmV1SVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M3.806 2.5C2.54739 2.5 1.5 3.49263 1.5 4.75V12.25C1.5 13.5074 2.54739 14.5 3.806 14.5H12.194C13.4526 14.5 14.5 13.5074 14.5 12.25V4.75C14.5 3.49263 13.4526 2.5 12.194 2.5H3.806ZM4 3.5H5.5V8H2.5V5C2.5 4.17157 3.17157 3.5 4 3.5ZM2.5 9H6C6.27614 9 6.5 8.77614 6.5 8.5V3.5H12.194C12.9302 3.5 13.5 4.07437 13.5 4.75V12.25C13.5 12.9256 12.9302 13.5 12.194 13.5H3.806C3.06975 13.5 2.5 12.9256 2.5 12.25V9Z'
                fill={color}
            />
        </svg>
    );
};

export default PlateMotorOutlineSmV1SVG;
