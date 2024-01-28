import React from 'react';

const CompanyNationalIdBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1.25 4.5C1.25 4.08579 1.58579 3.75 2 3.75H14C14.4142 3.75 14.75 4.08579 14.75 4.5V11.5C14.75 11.9142 14.4142 12.25 14 12.25H2C1.58579 12.25 1.25 11.9142 1.25 11.5V4.5ZM3.25 6.5C3.25 6.08579 3.58579 5.75 4 5.75H10C10.4142 5.75 10.75 6.08579 10.75 6.5C10.75 6.91421 10.4142 7.25 10 7.25H4C3.58579 7.25 3.25 6.91421 3.25 6.5ZM3.25 9.5C3.25 9.08579 3.58579 8.75 4 8.75H7C7.41421 8.75 7.75 9.08579 7.75 9.5C7.75 9.91421 7.41421 10.25 7 10.25H4C3.58579 10.25 3.25 9.91421 3.25 9.5Z'
                fill={color}
            />
        </svg>
    );
};

export default CompanyNationalIdBoldSmSVG;
