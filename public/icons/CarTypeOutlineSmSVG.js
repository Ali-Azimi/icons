import React from 'react';

const CarTypeOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4.5 1.5C3.67157 1.5 3 2.17157 3 3V11C3 11.8284 3.67157 12.5 4.5 12.5V14C4.5 14.2761 4.72386 14.5 5 14.5C5.27614 14.5 5.5 14.2761 5.5 14V12.5H10.5V14C10.5 14.2761 10.7239 14.5 11 14.5C11.2761 14.5 11.5 14.2761 11.5 14V12.5C12.3284 12.5 13 11.8284 13 11V3C13 2.17157 12.3284 1.5 11.5 1.5H4.5ZM4.5 11.5C4.22386 11.5 4 11.2761 4 11V9.8C4 9.63431 4.13431 9.5 4.3 9.5L11.7 9.5C11.8657 9.5 12 9.63432 12 9.8V11C12 11.2761 11.7761 11.5 11.5 11.5H4.5ZM7.2 5C7.36569 5 7.5 5.13431 7.5 5.3V8.2C7.5 8.36569 7.36569 8.5 7.2 8.5L4.3 8.5C4.13431 8.5 4 8.36569 4 8.2V5.3C4 5.13431 4.13431 5 4.3 5H7.2ZM8.8 5C8.63431 5 8.5 5.13431 8.5 5.3V8.2C8.5 8.36569 8.63431 8.5 8.8 8.5L11.7 8.5C11.8657 8.5 12 8.36569 12 8.2V5.3C12 5.13431 11.8657 5 11.7 5H8.8ZM4.3 4C4.13431 4 4 3.86569 4 3.7V3C4 2.72386 4.22386 2.5 4.5 2.5H11.5C11.7761 2.5 12 2.72386 12 3V3.7C12 3.86569 11.8657 4 11.7 4H4.3Z'
                fill={color}
            />
        </svg>
    );
};

export default CarTypeOutlineSmSVG;
