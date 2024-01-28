import React from 'react';

const PropertyAgeOutlineSmV1SVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M10 2C10 1.72386 9.77614 1.5 9.5 1.5C9.22386 1.5 9 1.72386 9 2V3H5V2C5 1.72386 4.77614 1.5 4.5 1.5C4.22386 1.5 4 1.72386 4 2V3H2C1.72386 3 1.5 3.22386 1.5 3.5V12C1.5 12.2761 1.72386 12.5 2 12.5H12C12.2761 12.5 12.5 12.2761 12.5 12V3.5C12.5 3.22386 12.2761 3 12 3H10V2ZM9 4H5V5C5 5.27614 4.77614 5.5 4.5 5.5C4.22386 5.5 4 5.27614 4 5V4H2.5V11.5H11.5V4H10V5C10 5.27614 9.77614 5.5 9.5 5.5C9.22386 5.5 9 5.27614 9 5V4Z'
                fill={color}
            />
            <path
                d='M14.5 8C14.5 7.72386 14.2761 7.5 14 7.5C13.7239 7.5 13.5 7.72386 13.5 8V13.5H6C5.72386 13.5 5.5 13.7239 5.5 14C5.5 14.2761 5.72386 14.5 6 14.5H14C14.2761 14.5 14.5 14.2761 14.5 14V8Z'
                fill={color}
            />
        </svg>
    );
};

export default PropertyAgeOutlineSmV1SVG;
