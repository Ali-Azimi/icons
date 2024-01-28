import React from 'react';

const ChequeTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M1 6C1 3.79086 2.79086 2 5 2H19C21.2091 2 23 3.79086 23 6V14C23 14.5523 22.5523 15 22 15H14V22H4.5C2.567 22 1 20.433 1 18.5C1 18.3898 1.00509 18.2808 1.01505 18.1733C1.00514 18.1168 1 18.0589 1 18V6Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8 15V2H6V15H4.5C2.567 15 1 16.567 1 18.5C1 20.433 2.567 22 4.5 22H14V15H8ZM4.5 17H12V20H4.5C3.67157 20 3 19.3284 3 18.5C3 17.6716 3.67157 17 4.5 17Z'
                fill='#040A1F'
            />
            <path
                d='M11 6C10.4477 6 10 6.44772 10 7C10 7.55228 10.4477 8 11 8H17.5C18.0523 8 18.5 7.55228 18.5 7C18.5 6.44772 18.0523 6 17.5 6H11Z'
                fill='#040A1F'
            />
            <path
                d='M14.5 9C13.9477 9 13.5 9.44772 13.5 10C13.5 10.5523 13.9477 11 14.5 11H17.5C18.0523 11 18.5 10.5523 18.5 10C18.5 9.44772 18.0523 9 17.5 9H14.5Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default ChequeTwoToneMdSVG;
