import React from 'react';

const ArrowCircleUpOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M5.64645 6.64645C5.45119 6.84171 5.45119 7.15829 5.64645 7.35355C5.84171 7.54882 6.15829 7.54882 6.35355 7.35355L7.5 6.20711L7.5 11C7.5 11.2761 7.72386 11.5 8 11.5C8.27614 11.5 8.5 11.2761 8.5 11L8.5 6.20711L9.64645 7.35355C9.84171 7.54882 10.1583 7.54882 10.3536 7.35355C10.5488 7.15829 10.5488 6.84171 10.3536 6.64645L8.35355 4.64645C8.15829 4.45118 7.84171 4.45118 7.64645 4.64645L5.64645 6.64645Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15ZM8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14Z'
                fill={color}
            />
        </svg>
    );
};

export default ArrowCircleUpOutlineSmSVG;
