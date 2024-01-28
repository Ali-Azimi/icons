import React from 'react';

const NewsletterTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M6 1C4.89543 1 4 1.89543 4 3V11H3C2.44772 11 2 11.4477 2 12V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V12C22 11.4477 21.5523 11 21 11H20V3C20 1.89543 19.1046 1 18 1H6Z'
                fill={color}
            />
            <path
                d='M15 5C15 5.55228 14.5523 6 14 6H12C11.4477 6 11 5.55228 11 5C11 4.44772 11.4477 4 12 4H14C14.5523 4 15 4.44772 15 5Z'
                fill='#040A1F'
            />
            <path
                d='M15 8C15 8.55228 14.5523 9 14 9L10 9C9.44772 9 9 8.55228 9 8C9 7.44771 9.44772 7 10 7L14 7C14.5523 7 15 7.44772 15 8Z'
                fill='#040A1F'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5 10H3C1.89543 10 1 10.8954 1 12V18C1 20.7614 3.23858 23 6 23H18C20.7614 23 23 20.7614 23 18V12C23 10.8954 22.1046 10 21 10H19V10.0581C18.6336 10.1312 18.2823 10.2725 17.9651 10.4765L12 14.3112L6.03487 10.4765C5.71766 10.2725 5.3664 10.1312 5 10.0581V10ZM3 12H4.4126C4.60435 12 4.79206 12.0551 4.95335 12.1588L10.9185 15.9935C11.5773 16.4171 12.4227 16.4171 13.0815 15.9935L19.0466 12.1588C19.2079 12.0551 19.3957 12 19.5874 12H21V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V12Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default NewsletterTwoToneMdSVG;
