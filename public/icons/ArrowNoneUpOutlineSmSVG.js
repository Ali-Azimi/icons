import React from 'react';

const ArrowNoneUpOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4.64645 6.85355C4.45118 6.65829 4.45118 6.34171 4.64645 6.14645L7.64645 3.14645C7.84171 2.95118 8.15829 2.95118 8.35355 3.14645L11.3536 6.14645C11.5488 6.34171 11.5488 6.65829 11.3536 6.85355C11.1583 7.04882 10.8417 7.04882 10.6464 6.85355L8.5 4.70711L8.5 12.5C8.5 12.7761 8.27614 13 8 13C7.72386 13 7.5 12.7761 7.5 12.5L7.5 4.70711L5.35355 6.85355C5.15829 7.04882 4.84171 7.04882 4.64645 6.85355Z'
                fill={color}
            />
        </svg>
    );
};

export default ArrowNoneUpOutlineSmSVG;
