import React from 'react';

const ListBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M11 3C11 2.72386 11.2239 2.5 11.5 2.5H13.5C13.7761 2.5 14 2.72386 14 3V5C14 5.27614 13.7761 5.5 13.5 5.5H11.5C11.2239 5.5 11 5.27614 11 5V3Z'
                fill={color}
            />
            <path
                d='M11 7.5C11 7.22386 11.2239 7 11.5 7H13.5C13.7761 7 14 7.22386 14 7.5V9.5C14 9.77614 13.7761 10 13.5 10H11.5C11.2239 10 11 9.77614 11 9.5V7.5Z'
                fill={color}
            />
            <path
                d='M11.5 11.5C11.2239 11.5 11 11.7239 11 12V14C11 14.2761 11.2239 14.5 11.5 14.5H13.5C13.7761 14.5 14 14.2761 14 14V12C14 11.7239 13.7761 11.5 13.5 11.5H11.5Z'
                fill={color}
            />
            <path
                d='M2 3.25C1.58579 3.25 1.25 3.58579 1.25 4C1.25 4.41421 1.58579 4.75 2 4.75H8C8.41421 4.75 8.75 4.41421 8.75 4C8.75 3.58579 8.41421 3.25 8 3.25H2Z'
                fill={color}
            />
            <path
                d='M1.25 8.5C1.25 8.08579 1.58579 7.75 2 7.75H8C8.41421 7.75 8.75 8.08579 8.75 8.5C8.75 8.91421 8.41421 9.25 8 9.25H2C1.58579 9.25 1.25 8.91421 1.25 8.5Z'
                fill={color}
            />
            <path
                d='M2 12.25C1.58579 12.25 1.25 12.5858 1.25 13C1.25 13.4142 1.58579 13.75 2 13.75H8C8.41421 13.75 8.75 13.4142 8.75 13C8.75 12.5858 8.41421 12.25 8 12.25H2Z'
                fill={color}
            />
        </svg>
    );
};

export default ListBoldSmSVG;
