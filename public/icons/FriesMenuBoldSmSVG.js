import React from 'react';

const FriesMenuBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M2.25 4C2.25 3.58579 2.58579 3.25 3 3.25H13C13.4142 3.25 13.75 3.58579 13.75 4C13.75 4.41421 13.4142 4.75 13 4.75H3C2.58579 4.75 2.25 4.41421 2.25 4Z'
                fill={color}
            />
            <path
                d='M6.25 8C6.25 7.58579 6.58579 7.25 7 7.25H13C13.4142 7.25 13.75 7.58579 13.75 8C13.75 8.41421 13.4142 8.75 13 8.75H7C6.58579 8.75 6.25 8.41421 6.25 8Z'
                fill={color}
            />
            <path
                d='M3 11.25C2.58579 11.25 2.25 11.5858 2.25 12C2.25 12.4142 2.58579 12.75 3 12.75H13C13.4142 12.75 13.75 12.4142 13.75 12C13.75 11.5858 13.4142 11.25 13 11.25H3Z'
                fill={color}
            />
        </svg>
    );
};

export default FriesMenuBoldSmSVG;
