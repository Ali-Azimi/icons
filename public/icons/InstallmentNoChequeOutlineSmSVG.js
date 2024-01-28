import React from 'react';

const InstallmentNoChequeOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path d='M11 8.5H5V7.5H11V8.5Z' fill={color} />
            <path d='M6.5 11.5H9.5V10.5H6.5V11.5Z' fill={color} />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5 1.5C5.27614 1.5 5.5 1.72386 5.5 2V3.5H10.5V2C10.5 1.72386 10.7239 1.5 11 1.5C11.2761 1.5 11.5 1.72386 11.5 2V3.5H12C13.3807 3.5 14.5 4.61929 14.5 6V12C14.5 13.3807 13.3807 14.5 12 14.5H4C2.61929 14.5 1.5 13.3807 1.5 12V6C1.5 4.61929 2.61929 3.5 4 3.5H4.5V2C4.5 1.72386 4.72386 1.5 5 1.5ZM12 4.5C12.8284 4.5 13.5 5.17157 13.5 6V12C13.5 12.8284 12.8284 13.5 12 13.5H4C3.17157 13.5 2.5 12.8284 2.5 12V6C2.5 5.17157 3.17157 4.5 4 4.5H12Z'
                fill={color}
            />
        </svg>
    );
};

export default InstallmentNoChequeOutlineSmSVG;
