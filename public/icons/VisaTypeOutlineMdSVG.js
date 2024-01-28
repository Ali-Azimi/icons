import React from 'react';

const VisaTypeOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1 4C1 2.34315 2.34315 1 4 1H20C21.6569 1 23 2.34315 23 4V8C23 9.65685 21.6569 11 20 11H4C2.34315 11 1 9.65685 1 8V4ZM4 3C3.44772 3 3 3.44772 3 4V8C3 8.55228 3.44772 9 4 9H20C20.5523 9 21 8.55228 21 8V4C21 3.44772 20.5523 3 20 3H4Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4.71114 14.3414C5.44819 12.8673 7.5518 12.8673 8.28885 14.3414L11.1708 20.1053C11.8357 21.4352 10.8687 22.9998 9.38196 22.9998H3.61803C2.13126 22.9998 1.16427 21.4351 1.82917 20.1053L4.71114 14.3414ZM6.5 15.2358L3.61803 20.9998H9.38196L6.5 15.2358Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M18.5 14C16.0147 14 14 16.0147 14 18.5C14 20.9853 16.0147 23 18.5 23C20.9853 23 23 20.9853 23 18.5C23 16.0147 20.9853 14 18.5 14ZM16 18.5C16 17.1193 17.1193 16 18.5 16C19.8807 16 21 17.1193 21 18.5C21 19.8807 19.8807 21 18.5 21C17.1193 21 16 19.8807 16 18.5Z'
                fill={color}
            />
        </svg>
    );
};

export default VisaTypeOutlineMdSVG;
