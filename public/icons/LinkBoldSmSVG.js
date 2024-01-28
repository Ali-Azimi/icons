import React from 'react';

const LinkBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M2.75 8C2.75 6.75736 3.75736 5.75 5 5.75H7V4.25H5C2.92893 4.25 1.25 5.92893 1.25 8C1.25 10.0711 2.92893 11.75 5 11.75H7V10.25H5C3.75736 10.25 2.75 9.24264 2.75 8Z'
                fill={color}
            />
            <path
                d='M9 5.75H11C12.2426 5.75 13.25 6.75736 13.25 8C13.25 9.24264 12.2426 10.25 11 10.25H9V11.75H11C13.0711 11.75 14.75 10.0711 14.75 8C14.75 5.92893 13.0711 4.25 11 4.25H9V5.75Z'
                fill={color}
            />
            <path
                d='M5 7.25C4.58579 7.25 4.25 7.58579 4.25 8C4.25 8.41421 4.58579 8.75 5 8.75H11C11.4142 8.75 11.75 8.41421 11.75 8C11.75 7.58579 11.4142 7.25 11 7.25H5Z'
                fill={color}
            />
        </svg>
    );
};

export default LinkBoldSmSVG;
