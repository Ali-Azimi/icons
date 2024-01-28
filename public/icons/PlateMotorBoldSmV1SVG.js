import React from 'react';

const PlateMotorBoldSmV1SVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M3.806 2.25C2.4168 2.25 1.25 3.3472 1.25 4.75V12.25C1.25 13.6528 2.4168 14.75 3.806 14.75H12.194C13.5832 14.75 14.75 13.6528 14.75 12.25V4.75C14.75 3.3472 13.5832 2.25 12.194 2.25H3.806ZM2.75 9.25H6C6.41421 9.25 6.75 8.91421 6.75 8.5V3.75H12.194C12.7997 3.75 13.25 4.21981 13.25 4.75V12.25C13.25 12.7802 12.7997 13.25 12.194 13.25H3.806C3.20034 13.25 2.75 12.7802 2.75 12.25V9.25Z'
                fill={color}
            />
        </svg>
    );
};

export default PlateMotorBoldSmV1SVG;
