import React from 'react';

const AddressBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M6.75 2C6.75 1.58579 6.41421 1.25 6 1.25C5.58579 1.25 5.25 1.58579 5.25 2V3.5H3.04321C2.21106 3.5 1.5 4.15185 1.5 5V9C1.5 9.84815 2.21106 10.5 3.04321 10.5H5.25V14C5.25 14.4142 5.58579 14.75 6 14.75C6.41421 14.75 6.75 14.4142 6.75 14V10.5H10.8704C11.273 10.5 11.6632 10.3469 11.954 10.0681L14.0405 8.06806C14.6532 7.4807 14.6532 6.5193 14.0404 5.93194L11.954 3.93194C11.6632 3.65312 11.273 3.5 10.8704 3.5H6.75V2Z'
                fill={color}
            />
        </svg>
    );
};

export default AddressBoldSmSVG;
