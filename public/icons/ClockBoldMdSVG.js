import React from 'react';

const ClockBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6V12.5L15.4 15.8C15.8418 16.1314 16.4686 16.0418 16.8 15.6C17.1314 15.1582 17.0418 14.5314 16.6 14.2L13 11.5V6Z'
                fill={color}
            />
        </svg>
    );
};

export default ClockBoldMdSVG;
