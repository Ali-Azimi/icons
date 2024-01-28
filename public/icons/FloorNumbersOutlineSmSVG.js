import React from 'react';

const FloorNumbersOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7.5 2C7.5 1.72386 7.72386 1.5 8 1.5H13C13.2761 1.5 13.5 1.72386 13.5 2V13.5H14C14.2761 13.5 14.5 13.7239 14.5 14C14.5 14.2761 14.2761 14.5 14 14.5H2C1.72386 14.5 1.5 14.2761 1.5 14C1.5 13.7239 1.72386 13.5 2 13.5H2.5V7C2.5 6.72386 2.72386 6.5 3 6.5H7.5V2ZM3.5 13.5V7.5H7.5V13.5H3.5ZM8.5 13.5V2.5H12.5V13.5H8.5Z'
                fill={color}
            />
        </svg>
    );
};

export default FloorNumbersOutlineSmSVG;
