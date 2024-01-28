import React from 'react';

const CompanyEstablishmentDateOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5.5 2C5.5 1.72386 5.27614 1.5 5 1.5C4.72386 1.5 4.5 1.72386 4.5 2V3.5H3C2.17157 3.5 1.5 4.17157 1.5 5V12C1.5 13.3807 2.61929 14.5 4 14.5H12C13.3807 14.5 14.5 13.3807 14.5 12V5C14.5 4.17157 13.8284 3.5 13 3.5H11.5V2C11.5 1.72386 11.2761 1.5 11 1.5C10.7239 1.5 10.5 1.72386 10.5 2V3.5H5.5V2ZM13.2 7.5C13.3657 7.5 13.5 7.63431 13.5 7.8V12C13.5 12.8284 12.8284 13.5 12 13.5H4C3.17157 13.5 2.5 12.8284 2.5 12V7.8C2.5 7.63431 2.63432 7.5 2.8 7.5H13.2ZM2.5 6.2C2.5 6.36569 2.63431 6.5 2.8 6.5H13.2C13.3657 6.5 13.5 6.36569 13.5 6.2V5C13.5 4.72386 13.2761 4.5 13 4.5H3C2.72386 4.5 2.5 4.72386 2.5 5V6.2Z'
                fill={color}
            />
        </svg>
    );
};

export default CompanyEstablishmentDateOutlineSmSVG;
