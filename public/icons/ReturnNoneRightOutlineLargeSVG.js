import React from 'react';

const ReturnNoneRightOutlineLargeSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={32} height={32} viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M10.2381 23H9.5C7.01472 23 5 20.9853 5 18.5V18.5C5 16.0147 7.01472 14 9.5 14H27'
                stroke={color}
                strokeWidth={3}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path d='M22 9L27 14L22 19' stroke={color} strokeWidth={3} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    );
};

export default ReturnNoneRightOutlineLargeSVG;
