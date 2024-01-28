import React from 'react';

const PlusCircleTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z'
                fill={color}
            />
            <path
                d='M13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8V11H8C7.44771 11 7 11.4477 7 12C7 12.5523 7.44771 13 8 13H11L11 16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H13V8Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default PlusCircleTwoToneMdSVG;
