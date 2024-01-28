import React from 'react';

const InstallmentAmountOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path d='M5 19H10V17H5V19Z' fill={color} />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M10 1C9.44771 1 9 1.44772 9 2V9H11V6C12.6569 6 14 4.65685 14 3H18C18 4.65685 19.3431 6 21 6V16C19.3431 16 18 17.3431 18 19H14V14C14 13.4477 13.5523 13 13 13H11.75V12C11.75 11.5858 11.4142 11.25 11 11.25C10.5858 11.25 10.25 11.5858 10.25 12V13H4.75V12C4.75 11.5858 4.41421 11.25 4 11.25C3.58579 11.25 3.25 11.5858 3.25 12V13H2C1.44772 13 1 13.4477 1 14V22C1 22.2652 1.10536 22.5196 1.29289 22.7071C1.48043 22.8946 1.73478 23 2 23H13C13.5523 23 14 22.5523 14 22V21H22C22.5523 21 23 20.5523 23 20V2C23 1.44772 22.5523 1 22 1H10ZM3 21V15H12V21H3Z'
                fill={color}
            />
        </svg>
    );
};

export default InstallmentAmountOutlineMdSVG;
