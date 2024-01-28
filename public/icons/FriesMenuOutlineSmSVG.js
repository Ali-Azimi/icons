import React from 'react';

const FriesMenuOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M2.5 4C2.5 3.72386 2.72386 3.5 3 3.5H13C13.2761 3.5 13.5 3.72386 13.5 4C13.5 4.27614 13.2761 4.5 13 4.5H3C2.72386 4.5 2.5 4.27614 2.5 4Z'
                fill={color}
            />
            <path
                d='M6.5 8C6.5 7.72386 6.72386 7.5 7 7.5H13C13.2761 7.5 13.5 7.72386 13.5 8C13.5 8.27614 13.2761 8.5 13 8.5H7C6.72386 8.5 6.5 8.27614 6.5 8Z'
                fill={color}
            />
            <path
                d='M3 11.5C2.72386 11.5 2.5 11.7239 2.5 12C2.5 12.2761 2.72386 12.5 3 12.5H13C13.2761 12.5 13.5 12.2761 13.5 12C13.5 11.7239 13.2761 11.5 13 11.5H3Z'
                fill={color}
            />
        </svg>
    );
};

export default FriesMenuOutlineSmSVG;
