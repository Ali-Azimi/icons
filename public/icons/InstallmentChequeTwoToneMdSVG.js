import React from 'react';

const InstallmentChequeTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V13C23 13.5523 22.5523 14 22 14H18.882L19 14.2361V21H17V14.2361L17.118 14H5C2.79086 14 1 15.7909 1 18V5Z'
                fill={color}
            />
            <path d='M3 18C3 16.8954 3.89543 16 5 16H8V20H5C3.89543 20 3 19.1046 3 18Z' fill={color} />
            <path d='M18 5H11V7H18C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z' fill='#040A1F' />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M18 9H13V11H16.382L15.1056 13.5528C15.0361 13.6916 15 13.8448 15 14V22C15 22.5523 15.4477 23 16 23H20C20.5523 23 21 22.5523 21 22V14C21 13.8448 20.9639 13.6916 20.8944 13.5528L18.9041 9.57216C18.8699 9.50001 18.8273 9.43261 18.7776 9.37122C18.7396 9.32419 18.6976 9.28096 18.6522 9.24193C18.4771 9.09115 18.2492 9 18 9ZM17 14.2361V21H19V14.2361L18 12.2361L17 14.2361Z'
                fill='#040A1F'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5 14C2.79086 14 1 15.7909 1 18C1 20.2091 2.79086 22 5 22H9C9.55228 22 10 21.5523 10 21V14H5ZM3 18C3 16.8954 3.89543 16 5 16H8V20H5C3.89543 20 3 19.1046 3 18Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default InstallmentChequeTwoToneMdSVG;
