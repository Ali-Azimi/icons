import React from 'react';

const ReminderOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5.5 2C5.5 1.72386 5.27614 1.5 5 1.5C4.72386 1.5 4.5 1.72386 4.5 2V3H3C2.17157 3 1.5 3.67157 1.5 4.5V11C1.5 12.933 3.067 14.5 5 14.5H8.17157C8.83461 14.5 9.4705 14.2366 9.93934 13.7678L13.7678 9.93934C14.2366 9.4705 14.5 8.83461 14.5 8.17157V4.5C14.5 3.67157 13.8284 3 13 3H11.5V2C11.5 1.72386 11.2761 1.5 11 1.5C10.7239 1.5 10.5 1.72386 10.5 2V3H5.5V2ZM13 4H11.5V5C11.5 5.27614 11.2761 5.5 11 5.5C10.7239 5.5 10.5 5.27614 10.5 5V4H5.5V5C5.5 5.27614 5.27614 5.5 5 5.5C4.72386 5.5 4.5 5.27614 4.5 5V4H3C2.72386 4 2.5 4.22386 2.5 4.5V11C2.5 12.3807 3.61929 13.5 5 13.5H8.17157C8.28294 13.5 8.39303 13.4876 8.5 13.4636V11C8.5 9.61929 9.61929 8.5 11 8.5H13.4636C13.4876 8.39303 13.5 8.28294 13.5 8.17157V4.5C13.5 4.22386 13.2761 4 13 4ZM12.3101 9.5C12.4882 9.5 12.5775 9.71543 12.4515 9.84142L9.84142 12.4515C9.71543 12.5775 9.5 12.4882 9.5 12.3101V11C9.5 10.1716 10.1716 9.5 11 9.5H12.3101Z'
                fill={color}
            />
        </svg>
    );
};

export default ReminderOutlineSmSVG;