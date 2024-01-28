import React from 'react';

const AppendageTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M6 18C6 20.7614 8.23858 23 11 23H19C20.6569 23 22 21.6569 22 20V4C22 2.34315 20.6569 1 19 1H7C6.44772 1 6 1.44772 6 2V18Z'
                fill={color}
            />
            <path
                d='M1 5.5C1 3.01472 3.01472 1 5.5 1C7.98528 1 10 3.01472 10 5.5V9.25C10 10.7688 8.76878 12 7.25 12C5.73122 12 4.5 10.7688 4.5 9.25V6.5C4.5 5.94772 4.94772 5.5 5.5 5.5C6.05228 5.5 6.5 5.94772 6.5 6.5V9.25C6.5 9.66421 6.83579 10 7.25 10C7.66421 10 8 9.66421 8 9.25V5.5C8 4.11929 6.88071 3 5.5 3C4.11929 3 3 4.11929 3 5.5V7.625C3 8.17728 2.55228 8.625 2 8.625C1.44772 8.625 1 8.17728 1 7.625V5.5Z'
                fill='#040A1F'
            />
            <path
                d='M11 14C11 13.4477 11.4477 13 12 13H17C17.5523 13 18 13.4477 18 14C18 14.5523 17.5523 15 17 15H12C11.4477 15 11 14.5523 11 14Z'
                fill='#040A1F'
            />
            <path
                d='M14 17C13.4477 17 13 17.4477 13 18C13 18.5523 13.4477 19 14 19H17C17.5523 19 18 18.5523 18 18C18 17.4477 17.5523 17 17 17H14Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default AppendageTwoToneMdSVG;
