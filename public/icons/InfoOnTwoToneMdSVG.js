import React from 'react';

const InfoOnTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z'
                fill={color}
            />
            <path
                d='M11.9999 5.5C11.1715 5.5 10.4999 6.17157 10.4999 7C10.4999 7.82843 11.1715 8.5 11.9999 8.5C12.8284 8.5 13.4999 7.82843 13.4999 7C13.4999 6.17157 12.8284 5.5 11.9999 5.5Z'
                fill='#040A1F'
            />
            <path
                d='M8.84997 11.4C8.84997 10.8477 9.29769 10.4 9.84997 10.4H11.7626C13.1277 10.4 14.0916 11.7374 13.6599 13.0325L12.3374 17H13.15C13.7023 17 14.15 17.4477 14.15 18C14.15 18.5523 13.7023 19 13.15 19H12.3374C10.9723 19 10.0083 17.6626 10.44 16.3675L11.7626 12.4H9.84997C9.29769 12.4 8.84997 11.9523 8.84997 11.4Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default InfoOnTwoToneMdSVG;