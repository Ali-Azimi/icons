import React from 'react';

const CarInfoTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M7 1C5.34315 1 4 2.34315 4 4V16.1707C2.83481 16.5825 2 17.6938 2 19C2 19.5523 2.44772 20 3 20H4V23H13C15.2091 23 17 21.2091 17 19V4C17 2.34315 18.3431 1 20 1H7Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M2.75212 13.1878C3.11602 11.8939 4.29604 11 5.64008 11H9.35988C10.7039 11 11.8839 11.8939 12.2478 13.1878L13.2119 16.6155C13.707 17.2814 14 18.1065 14 19C14 20.1046 13.1046 21 12 21V22C12 22.5523 11.5523 23 11 23C10.4477 23 10 22.5523 10 22V21H5V22C5 22.5523 4.55228 23 4 23C3.44772 23 3 22.5523 3 22L3 21C1.89543 21 1 20.1046 1 19C1 18.1065 1.29295 17.2814 1.78804 16.6156L2.75212 13.1878ZM12 19C12 17.8954 11.1046 17 10 17H5C3.89543 17 3 17.8954 3 19H12ZM10.6799 15H4.32003L4.67742 13.7293C4.79872 13.298 5.19206 13 5.64008 13H9.35988C9.8079 13 10.2012 13.298 10.3225 13.7293L10.6799 15Z'
                fill='#040A1F'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M17 4C17 2.34315 18.3431 1 20 1C21.6569 1 23 2.34315 23 4V7C23 8.65685 21.6569 10 20 10H17V4ZM20 3C19.4477 3 19 3.44772 19 4V8H20C20.5523 8 21 7.55228 21 7V4C21 3.44772 20.5523 3 20 3Z'
                fill='#040A1F'
            />
            <path d='M7 5C7 4.44772 7.44772 4 8 4H13C13.5523 4 14 4.44772 14 5C14 5.55228 13.5523 6 13 6H8C7.44772 6 7 5.55228 7 5Z' fill='#040A1F' />
            <path
                d='M11 7C10.4477 7 10 7.44772 10 8C10 8.55228 10.4477 9 11 9H13C13.5523 9 14 8.55228 14 8C14 7.44772 13.5523 7 13 7H11Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default CarInfoTwoToneMdSVG;
