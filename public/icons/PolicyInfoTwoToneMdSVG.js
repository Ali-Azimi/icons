import React from 'react';

const PolicyInfoTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M7 4C5.89543 4 5 4.89543 5 6V16H3C2.44772 16 2 16.4477 2 17C2 18.6569 3.34315 20 5 20H14C15.6569 20 17 18.6569 17 17V10H20C21.1046 10 22 9.10457 22 8V7C22 5.34315 20.6569 4 19 4H7Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8 8C8 7.44772 8.44772 7 9 7H13C13.5523 7 14 7.44772 14 8C14 8.55228 13.5523 9 13 9H9C8.44772 9 8 8.55228 8 8Z'
                fill='#040A1F'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8 12C8 11.4477 8.44772 11 9 11H13C13.5523 11 14 11.4477 14 12C14 12.5523 13.5523 13 13 13H9C8.44772 13 8 12.5523 8 12Z'
                fill='#040A1F'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4 15H3C1.89543 15 1 15.8954 1 17C1 19.2091 2.79086 21 5 21H14C16.2091 21 18 19.2091 18 17V11H20C21.6569 11 23 9.65685 23 8V7C23 4.79086 21.2091 3 19 3H7C5.34315 3 4 4.34315 4 6V15ZM6 6C6 5.44772 6.44772 5 7 5H16V17C16 18.1046 15.1046 19 14 19C12.8954 19 12 18.1046 12 17V16C12 15.4477 11.5523 15 11 15H6V6ZM20 9C20.5523 9 21 8.55228 21 8V7C21 5.89543 20.1046 5 19 5C18.4477 5 18 5.44772 18 6V9H20ZM10 17C10 17.7286 10.1948 18.4117 10.5351 19H5C3.89543 19 3 18.1046 3 17H10Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default PolicyInfoTwoToneMdSVG;
