import React from 'react';

const HouseNumberBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1.25 3C1.25 2.0335 2.0335 1.25 3 1.25H11C13.0711 1.25 14.75 2.92893 14.75 5V13C14.75 13.9665 13.9665 14.75 13 14.75H5C2.92893 14.75 1.25 13.0711 1.25 11V3ZM6.25 5C6.25 4.58579 6.58579 4.25 7 4.25H8C8.41421 4.25 8.75 4.58579 8.75 5V10.25H9.5C9.91421 10.25 10.25 10.5858 10.25 11C10.25 11.4142 9.91421 11.75 9.5 11.75H6.5C6.08579 11.75 5.75 11.4142 5.75 11C5.75 10.5858 6.08579 10.25 6.5 10.25H7.25V5.75H7C6.58579 5.75 6.25 5.41421 6.25 5Z'
                fill={color}
            />
        </svg>
    );
};

export default HouseNumberBoldSmSVG;
