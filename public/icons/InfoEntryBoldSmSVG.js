import React from 'react';

const InfoEntryBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M7.75 3C7.75 2.58579 7.41421 2.25 7 2.25C6.58579 2.25 6.25 2.58579 6.25 3V13C6.25 13.4142 6.58579 13.75 7 13.75C7.41421 13.75 7.75 13.4142 7.75 13V11.75H13C13.9665 11.75 14.75 10.9665 14.75 10V6C14.75 5.0335 13.9665 4.25 13 4.25H7.75V3Z'
                fill={color}
            />
            <path
                d='M3 5.75C2.86193 5.75 2.75 5.86193 2.75 6V10C2.75 10.1381 2.86193 10.25 3 10.25H5V11.75H3C2.0335 11.75 1.25 10.9665 1.25 10V6C1.25 5.0335 2.0335 4.25 3 4.25H5V5.75H3Z'
                fill={color}
            />
        </svg>
    );
};

export default InfoEntryBoldSmSVG;
