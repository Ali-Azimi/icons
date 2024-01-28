import React from 'react';

const ChequeOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4 1.5C2.61929 1.5 1.5 2.61929 1.5 4V11C1.5 12.3807 2.61929 13.5 4 13.5H7C7.27614 13.5 7.5 13.2761 7.5 13V9.5H14C14.2761 9.5 14.5 9.27614 14.5 9V3C14.5 2.17157 13.8284 1.5 13 1.5H4ZM4 8.5C3.4372 8.5 2.91783 8.68597 2.5 8.99982V4C2.5 3.17157 3.17157 2.5 4 2.5H13C13.2761 2.5 13.5 2.72386 13.5 3V8.5H4ZM2.5 11C2.5 10.1716 3.17157 9.5 4 9.5H6.5V12.5H4C3.17157 12.5 2.5 11.8284 2.5 11Z'
                fill={color}
            />
        </svg>
    );
};

export default ChequeOutlineSmSVG;
