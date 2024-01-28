import React from 'react';

const VisibleTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 4C9.73042 3.99902 7.51062 4.67242 5.59739 5.93712C3.68458 7.20154 2.15819 9.00379 1.18836 11.1304L1.18753 11.1322C1.06354 11.4056 1 11.7024 1 12.0015C1 12.3007 1.06354 12.5975 1.18752 12.8708L1.18871 12.8734C2.15998 14.9984 3.68668 16.7991 5.59908 18.0627C7.51203 19.3266 9.73106 20 12 20C14.2689 20 16.488 19.3266 18.4009 18.0627C20.3133 16.7991 21.84 14.9984 22.8113 12.8734L22.8125 12.8708C22.9365 12.5975 23 12.3007 23 12.0015C23 11.7024 22.9365 11.4056 22.8125 11.1322L22.8116 11.1304C21.8418 9.00379 20.3154 7.20154 18.4026 5.93712C16.4894 4.67242 14.2696 3.99902 12 4Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 13.4477 11 14 11C14.5523 11 15 11.4477 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C12.5523 9 13 9.44772 13 10C13 10.5523 12.5523 11 12 11Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default VisibleTwoToneMdSVG;
