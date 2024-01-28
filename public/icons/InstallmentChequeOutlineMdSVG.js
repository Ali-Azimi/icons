import React from 'react';

const InstallmentChequeOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V9C23 9.55228 22.5523 10 22 10C21.4477 10 21 9.55228 21 9V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V12.5351C3.58835 12.1948 4.27143 12 5 12H13C13.5523 12 14 12.4477 14 13C14 13.5523 13.5523 14 13 14H10V19C10 19.5523 9.55228 20 9 20H5C2.79086 20 1 18.2091 1 16V5ZM5 18C3.89543 18 3 17.1046 3 16C3 14.8954 3.89543 14 5 14H8V18H5Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M18 9H13V11H16.382L15.1056 13.5528C15.0361 13.6916 15 13.8448 15 14V22C15 22.5523 15.4477 23 16 23H20C20.5523 23 21 22.5523 21 22V14C21 13.8448 20.9639 13.6916 20.8944 13.5528L18.9041 9.57213C18.8438 9.44505 18.7576 9.33269 18.6522 9.24193C18.4771 9.09115 18.2492 9 18 9ZM17 21V14.2361L18 12.2361L19 14.2361V21H17Z'
                fill={color}
            />
            <path d='M11 5H18C18.5523 5 19 5.44772 19 6C19 6.55228 18.5523 7 18 7H11V5Z' fill={color} />
        </svg>
    );
};

export default InstallmentChequeOutlineMdSVG;
