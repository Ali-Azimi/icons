import React from 'react';

const TruckTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M13 9C13 7.89543 13.8954 7 15 7H16.5C17.1295 7 17.7223 7.29639 18.1 7.8L20.5 11H21C22.1046 11 23 11.8954 23 13V16C23 17.1046 22.1046 18 21 18H19.7324C19.3866 18.5978 18.7403 19 18 19C17.2597 19 16.6134 18.5978 16.2676 18H10.7324C10.3866 18.5978 9.74028 19 9 19C8.25972 19 7.61337 18.5978 7.26756 18H6.73244C6.38663 18.5978 5.74028 19 5 19C4.25972 19 3.61337 18.5978 3.26756 18H3C1.89543 18 1 17.1046 1 16V12C1 11.4477 1.44772 11 2 11H13V9Z'
                fill={color}
            />
            <path
                d='M3 5C3 4.44772 3.44772 4 4 4H8C8.55228 4 9 4.44772 9 5C9 5.55228 9.44772 6 10 6H11C11.5523 6 12 6.44772 12 7V11H10V8C9.64936 8 9.31278 7.93985 9 7.82929V11H7V6H5V11H3V5Z'
                fill='#040A1F'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7 14.7639C6.46924 14.2889 5.76835 14 5 14C3.34315 14 2 15.3431 2 17C2 18.6569 3.34315 20 5 20C5.76835 20 6.46924 19.7111 7 19.2361C7.53076 19.7111 8.23165 20 9 20C10.6569 20 12 18.6569 12 17C12 15.3431 10.6569 14 9 14C8.23165 14 7.53076 14.2889 7 14.7639ZM4 17C4 16.4477 4.44772 16 5 16C5.55228 16 6 16.4477 6 17C6 17.5523 5.55228 18 5 18C4.44772 18 4 17.5523 4 17ZM8 17C8 17.5523 8.44772 18 9 18C9.55228 18 10 17.5523 10 17C10 16.4477 9.55228 16 9 16C8.44772 16 8 16.4477 8 17Z'
                fill='#040A1F'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M15 17C15 15.3431 16.3431 14 18 14C19.6569 14 21 15.3431 21 17C21 18.6569 19.6569 20 18 20C16.3431 20 15 18.6569 15 17ZM18 16C17.4477 16 17 16.4477 17 17C17 17.5523 17.4477 18 18 18C18.5523 18 19 17.5523 19 17C19 16.4477 18.5523 16 18 16Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default TruckTwoToneMdSVG;
