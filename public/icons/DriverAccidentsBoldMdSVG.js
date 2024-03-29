import React from 'react';

const DriverAccidentsBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M12 1.5C9.51472 1.5 7.5 3.51472 7.5 6C7.5 8.48528 9.51472 10.5 12 10.5C14.4853 10.5 16.5 8.48528 16.5 6C16.5 3.51472 14.4853 1.5 12 1.5Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M6 12C4.34315 12 3 13.3431 3 15V21C3 22.1046 3.89543 23 5 23H13.5C14.3802 23 15.1846 22.6751 15.7996 22.1386C15.8982 22.0526 16.0228 22 16.1536 22H21C22.3011 22 23.2559 20.7772 22.9403 19.5149L22.0084 15.7873C21.4519 13.5615 19.452 12 17.1577 12H6ZM5 15C5 14.4477 5.44772 14 6 14H6.91886C7.13408 14 7.32515 14.1377 7.3932 14.3419L9.3932 20.3419C9.50112 20.6657 9.26014 21 8.91886 21H5.5C5.22386 21 5 20.7761 5 20.5V15ZM11.744 21L10.844 18H13.5C14.3284 18 15 18.6716 15 19.5C15 20.3284 14.3284 21 13.5 21H11.744Z'
                fill={color}
            />
        </svg>
    );
};

export default DriverAccidentsBoldMdSVG;
