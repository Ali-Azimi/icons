import React from 'react';

const WifiOnBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M8 3.25C5.43497 3.25 3.12068 4.35407 1.45429 6.12154C1.1819 6.41046 1.1819 6.86162 1.45429 7.15053L7.4543 13.5145C7.596 13.6648 7.79343 13.75 8 13.75C8.20657 13.75 8.404 13.6648 8.5457 13.5145L14.5457 7.15053C14.8181 6.86162 14.8181 6.41046 14.5457 6.12154C12.8793 4.35407 10.565 3.25 8 3.25Z'
                fill={color}
            />
        </svg>
    );
};

export default WifiOnBoldSmSVG;
