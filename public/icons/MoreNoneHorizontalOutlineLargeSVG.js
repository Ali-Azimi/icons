import React from 'react';

const MoreNoneHorizontalOutlineLargeSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={32} height={32} viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M8 18C9.10457 18 10 17.1046 10 16C10 14.8954 9.10457 14 8 14C6.89543 14 6 14.8954 6 16C6 17.1046 6.89543 18 8 18Z'
                fill={color}
            />
            <path
                d='M18 16C18 17.1046 17.1046 18 16 18C14.8954 18 14 17.1046 14 16C14 14.8954 14.8954 14 16 14C17.1046 14 18 14.8954 18 16Z'
                fill={color}
            />
            <path
                d='M26 16C26 17.1046 25.1046 18 24 18C22.8954 18 22 17.1046 22 16C22 14.8954 22.8954 14 24 14C25.1046 14 26 14.8954 26 16Z'
                fill={color}
            />
        </svg>
    );
};

export default MoreNoneHorizontalOutlineLargeSVG;
