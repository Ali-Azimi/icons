import React from 'react';

const CashOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8ZM9 8C9 8.55228 8.55228 9 8 9C7.44772 9 7 8.55228 7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M14.5 4C14.5 3.72386 14.2761 3.5 14 3.5L2 3.5C1.86739 3.5 1.74022 3.55268 1.64645 3.64645C1.55268 3.74022 1.5 3.86739 1.5 4L1.50001 12C1.50001 12.2761 1.72387 12.5 2.00001 12.5L14 12.5C14.2761 12.5 14.5 12.2761 14.5 12V4ZM2.5 4.5L13.5 4.5V11.5H2.50001L2.5 4.5Z'
                fill={color}
            />
        </svg>
    );
};

export default CashOutlineSmSVG;
