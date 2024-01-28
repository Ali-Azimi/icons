import React from 'react';

const ClockBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1.25 8C1.25 4.27208 4.27208 1.25 8 1.25C11.7279 1.25 14.75 4.27208 14.75 8C14.75 11.7279 11.7279 14.75 8 14.75C4.27208 14.75 1.25 11.7279 1.25 8ZM8.75 4.33337C8.75 3.91916 8.41421 3.58337 8 3.58337C7.58579 3.58337 7.25 3.91916 7.25 4.33337V8.38009L10.0565 10.4382C10.3905 10.6831 10.8599 10.6109 11.1048 10.2769C11.3498 9.94287 11.2775 9.47352 10.9435 9.22857L8.75 7.61999V4.33337Z'
                fill={color}
            />
        </svg>
    );
};

export default ClockBoldSmSVG;
