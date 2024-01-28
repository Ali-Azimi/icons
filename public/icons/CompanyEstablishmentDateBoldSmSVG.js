import React from 'react';

const CompanyEstablishmentDateBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M5.75 2C5.75 1.58579 5.41421 1.25 5 1.25C4.58579 1.25 4.25 1.58579 4.25 2V3.25H3C2.0335 3.25 1.25 4.0335 1.25 5V5.95C1.25 6.11569 1.38431 6.25 1.55 6.25H14.45C14.6157 6.25 14.75 6.11569 14.75 5.95V5C14.75 4.0335 13.9665 3.25 13 3.25H11.75V2C11.75 1.58579 11.4142 1.25 11 1.25C10.5858 1.25 10.25 1.58579 10.25 2V3.25H5.75V2Z'
                fill={color}
            />
            <path
                d='M14.45 7.75C14.6157 7.75 14.75 7.88431 14.75 8.05V12C14.75 13.5188 13.5188 14.75 12 14.75H4C2.48122 14.75 1.25 13.5188 1.25 12V8.05C1.25 7.88431 1.38431 7.75 1.55 7.75H14.45Z'
                fill={color}
            />
        </svg>
    );
};

export default CompanyEstablishmentDateBoldSmSVG;
