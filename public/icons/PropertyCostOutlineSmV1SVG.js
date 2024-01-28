import React from 'react';

const PropertyCostOutlineSmV1SVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path d='M7 7C7.55229 7 8 7.44772 8 8C8 8.55228 7.55229 9 7 9C6.44772 9 6 8.55228 6 8C6 7.44772 6.44772 7 7 7Z' fill={color} />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4 14.5C3.72386 14.5 3.5 14.2761 3.5 14L3.5 2C3.5 1.72386 3.72386 1.5 4 1.5H10C10.2761 1.5 10.5 1.72386 10.5 2V3.12121L14.1268 4.06907C14.2561 4.10287 14.3666 4.18707 14.4334 4.30285C14.5002 4.41863 14.5179 4.55636 14.4825 4.68527L11.8872 14.1325C11.8276 14.3495 11.6302 14.5 11.4051 14.5L10.007 14.5C10.0046 14.5 10.0023 14.5 10 14.5H4ZM10.5 13.5L10.5 4.1548L13.3841 4.90856L11.0239 13.5L10.5 13.5ZM4.5 13.5H9.5L9.5 2.5L4.5 2.5L4.5 13.5Z'
                fill={color}
            />
        </svg>
    );
};

export default PropertyCostOutlineSmV1SVG;
