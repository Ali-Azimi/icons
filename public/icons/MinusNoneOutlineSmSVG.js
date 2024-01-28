import React from 'react';

const MinusNoneOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5 8C5 7.72386 5.22386 7.5 5.5 7.5H10.5C10.7761 7.5 11 7.72386 11 8C11 8.27614 10.7761 8.5 10.5 8.5H5.5C5.22386 8.5 5 8.27614 5 8Z'
                fill={color}
            />
        </svg>
    );
};

export default MinusNoneOutlineSmSVG;
