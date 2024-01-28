import React from 'react';

const AlertOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M8 5.5C8.27614 5.5 8.5 5.72386 8.5 6V8.5C8.5 8.77614 8.27614 9 8 9C7.72386 9 7.5 8.77614 7.5 8.5V6C7.5 5.72386 7.72386 5.5 8 5.5Z'
                fill={color}
            />
            <path
                d='M8 11.5C8.41421 11.5 8.75 11.1642 8.75 10.75C8.75 10.3358 8.41421 10 8 10C7.58579 10 7.25 10.3358 7.25 10.75C7.25 11.1642 7.58579 11.5 8 11.5Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8.61921 1.86634C8.35196 1.37788 7.64983 1.37789 7.38258 1.86635L1.58753 12.4583C1.3296 12.9297 1.67327 13.5 2.20584 13.5H13.7959C14.3285 13.5 14.6722 12.9297 14.4143 12.4583L8.61921 1.86634ZM2.70459 12.5L8.0009 2.81966L13.2972 12.5H2.70459Z'
                fill={color}
            />
        </svg>
    );
};

export default AlertOutlineSmSVG;
