import React from 'react';

const PlusNoneOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M7.5 8.5V10.5C7.5 10.7761 7.72386 11 8 11C8.27614 11 8.5 10.7761 8.5 10.5V8.5H10.5C10.7761 8.5 11 8.27614 11 8C11 7.72386 10.7761 7.5 10.5 7.5H8.5V5.5C8.5 5.22386 8.27614 5 8 5C7.72386 5 7.5 5.22386 7.5 5.5V7.5H5.5C5.22386 7.5 5 7.72386 5 8C5 8.27614 5.22386 8.5 5.5 8.5H7.5Z'
                fill={color}
            />
        </svg>
    );
};

export default PlusNoneOutlineSmSVG;
