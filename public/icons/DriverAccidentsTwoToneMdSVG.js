import React from 'react';

const DriverAccidentsTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M8.00001 12C7.67203 12 7.3649 12.1608 7.17808 12.4304C6.99126 12.7 6.94851 13.044 7.06368 13.3511L10.0637 21.3511C10.21 21.7414 10.5832 22 11 22H20C21.3011 22 22.2559 20.7772 21.9403 19.5149L21.0084 15.7873C20.4519 13.5615 18.452 12 16.1577 12H8.00001Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 1C9.23858 1 7 3.23858 7 6C7 8.76142 9.23858 11 12 11C14.7614 11 17 8.76142 17 6C17 3.23858 14.7614 1 12 1ZM9 6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6C15 7.65685 13.6569 9 12 9C10.3431 9 9 7.65685 9 6Z'
                fill='#040A1F'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M2 15C2 13.3431 3.34315 12 5 12H7.72076L9.38743 17H13C14.6569 17 16 18.3431 16 20C16 21.6569 14.6569 23 13 23H4C2.89543 23 2 22.1046 2 21V15ZM5 14C4.44772 14 4 14.4477 4 15V21H8.61257L6.27924 14H5ZM10.7208 21L10.0541 19H13C13.5523 19 14 19.4477 14 20C14 20.5523 13.5523 21 13 21H10.7208Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default DriverAccidentsTwoToneMdSVG;
