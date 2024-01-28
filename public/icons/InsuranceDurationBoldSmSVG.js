import React from 'react';

const InsuranceDurationBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5 1.25C5.41421 1.25 5.75 1.58579 5.75 2V3.25H10.25V2C10.25 1.58579 10.5858 1.25 11 1.25C11.4142 1.25 11.75 1.58579 11.75 2V3.25H13C13.9665 3.25 14.75 4.0335 14.75 5V12C14.75 13.5188 13.5188 14.75 12 14.75H4C2.48122 14.75 1.25 13.5188 1.25 12V5C1.25 4.0335 2.0335 3.25 3 3.25H4.25V2C4.25 1.58579 4.58579 1.25 5 1.25ZM4 6.2C4 6.08954 4.08954 6 4.2 6H5.8C5.91046 6 6 6.08954 6 6.2V7.8C6 7.91046 5.91046 8 5.8 8H4.2C4.08954 8 4 7.91046 4 7.8V6.2ZM10.2 10C10.0895 10 10 10.0895 10 10.2V11.8C10 11.9105 10.0895 12 10.2 12H11.8C11.9105 12 12 11.9105 12 11.8V10.2C12 10.0895 11.9105 10 11.8 10H10.2Z'
                fill={color}
            />
        </svg>
    );
};

export default InsuranceDurationBoldSmSVG;
