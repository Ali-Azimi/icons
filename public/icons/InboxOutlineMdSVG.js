import React from 'react';

const InboxOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5 14C5 13.4477 5.44772 13 6 13H10C10.5523 13 11 13.4477 11 14C11 14.5523 10.5523 15 10 15H6C5.44772 15 5 14.5523 5 14Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M19 1C17.8954 1 17 1.89543 17 3V8C17 8.55228 17.4477 9 18 9C18.3824 9 18.7147 8.78536 18.8829 8.46998C20.1428 9.14341 21 10.4716 21 12V20C21 20.5523 20.5523 21 20 21H15V13C15 11.0413 14.1955 9.27052 12.899 8H15V6H8C4.13401 6 1 9.13401 1 13V19C1 21.2091 2.79086 23 5 23H20C21.6569 23 23 21.6569 23 20V12C23 9.38756 21.3304 7.16508 19 6.34141V5H22.5C22.7761 5 23 4.77614 23 4.5V1.5C23 1.22386 22.7761 1 22.5 1H19ZM8 8C5.23858 8 3 10.2386 3 13V19C3 20.1046 3.89543 21 5 21H13V13C13 10.2386 10.7614 8 8 8Z'
                fill={color}
            />
        </svg>
    );
};

export default InboxOutlineMdSVG;
