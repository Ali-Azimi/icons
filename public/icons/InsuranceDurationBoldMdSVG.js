import React from 'react';

const InsuranceDurationBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path d='M7 1C7.55228 1 8 1.44772 8 2V5C8 5.55229 7.55228 6 7 6C6.44772 6 6 5.55229 6 5V2C6 1.44772 6.44772 1 7 1Z' fill={color} />
            <path
                d='M17 1C17.5523 1 18 1.44772 18 2V5C18 5.55229 17.5523 6 17 6C16.4477 6 16 5.55229 16 5V2C16 1.44772 16.4477 1 17 1Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M14.5 3.5C14.5 3.22386 14.2761 3 14 3H10C9.72386 3 9.5 3.22386 9.5 3.5V5C9.5 6.38071 8.38071 7.5 7 7.5C5.61929 7.5 4.5 6.38071 4.5 5V3.5C4.5 3.22386 4.27614 3 4 3C2.34315 3 1 4.34315 1 6V18C1 20.7614 3.23858 23 6 23H18C20.7614 23 23 20.7614 23 18V6C23 4.34315 21.6569 3 20 3C19.7239 3 19.5 3.22386 19.5 3.5V5C19.5 6.38071 18.3807 7.5 17 7.5C15.6193 7.5 14.5 6.38071 14.5 5V3.5ZM19 12H5V10H19V12ZM9 16V14H7V16H9ZM11 14H13V16H11V14ZM17 16V14H15V16H17ZM7 20V18H9V20H7ZM13 18H11V20H13V18ZM15 20V18H17V20H15Z'
                fill={color}
            />
        </svg>
    );
};

export default InsuranceDurationBoldMdSVG;
