import React from 'react';

const FormTextOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M10 14.5C10.2761 14.5 10.5 14.2761 10.5 14V12.5H12C13.3807 12.5 14.5 11.3807 14.5 10V6C14.5 4.61929 13.3807 3.5 12 3.5H10.5V2C10.5 1.72386 10.2761 1.5 10 1.5C9.72386 1.5 9.5 1.72386 9.5 2V14C9.5 14.2761 9.72386 14.5 10 14.5ZM10.5 4.5V11.5H12C12.8284 11.5 13.5 10.8284 13.5 10V6C13.5 5.17157 12.8284 4.5 12 4.5H10.5Z'
                fill={color}
            />
            <path
                d='M4 11.5C3.17157 11.5 2.5 10.8284 2.5 10V6C2.5 5.17157 3.17157 4.5 4 4.5H8V3.5H4C2.61929 3.5 1.5 4.61929 1.5 6V10C1.5 11.3807 2.61929 12.5 4 12.5H8V11.5H4Z'
                fill={color}
            />
            <path d='M5 8.5H8V7.5H5C4.72386 7.5 4.5 7.72386 4.5 8C4.5 8.27614 4.72386 8.5 5 8.5Z' fill={color} />
        </svg>
    );
};

export default FormTextOutlineSmSVG;
