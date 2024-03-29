import React from 'react';

const HouseholderOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6C16 8.20914 14.2091 10 12 10C9.79086 10 8 8.20914 8 6ZM12 4C10.8954 4 10 4.89543 10 6C10 7.10457 10.8954 8 12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5.53513 20H3C1.89543 20 1 19.1046 1 18V17C1 15.3431 2.34315 14 4 14H5.80269C6.84012 12.2066 8.77915 11 11 11H13C16.3137 11 19 13.6863 19 17V18C19 20.2091 17.2091 22 15 22H9C7.51944 22 6.22675 21.1956 5.53513 20ZM3 17C3 16.4477 3.44772 16 4 16H5.08296C5.0284 16.3252 5 16.6593 5 17V18H3V17ZM7 17C7 14.7909 8.79086 13 11 13H13C15.2091 13 17 14.7909 17 17V18C17 19.1046 16.1046 20 15 20H9C7.89543 20 7 19.1046 7 18V17Z'
                fill={color}
            />
            <path
                d='M21 20H18.4649C18.8052 19.4117 19 18.7286 19 18H21V17C21 16.4477 20.5523 16 20 16H18.9171C18.7966 15.2821 18.5487 14.6074 18.1973 14H20C21.6569 14 23 15.3431 23 17V18C23 19.1046 22.1046 20 21 20Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M20 13C21.6569 13 23 11.6569 23 10C23 8.34315 21.6569 7 20 7C18.3431 7 17 8.34315 17 10C17 11.6569 18.3431 13 20 13ZM19 10C19 9.44772 19.4477 9 20 9C20.5523 9 21 9.44772 21 10C21 10.5523 20.5523 11 20 11C19.4477 11 19 10.5523 19 10Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7 10C7 11.6569 5.65685 13 4 13C2.34315 13 1 11.6569 1 10C1 8.34315 2.34315 7 4 7C5.65685 7 7 8.34315 7 10ZM4 9C3.44772 9 3 9.44772 3 10C3 10.5523 3.44772 11 4 11C4.55228 11 5 10.5523 5 10C5 9.44772 4.55228 9 4 9Z'
                fill={color}
            />
        </svg>
    );
};

export default HouseholderOutlineMdSVG;
