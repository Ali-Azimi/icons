import React from 'react';

const InstallmentAmountTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path d='M10 2C10 1.44772 10.4477 1 11 1H22C22.5523 1 23 1.44772 23 2V20C23 20.5523 22.5523 21 22 21H3V15H10V2Z' fill={color} />
            <path d='M14 1V2C14 3.65685 12.6569 5 11 5H10V2C10 1.44772 10.4477 1 11 1H14Z' fill='#040A1F' />
            <path d='M19 1V2C19 3.65685 20.3431 5 22 5H23V2C23 1.44772 22.5523 1 22 1H19Z' fill='#040A1F' />
            <path d='M19 20V21H22C22.5523 21 23 20.5523 23 20V17H22C20.3431 17 19 18.3431 19 20Z' fill='#040A1F' />
            <path d='M10 19H5V17H10V19Z' fill='#040A1F' />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4.75 12C4.75 11.5858 4.41421 11.25 4 11.25C3.58579 11.25 3.25 11.5858 3.25 12V13H2C1.44772 13 1 13.4477 1 14V22C1 22.5523 1.44772 23 2 23H13C13.5523 23 14 22.5523 14 22V14C14 13.4477 13.5523 13 13 13H11.75V12C11.75 11.5858 11.4142 11.25 11 11.25C10.5858 11.25 10.25 11.5858 10.25 12V13H4.75V12ZM3 15V21H12V15H3Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default InstallmentAmountTwoToneMdSVG;
