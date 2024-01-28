import React from 'react';

const LinkOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M2.5 8C2.5 6.61929 3.61929 5.5 5 5.5H7V4.5H5C3.067 4.5 1.5 6.067 1.5 8C1.5 9.933 3.067 11.5 5 11.5H7V10.5H5C3.61929 10.5 2.5 9.38071 2.5 8Z'
                fill={color}
            />
            <path
                d='M9 5.5H11C12.3807 5.5 13.5 6.61929 13.5 8C13.5 9.38071 12.3807 10.5 11 10.5H9V11.5H11C12.933 11.5 14.5 9.933 14.5 8C14.5 6.067 12.933 4.5 11 4.5H9V5.5Z'
                fill={color}
            />
            <path
                d='M5 7.5C4.72386 7.5 4.5 7.72386 4.5 8C4.5 8.27614 4.72386 8.5 5 8.5H11C11.2761 8.5 11.5 8.27614 11.5 8C11.5 7.72386 11.2761 7.5 11 7.5H5Z'
                fill={color}
            />
        </svg>
    );
};

export default LinkOutlineSmSVG;
