import React from 'react';

const VisibleOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5.59739 5.93712C7.51075 4.67233 9.73073 3.99892 12.0005 4C14.2699 3.99911 16.4895 4.67251 18.4026 5.93712C20.3154 7.20154 21.8418 9.00379 22.8116 11.1304L22.8125 11.1322C22.9365 11.4056 23 11.7024 23 12.0015C23 12.3007 22.9365 12.5975 22.8125 12.8708L22.8113 12.8734C21.84 14.9984 20.3133 16.7991 18.4009 18.0627C16.488 19.3266 14.2689 20 12 20C9.73106 20 7.51203 19.3266 5.59908 18.0627C3.68668 16.7991 2.15998 14.9984 1.18871 12.8734L1.18752 12.8708C1.06354 12.5975 1 12.3007 1 12.0015C1 11.7024 1.06355 11.4056 1.18753 11.1322L1.18836 11.1304C2.15819 9.00379 3.68458 7.20154 5.59739 5.93712ZM11.9995 6C10.1283 5.99911 8.29122 6.55389 6.70026 7.60555C5.10876 8.65758 3.82656 10.1655 3.00806 11.9603L3 12.0015L3.00889 11.9585C3.00359 11.9701 3 11.985 3 12.0015C3 12.0177 3.00347 12.0324 3.00862 12.044C3.82849 13.8368 5.11077 15.3429 6.7016 16.394C8.29247 17.4451 10.1291 18 12 18C13.8709 18 15.7075 17.4451 17.2984 16.394C18.8898 15.3425 20.1725 13.8357 20.9923 12.042L20.9911 12.0446C20.9964 12.0329 21 12.018 21 12.0015C21 11.9853 20.9965 11.9706 20.9913 11.959C20.1728 10.1648 18.8909 8.65733 17.2997 7.60555C15.7088 6.55389 13.8708 5.99911 11.9995 6Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 13.4477 11 14 11C14.5523 11 15 11.4477 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C12.5523 9 13 9.44772 13 10C13 10.5523 12.5523 11 12 11Z'
                fill={color}
            />
        </svg>
    );
};

export default VisibleOutlineMdSVG;
