import React from 'react';

const InsuranceDurationOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path d='M5 11H19V9H5V11Z' fill={color} />
            <path d='M9 13V15H7V13H9Z' fill={color} />
            <path d='M13 13H11V15H13V13Z' fill={color} />
            <path d='M17 13V15H15V13H17Z' fill={color} />
            <path d='M11 17H13V19H11V17Z' fill={color} />
            <path d='M9 17H7V19H9V17Z' fill={color} />
            <path d='M17 17H15V19H17V17Z' fill={color} />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7 1C7.55228 1 8 1.44772 8 2V3H16V2C16 1.44772 16.4477 1 17 1C17.5523 1 18 1.44772 18 2V3H20C21.6569 3 23 4.34315 23 6V18C23 20.7614 20.7614 23 18 23H6C3.23858 23 1 20.7614 1 18V6C1 4.34315 2.34315 3 4 3H6V2C6 1.44772 6.44772 1 7 1ZM16 5V6C16 6.55228 16.4477 7 17 7C17.5523 7 18 6.55228 18 6V5H20C20.5523 5 21 5.44772 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6C3 5.44772 3.44772 5 4 5H6V6C6 6.55228 6.44772 7 7 7C7.55228 7 8 6.55228 8 6V5H16Z'
                fill={color}
            />
        </svg>
    );
};

export default InsuranceDurationOutlineMdSVG;
