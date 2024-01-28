import React from 'react';

const IdNumberOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M5.5 9C5.22386 9 5 9.22386 5 9.5C5 9.77614 5.22386 10 5.5 10H10.5C10.7761 10 11 9.77614 11 9.5C11 9.22386 10.7761 9 10.5 9H5.5Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M6 2C6 1.72386 6.22386 1.5 6.5 1.5H9.5C9.77614 1.5 10 1.72386 10 2V4H13C13.8284 4 14.5 4.67157 14.5 5.5V10C14.5 11.933 12.933 13.5 11 13.5H5C3.067 13.5 1.5 11.933 1.5 10V5.5C1.5 4.67157 2.17157 4 3 4H6V2ZM13 5H10V6C10 6.27614 9.77614 6.5 9.5 6.5H6.5C6.22386 6.5 6 6.27614 6 6V5H3C2.72386 5 2.5 5.22386 2.5 5.5V10C2.5 11.3807 3.61929 12.5 5 12.5H11C12.3807 12.5 13.5 11.3807 13.5 10V5.5C13.5 5.22386 13.2761 5 13 5ZM7 5.5H9V2.5H7V5.5Z'
                fill={color}
            />
        </svg>
    );
};

export default IdNumberOutlineSmSVG;
