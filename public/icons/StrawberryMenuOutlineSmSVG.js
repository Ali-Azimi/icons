import React from 'react';

const StrawberryMenuOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M2.5 4C2.5 3.72386 2.72386 3.5 3 3.5H13C13.2761 3.5 13.5 3.72386 13.5 4C13.5 4.27614 13.2761 4.5 13 4.5H3C2.72386 4.5 2.5 4.27614 2.5 4Z'
                fill={color}
            />
            <path
                d='M4.5 8C4.5 7.72386 4.72386 7.5 5 7.5H11C11.2761 7.5 11.5 7.72386 11.5 8C11.5 8.27614 11.2761 8.5 11 8.5H5C4.72386 8.5 4.5 8.27614 4.5 8Z'
                fill={color}
            />
            <path
                d='M6.5 11.5C6.22386 11.5 6 11.7239 6 12C6 12.2761 6.22386 12.5 6.5 12.5H9.5C9.77614 12.5 10 12.2761 10 12C10 11.7239 9.77614 11.5 9.5 11.5H6.5Z'
                fill={color}
            />
        </svg>
    );
};

export default StrawberryMenuOutlineSmSVG;
