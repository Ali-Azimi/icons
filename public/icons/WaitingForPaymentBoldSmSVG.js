import React from 'react';

const WaitingForPaymentBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M14.5303 1.46967C14.671 1.61032 14.75 1.80109 14.75 2L14.75 8C14.75 8.41422 14.4142 8.75 14 8.75L2.00001 8.75C1.58579 8.75 1.25001 8.41422 1.25001 8L1.25 2C1.25 1.80109 1.32902 1.61032 1.46967 1.46967C1.61032 1.32902 1.80109 1.25 2 1.25H14C14.1989 1.25 14.3897 1.32902 14.5303 1.46967ZM8 6.5C8.82843 6.5 9.5 5.82843 9.5 5C9.5 4.17157 8.82843 3.5 8 3.5C7.17157 3.5 6.5 4.17157 6.5 5C6.5 5.82843 7.17157 6.5 8 6.5Z'
                fill={color}
            />
            <path d='M2 13.25C1.58579 13.25 1.25 13.5858 1.25 14C1.25 14.4142 1.58579 14.75 2 14.75H7.75V13.25H2Z' fill={color} />
            <path d='M1.25 11C1.25 10.5858 1.58579 10.25 2 10.25H11.75V11.75H2C1.58579 11.75 1.25 11.4142 1.25 11Z' fill={color} />
        </svg>
    );
};

export default WaitingForPaymentBoldSmSVG;
