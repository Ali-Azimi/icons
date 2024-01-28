import React from 'react';

const MoreNoneVerticalOutlineLargeSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={32} height={32} viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M14 8C14 9.10457 14.8954 10 16 10C17.1046 10 18 9.10457 18 8C18 6.89543 17.1046 6 16 6C14.8954 6 14 6.89543 14 8Z'
                fill={color}
            />
            <path
                d='M16 18C14.8954 18 14 17.1046 14 16C14 14.8954 14.8954 14 16 14C17.1046 14 18 14.8954 18 16C18 17.1046 17.1046 18 16 18Z'
                fill={color}
            />
            <path
                d='M16 26C14.8954 26 14 25.1046 14 24C14 22.8954 14.8954 22 16 22C17.1046 22 18 22.8954 18 24C18 25.1046 17.1046 26 16 26Z'
                fill={color}
            />
        </svg>
    );
};

export default MoreNoneVerticalOutlineLargeSVG;
