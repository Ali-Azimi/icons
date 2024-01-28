import React from 'react';

const PurchasePropertiesOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5.5 9.5V3C5.5 2.17157 6.17157 1.5 7 1.5H13C13.8284 1.5 14.5 2.17157 14.5 3V11.8776C14.5 13.2531 13.441 14.3812 12.0938 14.4912C12.0634 14.497 12.0321 14.5 12 14.5H4.5C2.76166 14.5 1.5 12.8438 1.5 11C1.5 10.1716 2.17157 9.5 3 9.5H5.5ZM6.5 3C6.5 2.72386 6.72386 2.5 7 2.5H13C13.2761 2.5 13.5 2.72386 13.5 3V11.8776C13.5 12.7527 12.8071 13.466 11.94 13.4988C10.9391 13.4595 10 12.4412 10 11V10C10 9.72386 9.77614 9.5 9.5 9.5H6.5V3ZM9 11C9 11.9501 9.33504 12.8505 9.8977 13.5H4.5C3.47692 13.5 2.5 12.4699 2.5 11C2.5 10.7239 2.72386 10.5 3 10.5H9V11Z'
                fill={color}
            />
        </svg>
    );
};

export default PurchasePropertiesOutlineSmSVG;
