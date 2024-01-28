import React from 'react';

const MobileMessageOutineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M5.5 7C5.5 6.72386 5.72386 6.5 6 6.5H11C11.2761 6.5 11.5 6.72386 11.5 7C11.5 7.27614 11.2761 7.5 11 7.5H6C5.72386 7.5 5.5 7.27614 5.5 7Z'
                fill={color}
            />
            <path
                d='M8 9.5C7.72386 9.5 7.5 9.72386 7.5 10C7.5 10.2761 7.72386 10.5 8 10.5H11C11.2761 10.5 11.5 10.2761 11.5 10C11.5 9.72386 11.2761 9.5 11 9.5H8Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5H14.5V8ZM8 2.5C11.0376 2.5 13.5 4.96243 13.5 8V13.5H8C4.96243 13.5 2.5 11.0376 2.5 8C2.5 4.96243 4.96243 2.5 8 2.5Z'
                fill={color}
            />
        </svg>
    );
};

export default MobileMessageOutineSmSVG;
