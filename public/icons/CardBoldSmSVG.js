import React from 'react';

const CardBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M1.25955 6.25C1.38721 4.57189 2.78927 3.25 4.50008 3.25H11.5003C13.2111 3.25 14.6131 4.57189 14.7408 6.25H1.25955Z'
                fill={color}
            />
            <path
                d='M1.25005 7.75H14.7502L14.7502 10.5001C14.7501 12.295 13.2951 13.75 11.5002 13.75H4.5C2.70505 13.75 1.24996 12.2949 1.25 10.5L1.25005 7.75Z'
                fill={color}
            />
        </svg>
    );
};

export default CardBoldSmSVG;
