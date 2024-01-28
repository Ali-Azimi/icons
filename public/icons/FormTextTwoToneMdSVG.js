import React from 'react';

const FormTextTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M5 19C2.79086 19 1 17.2091 1 15V9C1 6.79086 2.79086 5 5 5H19C21.2091 5 23 6.79086 23 9V15C23 17.2091 21.2091 19 19 19H5Z'
                fill={color}
            />
            <path
                d='M15 22C15.5523 22 16 21.5523 16 21V3C16 2.44772 15.5523 2 15 2C14.4477 2 14 2.44772 14 3V21C14 21.5523 14.4477 22 15 22Z'
                fill='#040A1F'
            />
            <path
                d='M6 10C6.55228 10 7 10.4477 7 11V13C7 13.5523 6.55228 14 6 14C5.44772 14 5 13.5523 5 13V11C5 10.4477 5.44772 10 6 10Z'
                fill='#040A1F'
            />
            <path
                d='M11 11C11 10.4477 10.5523 10 10 10C9.44772 10 9 10.4477 9 11V13C9 13.5523 9.44772 14 10 14C10.5523 14 11 13.5523 11 13V11Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default FormTextTwoToneMdSVG;
