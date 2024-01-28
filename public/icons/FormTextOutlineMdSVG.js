import React from 'react';

const FormTextOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M16 21C16 21.5523 15.5523 22 15 22C14.4477 22 14 21.5523 14 21V3C14 2.44772 14.4477 2 15 2C15.5523 2 16 2.44772 16 3V5H19C21.2091 5 23 6.79086 23 9V15C23 17.2091 21.2091 19 19 19H16V21ZM16 17V7H19C20.1046 7 21 7.89543 21 9V15C21 16.1046 20.1046 17 19 17H16ZM3 15C3 16.1046 3.89543 17 5 17H12V19H5C2.79086 19 1 17.2091 1 15V9C1 6.79086 2.79086 5 5 5H12V7H5C3.89543 7 3 7.89543 3 9V15ZM6 10C6.55228 10 7 10.4477 7 11V13C7 13.5523 6.55228 14 6 14C5.44772 14 5 13.5523 5 13V11C5 10.4477 5.44772 10 6 10ZM11 11C11 10.4477 10.5523 10 10 10C9.44771 10 9 10.4477 9 11V13C9 13.5523 9.44771 14 10 14C10.5523 14 11 13.5523 11 13V11Z'
                fill={color}
            />
        </svg>
    );
};

export default FormTextOutlineMdSVG;
