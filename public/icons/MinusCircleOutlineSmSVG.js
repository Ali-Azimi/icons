import React from 'react';

const MinusCircleOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M5.5 7.5C5.22386 7.5 5 7.72386 5 8C5 8.27614 5.22386 8.5 5.5 8.5H10.5C10.7761 8.5 11 8.27614 11 8C11 7.72386 10.7761 7.5 10.5 7.5H5.5Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z'
                fill={color}
            />
        </svg>
    );
};

export default MinusCircleOutlineSmSVG;
