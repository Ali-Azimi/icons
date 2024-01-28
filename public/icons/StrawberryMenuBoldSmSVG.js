import React from 'react';

const StrawberryMenuBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M2.25 4C2.25 3.58579 2.58579 3.25 3 3.25H13C13.4142 3.25 13.75 3.58579 13.75 4C13.75 4.41421 13.4142 4.75 13 4.75H3C2.58579 4.75 2.25 4.41421 2.25 4Z'
                fill={color}
            />
            <path
                d='M4.25 8C4.25 7.58579 4.58579 7.25 5 7.25H11C11.4142 7.25 11.75 7.58579 11.75 8C11.75 8.41421 11.4142 8.75 11 8.75H5C4.58579 8.75 4.25 8.41421 4.25 8Z'
                fill={color}
            />
            <path
                d='M6.5 11.25C6.08579 11.25 5.75 11.5858 5.75 12C5.75 12.4142 6.08579 12.75 6.5 12.75H9.5C9.91421 12.75 10.25 12.4142 10.25 12C10.25 11.5858 9.91421 11.25 9.5 11.25H6.5Z'
                fill={color}
            />
        </svg>
    );
};

export default StrawberryMenuBoldSmSVG;
