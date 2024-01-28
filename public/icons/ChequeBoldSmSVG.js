import React from 'react';

const ChequeBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M4 1.25C2.48122 1.25 1.25 2.48122 1.25 4V11C1.25 11.0297 1.28368 11.0294 1.28822 11C1.5287 9.44248 2.87509 8.25 4.5 8.25H14.45C14.6157 8.25 14.75 8.11569 14.75 7.95V3C14.75 2.0335 13.9665 1.25 13 1.25H4Z'
                fill={color}
            />
            <path
                d='M8.45 9.75C8.61569 9.75 8.75 9.88431 8.75 10.05V12.95C8.75 13.1157 8.61569 13.25 8.45 13.25H4.5C3.5335 13.25 2.75 12.4665 2.75 11.5C2.75 10.5335 3.5335 9.75 4.5 9.75H8.45Z'
                fill={color}
            />
        </svg>
    );
};

export default ChequeBoldSmSVG;
