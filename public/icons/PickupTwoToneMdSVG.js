import React from 'react';

const PickupTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M13 7C11.8954 7 11 7.89543 11 9V11H1V15C1 16.6569 2.34315 18 4 18H4.17071C4.58254 19.1652 5.69378 20 7 20C8.30622 20 9.41746 19.1652 9.82929 18H14.1707C14.5825 19.1652 15.6938 20 17 20C18.3062 20 19.4175 19.1652 19.8293 18H21C22.1046 18 23 17.1046 23 16V14C23 12.3431 21.6569 11 20 11H19.6511C19.3098 11 18.9921 10.826 18.8084 10.5384L17.4325 8.38483C16.8813 7.52209 15.9282 7 14.9044 7H13Z'
                fill={color}
            />
            <path d='M11 11H1V13H11V11Z' fill='#040A1F' />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7 20C8.65685 20 10 18.6569 10 17C10 15.3431 8.65685 14 7 14C5.34315 14 4 15.3431 4 17C4 18.6569 5.34315 20 7 20ZM7 18C7.55228 18 8 17.5523 8 17C8 16.4477 7.55228 16 7 16C6.44772 16 6 16.4477 6 17C6 17.5523 6.44772 18 7 18Z'
                fill='#040A1F'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M17 20C18.6569 20 20 18.6569 20 17C20 15.3431 18.6569 14 17 14C15.3431 14 14 15.3431 14 17C14 18.6569 15.3431 20 17 20ZM17 18C17.5523 18 18 17.5523 18 17C18 16.4477 17.5523 16 17 16C16.4477 16 16 16.4477 16 17C16 17.5523 16.4477 18 17 18Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default PickupTwoToneMdSVG;