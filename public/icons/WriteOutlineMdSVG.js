import React from 'react';

const WriteOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M4 1C2.34315 1 1 2.34315 1 4V12C1 12.5523 1.44772 13 2 13C2.55228 13 3 12.5523 3 12V4C3 3.44772 3.44772 3 4 3H18C19.6569 3 21 4.34315 21 6V14C21 14.5523 20.5523 15 20 15H14C13.4477 15 13 15.4477 13 16C13 16.5523 13.4477 17 14 17H20C21.6569 17 23 15.6569 23 14V6C23 3.23858 20.7614 1 18 1H4Z'
                fill={color}
            />
            <path d='M7 6C6.44772 6 6 6.44772 6 7C6 7.55228 6.44772 8 7 8H17C17.5523 8 18 7.55228 18 7C18 6.44772 17.5523 6 17 6H7Z' fill={color} />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M9.12038 12H12C12.5523 12 13 11.5523 13 11C13 10.4477 12.5523 10 12 10H7C6.79725 10 6.59122 10.0444 6.40057 10.1366C6.21098 10.2283 6.03267 10.3696 5.8975 10.5619L4.37316 12.7155C4.13328 13.0522 3.99675 13.4562 4.00006 13.8816L4.00008 20.874L4.00008 20.8768C4.00092 21.1836 4.07382 21.4818 4.20794 21.7525C4.34167 22.0223 4.5313 22.2552 4.75634 22.4431C4.98111 22.6308 5.239 22.7719 5.51186 22.865C5.78282 22.9573 6.06836 23.0023 6.35339 22.9999L7.6738 22.9999C8.24188 22.9988 8.81288 22.8083 9.25663 22.4322C9.70532 22.0518 9.9982 21.4977 9.99996 20.8769L9.99996 20.874L9.99994 13.8817C10.0032 13.4562 9.86668 13.0521 9.62681 12.7155L9.12038 12ZM6.00207 13.876L6.99999 12.4661L7.99541 13.8725L7.99792 13.876L7.99994 13.8789L7.99996 20.8646C7.99731 20.8698 7.98794 20.8857 7.96339 20.9066C7.90943 20.9523 7.80602 20.9995 7.67046 20.9999L6.34866 20.9998L6.33774 21C6.2728 21.0007 6.21105 20.9903 6.15735 20.972C6.1036 20.9537 6.06417 20.9296 6.03812 20.9079C6.0126 20.8865 6.00281 20.8701 6.00008 20.8646L6.00006 13.8789L6.00207 13.876Z'
                fill={color}
            />
        </svg>
    );
};

export default WriteOutlineMdSVG;