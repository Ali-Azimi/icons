import React from 'react';

const InstallmentNoChequeBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5 1.75C5.41421 1.75 5.75 2.08579 5.75 2.5V3.95C5.75 4.11569 5.88431 4.25 6.05 4.25H9.95C10.1157 4.25 10.25 4.11569 10.25 3.95V2.5C10.25 2.08579 10.5858 1.75 11 1.75C11.4142 1.75 11.75 2.08579 11.75 2.5V4C11.75 4.13807 11.8619 4.25 12 4.25C13.5188 4.25 14.75 5.48122 14.75 7V12C14.75 13.5188 13.5188 14.75 12 14.75H4C2.48122 14.75 1.25 13.5188 1.25 12V7C1.25 5.48122 2.48122 4.25 4 4.25C4.13807 4.25 4.25 4.13807 4.25 4V2.5C4.25 2.08579 4.58579 1.75 5 1.75ZM11 8.75H5V7.25H11V8.75ZM6.5 11.75H9.5V10.25H6.5V11.75Z'
                fill={color}
            />
        </svg>
    );
};

export default InstallmentNoChequeBoldSmSVG;
