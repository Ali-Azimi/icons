import React from 'react';

const IssueTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M13.8792 2.31298C13.2402 0.562347 10.7598 0.562334 10.1208 2.31298L3.06062 21.6571C2.9487 21.9638 2.99349 22.3057 3.1806 22.5732C3.36771 22.8407 3.67358 23 4.00001 23H20C20.3264 23 20.6323 22.8407 20.8194 22.5732C21.0065 22.3057 21.0513 21.9638 20.9394 21.6571L13.8792 2.31298Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1 22C1 21.4477 1.44772 21 2 21H22C22.5523 21 23 21.4477 23 22C23 22.5523 22.5523 23 22 23H2C1.44772 23 1 22.5523 1 22Z'
                fill='#040A1F'
            />
            <path
                d='M16.3198 9H7.68019L6.95067 10.9988C6.96702 10.9996 6.98346 11 7 11H17C17.0165 11 17.033 10.9996 17.0493 10.9988L16.3198 9Z'
                fill='#040A1F'
            />
            <path d='M18.5097 15H5.49032L4.76036 17H19C19.0791 17 19.1561 16.9908 19.2299 16.9734L18.5097 15Z' fill='#040A1F' />
        </svg>
    );
};

export default IssueTwoToneMdSVG;