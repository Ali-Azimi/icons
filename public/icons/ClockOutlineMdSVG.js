import React from 'react';

const ClockOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6V12.5L15.4 15.8C15.8418 16.1314 16.4686 16.0418 16.8 15.6C17.1314 15.1582 17.0418 14.5314 16.6 14.2L13 11.5V6Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z'
                fill={color}
            />
        </svg>
    );
};

export default ClockOutlineMdSVG;
