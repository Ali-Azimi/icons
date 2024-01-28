import React from 'react';

const CoverageAddOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M6.99974 2.5C4.77437 2.5 2.92668 4.05492 2.50603 6.1068C2.48659 6.20163 2.51308 6.28691 2.58363 6.3607C2.65919 6.43974 2.78412 6.5 2.93262 6.5H11.0669C11.2154 6.5 11.3403 6.43974 11.4159 6.3607C11.4864 6.28691 11.5129 6.20163 11.4935 6.1068C11.0728 4.05492 9.22512 2.5 6.99974 2.5ZM1.5264 5.90597C2.04282 3.38701 4.30142 1.5 6.99974 1.5C9.69806 1.5 11.9567 3.38701 12.4731 5.90597C12.6637 6.83595 11.8594 7.5 11.0669 7.5H7.49974V10.8333C7.49974 11.7616 6.73691 12.5 5.8135 12.5C4.89009 12.5 4.12725 11.7616 4.12725 10.8333V10.1667C4.12725 9.89052 4.35111 9.66667 4.62725 9.66667C4.90339 9.66667 5.12725 9.89052 5.12725 10.1667V10.8333C5.12725 11.1937 5.42662 11.5 5.8135 11.5C6.20038 11.5 6.49974 11.1937 6.49974 10.8333V7.5H2.93262C2.14004 7.5 1.33575 6.83595 1.5264 5.90597ZM9.5 12C9.5 11.7239 9.72386 11.5 10 11.5H11.5V10C11.5 9.72386 11.7239 9.5 12 9.5C12.2761 9.5 12.5 9.72386 12.5 10V11.5H14C14.2761 11.5 14.5 11.7239 14.5 12C14.5 12.2761 14.2761 12.5 14 12.5H12.5V14C12.5 14.2761 12.2761 14.5 12 14.5C11.7239 14.5 11.5 14.2761 11.5 14V12.5H10C9.72386 12.5 9.5 12.2761 9.5 12Z'
                fill={color}
            />
        </svg>
    );
};

export default CoverageAddOutlineSmSVG;