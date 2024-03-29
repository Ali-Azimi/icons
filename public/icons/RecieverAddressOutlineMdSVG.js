import React from 'react';

const RecieverAddressOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7 9C7 9.36879 7.20298 9.70765 7.52814 9.88167C7.8533 10.0557 8.24784 10.0366 8.5547 9.83205L11 8.20185L13.4453 9.83205C13.7522 10.0366 14.1467 10.0557 14.4719 9.88167C14.797 9.70765 15 9.36879 15 9V3H18C18.5523 3 19 3.44772 19 4V8H21V4C21 2.34315 19.6569 1 18 1H4C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H11V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H7V9ZM9 3V7.13148L10.4453 6.16795C10.7812 5.94402 11.2188 5.94402 11.5547 6.16795L13 7.13148V3H9Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M15 13C15 11.3431 16.3431 10 18 10C19.6569 10 21 11.3431 21 13C21 14.6569 19.6569 16 18 16C16.3431 16 15 14.6569 15 13ZM18 12C17.4477 12 17 12.4477 17 13C17 13.5523 17.4477 14 18 14C18.5523 14 19 13.5523 19 13C19 12.4477 18.5523 12 18 12Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M15.6 17C14.1641 17 13 18.1641 13 19.6C13 21.4778 14.5222 23 16.4 23H19.6C21.4778 23 23 21.4778 23 19.6C23 18.1641 21.8359 17 20.4 17H15.6ZM15 19.6C15 19.2686 15.2686 19 15.6 19H20.4C20.7314 19 21 19.2686 21 19.6C21 20.3732 20.3732 21 19.6 21H16.4C15.6268 21 15 20.3732 15 19.6Z'
                fill={color}
            />
            <path d='M10 16H5V14H10V16Z' fill={color} />
            <path d='M5 19H8V17H5V19Z' fill={color} />
        </svg>
    );
};

export default RecieverAddressOutlineMdSVG;
