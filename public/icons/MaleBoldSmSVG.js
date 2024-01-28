import React from 'react';

const MaleBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M6.25 3.25C6.25 2.2835 7.0335 1.5 8 1.5C8.9665 1.5 9.75 2.2835 9.75 3.25C9.75 4.2165 8.9665 5 8 5C7.0335 5 6.25 4.2165 6.25 3.25Z'
                fill={color}
            />
            <path
                d='M10.8196 8.18076C10.6426 9.26434 9.81421 10.117 8.75 10.3996V14C8.75 14.4142 8.41421 14.75 8 14.75C7.58579 14.75 7.25 14.4142 7.25 14V10.4116C6.12126 10.1313 5.25177 9.21285 5.11756 8.06216L5.00655 7.11043C4.93745 6.51806 5.42422 6 6.0499 6L9.94999 6C10.5941 6 11.0863 6.54744 10.9873 7.15371L10.8196 8.18076Z'
                fill={color}
            />
        </svg>
    );
};

export default MaleBoldSmSVG;
