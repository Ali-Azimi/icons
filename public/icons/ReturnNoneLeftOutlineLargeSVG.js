import React from 'react';

const ReturnNoneLeftOutlineLargeSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={32} height={32} viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M21.7619 23H22.5C24.9853 23 27 20.9853 27 18.5V18.5C27 16.0147 24.9853 14 22.5 14H5'
                stroke={color}
                strokeWidth={3}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path d='M10 9L5 14L10 19' stroke={color} strokeWidth={3} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    );
};

export default ReturnNoneLeftOutlineLargeSVG;
