import React from 'react';

const ClockTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path d='M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1Z' fill={color} />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 5C12.5523 5 13 5.44772 13 6V11.5L16.6 14.2C17.0418 14.5314 17.1314 15.1582 16.8 15.6C16.4686 16.0418 15.8418 16.1314 15.4 15.8L11 12.5V6C11 5.44772 11.4477 5 12 5Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default ClockTwoToneMdSVG;
