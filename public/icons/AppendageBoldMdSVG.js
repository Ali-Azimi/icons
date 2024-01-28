import React from 'react';

const AppendageBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M5.5 1C3.01472 1 1 3.01472 1 5.5V7.625C1 8.17728 1.44772 8.625 2 8.625C2.55228 8.625 3 8.17728 3 7.625V5.5C3 4.11929 4.11929 3 5.5 3C6.88071 3 8 4.11929 8 5.5V9.25C8 9.66421 7.66421 10 7.25 10C6.83579 10 6.5 9.66421 6.5 9.25V6.5C6.5 5.94772 6.05228 5.5 5.5 5.5C4.94772 5.5 4.5 5.94772 4.5 6.5V9.25C4.5 10.7688 5.73122 12 7.25 12C8.76878 12 10 10.7688 10 9.25V5.5C10 3.01472 7.98528 1 5.5 1Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7 13.7429C7 13.6072 7.11426 13.5 7.25 13.5C9.59721 13.5 11.5 11.5972 11.5 9.25V5.5C11.5 3.90518 10.8778 2.45569 9.86285 1.38105C9.72759 1.23784 9.80302 1 10 1H20C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H12C9.23858 23 7 20.7614 7 18V13.7429ZM12 15C12 14.4477 12.4477 14 13 14H18C18.5523 14 19 14.4477 19 15C19 15.5523 18.5523 16 18 16H13C12.4477 16 12 15.5523 12 15ZM15 18C14.4477 18 14 18.4477 14 19C14 19.5523 14.4477 20 15 20H18C18.5523 20 19 19.5523 19 19C19 18.4477 18.5523 18 18 18H15Z'
                fill={color}
            />
        </svg>
    );
};

export default AppendageBoldMdSVG;
