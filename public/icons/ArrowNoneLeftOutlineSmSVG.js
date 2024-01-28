import React from 'react';

const ArrowNoneLeftOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M6.85355 11.3536C6.65829 11.5488 6.34171 11.5488 6.14645 11.3536L3.14645 8.35355C2.95118 8.15829 2.95118 7.84171 3.14645 7.64645L6.14645 4.64645C6.34171 4.45118 6.65829 4.45118 6.85355 4.64645C7.04882 4.84171 7.04882 5.15829 6.85355 5.35355L4.70711 7.5L12.5 7.5C12.7761 7.5 13 7.72386 13 8C13 8.27614 12.7761 8.5 12.5 8.5L4.70711 8.5L6.85355 10.6464C7.04882 10.8417 7.04882 11.1583 6.85355 11.3536Z'
                fill={color}
            />
        </svg>
    );
};

export default ArrowNoneLeftOutlineSmSVG;
