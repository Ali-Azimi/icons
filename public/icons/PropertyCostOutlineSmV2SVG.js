import React from 'react';

const PropertyCostOutlineSmV2SVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path d='M8 7C8 6.44772 7.55228 6 7 6C6.44771 6 6 6.44772 6 7C6 7.55228 6.44771 8 7 8C7.55228 8 8 7.55228 8 7Z' fill={color} />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4 12.5C3.72386 12.5 3.5 12.2761 3.5 12V2C3.5 1.72386 3.72386 1.5 4 1.5L10 1.5C10.2761 1.5 10.5 1.72386 10.5 2L10.5 12C10.5 12.2761 10.2761 12.5 10 12.5H4ZM4.5 2.5V11.5H9.5L9.5 2.5L4.5 2.5Z'
                fill={color}
            />
            <path d='M11.5 13.5H6V14.5H12C12.2761 14.5 12.5 14.2761 12.5 14V4H11.5V13.5Z' fill={color} />
        </svg>
    );
};

export default PropertyCostOutlineSmV2SVG;
