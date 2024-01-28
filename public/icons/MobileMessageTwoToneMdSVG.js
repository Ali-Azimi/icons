import React from 'react';

const MobileMessageTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M2 3.99601C2 2.42601 3.18507 1 4.82788 1H13.1721C14.8149 1 16 2.42601 16 3.99601V6C19.3137 6 22 8.68629 22 12V18H16V20.004C16 21.574 14.8149 23 13.1721 23H4.82788C3.18507 23 2 21.574 2 20.004V3.99601Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M16 7C18.7614 7 21 9.23858 21 12V17H16C13.2386 17 11 14.7614 11 12C11 9.23858 13.2386 7 16 7ZM23 12C23 8.13401 19.866 5 16 5C12.134 5 9 8.13401 9 12C9 15.866 12.134 19 16 19H23V12Z'
                fill='#040A1F'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M19 11C19 10.4477 18.5523 10 18 10H14C13.4477 10 13 10.4477 13 11C13 11.5523 13.4477 12 14 12H18C18.5523 12 19 11.5523 19 11Z'
                fill='#040A1F'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M18 14C18 13.4477 17.5523 13 17 13H15C14.4477 13 14 13.4477 14 14C14 14.5523 14.4477 15 15 15H17C17.5523 15 18 14.5523 18 14Z'
                fill='#040A1F'
            />
            <path d='M6 1H12L11.2764 2.44721C11.107 2.786 10.7607 3 10.382 3H7.61803C7.23926 3 6.893 2.786 6.72361 2.44721L6 1Z' fill='#040A1F' />
        </svg>
    );
};

export default MobileMessageTwoToneMdSVG;
