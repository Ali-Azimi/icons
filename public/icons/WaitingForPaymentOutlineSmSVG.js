import React from 'react';

const WaitingForPaymentOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8ZM8 7C8.55228 7 9 6.55229 9 6C9 5.44772 8.55228 5 8 5C7.44772 5 7 5.44772 7 6C7 6.55229 7.44772 7 8 7Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M14.3536 1.64645C14.4473 1.74022 14.5 1.86739 14.5 2L14.5 10C14.5 10.2761 14.2761 10.5 14 10.5H2.00001C1.72387 10.5 1.50001 10.2761 1.50001 10L1.5 2C1.5 1.86739 1.55268 1.74022 1.64645 1.64645C1.74022 1.55268 1.86739 1.5 2 1.5H14C14.1326 1.5 14.2598 1.55268 14.3536 1.64645ZM13.5 2.5L2.5 2.5L2.50001 9.5H13.5L13.5 2.5Z'
                fill={color}
            />
            <path d='M2 11.5C1.72386 11.5 1.5 11.7239 1.5 12C1.5 12.2761 1.72386 12.5 2 12.5H11V11.5H2Z' fill={color} />
            <path d='M2 13.5C1.72386 13.5 1.5 13.7239 1.5 14C1.5 14.2761 1.72386 14.5 2 14.5H7V13.5H2Z' fill={color} />
        </svg>
    );
};

export default WaitingForPaymentOutlineSmSVG;
