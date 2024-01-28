import React from 'react';

const MobileMessageBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5H14.5V8ZM5.25 7C5.25 6.58579 5.58579 6.25 6 6.25H11C11.4142 6.25 11.75 6.58579 11.75 7C11.75 7.41421 11.4142 7.75 11 7.75H6C5.58579 7.75 5.25 7.41421 5.25 7ZM7.25 10C7.25 9.58579 7.58579 9.25 8 9.25H11C11.4142 9.25 11.75 9.58579 11.75 10C11.75 10.4142 11.4142 10.75 11 10.75H8C7.58579 10.75 7.25 10.4142 7.25 10Z'
                fill={color}
            />
        </svg>
    );
};

export default MobileMessageBoldSmSVG;
