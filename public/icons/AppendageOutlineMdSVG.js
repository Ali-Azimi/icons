import React from 'react';

const AppendageOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M5.5 1C3.01472 1 1 3.01472 1 5.5V7.625C1 8.17728 1.44772 8.625 2 8.625C2.55228 8.625 3 8.17728 3 7.625V5.5C3 4.11929 4.11929 3 5.5 3C6.88071 3 8 4.11929 8 5.5V9.25C8 9.66421 7.66421 10 7.25 10C6.83579 10 6.5 9.66421 6.5 9.25V6.5C6.5 5.94772 6.05228 5.5 5.5 5.5C4.94772 5.5 4.5 5.94772 4.5 6.5V9.25C4.5 10.7688 5.73122 12 7.25 12C8.76878 12 10 10.7688 10 9.25V5.5C10 3.01472 7.98528 1 5.5 1Z'
                fill={color}
            />
            <path
                d='M6 18V15C6 14.4477 5.55229 14 5 14C4.44772 14 4 14.4477 4 15L4 18C4 20.7614 6.23858 23 9 23H17C18.6569 23 20 21.6569 20 20V4C20 2.34315 18.6569 1 17 1H12C11.4477 1 11 1.44772 11 2C11 2.55228 11.4477 3 12 3L17 3C17.5523 3 18 3.44772 18 4V20C18 20.5523 17.5523 21 17 21H9C7.34315 21 6 19.6569 6 18Z'
                fill={color}
            />
            <path
                d='M9 14C9 13.4477 9.44771 13 10 13H15C15.5523 13 16 13.4477 16 14C16 14.5523 15.5523 15 15 15H10C9.44771 15 9 14.5523 9 14Z'
                fill={color}
            />
            <path
                d='M12 17C11.4477 17 11 17.4477 11 18C11 18.5523 11.4477 19 12 19H15C15.5523 19 16 18.5523 16 18C16 17.4477 15.5523 17 15 17H12Z'
                fill={color}
            />
        </svg>
    );
};

export default AppendageOutlineMdSVG;
