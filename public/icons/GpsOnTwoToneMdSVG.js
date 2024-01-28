import React from 'react';

const GpsOnTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 1C12.5523 1 13 1.44772 13 2V4C13 4.55228 12.5523 5 12 5C11.4477 5 11 4.55228 11 4V2C11 1.44772 11.4477 1 12 1Z'
                fill='#040A1F'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M23 12C23 12.5523 22.5523 13 22 13H20C19.4477 13 19 12.5523 19 12C19 11.4477 19.4477 11 20 11H22C22.5523 11 23 11.4477 23 12Z'
                fill='#040A1F'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5 12C5 12.5523 4.55228 13 4 13H2C1.44772 13 1 12.5523 1 12C1 11.4477 1.44772 11 2 11H4C4.55228 11 5 11.4477 5 12Z'
                fill='#040A1F'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 19C12.5523 19 13 19.4477 13 20V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V20C11 19.4477 11.4477 19 12 19Z'
                fill='#040A1F'
            />
            <path
                d='M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default GpsOnTwoToneMdSVG;
