import React from 'react';

const InstagramOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8 5C6.34315 5 5 6.34315 5 8C5 9.65685 6.34315 11 8 11C9.65685 11 11 9.65685 11 8C11 6.34315 9.65685 5 8 5ZM6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8Z'
                fill={color}
            />
            <path
                d='M11.5 3.75C11.0858 3.75 10.75 4.08579 10.75 4.5C10.75 4.91421 11.0858 5.25 11.5 5.25C11.9142 5.25 12.25 4.91421 12.25 4.5C12.25 4.08579 11.9142 3.75 11.5 3.75Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5 1.5C3.067 1.5 1.5 3.067 1.5 5V11C1.5 12.933 3.067 14.5 5 14.5H11C12.933 14.5 14.5 12.933 14.5 11V5C14.5 3.067 12.933 1.5 11 1.5H5ZM2.5 5C2.5 3.61929 3.61929 2.5 5 2.5H11C12.3807 2.5 13.5 3.61929 13.5 5V11C13.5 12.3807 12.3807 13.5 11 13.5H5C3.61929 13.5 2.5 12.3807 2.5 11V5Z'
                fill={color}
            />
        </svg>
    );
};

export default InstagramOutlineSmSVG;
