import React from 'react';

const PropertyCostBoldSmV1SVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M2.5 14C2.5 14.2761 2.72386 14.5 3 14.5H9C9.27614 14.5 9.5 14.2761 9.5 14V2C9.5 1.72386 9.27614 1.5 9 1.5H3C2.72386 1.5 2.5 1.72386 2.5 2L2.5 14ZM6 7C6.55229 7 7 7.44772 7 8C7 8.55228 6.55229 9 6 9C5.44772 9 5 8.55228 5 8C5 7.44772 5.44772 7 6 7Z'
                fill={color}
            />
            <path
                d='M11.0005 14.3C11.0005 14.4104 11.09 14.5 11.2005 14.5L11.4046 14.5C11.6297 14.5 11.8271 14.3495 11.8868 14.1324L14.482 4.68527C14.5175 4.55635 14.4998 4.41863 14.4329 4.30285C14.3661 4.18706 14.2557 4.10287 14.1263 4.06906L11.2506 3.31749C11.1238 3.28436 11 3.38 11 3.511L11.0005 14.3Z'
                fill={color}
            />
        </svg>
    );
};

export default PropertyCostBoldSmV1SVG;
