import React from 'react';

const CompanyNationalIdOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M3.5 7C3.5 6.72386 3.72386 6.5 4 6.5H10C10.2761 6.5 10.5 6.72386 10.5 7C10.5 7.27614 10.2761 7.5 10 7.5H4C3.72386 7.5 3.5 7.27614 3.5 7Z'
                fill={color}
            />
            <path
                d='M4 8.5C3.72386 8.5 3.5 8.72386 3.5 9C3.5 9.27614 3.72386 9.5 4 9.5H7C7.27614 9.5 7.5 9.27614 7.5 9C7.5 8.72386 7.27614 8.5 7 8.5H4Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1.5 4.5C1.5 4.22386 1.72386 4 2 4H14C14.2761 4 14.5 4.22386 14.5 4.5V11.5C14.5 11.7761 14.2761 12 14 12H2C1.72386 12 1.5 11.7761 1.5 11.5V4.5ZM2.5 5V11H13.5V5H2.5Z'
                fill={color}
            />
        </svg>
    );
};

export default CompanyNationalIdOutlineSmSVG;
