import React from 'react';

const HouseholderOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M6 1.5C4.61929 1.5 3.5 2.61929 3.5 4C3.5 5.38071 4.61929 6.5 6 6.5C7.38071 6.5 8.5 5.38071 8.5 4C8.5 2.61929 7.38071 1.5 6 1.5ZM4.5 4C4.5 3.17157 5.17157 2.5 6 2.5C6.82843 2.5 7.5 3.17157 7.5 4C7.5 4.82843 6.82843 5.5 6 5.5C5.17157 5.5 4.5 4.82843 4.5 4Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M11.75 9.5C12.7165 9.5 13.5 8.7165 13.5 7.75C13.5 6.7835 12.7165 6 11.75 6C10.7835 6 10 6.7835 10 7.75C10 8.7165 10.7835 9.5 11.75 9.5ZM12.5 7.75C12.5 8.16421 12.1642 8.5 11.75 8.5C11.3358 8.5 11 8.16421 11 7.75C11 7.33579 11.3358 7 11.75 7C12.1642 7 12.5 7.33579 12.5 7.75Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1.5 12C1.5 9.51472 3.51472 7.5 6 7.5C7.95933 7.5 9.62619 8.75221 10.2439 10.5H12C13.3807 10.5 14.5 11.6193 14.5 13V14C14.5 14.2761 14.2761 14.5 14 14.5H2C1.72386 14.5 1.5 14.2761 1.5 14V12ZM10.5 13.5V12C10.5 11.831 10.4907 11.6642 10.4725 11.5H12C12.8284 11.5 13.5 12.1716 13.5 13V13.5H10.5ZM6 8.5C4.067 8.5 2.5 10.067 2.5 12V13.5H9.5V12C9.5 10.067 7.933 8.5 6 8.5Z'
                fill={color}
            />
        </svg>
    );
};

export default HouseholderOutlineSmSVG;
