import React from 'react';

const DateBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M5 1.25C5.41421 1.25 5.75 1.58579 5.75 2V3.75H10.25V2C10.25 1.58579 10.5858 1.25 11 1.25C11.4142 1.25 11.75 1.58579 11.75 2V3.75H13C13.9665 3.75 14.75 4.5335 14.75 5.5V11C14.75 13.0711 13.0711 14.75 11 14.75H5C2.92893 14.75 1.25 13.0711 1.25 11V5.5C1.25 4.5335 2.0335 3.75 3 3.75H4.25V2C4.25 1.58579 4.58579 1.25 5 1.25Z'
                fill={color}
            />
        </svg>
    );
};

export default DateBoldSmSVG;
