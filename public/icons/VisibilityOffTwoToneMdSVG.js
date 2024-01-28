import React from 'react';

const VisibilityOffTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M17.6774 5.49418C15.9382 4.51582 13.9882 3.99914 12 4C9.73042 3.99902 7.51062 4.67242 5.59739 5.93712C3.68458 7.20154 2.15819 9.00379 1.18836 11.1304L1.18753 11.1322C1.06354 11.4056 1 11.7024 1 12.0015C1 12.3007 1.06354 12.5975 1.18752 12.8708L1.18871 12.8734C2.11013 14.8893 3.53143 16.6134 5.30769 17.8639L17.6774 5.49418Z'
                fill={color}
            />
            <path
                d='M21.4709 8.8537C21.1276 8.39025 20.4571 8.37137 20.0493 8.77916L10.4248 18.4036C9.87612 18.9523 10.1403 19.8748 10.9128 19.9483C11.2732 19.9827 11.636 20 12 20C14.2689 20 16.488 19.3266 18.4009 18.0627C20.3133 16.7991 21.84 14.9984 22.8113 12.8734L22.8125 12.8708C22.9365 12.5975 23 12.3007 23 12.0015C23 11.7024 22.9365 11.4056 22.8125 11.1322L22.8116 11.1304C22.4423 10.3205 21.9922 9.5577 21.4709 8.8537Z'
                fill={color}
            />
            <path
                d='M21.7071 3.70711C22.0976 3.31658 22.0976 2.68342 21.7071 2.29289C21.3166 1.90237 20.6834 1.90237 20.2929 2.29289L12.9367 9.64909C12.7946 9.2699 12.4288 9 12 9C10.3431 9 9 10.3431 9 12C9 12.4631 9.10495 12.9018 9.29237 13.2934L2.29289 20.2929C1.90237 20.6834 1.90237 21.3166 2.29289 21.7071C2.68342 22.0976 3.31658 22.0976 3.70711 21.7071L21.7071 3.70711Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default VisibilityOffTwoToneMdSVG;
