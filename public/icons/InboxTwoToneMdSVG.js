import React from 'react';

const InboxTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path d='M17 3C17 1.89543 17.8954 1 19 1H22.5C22.7761 1 23 1.22386 23 1.5V4.5C23 4.77614 22.7761 5 22.5 5H17V3Z' fill={color} />
            <path
                d='M8 6C4.13401 6 1 9.13401 1 13V19C1 21.2091 2.79086 23 5 23H20C21.6569 23 23 21.6569 23 20V12C23 8.68629 20.3137 6 17 6H8Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1 13C1 9.13401 4.13401 6 8 6C11.866 6 15 9.13401 15 13V23H5C2.79086 23 1 21.2091 1 19V13ZM8 8C5.23858 8 3 10.2386 3 13V19C3 20.1046 3.89543 21 5 21H13V13C13 10.2386 10.7614 8 8 8Z'
                fill='#040A1F'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5 14C5 13.4477 5.44772 13 6 13H10C10.5523 13 11 13.4477 11 14C11 14.5523 10.5523 15 10 15H6C5.44772 15 5 14.5523 5 14Z'
                fill='#040A1F'
            />
            <path fillRule='evenodd' clipRule='evenodd' d='M19 5V8C19 8.55228 18.5523 9 18 9C17.4477 9 17 8.55228 17 8V5H19Z' fill='#040A1F' />
        </svg>
    );
};

export default InboxTwoToneMdSVG;
