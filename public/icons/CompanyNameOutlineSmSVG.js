import React from 'react';

const CompanyNameOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M13.5 2C13.5 1.72386 13.2761 1.5 13 1.5C12.7239 1.5 12.5 1.72386 12.5 2V2.5H2C1.72386 2.5 1.5 2.72386 1.5 3C1.5 3.27614 1.72386 3.5 2 3.5H3.5V6.5H2C1.72386 6.5 1.5 6.72386 1.5 7V12C1.5 12.2761 1.72386 12.5 2 12.5H10C10.2761 12.5 10.5 12.2761 10.5 12V7C10.5 6.72386 10.2761 6.5 10 6.5H8.5V3.5H12.5V14C12.5 14.2761 12.7239 14.5 13 14.5C13.2761 14.5 13.5 14.2761 13.5 14V3.5H14C14.2761 3.5 14.5 3.27614 14.5 3C14.5 2.72386 14.2761 2.5 14 2.5H13.5V2ZM7.5 3.5H4.5V6.5H7.5V3.5ZM2.5 7.5V11.5H9.5V7.5H2.5Z'
                fill={color}
            />
        </svg>
    );
};

export default CompanyNameOutlineSmSVG;
