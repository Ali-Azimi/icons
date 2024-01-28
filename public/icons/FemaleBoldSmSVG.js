import React from 'react';

const FemaleBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M6.25 2.75C6.25 1.7835 7.0335 1 8 1C8.9665 1 9.75 1.7835 9.75 2.75C9.75 3.7165 8.9665 4.5 8 4.5C7.0335 4.5 6.25 3.7165 6.25 2.75Z'
                fill={color}
            />
            <path
                d='M10.9669 11.4146C11.0184 11.9984 10.5439 12.5 9.93995 12.5H8.75V14C8.75 14.4142 8.41421 14.75 8 14.75C7.58579 14.75 7.25 14.4142 7.25 14V12.5H6.00146C5.3975 12.5 4.92297 11.9984 4.97454 11.4146L5.28581 7.89123C5.40529 6.53879 6.57165 5.5 7.9707 5.5C9.36976 5.5 10.5361 6.53879 10.6556 7.89123L10.9669 11.4146Z'
                fill={color}
            />
        </svg>
    );
};

export default FemaleBoldSmSVG;
