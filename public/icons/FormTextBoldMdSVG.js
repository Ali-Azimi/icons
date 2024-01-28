import React from 'react';

const FormTextBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M16 21C16 21.5523 15.5523 22 15 22C14.4477 22 14 21.5523 14 21V3C14 2.44772 14.4477 2 15 2C15.5523 2 16 2.44772 16 3V5H19C21.2091 5 23 6.79086 23 9V15C23 17.2091 21.2091 19 19 19H16V21Z'
                fill={color}
            />
            <path
                d='M5 17C3.89543 17 3 16.1046 3 15V9C3 7.89543 3.89543 7 5 7H12V5H5C2.79086 5 1 6.79086 1 9V15C1 17.2091 2.79086 19 5 19H12V17H5Z'
                fill={color}
            />
            <path
                d='M6 10C6.55228 10 7 10.4477 7 11V13C7 13.5523 6.55228 14 6 14C5.44772 14 5 13.5523 5 13V11C5 10.4477 5.44772 10 6 10Z'
                fill={color}
            />
            <path
                d='M11 11C11 10.4477 10.5523 10 10 10C9.44771 10 9 10.4477 9 11V13C9 13.5523 9.44771 14 10 14C10.5523 14 11 13.5523 11 13V11Z'
                fill={color}
            />
        </svg>
    );
};

export default FormTextBoldMdSVG;
