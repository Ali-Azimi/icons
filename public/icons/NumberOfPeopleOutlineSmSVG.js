import React from 'react';

const NumberOfPeopleOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M11 1.5C9.89543 1.5 9 2.39543 9 3.5C9 4.60457 9.89543 5.5 11 5.5C12.1046 5.5 13 4.60457 13 3.5C13 2.39543 12.1046 1.5 11 1.5ZM10 3.5C10 2.94772 10.4477 2.5 11 2.5C11.5523 2.5 12 2.94772 12 3.5C12 4.05228 11.5523 4.5 11 4.5C10.4477 4.5 10 4.05228 10 3.5Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5.5 2.5C4.11929 2.5 3 3.61929 3 5C3 6.38071 4.11929 7.5 5.5 7.5C6.88071 7.5 8 6.38071 8 5C8 3.61929 6.88071 2.5 5.5 2.5ZM4 5C4 4.17157 4.67157 3.5 5.5 3.5C6.32843 3.5 7 4.17157 7 5C7 5.82843 6.32843 6.5 5.5 6.5C4.67157 6.5 4 5.82843 4 5Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7.61558 9.10462C8.01116 7.6054 9.37649 6.5 11 6.5C12.933 6.5 14.5 8.067 14.5 10C14.5 10.8284 13.8284 11.5 13 11.5H9.37398C9.45625 11.8196 9.5 12.1547 9.5 12.5V13C9.5 13.8284 8.82843 14.5 8 14.5H3C2.17157 14.5 1.5 13.8284 1.5 13V12.5C1.5 10.2909 3.29086 8.5 5.5 8.5C6.2768 8.5 7.00189 8.72143 7.61558 9.10462ZM8.96414 10.4987C8.83176 10.2701 8.67739 10.0558 8.50393 9.85864C8.57722 8.54369 9.66673 7.5 11 7.5C12.3807 7.5 13.5 8.61929 13.5 10C13.5 10.2761 13.2761 10.5 13 10.5H9C8.98794 10.5 8.97598 10.4996 8.96414 10.4987ZM2.5 12.5C2.5 10.8431 3.84315 9.5 5.5 9.5C7.15685 9.5 8.5 10.8431 8.5 12.5V13C8.5 13.2761 8.27614 13.5 8 13.5H3C2.72386 13.5 2.5 13.2761 2.5 13V12.5Z'
                fill={color}
            />
        </svg>
    );
};

export default NumberOfPeopleOutlineSmSVG;
