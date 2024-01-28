import React from 'react';

const CompanyNameBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M13.75 2C13.75 1.58579 13.4142 1.25 13 1.25C12.5858 1.25 12.25 1.58579 12.25 2V2.25H2C1.58579 2.25 1.25 2.58579 1.25 3C1.25 3.41421 1.58579 3.75 2 3.75H3.25V6.25H2C1.58579 6.25 1.25 6.58579 1.25 7V12C1.25 12.4142 1.58579 12.75 2 12.75H10C10.4142 12.75 10.75 12.4142 10.75 12V7C10.75 6.58579 10.4142 6.25 10 6.25H8.75V3.75H12.25V14C12.25 14.4142 12.5858 14.75 13 14.75C13.4142 14.75 13.75 14.4142 13.75 14V3.75H14C14.4142 3.75 14.75 3.41421 14.75 3C14.75 2.58579 14.4142 2.25 14 2.25H13.75V2ZM7.25 3.75H4.75V6.25H7.25V3.75Z'
                fill={color}
            />
        </svg>
    );
};

export default CompanyNameBoldSmSVG;
